import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { HrService } from '../../services/hr/hrService';
import { attendanceRepository } from '../../repositories/hr/attendanceRepository';

export class AttendanceController {
  
  // Get all attendance records
  public static async getAttendance(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const records = await attendanceRepository.find({ tenantId });
      return res.status(200).json({ status: 'success', data: records });
    } catch (error) {
      next(error);
    }
  }
  
  // Clock-in daily timesheet
  public static async clockIn(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { employeeId } = req.body;

      if (!tenantId || !employeeId) {
        return res.status(400).json({ status: 'error', message: 'Tenant or employee context is missing.' });
      }

      const attendance = await HrService.clockIn(tenantId, employeeId);
      return res.status(201).json({
        status: 'success',
        message: 'Clock-In punch registered successfully.',
        data: attendance,
      });
    } catch (error) {
      next(error);
    }
  }

  // Clock-out daily timesheet
  public static async clockOut(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { employeeId } = req.body;

      if (!tenantId || !employeeId) {
        return res.status(400).json({ status: 'error', message: 'Tenant or employee context is missing.' });
      }

      const attendance = await HrService.clockOut(tenantId, employeeId);
      return res.status(200).json({
        status: 'success',
        message: 'Clock-Out punch registered. Timesheet updated.',
        data: attendance,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default AttendanceController;
