# Amdox Enterprise AI-Powered ERP Suite (AMX-ERP-2026-04)

Welcome to the **Enterprise AI-Powered Cloud ERP Suite**, a multi-tenant SaaS application that integrates Finance, HR, Payroll, Supply Chain, and Project Management into a single collaborative workspace.

---

## 🛠️ Technology Stack

*   **Frontend**: React (Vite + TypeScript), Tailwind CSS 4, Zustand/Redux for state management, Recharts/ECharts.
*   **Backend**: Node.js + Express (TypeScript), BullMQ (Queue engine), Keycloak 25 (SSO Identity Provider).
*   **Database & Cache**: MongoDB 6.0 (ACID transactions enabled), Redis 7.2.
*   **AI Microservice**: Python 3.13 + FastAPI + Facebook Prophet & PyTorch LSTM.

---

## 📂 Project Structure

```
amdox-erp/
├── frontend/                    # React Client
├── backend/                     # Express.js Server
├── .gitignore                   # Version control exclusions
├── .env.example                 # Environment variables checklist
├── docker-compose.yml           # Docker services launcher
├── README.md                    # Setup & operation instructions
└── ARCHITECTURE.md              # Deep dive architectural decisions
```

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
Ensure you have the following installed on your machine:
- Node.js (v20+ LTS / v22 LTS recommended)
- Docker Desktop
- Git

### 2. Set Up Environment Variables
Copy the root variable template to a local environment file:
```bash
cp .env.example .env
```

### 3. Spin Up Infrastructure Stack
Launch the development database, cache, and authentication services in Docker:
```bash
docker-compose up -d
```
*Note: This command spins up a replica-set enabled MongoDB container, Redis, and Keycloak.*

### 4. Install Dependencies
Install all package dependencies for the root, frontend, and backend packages:
```bash
npm run install:all
```

### 5. Launch Development Servers
Run the client and API server concurrently with single command:
```bash
npm run dev
```

---

## 🧪 Database Seeding

To populate the database with demo data (employees, POs, vendors, journal entries, etc.):
```bash
cd backend
npm run seed
```
*Note: This will overwrite existing data and populate a clean initial state.*

---

## 🔑 Demo Credentials

Once the system is running and seeded, you can log in with the following demo accounts:

**Admin User:**
- **Email:** `admin@amdox.com`
- **Password:** `Admin@123`

**HR Manager:**
- **Email:** `hr@amdox.com`
- **Password:** `HrUser@123`

**Finance Director:**
- **Email:** `finance@amdox.com`
- **Password:** `Finance@123`

*(Note: In the development environment, the Two-Factor Authentication (OTP) uses Ethereal Email. Check the backend server logs for the Ethereal Email preview URL to retrieve your OTP.)*

---

## 📚 API Documentation

The backend API is documented using Swagger/OpenAPI. Once the backend server is running, navigate to:

👉 **[http://localhost:5000/api-docs](http://localhost:5000/api-docs)**

---

## 🧪 Testing

Execute automated unit and integration tests:
```bash
# Run tests for both frontend and backend
npm run test
```
