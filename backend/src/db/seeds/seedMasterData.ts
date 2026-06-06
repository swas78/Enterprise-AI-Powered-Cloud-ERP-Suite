import mongoose from 'mongoose';
import { Employee } from '../../models/hr/Employee';
import { Vendor } from '../../models/supplyChain/Vendor';
import { Inventory } from '../../models/supplyChain/Inventory';
import { Project } from '../../models/project/Project';
import { Task } from '../../models/project/Task';
import { Dashboard } from '../../models/dashboard/Dashboard';
import { Widget } from '../../models/dashboard/Widget';
import { Report } from '../../models/dashboard/Report';
import { PurchaseOrder } from '../../models/supplyChain/PurchaseOrder';
import { ChartOfAccounts } from '../../models/finance/ChartOfAccounts';
import { JournalEntry } from '../../models/finance/JournalEntry';
import { Payroll } from '../../models/hr/Payroll';
import logger from '../../utils/logger';

export const seedMasterData = async (
  tenantId: mongoose.Types.ObjectId,
  adminUserId: mongoose.Types.ObjectId
): Promise<void> => {
  logger.info('📦 Seeding Master Data...');

  // Clean old collections
  await Employee.deleteMany({ tenantId });
  await Vendor.deleteMany({ tenantId });
  await Inventory.deleteMany({ tenantId });
  await Project.deleteMany({ tenantId });
  await Task.deleteMany({ tenantId });
  await Dashboard.deleteMany({ tenantId });
  await Widget.deleteMany({ tenantId });
  await Report.deleteMany({ tenantId });
  await PurchaseOrder.deleteMany({ tenantId });
  await ChartOfAccounts.deleteMany({ tenantId });
  await JournalEntry.deleteMany({ tenantId });
  await Payroll.deleteMany({ tenantId });

  // 1. Seed Employees
  const sarah = await Employee.create({
    name: 'Sarah Jenkins',
    email: 'sarah.j@amdox.com',
    department: 'Finance & Treasury',
    role: 'Head of Accounts',
    salary: 145000,
    tenantId,
  });

  const michael = await Employee.create({
    name: 'Michael Chen',
    email: 'michael.c@amdox.com',
    department: 'Engineering',
    role: 'Staff ML Specialist',
    salary: 192000,
    managerId: sarah._id,
    tenantId,
  });

  await Employee.create({
    name: 'Sophia Rodriguez',
    email: 'sophia.r@amdox.com',
    department: 'Supply Chain',
    role: 'Inventory Coordinator',
    salary: 85000,
    managerId: sarah._id,
    tenantId,
  });

  const david = await Employee.create({
    name: 'David Kim',
    email: 'david.k@amdox.com',
    department: 'Engineering',
    role: 'Frontend Developer',
    salary: 110000,
    managerId: michael._id,
    tenantId,
  });

  const emma = await Employee.create({
    name: 'Emma Watson',
    email: 'emma.w@amdox.com',
    department: 'HR',
    role: 'HR Business Partner',
    salary: 95000,
    managerId: sarah._id,
    tenantId,
  });

  // 2. Seed Vendor & Inventory
  const vendor1 = await Vendor.create({
    name: 'Global Chip Distributors',
    email: 'sales@globalchips.com',
    code: 'VND-CHIPS-101',
    tenantId,
  });

  const vendor2 = await Vendor.create({
    name: 'Quantum Parts SA',
    email: 'contact@quantumparts.com',
    code: 'VND-QUANT-202',
    tenantId,
  });

  const vendor3 = await Vendor.create({
    name: 'Omni-Dynamics Inc',
    email: 'orders@omnidynamics.com',
    code: 'VND-OMNI-303',
    tenantId,
  });

  await Inventory.insertMany([
    { sku: 'ITEM-CORE-CPU-09', description: 'Core i9 AI-Engine Central Processor Unit', quantity: 240, safetyStock: 25, costingMethod: 'AVCO', warehouseLocation: 'Aisle 4, Shelf C', tenantId },
    { sku: 'ITEM-MEM-DDR5-32', description: 'High-Density 32GB DDR5 RAM Stick', quantity: 8, safetyStock: 15, costingMethod: 'AVCO', warehouseLocation: 'Aisle 5, Shelf A', tenantId },
    { sku: 'ITEM-SSD-2TB-NVME', description: '2TB NVMe Gen4 SSD', quantity: 150, safetyStock: 20, costingMethod: 'FIFO', warehouseLocation: 'Aisle 2, Shelf B', tenantId },
  ]);

  await PurchaseOrder.insertMany([
    { tenantId, vendorId: vendor1._id, poNumber: 'PO-001', status: 'Sent', totalAmount: 12500, items: [{ sku: 'ITEM-CORE-CPU-09', description: 'Core i9 Processors', quantity: 50, unitPrice: 250 }] },
    { tenantId, vendorId: vendor2._id, poNumber: 'PO-002', status: 'Received', totalAmount: 4500, items: [{ sku: 'ITEM-MEM-DDR5-32', description: '32GB RAM Sticks', quantity: 100, unitPrice: 45 }] },
    { tenantId, vendorId: vendor3._id, poNumber: 'PO-003', status: 'Draft', totalAmount: 8500, items: [{ sku: 'ITEM-SSD-2TB-NVME', description: '2TB NVMe Gen4 SSD', quantity: 100, unitPrice: 85 }] },
  ]);

  // 3. Seed Projects
  const enterpriseProject = await Project.create({
    name: 'AMX Core ERP Deployment',
    description: 'Global SaaS transition of business tools into Amdox MERN ERP.',
    budget: 1500000,
    spent: 42000,
    status: 'Active',
    tenantId,
  });

  const mobileAppProject = await Project.create({
    name: 'Amdox Mobile iOS/Android App',
    description: 'React Native app development for field engineers.',
    budget: 350000,
    spent: 120000,
    status: 'Active',
    tenantId,
  });

  const complianceAuditProject = await Project.create({
    name: 'Q3 GDPR Compliance Audit',
    description: 'Annual security and privacy compliance review.',
    budget: 50000,
    spent: 50000,
    status: 'Completed',
    tenantId,
  });

  const task1 = await Task.create({ tenantId, projectId: enterpriseProject._id, name: 'Requirements Gathering', status: 'Done', startDay: 1, durationDays: 5 });
  const task2 = await Task.create({ tenantId, projectId: enterpriseProject._id, name: 'System Architecture', status: 'Done', startDay: 6, durationDays: 10, dependencies: [task1._id] });
  const task3 = await Task.create({ tenantId, projectId: enterpriseProject._id, name: 'Backend Implementation', status: 'In Progress', startDay: 16, durationDays: 20, dependencies: [task2._id] });
  const task4 = await Task.create({ tenantId, projectId: enterpriseProject._id, name: 'Frontend Implementation', status: 'To Do', startDay: 20, durationDays: 15, dependencies: [task2._id] });

  // 4. Seed Dashboard
  const mainDashboard = await Dashboard.create({
    tenantId,
    name: 'Main Executive Dashboard',
    isDefault: true,
    widgets: [
      {
        title: 'Monthly Cash Flow',
        type: 'Line',
        dataSource: '/api/v1/finance/ledger/cash-flow',
        gridConfig: { x: 0, y: 0, w: 6, h: 4 },
      },
      {
        title: 'Total Active Staff',
        type: 'Metric',
        dataSource: '/api/v1/hr/employees/count',
        gridConfig: { x: 6, y: 0, w: 3, h: 2 },
      },
    ],
  });

  // 5. Seed Widgets Collection
  await Widget.create({
    name: 'SaaS Revenue Metrics',
    description: 'Track subscription metrics and recurring AR balances.',
    type: 'kpi_card',
    dashboardId: mainDashboard._id,
    tenantId,
    config: {
      dataSource: '/api/v1/finance/reports/saas-metrics',
      period: 'month',
      aggregation: 'sum',
    },
    position: { x: 0, y: 0, w: 4, h: 3 },
    isVisible: true,
    createdBy: adminUserId,
  });

  // 6. Seed Reports Collection
  await Report.create({
    name: 'Quarterly Trial Balance',
    description: 'Trial balance report for Q2 fiscal year operations.',
    type: 'financial',
    tenantId,
    format: 'pdf',
    status: 'ready',
    filters: { quarter: 2, year: 2026 },
    columns: ['Code', 'Account Name', 'Type', 'Debit', 'Credit'],
    schedule: 'once',
    createdBy: adminUserId,
  });

  // 7. Seed Finance Data (Chart of Accounts, Journal Entries)
  const cashAccount = await ChartOfAccounts.create({ tenantId, code: '1000', name: 'Cash Equivalents', type: 'Asset', balance: 500000 });
  const apAccount = await ChartOfAccounts.create({ tenantId, code: '2000', name: 'Accounts Payable', type: 'Liability', balance: 12500 });
  const expenseAccount = await ChartOfAccounts.create({ tenantId, code: '6000', name: 'Software Subscriptions', type: 'Expense', balance: 0 });

  await JournalEntry.create({
    tenantId,
    ref: 'JE-2026-06-001',
    description: 'Payment to Global Chip Distributors for PO-001',
    status: 'Posted',
    lines: [
      { accountId: apAccount._id, type: 'Debit', amount: 12500 },
      { accountId: cashAccount._id, type: 'Credit', amount: 12500 },
    ],
  });

  await JournalEntry.create({
    tenantId,
    ref: 'JE-2026-06-002',
    description: 'Annual AWS Cloud Hosting Renewal',
    status: 'Pending',
    lines: [
      { accountId: expenseAccount._id, type: 'Debit', amount: 8000 },
      { accountId: cashAccount._id, type: 'Credit', amount: 8000 },
    ],
  });

  // 8. Seed Payroll Batch History
  await Payroll.insertMany([
    { tenantId, batchNumber: 'PR-2026-05', status: 'Completed', processedDate: new Date('2026-05-30'), totalGross: 450000, totalDeductions: 85000, totalNet: 365000 },
    { tenantId, batchNumber: 'PR-2026-06', status: 'Draft', totalGross: 450000, totalDeductions: 85000, totalNet: 365000 },
  ]);

  logger.info('Master Data seeded successfully.');
};

export default seedMasterData;
