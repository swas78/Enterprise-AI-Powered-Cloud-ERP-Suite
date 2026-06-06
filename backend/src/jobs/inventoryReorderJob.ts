import { Queue, Worker, Job } from 'bullmq';
import { redisClient } from '../config/redis';
import logger from '../utils/logger';
import { inventoryRepository } from '../repositories/supplyChain/inventoryRepository';
import { poRepository } from '../repositories/supplyChain/poRepository';
import { webhookQueue } from './webhookJob';

const QUEUE_NAME = 'inventory-reorder';

// Create BullMQ Queue for Reorder Scanning
export const inventoryReorderQueue = new Queue(QUEUE_NAME, {
  connection: redisClient as any,
  defaultJobOptions: {
    attempts: 3,
    backoff: { type: 'exponential', delay: 5000 },
  },
});

export const startInventoryReorderWorker = () => {
  const worker = new Worker(
    QUEUE_NAME,
    async (job: Job) => {
      logger.info(`📦 Running automatic inventory reorder scan... (Job ID: ${job.id})`);
      
      // Find all inventory items across all tenants where stock < reorderThreshold
      // In a real app we would paginate or run per-tenant to avoid memory issues
      const lowStockItems = await inventoryRepository.find({
        $expr: { $lt: ['$quantity', '$safetyStock'] }
      }, null, { populate: 'vendorId' });

      let draftedCount = 0;

      for (const item of lowStockItems) {
        if (!item.vendorId) {
          logger.warn(`Item ${item.sku} is low on stock but has no vendor assigned. Skipping.`);
          continue;
        }

        const tenantId = item.tenantId;
        
        // Calculate reorder quantity (e.g., refill up to 2x threshold)
        const reorderQty = Math.max((item.safetyStock * 2) - item.quantity, 10);
        
        // Draft a new PO
        const newPO = await poRepository.create({
          tenantId,
          poNumber: `PO-AUTO-${Date.now()}-${item.sku}`,
          vendorId: item.vendorId,
          status: 'Draft',
          totalAmount: reorderQty * (item.unitPrice || 10), // Fallback to 10 if price missing
          items: [{
            sku: item.sku,
            name: item.description,
            quantity: reorderQty,
            unitPrice: item.unitPrice || 10
          }]
        });

        draftedCount++;
        logger.info(`✅ Auto-Drafted PO ${newPO.poNumber} for SKU: ${item.sku}`);

        // F-05: Dispatch Webhook Notification to Vendor System
        await webhookQueue.add('vendor-po-notify', {
          tenantId,
          url: 'https://mock-vendor-api.com/webhooks/orders',
          secret: process.env.WEBHOOK_SECRET || 'test-secret',
          eventName: 'po.drafted.auto',
          payload: { poId: newPO._id, poNumber: newPO.poNumber, sku: item.sku, quantity: reorderQty }
        });
      }

      logger.info(`✅ Reorder scan complete. Drafted ${draftedCount} POs.`);
    },
    {
      connection: redisClient as any,
      concurrency: 1,
    }
  );

  worker.on('failed', (job, err) => {
    logger.error(`❌ Inventory Reorder Job failed: ${err.message}`);
  });

  logger.info('🚀 BullMQ Inventory Reorder Worker started.');
};
