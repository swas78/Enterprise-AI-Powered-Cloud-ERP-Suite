# Database Failover Runbook

## Overview
This runbook describes the procedure for handling a PostgreSQL Primary Database failure in the AMDOX ERP environment.

## Symptoms
- Connection timeouts to PostgreSQL.
- Application error logs showing `PrismaClientInitializationError` or `P1001`.
- High latency alerts for database queries.

## Procedure
1. **Verify Outage**: Check Prometheus metrics and Grafana Dashboards for PostgreSQL uptime.
2. **Promote Replica**: If using Bitnami Helm charts with replication enabled, the Patroni agent should auto-promote the replica. Verify this by running:
   ```bash
   kubectl logs -l app.kubernetes.io/name=postgresql -c patroni
   ```
3. **Manual Promotion (Fallback)**:
   If auto-failover fails, manually promote the replica:
   ```bash
   kubectl exec -it <postgresql-replica-pod> -- patronictl failover
   ```
4. **Update Connection String**: Ensure `DATABASE_URL` in the ConfigMap points to the PgBouncer endpoint, which abstracts the primary/replica roles.
5. **Restart Services**: If connections are stuck, perform a rolling restart:
   ```bash
   kubectl rollout restart deployment amdox-erp-backend
   ```

## Post-Mortem
- Analyze the primary cause (OOM, Disk Full, Network Partition).
- Re-sync the failed primary as a new read-replica.
