import { Router } from 'express';
import { ComplianceController } from '../../controllers/compliance/complianceController';
import { DsrController } from '../../controllers/compliance/dsrController';
import { roleGuard } from '../../middleware/auth.middleware';

const router = Router();

// DSR Endpoints (Users can submit, Admins can process)
router.post('/dsr', DsrController.submitDSR);
router.post('/dsr/process', roleGuard(['TenantAdmin', 'SuperAdmin']), DsrController.processDSR);

router.use(roleGuard(['TenantAdmin', 'ComplianceOfficer']));

router.get('/audit-logs', ComplianceController.getAuditLogs);

export default router;
