import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { ApService } from '../../services/finance/apService';
import { invoiceRepository } from '../../repositories/finance/invoiceRepository';

export class ApController {
  
  // Get all AP invoices
  public static async getInvoices(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const invoices = await invoiceRepository.find({ tenantId, type: 'AP' });
      return res.status(200).json({ status: 'success', data: invoices });
    } catch (error: any) {
      next(error);
    }
  }

  // Process incoming invoice and execute 3-way match checks
  public static async processInvoice(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { invoiceNumber, supplierName, dueDate, poId, grId, items } = req.body;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!invoiceNumber || !supplierName || !dueDate || !poId || !grId || !items) {
        return res.status(400).json({
          status: 'error',
          message: 'Missing required parameters: invoiceNumber, supplierName, dueDate, poId, grId, items',
        });
      }

      const result = await ApService.processApInvoice(tenantId, {
        invoiceNumber,
        supplierName,
        dueDate: new Date(dueDate),
        poId,
        grId,
        items,
      });

      return res.status(201).json({
        status: 'success',
        statusCode: 201,
        message: 'AP Invoice processed successfully.',
        data: result,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Trigger payments run across multiple AP invoices
  public static async runPayments(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { invoiceIds } = req.body;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!invoiceIds || !Array.isArray(invoiceIds)) {
        return res.status(400).json({
          status: 'error',
          message: 'Please provide an array of invoiceIds to pay.',
        });
      }

      const result = await ApService.executePaymentRun(tenantId, invoiceIds);

      return res.status(200).json({
        status: 'success',
        message: 'Payment run completed successfully.',
        data: result,
      });
    } catch (error: any) {
      next(error);
    }
  }
}
export default ApController;
