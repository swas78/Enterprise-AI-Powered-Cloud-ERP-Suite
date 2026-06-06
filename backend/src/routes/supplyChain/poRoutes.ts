import { Router } from 'express';
import { POController } from '../../controllers/supplyChain/poController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';
import inventoryRoutes from './inventoryRoutes';

const router = Router();

// Secure all Purchase Order routes
router.use(authGuard);

router.get('/', POController.getPOs);

// Enforce that only Manager and above can draft POs
router.post('/', roleGuard(['SuperAdmin', 'TenantAdmin', 'Manager']), POController.createPO);

router.post('/invoice-ocr', POController.processInvoiceOCR);

// Mount SCM sub-route modules
router.use('/', inventoryRoutes);

export default router;
