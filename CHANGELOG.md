# Changelog

All notable changes to the Amdox ERP Suite will be documented in this file.

## [1.0.0] - 2026-06-02
### Added
- Multi-Tenant Authentication (SSO integration via Keycloak + custom JWT rotation).
- Double-Entry General Ledger accounting engine with MongoDB session transactions.
- Automated gross-to-net Payroll Engine with BullMQ asynchronous batch runs.
- Supply Chain procurement pipeline (Purchase Order vs. Goods Receipt vs. AP Invoice matching).
- Gantt project management layout with cycle-detection (Kahn's DAG sort).
- Real-time business intelligence metrics dashboard builder with SSE refresh streams.
- Security hardening (Helmet security filters, double-submit CSRF cookie checks).
- Multi-stage Docker container support with secure, shell-free **distroless** stages.
- Automated Kubernetes orchestration manifests via highly available Helm charts.
- Generic Repository Pattern layer wrapping Mongoose model operations.
