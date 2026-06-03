# Amdox ERP — Backend API

> AI-Powered Cloud ERP Suite — Node.js + Express + PostgreSQL

---

## Tech Stack

| Layer        | Technology                        |
|-------------|-----------------------------------|
| Runtime      | Node.js 18+                       |
| Framework    | Express 5                         |
| Database     | PostgreSQL 15+                    |
| Auth         | JWT (jsonwebtoken)                 |
| Password     | bcrypt                            |
| Security     | Helmet.js + express-rate-limit    |
| Validation   | express-validator                 |

---

## Project Structure

```
erp-backend/
├── index.js                   ← Entry point
├── src/
│   ├── config/                ← db.js + env.js
│   ├── middleware/            ← auth, roleGuard, validation, errorHandler, requestLogger
│   ├── controllers/           ← auth, hr/, finance/, supplyChain/, dashboard
│   ├── services/              ← Business logic layer
│   ├── repositories/          ← Database queries
│   ├── routes/                ← Express routers
│   ├── models/                ← Schema type definitions
│   ├── validators/            ← Input validation rules
│   └── utils/                 ← response, logger, auditLogger
└── db/
    ├── migrations/            ← SQL migration files
    ├── seeds/                 ← Test data scripts
    └── schema.sql             ← Full schema export
```

---

## Setup

### 1. Clone and install

```bash
git clone <your-repo-url>
cd erp-backend
npm install
```

### 2. Create `.env` file

```bash
cp .env.example .env
```

Fill in your PostgreSQL credentials and JWT secret.

### 3. Setup database

Open pgAdmin, create database `erp_db`, then run in order:

```sql
-- Run in pgAdmin Query Tool:
db/migrations/001_init.sql
db/migrations/002_supply_chain.sql
db/migrations/003_fix_inventory_schema.sql
```

### 4. Seed test data

```bash
npm run seed:users
npm run seed:finance
```

### 5. Start server

```bash
npm run dev
```

Server runs on **http://localhost:5000**

---

## API Endpoints

### Auth  
| Method | Endpoint          | Description        |
|--------|-------------------|--------------------|
| POST   | /api/auth/signup  | Register user      |
| POST   | /api/auth/login   | Login, get token   |
| GET    | /api/auth/me      | Get current user   |

### HR  
| Method | Endpoint                        | Roles            |
|--------|---------------------------------|------------------|
| GET    | /api/hr/employees               | admin, manager   |
| GET    | /api/hr/employees/:id           | admin, manager   |
| POST   | /api/hr/employees               | admin            |
| PUT    | /api/hr/employees/:id           | admin, manager   |
| DELETE | /api/hr/employees/:id           | admin            |
| GET    | /api/hr/leaves                  | admin, manager   |
| POST   | /api/hr/leaves                  | all              |
| PATCH  | /api/hr/leaves/:id/status       | admin, manager   |

### Finance  
| Method | Endpoint                           | Roles          |
|--------|------------------------------------|----------------|
| GET    | /api/finance/transactions          | all            |
| GET    | /api/finance/transactions/summary  | all            |
| POST   | /api/finance/transactions          | admin, manager |
| GET    | /api/finance/invoices              | all            |
| POST   | /api/finance/invoices              | admin, manager |
| PATCH  | /api/finance/invoices/:id/status   | admin, manager |

### Supply Chain  
| Method | Endpoint                          | Roles          |
|--------|-----------------------------------|----------------|
| GET    | /api/supply/vendors               | all            |
| POST   | /api/supply/vendors               | admin, manager |
| DELETE | /api/supply/vendors/:id           | admin          |
| GET    | /api/supply/inventory             | all            |
| GET    | /api/supply/inventory/low-stock   | all            |
| POST   | /api/supply/inventory             | admin, manager |
| GET    | /api/supply/orders                | all            |
| POST   | /api/supply/orders                | admin, manager |
| PATCH  | /api/supply/orders/:id/status     | admin, manager |

### Dashboard  
| Method | Endpoint               | Description             |
|--------|------------------------|-------------------------|
| GET    | /api/dashboard/summary | Aggregated ERP summary  |

---

## Authentication

All protected routes require:

```
Authorization: Bearer <token>
```

Get the token from `POST /api/auth/login` → `data.token`.

---

## Frontend Integration

- Base URL: `http://localhost:5000/api`
- Allowed origins: `http://localhost:3000` (CRA) or `http://localhost:5173` (Vite)
- Store token in `localStorage` after login
- Attach token as `Authorization: Bearer <token>` header on every request

---

## Health Check

```
GET /health
```

Returns server status, environment, and current time.
