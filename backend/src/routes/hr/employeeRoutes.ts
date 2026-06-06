import { Router } from 'express';
import { EmployeeController } from '../../controllers/hr/employeeController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';
import leaveRoutes from './leaveRoutes';
import attendanceRoutes from './attendanceRoutes';
import organisationRoutes from './organisationRoutes';

const router = Router();

// Secure all employee endpoints
router.use(authGuard);

// Employee listing and profiles
router.get('/', EmployeeController.getEmployees);
router.post('/', roleGuard(['SuperAdmin', 'TenantAdmin']), EmployeeController.createEmployee);
router.put('/:id', roleGuard(['SuperAdmin', 'TenantAdmin', 'Manager']), EmployeeController.updateEmployee);

// Mount HR sub-route modules
router.use('/leaves', leaveRoutes);
router.use('/attendance', attendanceRoutes);
router.use('/', organisationRoutes);

export default router;
