import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { goodsReceiptRepository } from '../../repositories/supplyChain/goodsReceiptRepository';
import { poRepository } from '../../repositories/supplyChain/poRepository';
import { InventoryService } from '../../services/supplyChain/inventoryService';
import { ReorderService } from '../../services/supplyChain/reorderService';

import { inventoryRepository } from '../../repositories/supplyChain/inventoryRepository';

export class InventoryController {
  
  // Get all inventory
  public static async getInventory(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const inventory = await inventoryRepository.find({ tenantId });
      return res.status(200).json({ status: 'success', data: inventory });
    } catch (error: any) {
      next(error);
    }
  }

  // Register Goods Receipt warehouse verification
  public static async receiveGoodsReceipt(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { poId, grNumber, receivedItems } = req.body;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!poId || !grNumber || !receivedItems) {
        return res.status(400).json({ status: 'error', message: 'Missing required parameters: poId, grNumber, receivedItems' });
      }

      // 1. Create Goods Receipt
      const gr = await goodsReceiptRepository.create({
        tenantId,
        poId,
        grNumber,
        receivedItems,
        status: 'Pending',
      });

      // 2. Process stock calculations and AVCO updates
      const result = await InventoryService.receiveGoods(tenantId, gr._id.toString());

      // 3. Auto-update PO status to Received
      await poRepository.update({ _id: poId, tenantId }, { $set: { status: 'Received' } });

      return res.status(201).json({
        status: 'success',
        statusCode: 201,
        message: 'Goods Receipt verified. Stock values adjusted.',
        data: result,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Trigger manual run of the safety reorder daemon
  public static async triggerReorderScan(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const result = await ReorderService.executeAutoReorder(tenantId);

      return res.status(200).json({
        status: 'success',
        message: 'Auto-Reorder safety checks concluded.',
        data: result,
      });
    } catch (error: any) {
      next(error);
    }
  }
}

export default InventoryController;
