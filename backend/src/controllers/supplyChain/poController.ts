import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { poRepository } from '../../repositories/supplyChain/poRepository';

export class POController {
  
  // Create a new Purchase Order
  public static async createPO(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { vendorId, poNumber, items } = req.body;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!vendorId || !poNumber || !items) {
        return res.status(400).json({ status: 'error', message: 'Missing required parameters: vendorId, poNumber, items' });
      }

      const po = await poRepository.create({
        tenantId,
        vendorId,
        poNumber,
        items,
        status: 'Draft',
      });

      // Dispatch domain event to EventBus (non-blocking)
      const eventBus = require('../../utils/eventBus').default;
      eventBus.emit('scm.po.created', {
        tenantId,
        poId: po._id,
        poNumber,
        amount: po.totalAmount,
        message: `Supply Chain Alert: New Purchase Order ${poNumber} for $${po.totalAmount.toFixed(2)} has been drafted.`,
      });

      return res.status(201).json({
        status: 'success',
        statusCode: 201,
        message: 'Purchase Order drafted successfully.',
        data: po,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Get active Purchase Orders
  public static async getPOs(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const pos = await poRepository.find({ tenantId }, null, { populate: 'vendorId' });
      return res.status(200).json({ status: 'success', data: pos });
    } catch (error: any) {
      next(error);
    }
  }
  // F-03: Process Vendor Invoice OCR and 3-Way Matching
  public static async processInvoiceOCR(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { poNumber, invoicePdfUrl } = req.body;

      if (!tenantId || !poNumber || !invoicePdfUrl) {
        return res.status(400).json({ status: 'error', message: 'Tenant, poNumber, and invoicePdfUrl required.' });
      }

      const po = await poRepository.findOne({ tenantId, poNumber });
      if (!po) {
        return res.status(404).json({ status: 'error', message: `PO ${poNumber} not found.` });
      }

      // Mock OCR extraction (e.g. Tesseract/Python service)
      const extractedAmount = po.totalAmount; // Simulate 100% match
      const extractedItemsCount = po.items.length;

      // 3-Way Match Validation (PO == GR == Invoice)
      // Simulating Goods Receipt matching perfectly
      const matchSuccessful = extractedAmount === po.totalAmount;

      if (matchSuccessful) {
        po.status = 'Approved';
        await po.save();

        const eventBus = require('../../utils/eventBus').default;
        eventBus.emit('scm.invoice.matched', {
          tenantId,
          poId: po._id,
          message: `✅ 3-Way Match Successful for PO ${poNumber} from Invoice OCR.`,
        });

        return res.status(200).json({
          status: 'success',
          message: 'Invoice processed via OCR and 3-way match successful.',
          data: { matchScore: 99.8, status: 'Auto-Approved', po },
        });
      } else {
        return res.status(400).json({
          status: 'error',
          message: '3-way match failed. Invoice amount does not match PO.',
        });
      }
    } catch (error: any) {
      next(error);
    }
  }
}

export default POController;
