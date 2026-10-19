

with raw_activity as (
    select * from `jlhoughton-dev`.`vet_saas`.`int_clinic_monthly_activity`
),

-- agg clinic + monthly grain
monthly_aggregated as (
    select
        clinic_id,
        clinic_name,
        tier,
        signup_date,
        dvm_seat_count,
        pms_connected,
        pms_system,
        is_trial_signup,
        trial_converted,
        activity_month,
        
        -- map intermediate metrics to performance names
        coalesce(monthly_billing_amount, 0) as total_billed,
        coalesce(total_scribe_sessions, 0) as total_scribe_events
        
    from raw_activity
),

calculated_metrics as (
    select
clinic_id,
        clinic_name,
        tier,
        signup_date,
        dvm_seat_count,
        pms_connected,
        pms_system,
        is_trial_signup,
        trial_converted,
        activity_month,
        total_billed as mrr,
        total_scribe_events,
        
        -- engagement tier based on scribe activity
        case 
            when total_scribe_events = 0 then 'Zero Activity'
            when total_scribe_events < 10 then 'Low Usage'
            when total_scribe_events between 10 and 50 then 'Moderate Usage'
            else 'Power User'
        end as engagement_tier,

        -- active account status
        case 
            when total_billed > 0 or total_scribe_events > 0 then true 
            else false 
        end as is_active,

        -- MoM compare
        lag(total_billed) over (
            partition by clinic_id 
            order by activity_month
        ) as prev_month_mrr,

        lag(total_scribe_events) over (
            partition by clinic_id 
            order by activity_month
        ) as prev_month_scribe_events

    from monthly_aggregated
)

select
    *,
    -- rev vari
    mrr - coalesce(prev_month_mrr, 0) as mrr_change,
    
    -- risk/churn indicator
    case 
        when prev_month_mrr > 0 and mrr = 0 then 'Churned'
        when prev_month_mrr > 0 and mrr < prev_month_mrr then 'At Risk (Contract Downgrade)'
        when prev_month_mrr = 0 or prev_month_mrr is null then 'New / Reactivated'
        else 'Stable / Growing'
    end as clinic_health_status

from calculated_metrics
where activity_month is not null