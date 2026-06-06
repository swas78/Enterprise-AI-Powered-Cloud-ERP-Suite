import { payrollRepository } from '../../repositories/hr/payrollRepository';
import { payslipRepository } from '../../repositories/hr/payslipRepository';
import { employeeRepository } from '../../repositories/hr/employeeRepository';
import { payrollQueue } from '../../jobs/payrollJob';
import logger from '../../utils/logger';

export class PayrollService {
  
  // Initiate batch run, creates schema record and dispatches BullMQ background tasks
  public static async initiatePayrollRun(
    tenantId: string,
    data: {
      batchNumber: string;
      startDate: Date;
      endDate: Date;
    }
  ) {
    logger.info(`💰 Initiating Payroll run batch: ${data.batchNumber} | Tenant: ${tenantId}`);

    // Prevent duplicate batches
    const existing = await payrollRepository.findOne({ tenantId, batchNumber: data.batchNumber });
    if (existing) {
      throw new Error(`Payroll batch [${data.batchNumber}] already processed or in progress.`);
    }

    // 1. Fetch all active employee IDs under tenant scope
    const employees = await employeeRepository.find({ tenantId, status: 'Active' });
    if (employees.length === 0) {
      throw new Error('Payroll Error: No active employees found to process.');
    }

    const employeeIds = employees.map(emp => emp._id.toString());

    // 2. Create the Draft Payroll record
    const payroll = await payrollRepository.create({
      tenantId,
      batchNumber: data.batchNumber,
      status: 'Draft',
    });

    // 3. Dispatch background job to Redis-backed BullMQ queue
    const job = await payrollQueue.add(`run-${payroll.batchNumber}`, {
      tenantId,
      payrollId: payroll._id.toString(),
      startDate: data.startDate,
      endDate: data.endDate,
      employeeIds,
    });

    logger.info(`💰 Dispatched BullMQ Job ID: ${job.id} for payroll batch: ${payroll.batchNumber}`);
    
    return {
      payroll,
      jobId: job.id,
      employeeCount: employeeIds.length,
    };
  }

  // Retrieve payroll runs history
  public static async getPayrollHistory(tenantId: string) {
    return payrollRepository.find({ tenantId }, null, { sort: { createdAt: -1 } });
  }

  // Retrieve payslips generated for a specific batch run
  public static async getPayslipsForBatch(tenantId: string, payrollId: string) {
    return payslipRepository.find({ tenantId, payrollId }, null, { populate: 'employeeId' });
  }
}
export default PayrollService;
