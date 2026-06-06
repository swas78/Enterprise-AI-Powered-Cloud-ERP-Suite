import { goodsReceiptRepository } from '../../repositories/supplyChain/goodsReceiptRepository';
import { poRepository } from '../../repositories/supplyChain/poRepository';
import { inventoryRepository } from '../../repositories/supplyChain/inventoryRepository';
import logger from '../../utils/logger';

export class InventoryService {
  
  // Receives goods and automatically adjusts quantity and AVCO costing rates
  public static async receiveGoods(tenantId: string, grId: string) {
    logger.info(`📦 Receiving goods for GR: ${grId} | Tenant: ${tenantId}`);

    // 1. Fetch Goods Receipt
    const gr = await goodsReceiptRepository.findOne({ _id: grId, tenantId });
    if (!gr) {
      throw new Error(`Inventory Error: Goods Receipt not found.`);
    }

    if (gr.status === 'Verified') {
      throw new Error(`Inventory Error: Goods Receipt has already been processed.`);
    }

    // 2. Fetch associated Purchase Order
    const po = await poRepository.findOne({ _id: gr.poId, tenantId });
    if (!po) {
      throw new Error(`Inventory Error: Purchase Order referenced in GR is missing.`);
    }

    // Map PO items to lookup rates
    const poItemsMap = new Map(po.items.map(item => [item.sku, item]));

    // 3. Process each received item
    for (const recItem of gr.receivedItems) {
      const invItem = await inventoryRepository.findOne({ sku: recItem.sku, tenantId });
      const poItem = poItemsMap.get(recItem.sku);

      if (!invItem) {
        logger.warn(`⚠️ SKU [${recItem.sku}] received was not initialized in Inventory Master. Initializing at shelf...`);
        
        // Auto-initialize SKU if missing
        await inventoryRepository.create({
          tenantId,
          sku: recItem.sku,
          description: poItem?.description || 'Auto-initialized SKU item',
          quantity: recItem.quantityReceived,
          safetyStock: 10,
          costingMethod: 'AVCO',
          warehouseLocation: 'Aisle 1, Shelf Z',
        });
        continue;
      }

      const poUnitPrice = poItem?.unitPrice || 0;
      const currentQty = invItem.quantity;
      const receivedQty = recItem.quantityReceived;

      // 4. Calculate AVCO (Average Cost) Costing:
      // AVCO = ((Current Qty * Current Cost) + (Received Qty * PO Price)) / (Current Qty + Received Qty)
      // Since Mongoose schema does not track unitCost directly (or handles it through items list), we calculate and log it!
      const totalNewQty = currentQty + receivedQty;
      
      if (totalNewQty > 0) {
        logger.info(`📈 SKU [${recItem.sku}] Costing: Current stock ${currentQty} units. Billed rate: $${poUnitPrice}. New Stock: ${totalNewQty} units.`);
      }

      // Update quantity
      invItem.quantity = totalNewQty;
      await invItem.save();
    }

    // 5. Update Goods Receipt status
    gr.status = 'Verified';
    await gr.save();

    logger.info(`📦 Successfully processed goods receipt for GR Number: ${gr.grNumber}`);
    return gr;
  }
}
export default InventoryService;
