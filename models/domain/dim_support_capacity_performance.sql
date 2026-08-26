-- models/domain/dim_support_capacity_performance.sql
-- Consolidates employee hierarchy, account workloads, and revenue performance for Looker Studio

WITH employee_base AS (
  SELECT 
    eb.employee_id,
    eb.employee_full_name,
    eb.job_title,
    eb.manager_full_name,
    eb.tenure_years
  FROM 
    `jlhoughton-dev.chinook_raw.stg_employee_hierarchy` AS eb
),

workload_base AS (
  SELECT 
    wb.employee_id,
    wb.total_assigned_customers,
    wb.countries_covered
  FROM 
    `jlhoughton-dev.chinook_raw.stg_support_workload` AS wb
),

revenue_base AS (
  SELECT
    c.SupportRepId AS employee_id,
    COUNT(DISTINCT i.InvoiceId) AS total_orders_handled,
    ROUND(SUM(i.Total), 2) AS total_portfolio_revenue,
    ROUND(AVG(i.Total), 2) AS average_order_value
  FROM
    `jlhoughton-dev.chinook_raw.invoices` AS i
  JOIN
    `jlhoughton-dev.chinook_raw.customers` AS c
  ON
    i.CustomerId = c.CustomerId
  GROUP BY
    1
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
  -- Calculate average revenue generated per assigned customer account
  SAFE_DIVIDE(rev.total_portfolio_revenue, work.total_assigned_customers) AS revenue_per_account
FROM
  employee_base AS emp
LEFT JOIN
  workload_base AS work
ON
  emp.employee_id = work.employee_id
LEFT JOIN
  revenue_base AS rev
ON
  emp.employee_id = rev.employee_id
WHERE
  -- Filter specifically for operational sales support roles
  emp.job_title LIKE '%Sales%Support%';