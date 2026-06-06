import { ledgerRepository } from '../../repositories/finance/ledgerRepository';
import { JournalEntry, IJournalEntry } from '../../models/finance/JournalEntry';
import { CreateJournalEntryDTO, TrialBalanceResult, ProfitLossResult, BalanceSheetResult } from '../../types/finance';
import mongoose from 'mongoose';

export class LedgerService {
  /** Get all journal entries for a tenant */
  static async getJournalEntries(tenantId: string, filters: any = {}): Promise<IJournalEntry[]> {
    return ledgerRepository.find({ tenantId, ...filters });
  }

  /** Get a single journal entry */
  static async getJournalEntryById(id: string, tenantId: string): Promise<IJournalEntry | null> {
    return ledgerRepository.findOne({ _id: id, tenantId });
  }

  /** Post a new journal entry (validates double-entry balance) */
  static async postJournalEntry(dto: CreateJournalEntryDTO): Promise<IJournalEntry> {
    const totalDebit = dto.lines.reduce((sum, l) => sum + (l.debit || 0), 0);
    const totalCredit = dto.lines.reduce((sum, l) => sum + (l.credit || 0), 0);

    if (Math.abs(totalDebit - totalCredit) > 0.001) {
      throw new Error(`Journal entry is unbalanced. Debit: ${totalDebit}, Credit: ${totalCredit}`);
    }

    return ledgerRepository.create({ ...dto, status: 'posted' });
  }

  /** Void a posted journal entry */
  static async voidJournalEntry(id: string, tenantId: string, reason: string): Promise<IJournalEntry | null> {
    return ledgerRepository.update(
      { _id: id, tenantId, status: 'posted' },
      { $set: { status: 'void', voidReason: reason } }
    );
  }

  /** Generate trial balance for a tenant */
  static async getTrialBalance(tenantId: string, asOf?: Date): Promise<TrialBalanceResult> {
    const match: any = { tenantId, status: 'posted' };
    if (asOf) match.date = { $lte: asOf };

    const data = await ledgerRepository.aggregate([
      { $match: match },
      { $unwind: '$lines' },
      {
        $group: {
          _id: '$lines.accountId',
          debit: { $sum: '$lines.debit' },
          credit: { $sum: '$lines.credit' },
        },
      },
    ]);

    const totalDebit = data.reduce((s: number, r: any) => s + r.debit, 0);
    const totalCredit = data.reduce((s: number, r: any) => s + r.credit, 0);

    return {
      accounts: data.map((r: any) => ({
        accountCode: r._id,
        accountName: '',
        type: 'asset',
        debit: r.debit,
        credit: r.credit,
      })),
      totalDebit,
      totalCredit,
      balanced: Math.abs(totalDebit - totalCredit) < 0.01,
    };
  }

  /** Generate profit & loss report */
  static async getProfitAndLoss(tenantId: string, from: Date, to: Date): Promise<ProfitLossResult> {
    const data = await ledgerRepository.aggregate([
      { $match: { tenantId, status: 'posted', date: { $gte: from, $lte: to } } },
      { $unwind: '$lines' },
      {
        $lookup: {
          from: 'chartofaccounts',
          localField: 'lines.accountId',
          foreignField: '_id',
          as: 'account',
        },
      },
      { $unwind: '$account' },
      {
        $group: {
          _id: '$account.type',
          total: { $sum: { $subtract: ['$lines.debit', '$lines.credit'] } },
        },
      },
    ]);

    const revenue = data.find((d: any) => d._id === 'revenue')?.total ?? 0;
    const expenses = data.find((d: any) => d._id === 'expense')?.total ?? 0;

    return { revenue, expenses, netProfit: revenue - expenses, period: { from, to } };
  }

  /** Get account ledger (activity for a specific account) */
  static async getAccountLedger(accountId: string, tenantId: string, from?: Date, to?: Date) {
    const match: any = { tenantId, status: 'posted', 'lines.accountId': new mongoose.Types.ObjectId(accountId) };
    if (from || to) {
      match.date = {};
      if (from) match.date.$gte = from;
      if (to) match.date.$lte = to;
    }
    return ledgerRepository.find(match);
  }
}

export default LedgerService;
