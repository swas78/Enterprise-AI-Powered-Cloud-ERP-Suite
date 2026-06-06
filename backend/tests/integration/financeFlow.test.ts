import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../src/index';
import { Tenant } from '../../src/models/Tenant';
import { User } from '../../src/models/User';
import { ChartOfAccounts } from '../../src/models/finance/ChartOfAccounts';
import { Inventory } from '../../src/models/supplyChain/Inventory';
import { Vendor } from '../../src/models/supplyChain/Vendor';
import { PurchaseOrder } from '../../src/models/supplyChain/PurchaseOrder';
import { GoodsReceipt } from '../../src/models/supplyChain/GoodsReceipt';
import { Invoice } from '../../src/models/finance/Invoice';
import { JournalEntry } from '../../src/models/finance/JournalEntry';
import { redisClient } from '../../src/config/redis';

describe('🚀 Amdox ERP Cross-Module Integration Flow Test', () => {
  let token: string;
  let tenantId: string;
  let vendorId: string;
  let poId: string;
  let grId: string;
  let invoiceId: string;

  let cashAccountId: string;
  let apAccountId: string;
  let expenseAccountId: string;

  beforeAll(async () => {
    // Wait for database connection to be established
    if (mongoose.connection.readyState !== 1) {
      await new Promise((resolve) => mongoose.connection.once('open', resolve));
    }

    // 1. Reset Database Collections
    await Tenant.deleteMany({});
    await User.deleteMany({});
    await ChartOfAccounts.deleteMany({});
    await Inventory.deleteMany({});
    await Vendor.deleteMany({});
    await PurchaseOrder.deleteMany({});
    await GoodsReceipt.deleteMany({});
    await Invoice.deleteMany({});
    await JournalEntry.deleteMany({});

    // 2. Initialize active Tenant
    const tenant = await Tenant.create({
      name: 'Integration Test Corp',
      subdomain: 'testcorp',
    });
    tenantId = tenant._id.toString();

    // 3. Initialize Chart of Accounts
    const cashAcc = await ChartOfAccounts.create({
      tenantId,
      code: '1000',
      name: 'Cash Asset',
      type: 'Asset',
      balance: 100000, // Start with $100k cash
    });
    cashAccountId = cashAcc._id.toString();

    const apAcc = await ChartOfAccounts.create({
      tenantId,
      code: '2000',
      name: 'Accounts Payable',
      type: 'Liability',
      balance: 0,
    });
    apAccountId = apAcc._id.toString();

    const expAcc = await ChartOfAccounts.create({
      tenantId,
      code: '5000',
      name: 'Operations Expense',
      type: 'Expense',
      balance: 0,
    });
    expenseAccountId = expAcc._id.toString();

    // 4. Create TenantAdmin User & authenticate to get JWT token
    const admin = await User.create({
      name: 'Test Admin',
      email: 'test.admin@amdox.com',
      password: 'testadminpassword',
      role: 'TenantAdmin',
      tenantId,
    });

    const loginRes = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'test.admin@amdox.com', password: 'testadminpassword' });

    token = loginRes.body.data.accessToken;

    // 5. Initialize SCM inventory items
    await Inventory.create({
      tenantId,
      sku: 'SKU-CPU-TEST',
      description: 'Test Processor SKU',
      quantity: 5,
      safetyStock: 10,
      warehouseLocation: 'Aisle 1, Shelf A',
    });
  });

  afterAll(async () => {
    // Gracefully close connections
    await mongoose.connection.close();
    await redisClient.quit();
  });

  it('Step 1: Should register a Supplier Vendor', async () => {
    const res = await request(app)
      .post('/api/v1/supply-chain/vendors')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId)
      .send({
        name: 'Silicon Distributors Inc',
        email: 'sales@silicondist.com',
        code: 'VND-SILICON',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.status).toBe('success');
    vendorId = res.body.data._id;
  });

  it('Step 2: Should create a Purchase Order', async () => {
    const res = await request(app)
      .post('/api/v1/supply-chain/po')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId)
      .send({
        vendorId,
        poNumber: 'PO-2026-001',
        items: [
          {
            sku: 'SKU-CPU-TEST',
            description: 'Test Processor SKU',
            quantity: 20,
            unitPrice: 150.0, // Total = $3,000
          },
        ],
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.data.totalAmount).toBe(3000);
    poId = res.body.data._id;
  });

  it('Step 3: Should receive goods and adjust inventory quantities', async () => {
    const res = await request(app)
      .post('/api/v1/supply-chain/po/receive')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId)
      .send({
        poId,
        grNumber: 'GR-2026-001',
        receivedItems: [
          {
            sku: 'SKU-CPU-TEST',
            quantityReceived: 20,
          },
        ],
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.data.status).toBe('Verified');

    // Verify inventory SKU quantity increased from 5 to 25 units
    const inv = await Inventory.findOne({ sku: 'SKU-CPU-TEST', tenantId });
    expect(inv?.quantity).toBe(25);
    grId = res.body.data._id;
  });

  it('Step 4: Should process AP Invoice, match it, and auto-post general ledger entries', async () => {
    const res = await request(app)
      .post('/api/v1/finance/ap/invoice')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId)
      .send({
        invoiceNumber: 'INV-SILICON-992',
        supplierName: 'Silicon Distributors Inc',
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days due
        poId,
        grId,
        items: [
          {
            sku: 'SKU-CPU-TEST',
            description: 'Test Processor SKU',
            quantity: 20,
            unitPrice: 150.0,
          },
        ],
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.data.invoice.status).toBe('Unpaid'); // Auto-approved and unpaid liability
    expect(res.body.data.matchResult.success).toBe(true); // 3-way match passed!
    invoiceId = res.body.data.invoice._id;

    // Verify Ledger account balances: Credit AP (2000) by $3,000, Debit Expense (5000) by $3,000
    const apAccount = await ChartOfAccounts.findById(apAccountId);
    const expAccount = await ChartOfAccounts.findById(expenseAccountId);

    expect(apAccount?.balance).toBe(3000);
    expect(expAccount?.balance).toBe(3000);
  });

  it('Step 5: Should execute a Payment Run to clear the AP Invoice', async () => {
    const res = await request(app)
      .post('/api/v1/finance/ap/pay')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId)
      .send({
        invoiceIds: [invoiceId],
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.totalPaid).toBe(3000);

    // Verify Invoice status is now Paid
    const inv = await Invoice.findById(invoiceId);
    expect(inv?.status).toBe('Paid');
    expect(inv?.balanceDue).toBe(0);

    // Verify Ledger account balances after cash release:
    // Debit AP (2000) reduces balance back to $0
    // Credit Cash (1000) reduces cash from $100,000 to $97,000
    const apAccount = await ChartOfAccounts.findById(apAccountId);
    const cashAccount = await ChartOfAccounts.findById(cashAccountId);

    expect(apAccount?.balance).toBe(0);
    expect(cashAccount?.balance).toBe(97000);
  });
});
