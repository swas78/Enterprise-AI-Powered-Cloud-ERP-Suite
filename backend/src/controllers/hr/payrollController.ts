import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { PayrollService } from '../../services/hr/payrollService';

export class PayrollController {
  
  // Launch a new batch payroll run asynchronously
  public static async runPayroll(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { batchNumber, startDate, endDate } = req.body;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!batchNumber || !startDate || !endDate) {
        return res.status(400).json({
          status: 'error',
          message: 'Missing required parameters: batchNumber, startDate, endDate',
        });
      }

      const result = await PayrollService.initiatePayrollRun(tenantId, {
        batchNumber,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      });

      return res.status(202).json({
        status: 'success',
        statusCode: 202,
        message: 'Payroll batch run initiated asynchronously.',
        data: result,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Get historical payroll batches
  public static async getHistory(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const history = await PayrollService.getPayrollHistory(tenantId);

      return res.status(200).json({
        status: 'success',
        data: history,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Get individual payslips inside a specific batch run
  public static async getBatchPayslips(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { id } = req.params; // Payroll Batch ID

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const payslips = await PayrollService.getPayslipsForBatch(tenantId, id);

      return res.status(200).json({
        status: 'success',
        data: payslips,
      });
    } catch (error: any) {
      next(error);
    }
  }
}
export default PayrollController;
