import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { HrService } from '../../services/hr/hrService';

export class EmployeeController {
  
  // Register a new employee profile
  public static async createEmployee(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const employee = await HrService.createEmployee(tenantId, req.body);
      
      return res.status(201).json({
        status: 'success',
        statusCode: 201,
        message: 'Employee record created successfully.',
        data: employee,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Update an employee profile
  public static async updateEmployee(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { id } = req.params;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const updated = await HrService.updateEmployee(tenantId, id, req.body);

      return res.status(200).json({
        status: 'success',
        message: 'Employee record updated successfully.',
        data: updated,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Retrieve flat employee list
  public static async getEmployees(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const employees = await HrService.getEmployees(tenantId);
      return res.status(200).json({ status: 'success', data: employees });
    } catch (error: any) {
      next(error);
    }
  }
}

export default EmployeeController;
