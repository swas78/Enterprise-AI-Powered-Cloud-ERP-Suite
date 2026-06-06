import { Router } from 'express';
import { InventoryController } from '../../controllers/supplyChain/inventoryController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';

const router = Router();

// Secure all inventory endpoints
router.use(authGuard);

// Get all inventory
router.get('/', InventoryController.getInventory);

// Enforce that only Manager and above can receive goods or trigger reorder scans
router.post('/receive', roleGuard(['SuperAdmin', 'TenantAdmin', 'Manager']), InventoryController.receiveGoodsReceipt);
router.post('/reorder-scan', roleGuard(['SuperAdmin', 'TenantAdmin', 'Manager']), InventoryController.triggerReorderScan);

export default router;
