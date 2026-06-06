import { BaseRepository } from '../baseRepository';
import { Leave, ILeave } from '../../models/hr/Leave';

export class LeaveRepository extends BaseRepository<ILeave> {
  constructor() {
    super(Leave);
  }
}

export const leaveRepository = new LeaveRepository();
export default leaveRepository;
