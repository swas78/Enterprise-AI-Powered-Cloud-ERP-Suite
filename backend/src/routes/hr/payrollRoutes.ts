import { Router } from 'express';
import { PayrollController } from '../../controllers/hr/payrollController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';

const router = Router();

// Secure all payroll endpoints
router.use(authGuard);

router.get('/history', PayrollController.getHistory);
router.get('/:id/payslips', PayrollController.getBatchPayslips);

// Enforce that only SuperAdmin or TenantAdmin can execute payroll runs
router.post('/run', roleGuard(['SuperAdmin', 'TenantAdmin']), PayrollController.runPayroll);

export default router;
