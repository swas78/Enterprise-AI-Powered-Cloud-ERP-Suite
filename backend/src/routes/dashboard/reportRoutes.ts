import { Router } from 'express';
import { ReportController } from '../../controllers/dashboard/reportController';
import { authGuard } from '../../middleware/auth.middleware';

const router = Router();

// Secure all report routes
router.use(authGuard);

router.get('/export/ledger', ReportController.exportLedger);

export default router;
