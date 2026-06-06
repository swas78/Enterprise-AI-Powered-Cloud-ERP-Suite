# ADR-002: Discriminator-Based Tenant Data Isolation

## Status
Accepted

## Context
Amdox ERP is a multi-tenant SaaS. Multiple enterprise companies use the same physical platform. Their business transactions (especially financial ledgers and payroll sheets) must be strictly isolated to prevent cross-tenant data leaks, while keeping deployment costs low.

We evaluated three standard SaaS database tenancy strategies:
1.  **Database-Per-Tenant**: Spin up a separate physical database for each tenant.
2.  **Schema-Per-Tenant**: Use different schemas/namespaces under one database.
3.  **Discriminator-Based (Shared Database, Shared Schema)**: Filter all records using a shared `tenantId` parameter.

## Decision
We select **Discriminator-Based Tenant Data Isolation** within a single MongoDB cluster.
All database collections (excluding global configuration metrics) require a `tenantId` field referencing a unique `Tenant` object.

### Key Implementation Mechanics
*   **Decoupled Context Extraction**: The `tenantContext.middleware` intercepts all incoming requests to extract the tenant ID from the authorization headers or user JWT session.
*   **Database Scoping**: Mongoose repositories or helper classes automatically inject `{ tenantId: req.tenantId }` into all database reads and writes.

## Consequences
### Positive
*   **Ultra-Low Operational Cost**: Hundreds of tenants share a single database server, maximizing resource utilisation.
*   **Zero-Overhead Scaling**: Adding a new tenant simply involves writing a new `Tenant` record, avoiding expensive database migrations or namespace creation.
*   **High Performance**: MongoDB's compound indexing (`{ tenantId: 1, unique_field: 1 }`) ensures query lookups are isolated and fast.

### Negative
*   **High Developer Responsibility**: A missing `tenantId` check in a query can leak data. We mitigate this by using strict Mongoose schemas and automated integration testing.
