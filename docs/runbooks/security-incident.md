# Security Incident Runbook

## Overview
Procedure for responding to suspected security breaches, data leaks, or malicious exploits detected by OWASP ZAP or runtime telemetry.

## Symptoms
- Spikes in `401 Unauthorized` or `403 Forbidden` API responses.
- Alert from Snyk or Trivy regarding a newly disclosed 0-day vulnerability.
- High rate of failed login attempts triggering rate limiters.

## Procedure
1. **Isolate Compromised Systems**:
   If a specific pod or node is acting suspiciously, quarantine it by modifying its Kubernetes network policy to `Deny All` egress, preserving it for forensics.
2. **Rotate Secrets**:
   If credentials (e.g., JWT Secret, DB Password) are compromised, trigger the GitHub Actions workflow to rotate secrets and restart the deployment:
   ```bash
   gh workflow run rotate-secrets.yml
   kubectl rollout restart deployment amdox-erp-backend
   ```
3. **Audit Log Analysis**:
   Query TimescaleDB or the backend `/api/v1/compliance/audit-logs` endpoint. Verify the cryptographic SHA-256 hash-chain to ensure the attacker has not tampered with the logs to cover their tracks.
4. **Patch Vulnerability**:
   If a library is vulnerable, run `npm audit fix` or `snyk test`, commit the patched `package-lock.json`, and deploy.

## Communication
- Notify Tenant Admins within 72 hours per GDPR guidelines if PII was exposed.
