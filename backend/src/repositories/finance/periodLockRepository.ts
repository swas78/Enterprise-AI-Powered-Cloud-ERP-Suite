import { BaseRepository } from '../baseRepository';
import { PeriodLock, IPeriodLock } from '../../models/finance/PeriodLock';

export class PeriodLockRepository extends BaseRepository<IPeriodLock> {
  constructor() {
    super(PeriodLock);
  }
}

export const periodLockRepository = new PeriodLockRepository();
export default periodLockRepository;
