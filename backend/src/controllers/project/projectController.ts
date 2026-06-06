import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { projectRepository } from '../../repositories/project/projectRepository';

export class ProjectController {
  
  // Register a new Project
  public static async createProject(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { name, description, budget, startDate, endDate } = req.body;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!name || budget === undefined) {
        return res.status(400).json({ status: 'error', message: 'Missing parameters: name, budget' });
      }

      const project = await projectRepository.create({
        tenantId,
        name,
        description,
        budget,
        startDate,
        endDate,
      });

      return res.status(201).json({
        status: 'success',
        statusCode: 201,
        message: 'Project registered successfully.',
        data: project,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Get active Projects
  public static async getProjects(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const projects = await projectRepository.find({ tenantId });
      return res.status(200).json({ status: 'success', data: projects });
    } catch (error: any) {
      next(error);
    }
  }
}

export default ProjectController;
