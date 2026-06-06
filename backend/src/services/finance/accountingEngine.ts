import mongoose from 'mongoose';
import { ledgerRepository } from '../../repositories/finance/ledgerRepository';
import { chartOfAccountsRepository } from '../../repositories/finance/chartOfAccountsRepository';
import logger from '../../utils/logger';

export class AccountingEngine {
  
  // Post a balanced journal entry and atomically update account balances
  public static async postJournalEntry(
    tenantId: string,
    data: {
      ref: string;
      description: string;
      date?: Date;
      lines: { accountId: string; type: 'Debit' | 'Credit'; amount: number }[];
    }
  ) {
    // 1. Math Validation: Sum of Debits must equal Sum of Credits
    let debitSum = 0;
    let creditSum = 0;

    for (const line of data.lines) {
      if (line.type === 'Debit') {
        debitSum += line.amount;
      } else {
        creditSum += line.amount;
      }
    }

    // Standardize floating point math rounding errors
    const diff = Math.abs(debitSum - creditSum);
    if (diff > 0.001) {
      throw new Error(`Unbalanced Entry: Debits ($${debitSum}) must equal Credits ($${creditSum}). Difference: $${diff.toFixed(2)}`);
    }

    // 2. ACID Transaction Session
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      logger.info(`🔄 Initiating ACID Journal posting transaction for ref: ${data.ref} | Tenant: ${tenantId}`);

      // Create the Journal Entry record inside the transaction boundary
      const newEntry = await ledgerRepository.create(
        {
          tenantId,
          ref: data.ref,
          description: data.description,
          date: data.date || new Date(),
          status: 'Posted',
          lines: data.lines,
        },
        { session }
      );

      // Loop through lines to adjust account balances
      for (const line of data.lines) {
        const account = await chartOfAccountsRepository.findOne({ _id: line.accountId, tenantId }, null, { session });
        if (!account) {
          throw new Error(`Account not found in ledger: ID ${line.accountId}`);
        }

        // Enforce accounting category adjustments:
        // Assets & Expenses increase on Debit, decrease on Credit.
        // Liabilities, Equity & Revenues increase on Credit, decrease on Debit.
        let balanceAdjustment = 0;
        const isAssetOrExpense = ['Asset', 'Expense'].includes(account.type);

        if (line.type === 'Debit') {
          balanceAdjustment = isAssetOrExpense ? line.amount : -line.amount;
        } else {
          balanceAdjustment = isAssetOrExpense ? -line.amount : line.amount;
        }

        // Apply balance update inside database session context
        account.balance += balanceAdjustment;
        await account.save({ session });
        
        logger.debug(`📊 Adjusted Account ${account.code} (${account.name}) by $${balanceAdjustment.toFixed(2)}. New Balance: $${account.balance.toFixed(2)}`);
      }

      // Commit all steps atomically
      await session.commitTransaction();
      logger.info(`💚 Successfully committed Journal Entry ${data.ref} to General Ledger.`);
      
      // Dispatch domain event to EventBus (non-blocking)
      const eventBus = require('../../utils/eventBus').default;
      eventBus.emit('finance.journal_entry.posted', {
        tenantId,
        ref: data.ref,
        description: data.description,
        amount: debitSum,
        message: `General Ledger Posted: Journal Entry ${data.ref} for $${debitSum.toFixed(2)} has been successfully balanced and recorded.`,
      });

      return newEntry;

    } catch (error: any) {
      // Abort and rollback if any step throws an error
      logger.error(`❌ Journal posting transaction rolled back. Error: ${error.message}`);
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }
}
export default AccountingEngine;
