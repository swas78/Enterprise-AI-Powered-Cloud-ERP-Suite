import { Router } from 'express';
import { LedgerController } from '../../controllers/finance/ledgerController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';

const router = Router();

// Secure all general ledger endpoints
router.use(authGuard);

router.get('/accounts', LedgerController.getAccounts);
router.post('/accounts', roleGuard(['SuperAdmin', 'TenantAdmin', 'Manager']), LedgerController.createAccount);

router.get('/entries', LedgerController.getLedgerEntries);
router.post('/entries', roleGuard(['SuperAdmin', 'TenantAdmin', 'Manager']), LedgerController.postJournalEntry);

router.get('/period-lock', LedgerController.getPeriodLock);
router.post('/period-lock', roleGuard(['SuperAdmin', 'TenantAdmin']), LedgerController.lockPeriod);

export default router;
