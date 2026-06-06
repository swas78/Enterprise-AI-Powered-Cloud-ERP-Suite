# Deployment Guide - Amdox Enterprise ERP

Amdox ERP can be deployed inside containerized Kubernetes clusters or locally using Docker Compose configurations.

## 📦 Container Build
Build distroless images:
```bash
docker build -t amdox-erp-backend ./backend
docker build -t amdox-erp-frontend ./frontend
docker build -t amdox-erp-ml ./ml-service
```

## ☸️ Kubernetes (Helm Deployment)
1.  Verify Helm templates:
    ```bash
    helm template kubernetes/helm/amdox-erp
    ```
2.  Install Release:
    ```bash
    helm upgrade --install amdox-release kubernetes/helm/amdox-erp -n production --create-namespace
    ```
3.  Ingress Controllers routing coordinates are specified inside `values.yaml`.
