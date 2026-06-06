import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { HrService } from '../../services/hr/hrService';
import { leaveRepository } from '../../repositories/hr/leaveRepository';

export class LeaveController {
  
  // Get all leaves
  public static async getLeaves(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const leaves = await leaveRepository.find({ tenantId });
      return res.status(200).json({ status: 'success', data: leaves });
    } catch (error: any) {
      next(error);
    }
  }
  
  // Submit a leave request
  public static async requestLeave(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { employeeId, type, startDate, endDate, reason } = req.body;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!employeeId || !type || !startDate || !endDate) {
        return res.status(400).json({ status: 'error', message: 'Missing leave fields.' });
      }

      const leave = await HrService.requestLeave(tenantId, {
        employeeId,
        type,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        reason,
      });

      return res.status(201).json({
        status: 'success',
        data: leave,
      });
    } catch (error) {
      next(error);
    }
  }

  // Approve/reject a leave request
  public static async evaluateLeave(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { leaveId, status, managerEmployeeId } = req.body;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!leaveId || !status || !managerEmployeeId) {
        return res.status(400).json({ status: 'error', message: 'Missing evaluation fields.' });
      }

      const leave = await HrService.evaluateLeave(tenantId, leaveId, status, managerEmployeeId);

      return res.status(200).json({
        status: 'success',
        data: leave,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default LeaveController;
