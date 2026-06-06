import { inventoryRepository } from '../../repositories/supplyChain/inventoryRepository';
import { poRepository } from '../../repositories/supplyChain/poRepository';
import { vendorRepository } from '../../repositories/supplyChain/vendorRepository';
import { emailQueue } from '../../jobs/emailJob';
import logger from '../../utils/logger';

export class ReorderService {
  
  // Scans SKU stocks and generates draft POs if levels drop below thresholds
  public static async executeAutoReorder(tenantId: string) {
    logger.info(`🔄 Running Auto-Reorder Scan daemon | Tenant: ${tenantId}`);

    // 1. Fetch SKUs that are at or below safety stock limits
    const lowStockItems = await inventoryRepository.find({
      tenantId,
      $expr: { $lte: ['$quantity', '$safetyStock'] },
    });

    if (lowStockItems.length === 0) {
      logger.info('🔄 Auto-Reorder complete. All SKU stock levels are above safety thresholds.');
      return { draftedCount: 0, actions: [] };
    }

    // 2. Fetch a default active Vendor to handle mock auto-draft allocations
    const defaultVendor = await vendorRepository.findOne({ tenantId, status: 'Active' });
    if (!defaultVendor) {
      logger.warn('⚠️ Auto-Reorder aborted. No active Vendor was found in database registries.');
      return { draftedCount: 0, actions: [], warning: 'No active vendor registered.' };
    }

    const actions = [];
    let draftedCount = 0;

    for (const item of lowStockItems) {
      const draftNumber = `PO-AUTO-${Date.now().toString().slice(-6)}-${item.sku.slice(-4)}`;
      
      // Calculate replenish quantity (e.g. triple safety stock target)
      const replenishQuantity = item.safetyStock * 3;
      // Mock contract price allocation
      const mockUnitPrice = 120.0; 

      logger.info(`🚨 SKU [${item.sku}] is low (Current: ${item.quantity} | Safety: ${item.safetyStock}). Drafting PO: ${draftNumber}`);

      // 3. Create Draft PO document
      const draftPo = await poRepository.create({
        tenantId,
        vendorId: defaultVendor._id,
        poNumber: draftNumber,
        items: [
          {
            sku: item.sku,
            description: `Replenish stock for SKU: ${item.description}`,
            quantity: replenishQuantity,
            unitPrice: mockUnitPrice,
          },
        ],
        status: 'Draft',
      });

      draftedCount++;
      actions.push({ sku: item.sku, poNumber: draftNumber, quantity: replenishQuantity });

      // 4. Dispatch supplier email notification job to BullMQ
      await emailQueue.add(`po-dispatch-${draftNumber}`, {
        to: defaultVendor.email,
        subject: `Replenishment Order request: ${draftNumber}`,
        body: `Hello ${defaultVendor.name},\n\nOur inventory SKU [${item.sku}] has fallen below safety levels. A draft order ${draftNumber} has been created for ${replenishQuantity} units. Please review and confirm.`,
      });
    }

    logger.info(`🔄 Auto-Reorder complete. Drafted ${draftedCount} purchase orders.`);
    return { draftedCount, actions };
  }
}
export default ReorderService;
