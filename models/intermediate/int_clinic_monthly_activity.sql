{{ config(schema='vet_saas') }}

with clinics as (
    select * from {{ source('raw_vetsample', 'raw_clinics') }}
),

billing as (
    select
        clinic_id,
        date_trunc(invoice_date, month) as billing_month,
        sum(amount) as monthly_billing_amount,
        max(status) as billing_status
    from {{ source('raw_vetsample', 'fct_billing') }}
    group by 1, 2
),

scribe as (
    select
        clinic_id,
        date_trunc(event_date, month) as activity_month,
        sum(scribe_sessions) as total_scribe_sessions
    from {{ source('raw_vetsample', 'fct_scribe_events') }}
    group by 1, 2
),

monthly_aggregates as (
    select
        coalesce(s.clinic_id, b.clinic_id) as clinic_id,
        coalesce(s.activity_month, b.billing_month) as activity_month,
        coalesce(s.total_scribe_sessions, 0) as total_scribe_sessions,
        coalesce(b.monthly_billing_amount, 0) as monthly_billing_amount,
        b.billing_status
    from scribe s
    full outer join billing b 
        on s.clinic_id = b.clinic_id 
       and s.activity_month = b.billing_month
)

select
    c.clinic_id,
    c.clinic_name,
    c.tier,
    c.signup_date,
    c.mrr,
    c.dvm_seat_count,
    c.pms_connected,
    c.pms_system,
    c.is_trial_signup,
    c.trial_converted,
    a.activity_month,
    a.total_scribe_sessions,
    a.monthly_billing_amount,
    a.billing_status
from clinics c
inner join monthly_aggregates a 
    on c.clinic_id = a.clinic_id