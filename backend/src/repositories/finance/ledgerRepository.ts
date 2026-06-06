import { BaseRepository } from '../baseRepository';
import { JournalEntry, IJournalEntry } from '../../models/finance/JournalEntry';

export class LedgerRepository extends BaseRepository<IJournalEntry> {
  constructor() {
    super(JournalEntry);
  }
}

export const ledgerRepository = new LedgerRepository();
export default ledgerRepository;
