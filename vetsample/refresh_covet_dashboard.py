
import json
import re
from pathlib import Path

import pandas as pd

# Locate the CSV and HTML files relative to this script.
base_dir = Path(__file__).resolve().parent
csv_path = base_dir / "covet_clinic_activity.csv"
html_path = base_dir.parent / "static" / "covet_revops_dashboard.html"

print("Reading clinic activity data...")

df = pd.read_csv(csv_path)
df["event_date"] = pd.to_datetime(df["event_date"])

# Daily portfolio-wide sessions.
daily_totals = (
    df.groupby("event_date")["scribe_sessions"]
    .sum()
    .sort_index()
)

daily = [
    {
        "date_label": date.strftime("%b %d"),
        "sessions": int(sessions),
    }
    for date, sessions in daily_totals.items()
]

# One row per clinic, with total sessions for the reporting window.
clinics = (
    df.sort_values("event_date")
    .drop_duplicates("clinic_id")
    .drop(columns=["scribe_sessions", "event_date"])
    .merge(
        df.groupby("clinic_id")["scribe_sessions"]
        .sum()
        .rename("sessions"),
        on="clinic_id",
        how="left",
        validate="one_to_one",
    )
)

# Use a consistent label for clinics without a PMS connection.
clinics.loc[~clinics["pms_connected"], "pms_system"] = "Not connected"

clinics = clinics.sort_values("sessions", ascending=False)

# Daily sessions split by customer tier.
daily_by_tier = {}

for tier in ["Solo", "Regional", "Enterprise"]:
    tier_totals = (
        df[df["tier"] == tier]
        .groupby("event_date")["scribe_sessions"]
        .sum()
        .reindex(daily_totals.index, fill_value=0)
    )
    daily_by_tier[tier] = [int(value) for value in tier_totals]

# Assemble the structure expected by the existing dashboard.
data = {
    "daily": daily,
    "clinics": clinics.to_dict(orient="records"),
    "dailyByTier": daily_by_tier,
}

# Read the existing HTML.
html = html_path.read_text(encoding="utf-8")

# Replace only the embedded DATA object.
new_data = json.dumps(data, separators=(",", ":"))
html, replacements = re.subn(
    r"const DATA = \{.*?\};(?=\nconst fmtNum)",
    lambda match: "const DATA = " + new_data + ";",
    html,
    count=1,
    flags=re.DOTALL,
)

if replacements != 1:
    raise RuntimeError("Could not find the expected DATA block. HTML unchanged.")

# Update the reporting-period label.
start_date = df["event_date"].min()
end_date = df["event_date"].max()
period = (
    f"{start_date.strftime('%B')} {start_date.day} – "
    f"{end_date.strftime('%B')} {end_date.day}, {end_date.year}"
)

html, replacements = re.subn(
    r"(CoVet · SaaS performance snapshot · )[^<]+",
    lambda match: match.group(1) + period,
    html,
    count=1,
)

if replacements != 1:
    raise RuntimeError("Could not update the reporting-period label.")

# Calculate the average using the actual number of reporting dates.
html = html.replace(
    "fmtNum(a.sessionTotal/91)",
    "fmtNum(a.sessionTotal/DATA.daily.length)",
)

# Update the initial session value shown before JavaScript runs.
total_sessions = int(df["scribe_sessions"].sum())
html = re.sub(
    r'(id="sessions">)[^<]+',
    lambda match: match.group(1) + f"{total_sessions:,}",
    html,
    count=1,
)

# Save the updated HTML.
html_path.write_text(html, encoding="utf-8")

print(f"Reporting window: {period}")
print(f"Clinics: {clinics['clinic_id'].nunique()}")
print(f"Reporting dates: {len(daily)}")
print(f"Total scribe sessions: {total_sessions:,}")
print(f"Updated dashboard: {html_path}")
