-- db/migrations/002_supply_chain.sql
-- Run in pgAdmin Query Tool on erp_db

CREATE TABLE IF NOT EXISTS vendors (
  id         SERIAL PRIMARY KEY,
  name       VARCHAR(150) NOT NULL,
  email      VARCHAR(150) UNIQUE,
  phone      VARCHAR(30),
  address    TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS inventory (
  id            SERIAL PRIMARY KEY,
  item_name     VARCHAR(150) NOT NULL,
  sku           VARCHAR(80)  UNIQUE NOT NULL,
  quantity      INT          DEFAULT 0,
  reorder_level INT          DEFAULT 10,
  unit_price    DECIMAL(12,2) DEFAULT 0,
  vendor_id     INT REFERENCES vendors(id) ON DELETE SET NULL,
  created_at    TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS purchase_orders (
  id           SERIAL PRIMARY KEY,
  po_number    VARCHAR(80) UNIQUE NOT NULL,
  vendor_id    INT REFERENCES vendors(id) ON DELETE SET NULL,
  total_amount DECIMAL(12,2) DEFAULT 0,
  status       VARCHAR(20)
                 DEFAULT 'pending'
                 CHECK (status IN('pending','approved','delivered','cancelled')),
  created_by   INT REFERENCES users(id),
  created_at   TIMESTAMP DEFAULT NOW(),
  updated_at   TIMESTAMP
);
