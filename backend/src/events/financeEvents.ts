import { eventEmitter } from './eventEmitter';

export class FinanceEvents {
  public static emitJournalEntryPosted(payload: {
    tenantId: string;
    ref: string;
    description: string;
    amount: number;
    message: string;
  }) {
    eventEmitter.emit('finance.journal_entry.posted', payload);
  }
}

export default FinanceEvents;
