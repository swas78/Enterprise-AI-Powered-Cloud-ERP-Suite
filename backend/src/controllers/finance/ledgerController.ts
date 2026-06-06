import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { AccountingEngine } from '../../services/finance/accountingEngine';
import { ChartOfAccounts } from '../../models/finance/ChartOfAccounts';
import { JournalEntry } from '../../models/finance/JournalEntry';
import { PeriodLock } from '../../models/finance/PeriodLock';
import { AuditLogger } from '../../utils/auditLogger';

export class LedgerController {
  
  // Post a balanced double-entry transaction
  public static async postJournalEntry(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const { ref, description, date, lines } = req.body;
      const tenantId = req.tenantId;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!ref || !description || !lines || lines.length < 2) {
        return res.status(400).json({
          status: 'error',
          message: 'Please provide all required fields: ref, description, and at least two lines.',
        });
      }

      // Check Period Close Lock
      const journalDate = date ? new Date(date) : new Date();
      const activeLock = await PeriodLock.findOne({ tenantId });
      if (activeLock && journalDate <= activeLock.lockedDate) {
        // Only SuperAdmin or TenantAdmin can bypass lock
        const userRole = req.user?.role;
        if (userRole !== 'SuperAdmin' && userRole !== 'TenantAdmin') {
          return res.status(403).json({
            status: 'error',
            message: `Posting blocked: The accounting period up to ${new Date(activeLock.lockedDate).toLocaleDateString()} has been closed and locked for this tenant. Admin override required.`,
          });
        }
      }

      const newEntry = await AccountingEngine.postJournalEntry(tenantId, {
        ref,
        description,
        date,
        lines,
      });

      // Audit log posting
      await AuditLogger.log(req, 'finance.journal_entry.posted', 'JournalEntry', newEntry._id.toString(), {
        ref,
        amount: lines.filter((l: any) => l.type === 'Debit').reduce((sum: number, l: any) => sum + l.amount, 0),
      });

      return res.status(201).json({
        status: 'success',
        statusCode: 201,
        message: 'Journal Entry posted successfully to Ledger.',
        data: newEntry,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Retrieve Chart of Accounts list
  public static async getAccounts(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const accounts = await ChartOfAccounts.find({ tenantId }).sort({ code: 1 });
      return res.status(200).json({
        status: 'success',
        data: accounts,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Create a new chart of accounts entry
  public static async createAccount(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { code, name, type, balance, currency } = req.body;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!code || !name || !type) {
        return res.status(400).json({ status: 'error', message: 'code, name, and type are required.' });
      }

      const newAccount = await ChartOfAccounts.create({
        tenantId,
        code,
        name,
        type,
        balance: balance || 0,
        currency: currency || 'USD',
      });

      // Audit log account creation
      await AuditLogger.log(req, 'finance.account.created', 'ChartOfAccounts', newAccount._id.toString(), { code, name, type });

      return res.status(201).json({
        status: 'success',
        message: 'Account created successfully in Chart of Accounts.',
        data: newAccount,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Retrieve posted Journal Entries
  public static async getLedgerEntries(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const entries = await JournalEntry.find({ tenantId }).sort({ date: -1 }).populate('lines.accountId');
      return res.status(200).json({
        status: 'success',
        data: entries,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Set or update period lock date
  public static async lockPeriod(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { lockedDate } = req.body;
      const userId = req.user?.userId;

      if (!tenantId || !userId) {
        return res.status(400).json({ status: 'error', message: 'Tenant or user context is missing.' });
      }

      if (!lockedDate) {
        return res.status(400).json({ status: 'error', message: 'lockedDate is required.' });
      }

      const lockDate = new Date(lockedDate);
      const updatedLock = await PeriodLock.findOneAndUpdate(
        { tenantId },
        { lockedDate: lockDate, lockedBy: userId as any },
        { new: true, upsert: true }
      );

      // Audit log period lock adjustment
      await AuditLogger.log(req, 'finance.period_lock.updated', 'PeriodLock', updatedLock._id.toString(), { lockedDate: lockDate });

      return res.status(200).json({
        status: 'success',
        message: `Accounting period successfully locked up to ${lockDate.toLocaleDateString()}.`,
        data: updatedLock,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Get current period lock status
  public static async getPeriodLock(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const lock = await PeriodLock.findOne({ tenantId });
      return res.status(200).json({
        status: 'success',
        data: lock,
      });
    } catch (error: any) {
      next(error);
    }
  }
}

export default LedgerController;
