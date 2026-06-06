# Troubleshooting Guide - Amdox ERP

This guide provides checklists for diagnosing infrastructure and application failures.

## 🗃️ 1. MongoDB Connection Faults
If the backend fails to connect to database:
*   Verify MongoDB replica set is initialized.
*   If running in Docker Compose, check connection strings:
    `mongodb://localhost:27017/amdox-erp?replicaSet=rs0`
*   Verify replication status using `mongosh`:
    ```javascript
    rs.status()
    ```

## ⚡ 2. Redis / BullMQ Issues
If background jobs fail to trigger:
*   Ensure Redis container is active:
    ```bash
    docker exec -it amdox-redis redis-cli ping
    ```
*   Verify active BullMQ queues on the administrative dashboard:
    `http://localhost:5000/api/v1/admin/queues`
