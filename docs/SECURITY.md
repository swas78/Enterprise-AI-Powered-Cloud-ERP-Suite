# Security Policy - Amdox Enterprise ERP

Amdox ERP incorporates strict cybersecurity policies directly inside the gateway layer.

## 🛡️ Core Defenses
1.  **Strict CSRF Protection**: Enforces validation of double-submit CSRF cookie signatures on all mutation requests.
2.  **Helmet Security Headers**: Blocks content injection, clickjacking (X-Frame-Options), and cross-origin embedding.
3.  **Auth Token Blacklisting**: Active JWT access/refresh tokens are invalidated instantly on session logouts via Redis TTL hashes.
4.  **Multi-Tenant Rate Limiting**: Throttles excessive connections based on tenant IDs/IP combinations.
5.  **Strict RBAC Role Audits**: Authorizations restrict access to operations matching the user's role (SuperAdmin, TenantAdmin, Manager).
