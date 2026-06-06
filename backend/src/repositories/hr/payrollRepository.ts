import { BaseRepository } from '../baseRepository';
import { Payroll, IPayroll } from '../../models/hr/Payroll';

export class PayrollRepository extends BaseRepository<IPayroll> {
  constructor() {
    super(Payroll);
  }
}

export const payrollRepository = new PayrollRepository();
export default payrollRepository;
