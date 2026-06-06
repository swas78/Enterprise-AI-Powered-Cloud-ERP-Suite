import { Router } from 'express';
import { BudgetController } from '../../controllers/project/budgetController';
import { authGuard } from '../../middleware/auth.middleware';

const router = Router();

// Secure all budget routes
router.use(authGuard);

// Budget alarms and variance
router.get('/:id/variance', BudgetController.getBudgetVariance);

export default router;
