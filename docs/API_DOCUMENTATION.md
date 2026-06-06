# API Documentation - Amdox Enterprise ERP

The Amdox ERP system publishes a complete OpenAPI 3.1 Swagger document mounted directly inside the application service.

## 🔗 Endpoint Access
*   **Interactive Gateway UI Swagger**: `http://localhost:5000/api-docs`
*   **Ready Probe**: `GET http://localhost:5000/health/ready`
*   **Live Probe**: `GET http://localhost:5000/health/live`

## 🛡️ Authentication Protocol
All resource-specific API gateways expect a bearer JSON Web Token (JWT) in the HTTP authorization headers:
```
Authorization: Bearer <accessToken>
```
To query a specific tenant context under SaaS conditions, attach the custom header parameter:
```
X-Tenant-ID: <tenantObjectId>
```
