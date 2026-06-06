import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { taskRepository } from '../../repositories/project/taskRepository';
import { ProjectService } from '../../services/project/projectService';

export class TaskController {
  
  // Create a new Project Task
  public static async createTask(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { projectId, name, assignedTo, status, startDay, durationDays } = req.body;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!projectId || !name) {
        return res.status(400).json({ status: 'error', message: 'Missing parameters: projectId, name' });
      }

      const task = await taskRepository.create({
        tenantId,
        projectId,
        name,
        assignedTo: assignedTo || null,
        status: status || 'To Do',
        startDay: startDay || 1,
        durationDays: durationDays || 3,
      });

      return res.status(201).json({
        status: 'success',
        statusCode: 201,
        message: 'Project Task created successfully.',
        data: task,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Map task dependencies with DAG loop validation checks
  public static async updateTaskDependencies(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { taskId } = req.params;
      const { dependencies } = req.body;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!dependencies || !Array.isArray(dependencies)) {
        return res.status(400).json({ status: 'error', message: 'Please provide a valid array of predecessor dependencies.' });
      }

      const updatedTask = await ProjectService.updateTaskDependencies(tenantId, taskId, dependencies);

      return res.status(200).json({
        status: 'success',
        message: 'Task dependencies updated successfully. DAG validated.',
        data: updatedTask,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Retrieve tasks for a specific project
  public static async getProjectTasks(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { projectId } = req.params;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!projectId) {
        return res.status(400).json({ status: 'error', message: 'projectId parameter is required.' });
      }

      const tasks = await taskRepository.find({ tenantId, projectId }, null, { populate: 'assignedTo' });
      return res.status(200).json({ status: 'success', data: tasks });
    } catch (error: any) {
      next(error);
    }
  }
}

export default TaskController;
