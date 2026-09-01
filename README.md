# Hi, I'm Jessica 👋

### Workforce Intelligence | Business Operations | Data Architecture

I connect frontline operations to executive strategy through better data, stronger models, and clearer communication.

> Much of my previous work was created in internal systems and cannot be shared as a traditional portfolio. I built this repository to create concrete, shareable artifacts that demonstrate how I think, model data, and communicate insights.

**Live Showcase Site:** [Data Portfolio](https://jlhoughton-dev.github.io/data-portfolio/)

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
- **Modular SQL Pipeline:** Staging, intermediate, and domain models transform the raw tables into analysis-ready data.
- **Data Modeling:** The models connect employee hierarchy, customer workload, capacity, and revenue performance.
- **Executive BI Integration:** The domain model powers the live Data Studio dashboard linked above.
- **Version-Controlled Documentation:** The SQL, case studies, and portfolio site are maintained in GitHub.

```text
Raw relational data → BigQuery → Layered SQL models → Domain model → Data Studio reporting
```

## Repository Structure

```text
.
├── docs/                         # Case studies and technical documentation
├── models/
│   ├── intermediate/             # Staging and intermediate SQL transformations
│   └── domain/                   # Business-ready analytical models
├── src/                          # Docusaurus homepage and custom styling
├── static/                       # Public site assets
├── .github/workflows/            # GitHub Pages deployment workflow
├── docusaurus.config.js          # Site and deployment configuration
└── package.json                  # Project scripts and dependencies
```

## Technical Toolkit

| Category | Tools & Technologies |
| :--- | :--- |
| Data Engineering & Modeling | BigQuery, SQL, dbt-style layered modeling |
| Business Intelligence | Data Studio, Tableau, Power BI |
| Insight & Storytelling | KPI framing, root-cause analysis, executive presentations |
| Workforce & Operations | NICE/IEX, Teleopti, Workday |
| Workflow & Documentation | GitHub, Docusaurus, Docs-as-Code |

## Connect With Me

- **GitHub:** [jlhoughton-dev](https://github.com/jlhoughton-dev)
- **LinkedIn:** [Add your LinkedIn profile link here](https://linkedin.com)
