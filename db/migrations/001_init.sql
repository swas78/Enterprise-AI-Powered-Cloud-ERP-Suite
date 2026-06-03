-- db/migrations/001_init.sql
-- Run entire file in pgAdmin Query Tool on erp_db

CREATE TABLE IF NOT EXISTS users (
  id         SERIAL PRIMARY KEY,
  name       VARCHAR(100) NOT NULL,
  email      VARCHAR(150) UNIQUE NOT NULL,
  password   VARCHAR(255) NOT NULL,
  role       VARCHAR(50)
               DEFAULT 'employee'
               CHECK (role IN('admin','manager','employee')),
  is_active  BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS employees (
  id         SERIAL PRIMARY KEY,
  user_id    INT REFERENCES users(id) ON DELETE CASCADE,
  department VARCHAR(100),
  position   VARCHAR(100),
  salary     DECIMAL(10,2) DEFAULT 0,
  join_date  DATE DEFAULT NOW(),
  status     VARCHAR(20) DEFAULT 'active'
);

CREATE TABLE IF NOT EXISTS leave_requests (
  id          SERIAL PRIMARY KEY,
  employee_id INT REFERENCES employees(id) ON DELETE CASCADE,
  leave_type  VARCHAR(50) NOT NULL,
  start_date  DATE NOT NULL,
  end_date    DATE NOT NULL,
  status      VARCHAR(20)
               DEFAULT 'pending'
               CHECK (status IN('pending','approved','rejected')),
  reason      TEXT,
  created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS transactions (
  id          SERIAL PRIMARY KEY,
  amount      DECIMAL(12,2) NOT NULL,
  type        VARCHAR(10)
               CHECK (type IN('credit','debit')),
  category    VARCHAR(100),
  description TEXT,
  created_by  INT REFERENCES users(id),
  created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS invoices (
  id          SERIAL PRIMARY KEY,
  invoice_no  VARCHAR(50) UNIQUE NOT NULL,
  client_name VARCHAR(150),
  amount      DECIMAL(12,2),
  status      VARCHAR(20)
               DEFAULT 'unpaid'
               CHECK (status IN('unpaid','paid','overdue')),
  due_date    DATE,
  created_by  INT REFERENCES users(id),
  created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS audit_log (
  id         SERIAL PRIMARY KEY,
  user_id    INT REFERENCES users(id),
  action     VARCHAR(100),
  table_name VARCHAR(50),
  record_id  INT,
  timestamp  TIMESTAMP DEFAULT NOW()
);