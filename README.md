# Hi, I'm Jessica 👋

### Workforce Intelligence | Business Operations | Data Architecture

I connect frontline operations to executive strategy through better data, stronger models, and clearer communication.

> Much of my previous work was created in internal systems and cannot be shared as a traditional portfolio. I built this repository to create concrete, shareable artifacts that demonstrate how I think, model data, and communicate insights.

**Live Showcase Site:** [Data Portfolio](https://jlhoughton-dev.github.io/data-portfolio/)

---

## 🆕 New: dbt + BigQuery Modeling Added

*Updated: 2026-09-08*

This repository now includes a lightweight dbt project that manages the transformation layer for Chinook data in BigQuery.

The project demonstrates:

- source definitions for raw BigQuery tables
- layered intermediate and domain models
- dbt schema documentation and data-quality tests
- a workforce capacity model used by the reporting layer

```text
BigQuery sources → Intermediate models → Domain model → Looker Studio
```

See the [dbt + BigQuery setup notes](docs/dbt-bigquery-setup.mdx) for the implementation details.

---

## Case Studies

- [Data Pipelines & SQL Models](docs/data-pipelines-and-sql-models.mdx)  
  A layered BigQuery pipeline that transforms raw relational data into analysis-ready models.
- [Workforce Intelligence](docs/workforce-intelligence.mdx)  
  A workforce capacity and performance model connecting hierarchy, workload, and operational signals.
- [Executive Reporting](docs/executive-reporting.mdx)  
  A Data Studio reporting experience that translates capacity, workload, and revenue metrics into business insight.
- [How I Built This](docs/behind-the-work.mdx)  
  The setup story behind the warehouse, SQL models, reporting layer, and documentation.

**Live Dashboard:** [Sales Support Capacity](https://datastudio.google.com/s/qoFv_wRN-UE)

*The dashboard is a technical proof of concept demonstrating a BigQuery connection, modeled data flow, and executive reporting structure. It is not intended to represent a fully optimized production dashboard.*

## What's in This Repo, How Did It Get Here, and Why?

Before any modeling could happen, I had to build the data foundation from scratch. With no previous artifacts available to share, I sourced relational data, loaded it into BigQuery, created the transformation layers, and documented the work here.

- **Raw Data Sourcing:** Employee, customer, and invoice tables were loaded into Google Cloud BigQuery.
- **dbt Transformation Pipeline:** dbt manages the source definitions, layered SQL models, materializations, and validation tests that transform the raw tables into analysis-ready data.
- **Data Modeling:** The models connect employee hierarchy, customer workload, capacity, and revenue performance.
- **Executive BI Integration:** The domain model powers the live Data Studio dashboard linked above.
- **Version-Controlled Documentation:** The SQL, dbt configuration, case studies, and portfolio site are maintained in GitHub.

```text
Raw relational data → BigQuery → Layered SQL models → Domain model → Data Studio reporting
```

## Repository Structure

```text
.
├── dbt_project.yml               # dbt project and model materialization settings
├── models/
│   ├── sources.yml                # BigQuery chinook_raw source declarations
│   ├── schema.yml                 # dbt model documentation and data-quality tests
│   ├── intermediate/              # Cleaned and joined workforce transformations
│   │   ├── stg_employee_hierarchy.sql
│   │   └── stg_support_workload.sql
│   └── domain/                    # Business-ready analytical models
│       └── dim_support_capacity_performance.sql
├── docs/                          # Case studies and technical documentation
│   └── dbt-bigquery-setup.mdx     # dbt and BigQuery implementation notes
├── dashboards/                    # Reporting and dashboard assets
├── src/                           # Docusaurus homepage and custom styling
│   ├── pages/                     # Homepage and preview routes
│   └── css/                      # Global site theme and case-study styles
├── static/                        # Public site assets
├── .github/workflows/             # GitHub Pages deployment workflow
├── docusaurus.config.js            # Site navigation and deployment configuration
├── sidebars.js                    # Docs sidebar and case-study navigation
├── package.json                   # Docusaurus scripts and dependencies
└── README.md                      # Project overview and implementation narrative
```

## Technical Toolkit

| Category | Tools & Technologies |
| :--- | :--- |
| Data Engineering & Modeling | Google BigQuery, SQL, dbt Core 1.12.4, dbt-bigquery 1.12.0 |
| dbt Workflow | Source declarations, staging/intermediate models, domain models, view/table materializations, schema tests |
| Cloud & Authentication | Google Cloud project `jlhoughton-dev`, BigQuery dataset `chinook_raw`, gcloud and application-default credentials |
| Business Intelligence | Looker Studio (formerly Data Studio), Tableau, Power BI |
| Insight & Storytelling | KPI framing, root-cause analysis, executive presentations |
| Workforce & Operations | NICE/IEX, Teleopti, Workday |
| Portfolio & Documentation | Docusaurus 3.10.2, React 19, MDX, JavaScript, CSS, GitHub Pages, Docs-as-Code |

## Connect With Me

- **GitHub:** [jlhoughton-dev](https://github.com/jlhoughton-dev)
- **LinkedIn:** [LinkedIn Profile](https://linkedin.com)
