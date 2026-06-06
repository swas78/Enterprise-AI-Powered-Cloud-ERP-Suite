import mongoose from 'mongoose';
import { ChartOfAccounts } from '../../models/finance/ChartOfAccounts';
import { Currency } from '../../models/finance/Currency';
import { PeriodLock } from '../../models/finance/PeriodLock';
import logger from '../../utils/logger';

export const seedFinanceData = async (tenantId: mongoose.Types.ObjectId, adminUserId: mongoose.Types.ObjectId): Promise<void> => {
  logger.info('💱 Seeding Finance Data...');

  // Clean old collections
  await ChartOfAccounts.deleteMany({ tenantId });
  await Currency.deleteMany({ tenantId });
  await PeriodLock.deleteMany({ tenantId });

  // 1. Seed Chart of Accounts
  const accounts = [
    { code: '1000', name: 'Cash and Cash Equivalents', type: 'Asset', balance: 12459200 },
    { code: '1200', name: 'Accounts Receivable (AR)', type: 'Asset', balance: 0 },
    { code: '2000', name: 'Accounts Payable (AP)', type: 'Liability', balance: 0 },
    { code: '3000', name: 'Retained Earnings (Equity)', type: 'Equity', balance: 12459200 },
    { code: '5000', name: 'Operations / SaaS Subscriptions', type: 'Expense', balance: 0 },
  ];
  await ChartOfAccounts.insertMany(
    accounts.map(acc => ({ ...acc, tenantId }))
  );

  // 2. Seed Currencies
  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$', exchangeRate: 1.0, isBase: true },
    { code: 'EUR', name: 'Euro', symbol: '€', exchangeRate: 0.92, isBase: false },
    { code: 'GBP', name: 'British Pound', symbol: '£', exchangeRate: 0.78, isBase: false },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹', exchangeRate: 83.5, isBase: false },
  ];
  await Currency.insertMany(
    currencies.map(curr => ({ ...curr, tenantId }))
  );

  // 3. Seed Period Lock (lock historical transactions before last year)
  const lockedDate = new Date();
  lockedDate.setFullYear(lockedDate.getFullYear() - 1);
  lockedDate.setMonth(11); // December
  lockedDate.setDate(31);
  lockedDate.setHours(23, 59, 59, 999);

  await PeriodLock.create({
    tenantId,
    lockedDate,
    lockedBy: adminUserId,
  });

  logger.info('Finance Data seeded successfully.');
};

export default seedFinanceData;
