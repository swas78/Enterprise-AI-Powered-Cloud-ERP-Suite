# Testing Guide - Amdox ERP

This guide documents the procedures for executing verification steps and load tests.

## 🧪 Jest Integration Tests
Runs the Supertest integration suites:
```bash
npm run test:backend
```
The runner spins up temporary MongoDB and Redis mock instances using Docker before bootstrapping tests.

## 🚥 Load Testing
1.  Verify development server is running on port 5000:
    ```bash
    npm run dev --prefix backend
    ```
2.  Execute Stress Tester:
    ```bash
    npm run loadtest --prefix backend
    ```
    This launches 15 concurrent threads dispatching 120 queries in a loop, displaying latency spectrum percentiles (p50, p90, p95).
