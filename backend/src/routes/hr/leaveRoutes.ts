import { Router } from 'express';
import { LeaveController } from '../../controllers/hr/leaveController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';

const router = Router();

// Secure all leave endpoints
router.use(authGuard);

// Leave request & approval endpoints
router.get('/', LeaveController.getLeaves);
router.post('/request', LeaveController.requestLeave);
router.put('/:id/evaluate', roleGuard(['SuperAdmin', 'TenantAdmin', 'Manager']), LeaveController.evaluateLeave);

export default router;
