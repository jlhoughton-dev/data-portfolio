# Hi! I'm Jessica. 👋
### Workforce Intelligence | Business Operations | Data Architecture

I bridge the gap between complex operational data and decisions that actually get made. With nearly a decade of experience at Shopify, I specialize in connecting frontline execution with executive leadership by modeling raw data, uncovering critical business insights, and presenting actionable narratives that drive strategy.

---

## What's in this Repo, how did it get here and why?

Before any modeling could happen, I had to embark on a minor digital expedition to pull and wrangle this data into existence. With zero past artifacts to lean on, I built this entire pipeline from scratch.

* **Raw Data Sourcing:** Relational tables (`employees`, `customers`, `invoices`) were ingested into a Google Cloud BigQuery environment to replicate a real-world enterprise database.
* **Modular SQL Pipeline:** Instead of a single monolithic script, the transformation logic is broken down into structured layers:
  * **Staging (`stg_employee_hierarchy.sql`):** Standardizes employee records, handles self-joins for manager mappings, and computes active tenure.
  * **Intermediate (`stg_support_workload.sql`):** Aggregates customer portfolio counts and geographic distribution per representative.
  * **Domain (`dim_support_capacity_performance.sql`):** Unifies employee data, workload metrics, and financial invoice totals using defensive engineering practices like `COALESCE` and `SAFE_DIVIDE`.
* **Version-Controlled Code:** The clean, production-ready `SELECT` statements are stored here in GitHub to showcase clean code standards and data modeling best practices.
* **Executive BI Integration:** The compiled BigQuery reporting view directly powers a live, interactive **Google Data Studio** dashboard designed to communicate workload balance and revenue generation to stakeholders at a glance.

---

## 💡 What I Do
* **Uncover & Present Insights:** Translating complex data into clear, compelling narratives and executive-ready presentations that influence business strategy.
* **Turn Data into Strategy:** Analyzing operational performance to highlight hidden bottlenecks, trend risks, and growth opportunities.
* **Build Scalable Infrastructure:** Designing end-to-end data pipelines and models using BigQuery, dbt, and modern analytics tools.
* **Enable Teams:** Creating human-centered process design, interactive dashboards, and Docs-as-Code documentation portals.

---

## 🛠️ Technical Toolkit

| Category | Tools & Technologies |
| :--- | :--- |
| **Insight Discovery & Storytelling** | Data Storytelling, Executive Presentations, Trend & Root-Cause Analysis, KPI Framing |
| **Data Engineering & Modeling** | BigQuery, dbt, Apache Airflow, SQL |
| **Business Intelligence (BI)** | Looker Studio, Tableau, Power BI |
| **Workforce & Operations** | NICE/IEX, Teleopti, Workday |
| **Workflow & Enablement** | GitHub (Docs-as-Code), Low-Code Tools, AI Workflows (Cursor, Claude) |

---

<!-- ## 📂 Projects Overview

* **Workforce Intelligence & Executive Capacity Reporting**
  * Built centralized scheduling models and delivered executive briefings to align cross-functional support capacity with dynamic workload demand.
* **Operational Bottleneck & Churn Analysis**
  * Analyzed operational friction points, surfaced root causes of merchant retention drops, and presented findings to leadership to guide process changes.
* **Automated Resource Allocation Model**
  * Automated data pipelines and built interactive scenario models to present dynamic headcount allocation strategies across business units.

--- -->

## 📬 Connect with Me
* **GitHub:** [jlhoughton-dev](https://github.com/jlhoughton-dev)
* **LinkedIn:** [Connect with me on LinkedIn](https://linkedin.com)



<!-- ### Climbing the Tooling Hill (Or: Why I Miss a Managed Data Warehouse)

To make all of this happen, I had to lace up my boots and manually build out my local and cloud command center one tool at a time:

* **VS Code:** Installed and configured as my local code editor to write modular SQL files and manage repository version control.
* **DBeaver:** Set up as my database client to inspect table schemas, test queries, and connect directly to the underlying data source.
* **Google BigQuery:** Configured from scratch as the cloud data warehouse to house raw datasets and execute transformation views.
* **Google Data Studio:** Connected downstream for visual analytics, transforming raw query outputs into a polished executive dashboard. -->