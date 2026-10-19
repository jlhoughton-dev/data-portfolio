import random
from datetime import datetime, timedelta
import pandas as pd

random.seed(42)

print("Generating synthetic data for CoVet...")

pms_systems = ["Cornerstone", "AVImark", "ezyVet", "ImproMed", "Instinct EMR", "None"]
pms_weights = [0.30, 0.25, 0.20, 0.10, 0.05, 0.10]

print("Generating clinics table...")

tiers = ["Solo", "Regional", "Enterprise"]
tier_weights = [0.6, 0.3, 0.1]
tier_mrr = {"Solo": 150, "Regional": 500, "Enterprise": 1500}

clinics_data = []
start_date = datetime(2025, 1, 1)

for i in range(1, 26):
    clinic_id = f"CL{str(i).zfill(3)}"
    clinic_name = f"Clinic {i} Vet Care"
    tier = random.choices(tiers, weights=tier_weights, k=1)[0]

    days_offset = random.randint(0, 300)
    signup_date = start_date + timedelta(days=days_offset)

    if tier == "Enterprise":
     dvm_seat_count = random.randint(10, 25)
    elif tier == "Regional":
     dvm_seat_count = random.randint(4, 9)
    else:
     dvm_seat_count = random.randint(1, 3)

    pms_system = random.choices(pms_systems, weights=pms_weights, k=1)[0]
    pms_connected = pms_system != "None"

    is_trial_signup = random.random() < 0.85
    trial_converted = is_trial_signup and (random.random() < 0.75)

    clinics_data.append({
        "clinic_id": clinic_id,
        "clinic_name": clinic_name,
        "tier": tier,
        "signup_date": signup_date.strftime("%Y-%m-%d"),
        "mrr": tier_mrr[tier],
        "dvm_seat_count": dvm_seat_count,
        "pms_connected": pms_connected,
        "pms_system": pms_system,
        "is_trial_signup": is_trial_signup,
        "trial_converted": trial_converted
    })

    df_clinics = pd.DataFrame(clinics_data)
    df_clinics.to_csv("dim_clinics.csv", index=False)
    print("Saved: dim_clinics.csv (25 clinics)")

# =========================
# generate event tables
# =========================

print("Generating events tables...")

events_data=[]
end_date = datetime.now()
start_usage_date = end_date - timedelta(days=90)

current_date = start_usage_date
while current_date <= end_date:

  for clinic in clinics_data:
    clinic_id = clinic["clinic_id"]
    tier = clinic["tier"]

    # clinic activity per tier
    if tier == "Enterprise":
      sessions_today = random.randint(15, 40)
    elif tier == "Regional":
      sessions_today = random.randint(5, 15)
    else:  # solo
      sessions_today = random.randint(0, 5)

    pms_system = random.choices(pms_systems, weights=pms_weights, k=1)[0]
    pms_connected = pms_system != "None"

    is_trial_signup = random.random() < 0.85
    trial_converted = is_trial_signup and (random.random() < 0.75)

    # add churn/drop off pattern
    if clinic_id in ["CL005", "CL012"] and current_date > (
        start_usage_date + timedelta(days=45)
    ):
      sessions_today = random.randint(0, 1)

    # append data for this clinic on this day
    events_data.append({
        "event_date": current_date.strftime("%Y-%m-%d"),
        "clinic_id": clinic_id,
        "scribe_sessions": sessions_today,
    })

  # move forward to next day
  current_date += timedelta(days=1)

# convert events to csv
df_events = pd.DataFrame(events_data)
df_events.to_csv("fct_scribe_events.csv", index=False)
print("✅ Saved: fct_scribe_events.csv (90 days of usage logs)")

# ==========================================
# generate billing table
# ==========================================
print("Generating billing table...")

billing_data = []

for clinic in clinics_data:
  clinic_id = clinic["clinic_id"]
  tier = clinic["tier"]
  signup_date = datetime.strptime(clinic["signup_date"], "%Y-%m-%d")
  mrr = tier_mrr[tier]

  # monthly invoices from signup date to current date
  invoice_date = signup_date
  while invoice_date <= end_date:
    billing_data.append({
        "invoice_date": invoice_date.strftime("%Y-%m-%d"),
        "clinic_id": clinic_id,
        "amount": mrr,
        "status": "Paid",
    })
    # forward to next month
    invoice_date += timedelta(days=30)

# convert billing data to csv
df_billing = pd.DataFrame(billing_data)
df_billing.to_csv("fct_billing.csv", index=False)
print("✅ Saved: fct_billing.csv (Monthly subscription invoices)")

print("\n🎉 All mock data files successfully generated!")

# Quick merge for Looker Studio speed
df_master = df_clinics.merge(df_billing, on="clinic_id", how="left").merge(df_events, on="clinic_id", how="left")
df_master.to_csv("covet_master_dashboard_data.csv", index=False)
print("✅ Saved: covet_master_dashboard_data.csv (Use this single file in Looker Studio)")