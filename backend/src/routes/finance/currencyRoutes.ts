import { Router } from 'express';
import { CurrencyController } from '../../controllers/finance/currencyController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';

const router = Router();

// Secure all endpoints under authGuard
router.use(authGuard);

router.get('/rates', CurrencyController.getRates);
router.post('/convert', CurrencyController.convert);

// Admin-only endpoints to force sync
router.post('/sync', roleGuard(['SuperAdmin', 'TenantAdmin']), CurrencyController.syncRates);

export default router;
