

  create or replace view `jlhoughton-dev`.`chinook_raw`.`stg_support_workload`
  OPTIONS()
  as -- models/intermediate/stg_support_workload.sql
-- Aggregates customer portfolio distribution per sales support representative

WITH raw_customers AS (
  SELECT
    CAST(CustomerId AS INT64) AS customer_id,
    CONCAT(FirstName, ' ', LastName) AS customer_full_name,
    Company AS company,
    Country AS customer_country,
    CAST(SupportRepId AS INT64) AS support_rep_id
  FROM
    `jlhoughton-dev.chinook_raw.customers`
)

SELECT
  c.support_rep_id AS employee_id,
  COUNT(DISTINCT c.customer_id) AS total_assigned_customers,
  COUNT(DISTINCT c.customer_country) AS countries_covered,
  COUNTIF(c.customer_country != 'USA') AS international_customer_count
FROM raw_customers AS c
WHERE c.support_rep_id IS NOT NULL
GROUP BY 1;

