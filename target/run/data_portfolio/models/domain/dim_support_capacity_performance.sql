
  
    

    create or replace table `jlhoughton-dev`.`chinook_raw`.`dim_support_capacity_performance`
      
    
    

    
    OPTIONS()
    as (
      -- models/domain/dim_support_capacity_performance.sql
-- Consolidates employee hierarchy, account workloads, and revenue performance for Looker Studio

WITH employee_base AS (
  SELECT
    CAST(employee_id AS INT64) AS employee_id,
    employee_full_name,
    job_title,
    manager_full_name,
    tenure_years
  FROM `jlhoughton-dev.chinook_raw.stg_employee_hierarchy`
),

workload_base AS (
  SELECT
    CAST(employee_id AS INT64) AS employee_id,
    total_assigned_customers,
    countries_covered
  FROM `jlhoughton-dev.chinook_raw.stg_support_workload`
),

revenue_base AS (
  SELECT
    CAST(c.SupportRepId AS INT64) AS employee_id,
    COUNT(DISTINCT i.InvoiceId) AS total_orders_handled,
    ROUND(SUM(i.Total), 2) AS total_portfolio_revenue,
    ROUND(AVG(i.Total), 2) AS average_order_value
  FROM `jlhoughton-dev.chinook_raw.invoices` AS i
  JOIN `jlhoughton-dev.chinook_raw.customers` AS c
    ON i.CustomerId = c.CustomerId
  GROUP BY 1
)

SELECT
  emp.employee_id,
  emp.employee_full_name,
  emp.job_title,
  emp.manager_full_name,
  emp.tenure_years,
  COALESCE(work.total_assigned_customers, 0) AS total_assigned_customers,
  COALESCE(work.countries_covered, 0) AS countries_covered,
  COALESCE(rev.total_orders_handled, 0) AS total_orders_handled,
  COALESCE(rev.total_portfolio_revenue, 0.0) AS total_portfolio_revenue,
  COALESCE(rev.average_order_value, 0.0) AS average_order_value,
  SAFE_DIVIDE(rev.total_portfolio_revenue, work.total_assigned_customers) AS revenue_per_account
FROM employee_base AS emp
LEFT JOIN workload_base AS work
  ON emp.employee_id = work.employee_id
LEFT JOIN revenue_base AS rev
  ON emp.employee_id = rev.employee_id
WHERE emp.job_title LIKE '%Sales%Support%'
    );
  