import { BaseRepository } from '../baseRepository';
import { Payslip, IPayslip } from '../../models/hr/Payslip';

export class PayslipRepository extends BaseRepository<IPayslip> {
  constructor() {
    super(Payslip);
  }
}

export const payslipRepository = new PayslipRepository();
export default payslipRepository;
