import { Router } from 'express';
import { VendorController } from '../../controllers/supplyChain/vendorController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';

const router = Router();

// Secure all Vendor endpoints
router.use(authGuard);

router.get('/', VendorController.getVendors);
router.post('/', roleGuard(['SuperAdmin', 'TenantAdmin', 'Manager']), VendorController.createVendor);

export default router;
