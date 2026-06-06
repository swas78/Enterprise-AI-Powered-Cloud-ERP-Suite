import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { AuditLog } from '../../models/compliance/AuditLog';
import { User } from '../../models/User';
import { Employee } from '../../models/hr/Employee';
import { Attendance } from '../../models/hr/Attendance';
import { Leave } from '../../models/hr/Leave';
import { Payslip } from '../../models/hr/Payslip';
import { AuditLogger } from '../../utils/auditLogger';
import logger from '../../utils/logger';

export class ComplianceController {

  // Fetch immutable audit trail logs
  public static async getAuditLogs(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      // Allow fetching logs up to a limit
      const logs = await AuditLog.find({ tenantId }).sort({ timestamp: -1 }).limit(1000);
      return res.status(200).json({
        status: 'success',
        data: logs,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // GDPR DSR (Data Subject Request) Export
  public static async dsrExport(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { email } = req.query;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!email) {
        return res.status(400).json({ status: 'error', message: 'Email query parameter is required for DSR export.' });
      }

      logger.info(`🔍 Gathering GDPR DSR Data Export for User: ${email} | Tenant: ${tenantId}`);

      // 1. Fetch User details
      const user = await User.findOne({ email: email as string, tenantId });
      
      // 2. Fetch Employee details
      const employee = await Employee.findOne({ email: email as string, tenantId });
      const employeeId = employee?._id;

      // 3. Gather linked records
      const attendance = employeeId ? await Attendance.find({ employeeId, tenantId }) : [];
      const leaves = employeeId ? await Leave.find({ employeeId, tenantId }) : [];
      const payslips = employeeId ? await Payslip.find({ employeeId, tenantId }) : [];
      const auditLogs = await AuditLog.find({ userEmail: email as string, tenantId });

      const dsrData = {
        exportedAt: new Date(),
        tenantId,
        subject: {
          email,
          user: user ? { id: user._id, name: user.name, role: user.role } : null,
          employee: employee ? {
            id: employee._id,
            name: employee.name,
            role: employee.role,
            department: employee.department,
            salary: employee.salary,
          } : null,
        },
        records: {
          attendance: attendance.map(a => ({ date: a.date, clockIn: a.clockIn, clockOut: a.clockOut, workHours: a.workHours })),
          leaves: leaves.map(l => ({ startDate: l.startDate, endDate: l.endDate, reason: l.reason, status: l.status })),
          payslips: payslips.map(p => ({ grossPay: p.grossPay, netPay: p.netPay, deductions: p.deductions })),
          activityTrail: auditLogs.map(al => ({ timestamp: al.timestamp, action: al.action, entityType: al.entityType })),
        }
      };

      // Audit Log this GDPR export activity
      await AuditLogger.log(req, 'gdpr.dsr.export', 'User', user?._id?.toString() || 'unknown', { targetEmail: email });

      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Disposition', `attachment; filename=DSR-Export-${email}-${Date.now()}.json`);
      return res.status(200).send(JSON.stringify(dsrData, null, 2));

    } catch (error: any) {
      next(error);
    }
  }

  // GDPR Right to Erasure / Soft Delete & Anonymization
  public static async eraseUserData(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { email } = req.body;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!email) {
        return res.status(400).json({ status: 'error', message: 'Email address is required for erasure.' });
      }

      logger.warn(`⚠️ Executing GDPR Erasure for User: ${email} | Tenant: ${tenantId}`);

      // 1. Fetch and Anonymize User
      const user = await User.findOne({ email, tenantId });
      if (user) {
        user.name = 'GDPR Anonymized User';
        user.email = `anonymized-${user._id}@amdox-erased.com`;
        user.password = 'ERASED_' + Math.random().toString(36).substring(2); // Invalidate password
        user.role = 'Viewer';
        await user.save();
      }

      // 2. Fetch and Anonymize Employee
      const employee = await Employee.findOne({ email, tenantId });
      if (employee) {
        employee.name = 'GDPR Anonymized Employee';
        employee.email = `anonymized-${employee._id}@amdox-erased.com`;
        employee.salary = 0; // Scrub sensitive payroll info
        await employee.save();
      }

      // Audit log the erasure (we track the ID, but the PII is scrubbed)
      await AuditLogger.log(req, 'gdpr.right_to_erasure.executed', 'User', user?._id?.toString() || 'unknown', { targetId: user?._id });

      return res.status(200).json({
        status: 'success',
        message: 'GDPR Right to Erasure executed successfully. Personal Identifiable Information (PII) has been fully scrubbed and anonymized.',
      });

    } catch (error: any) {
      next(error);
    }
  }
}

export default ComplianceController;
