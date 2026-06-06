import { Router } from 'express';
import { TenantController } from '../controllers/tenantController';
import { authGuard, roleGuard } from '../middleware/auth.middleware';

const router = Router();

// Secure all endpoints under authGuard
router.use(authGuard);

// Tenant context retrieval/update (TenantAdmin or SuperAdmin)
router.get('/info', roleGuard(['SuperAdmin', 'TenantAdmin']), TenantController.getTenantDetails);
router.put('/info', roleGuard(['SuperAdmin', 'TenantAdmin']), TenantController.updateTenant);

// SuperAdmin operations
router.get('/', roleGuard(['SuperAdmin']), TenantController.getTenants);
router.put('/:id/suspend', roleGuard(['SuperAdmin']), TenantController.suspendTenant);
router.put('/:id', roleGuard(['SuperAdmin']), TenantController.updateTenant);

export default router;
