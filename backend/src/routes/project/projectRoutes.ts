import { Router } from 'express';
import { ProjectController } from '../../controllers/project/projectController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';
import { validateSchema } from '../../middleware/validation.middleware';
import { projectSchema } from '../../validators/project.validator';
import taskRoutes from './taskRoutes';
import resourceRoutes from './resourceRoutes';
import budgetRoutes from './budgetRoutes';

const router = Router();

// Secure all project endpoints
router.use(authGuard);

// Project CRUD / list
router.get('/', ProjectController.getProjects);
router.post('/', roleGuard(['SuperAdmin', 'TenantAdmin', 'Manager']), validateSchema(projectSchema), ProjectController.createProject);

// Delegate sub-routing concern to sub-routers
router.use('/', taskRoutes);
router.use('/', resourceRoutes);
router.use('/', budgetRoutes);

export default router;
