# Database Schema & Indices - Amdox ERP

The Amdox ERP system utilizes MongoDB (NoSQL) persisted via Mongoose models. Data isolation utilizes a tenant ID scoping strategy.

## 🗃️ Primary Collections
1.  **tenants**: Houses individual SaaS organizations.
2.  **users**: Houses administrative and standard member credentials.
3.  **journalentries**: Enforces double-entry General Ledger bookkeeping transactions.
4.  **employees**: Hierarchical records linked to department structure org charts.
5.  **purchaseorders**: Supply chain procurement tracking.
6.  **inventories**: Material tracking Cost methods (AVCO/FIFO).
7.  **notifications**: SSE stream alerts and webhook integrations.
8.  **auditlogs**: Immutable logs capturing platform mutations.
