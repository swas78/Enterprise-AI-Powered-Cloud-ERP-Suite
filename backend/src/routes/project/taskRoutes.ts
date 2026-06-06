import { Router } from 'express';
import { TaskController } from '../../controllers/project/taskController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';
import { validateSchema } from '../../middleware/validation.middleware';
import { taskSchema } from '../../validators/project.validator';

const router = Router();

// Secure all task routes
router.use(authGuard);

// Task creation
router.post('/tasks', roleGuard(['SuperAdmin', 'TenantAdmin', 'Manager']), validateSchema(taskSchema), TaskController.createTask);

// Task dependencies updates (DAG validation is performed in controller/service)
router.post('/tasks/:taskId/dependencies', roleGuard(['SuperAdmin', 'TenantAdmin', 'Manager']), TaskController.updateTaskDependencies);

// Get tasks for a project
router.get('/:projectId/tasks', TaskController.getProjectTasks);

export default router;
