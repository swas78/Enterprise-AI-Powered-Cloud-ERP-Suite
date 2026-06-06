import { Router } from 'express';
import { ArController } from '../../controllers/finance/arController';
import { authGuard } from '../../middleware/auth.middleware';

const router = Router();

// Secure all Accounts Receivable endpoints
router.use(authGuard);

router.get('/aging', ArController.getAgingReport);

export default router;
