# Payroll Job Failure Runbook

## Overview
This runbook addresses failures within the BullMQ `payroll-queue` which processes critical Gross-to-Net employee salaries.

## Symptoms
- Alerts triggered for `bullmq_failed_jobs_total > 0`.
- Employee complaints about missing payslips.
- Error logs displaying `PayrollEngine calculation error`.

## Procedure
1. **Identify Failed Jobs**:
   Connect to Redis CLI and check failed job counts:
   ```bash
   redis-cli HGETALL bull:payroll-queue:failed
   ```
2. **Review Logs**:
   Grep the backend logs for the specific Job ID:
   ```bash
   kubectl logs -l app=amdox-backend | grep "Payroll Job failed"
   ```
3. **Retry Jobs**:
   BullMQ is configured to automatically retry 3 times with exponential backoff. If jobs still fail, manual intervention is required.
   You can push failed jobs back to `waiting` via a BullMQ admin dashboard (e.g., BullMQ Arena) or a direct Redis script.
4. **Data Integrity Check**:
   Ensure that the `PayrollEngine` did not partially commit deductions. The engine uses Prisma transactions `prisma.$transaction`, so rollbacks are automatic upon failure.

## Post-Mortem
- Determine if the failure was a mathematical exception (e.g., negative gross pay) or infrastructure (Redis OOM).
