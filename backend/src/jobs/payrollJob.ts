import { Queue, Worker, Job } from 'bullmq';
import { redisClient } from '../config/redis';
import { payrollRepository } from '../repositories/hr/payrollRepository';
import { payslipRepository } from '../repositories/hr/payslipRepository';
import { employeeRepository } from '../repositories/hr/employeeRepository';
import { PayrollEngine } from '../services/hr/payrollEngine';
import { PdfGenerator } from '../utils/pdfGenerator';
import logger from '../utils/logger';

const QUEUE_NAME = 'payroll-runs';

// Create BullMQ Queue
export const payrollQueue = new Queue(QUEUE_NAME, {
  connection: redisClient as any,
  defaultJobOptions: {
    attempts: 3, // Auto-retry up to 3 times on failure
    backoff: {
      type: 'exponential',
      delay: 5000, // Wait 5s before retrying
    },
  },
});

// Create and configure BullMQ Worker processor
export const startPayrollWorker = () => {
  const worker = new Worker(
    QUEUE_NAME,
    async (job: Job) => {
      const { tenantId, payrollId, startDate, endDate, employeeIds } = job.data;
      logger.info(`👷 BullMQ worker processing payroll job: ${job.id} | Batch Run: ${payrollId}`);

      // 1. Find the active Payroll document
      const payroll = await payrollRepository.findById(payrollId);
      if (!payroll) {
        throw new Error(`Payroll batch document not found: ID ${payrollId}`);
      }

      payroll.status = 'Processing';
      await payroll.save();

      let accumGross = 0;
      let accumDeductions = 0;
      let accumNet = 0;

      // 2. Process gross-to-net math for each employee
      for (const empId of employeeIds) {
        try {
          const employee = await employeeRepository.findOne({ _id: empId, tenantId });
          if (!employee) {
            logger.error(`Employee not found: ID ${empId} under tenant ${tenantId}`);
            continue;
          }

          // Compute salary details
          const result = await PayrollEngine.calculateEmployeeSalary(
            tenantId,
            employee,
            new Date(startDate),
            new Date(endDate)
          );

          // Generate mock PDF payslip
          const pdfUrl = await PdfGenerator.generatePayslipPdf({
            tenantId,
            employeeName: employee.name,
            employeeEmail: employee.email,
            department: employee.department,
            role: employee.role,
            batchNumber: payroll.batchNumber,
            grossPay: result.grossPay,
            deductions: result.deductions,
            taxAmount: result.taxAmount,
            netPay: result.netPay,
          });

          // Create dynamic Payslip document
          await payslipRepository.create({
            tenantId,
            payrollId: payroll._id,
            employeeId: employee._id,
            grossPay: result.grossPay,
            deductions: result.deductions,
            taxAmount: result.taxAmount,
            netPay: result.netPay,
            pdfUrl,
          });

          accumGross += result.grossPay;
          accumDeductions += result.deductions;
          accumNet += result.netPay;

        } catch (err: any) {
          logger.error(`❌ Failed to process payroll line item for Employee ID ${empId}: ${err.message}`);
          // Continue processing other lines rather than crashing the whole batch
        }
      }

      // 3. Mark batch as Completed and update summaries
      payroll.status = 'Completed';
      payroll.processedDate = new Date();
      payroll.totalGross = Number(accumGross.toFixed(2));
      payroll.totalDeductions = Number(accumDeductions.toFixed(2));
      payroll.totalNet = Number(accumNet.toFixed(2));

      await payroll.save();
      logger.info(`🎉 Completed payroll batch execution run: ${payroll.batchNumber} | Total Net Paid: $${payroll.totalNet}`);

      // Dispatch domain event to EventBus (non-blocking)
      const eventBus = require('../utils/eventBus').default;
      eventBus.emit('hr.payroll.completed', {
        tenantId,
        payrollId: payroll._id,
        batchNumber: payroll.batchNumber,
        amount: payroll.totalNet,
        message: `HR Payroll Completed: Batch ${payroll.batchNumber} processed successfully. Total net paid: $${payroll.totalNet.toLocaleString()}.`,
      });
    },
    {
      connection: redisClient as any,
    }
  );

  worker.on('failed', async (job, err) => {
    logger.error(`❌ BullMQ Payroll Job failed! Job ID: ${job?.id}. Error: ${err.message}`);
    if (job?.data?.payrollId) {
      // Mark payroll document status as Failed
      await payrollRepository.update(
        { _id: job.data.payrollId },
        { $set: { status: 'Failed' } }
      );
    }
  });

  logger.info('🚀 BullMQ Payroll Worker started and listening for jobs.');
};
export default startPayrollWorker;
