import { eventEmitter } from './eventEmitter';

export class HrEvents {
  public static emitPayrollCompleted(payload: {
    tenantId: string;
    payrollId: string;
    period: string;
    totalAmount: number;
    message: string;
  }) {
    eventEmitter.emit('hr.payroll.completed', payload);
  }
}

export default HrEvents;
