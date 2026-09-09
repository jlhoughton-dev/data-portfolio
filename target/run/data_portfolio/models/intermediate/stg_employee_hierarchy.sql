

  create or replace view `jlhoughton-dev`.`chinook_raw`.`stg_employee_hierarchy`
  OPTIONS()
  as -- models/intermediate/stg_employee_hierarchy.sql
-- Cleans employee details and resolves management hierarchy reporting lines

WITH raw_employees AS (
  SELECT
    CAST(EmployeeId AS INT64) AS employee_id,
    CAST(ReportsTo AS INT64) AS reports_to_id,
    FirstName AS first_name,
    LastName AS last_name,
    CONCAT(FirstName, ' ', LastName) AS employee_full_name,
    Title AS job_title,
    CAST(HireDate AS DATE) AS hire_date,
    Address AS address,
    City AS city,
    State AS state,
    Country AS country,
    PostalCode AS postal_code,
    Phone AS phone,
    Fax AS fax,
    Email AS email
  FROM
    `jlhoughton-dev.chinook_raw.employees`
)

SELECT
  e.employee_id,
  e.employee_full_name,
  e.job_title,
  e.reports_to_id,
  m.employee_full_name AS manager_full_name,
  m.job_title AS manager_job_title,
  e.hire_date,
  DATE_DIFF(CURRENT_DATE(), e.hire_date, YEAR) AS tenure_years,
  e.city,
  e.state,
  e.country,
  e.email
FROM raw_employees AS e
LEFT JOIN raw_employees AS m
  ON e.reports_to_id = m.employee_id;

