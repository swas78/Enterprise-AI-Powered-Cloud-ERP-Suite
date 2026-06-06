import mongoose from 'mongoose';
import { employeeRepository } from '../../repositories/hr/employeeRepository';
import { leaveRepository } from '../../repositories/hr/leaveRepository';
import { attendanceRepository } from '../../repositories/hr/attendanceRepository';
import logger from '../../utils/logger';

export class HrService {
  
  // Create employee record
  public static async createEmployee(tenantId: string, data: any) {
    logger.info(`👤 Creating new employee record: ${data.name} | Tenant: ${tenantId}`);
    
    // Prevent duplicate emails
    const existing = await employeeRepository.findOne({ tenantId, email: data.email });
    if (existing) {
      throw new Error(`Employee with email [${data.email}] already registered.`);
    }

    const employee = await employeeRepository.create({
      tenantId,
      ...data
    });
    return employee;
  }

  // Update employee record
  public static async updateEmployee(tenantId: string, employeeId: string, updates: any) {
    logger.info(`👤 Updating employee profile: ${employeeId} | Tenant: ${tenantId}`);
    
    const employee = await employeeRepository.update(
      { _id: employeeId, tenantId },
      { $set: updates },
      { new: true }
    );
    
    if (!employee) {
      throw new Error('Employee record not found.');
    }
    return employee;
  }

  // Compile hierarchical corporate structure recursively (Org Chart aggregation)
  public static async getOrgChart(tenantId: string) {
    logger.info(`🌳 Compiling corporate hierarchy chart | Tenant: ${tenantId}`);

    // Fetch the root nodes (usually managerId is null, e.g., CEO, Founders)
    const roots = await employeeRepository.find({ tenantId, managerId: null });
    
    // Simple helper function to recursively build report structures
    const buildHierarchy = async (employee: any): Promise<any> => {
      const reports = await employeeRepository.find({ tenantId, managerId: employee._id }, null, { lean: true });
      const reportsTree = [];
      
      for (const report of reports as any[]) {
        const fullReport = await buildHierarchy(report);
        reportsTree.push(fullReport);
      }

      return {
        id: employee._id,
        name: employee.name,
        email: employee.email,
        department: employee.department,
        role: employee.role,
        status: employee.status,
        reports: reportsTree,
      };
    };

    const tree = [];
    for (const root of roots) {
      const node = await buildHierarchy(root.toObject());
      tree.push(node);
    }

    return tree;
  }

  // List all employees for a tenant
  public static async getEmployees(tenantId: string) {
    logger.info(`👤 Fetching flat employee records | Tenant: ${tenantId}`);
    return await employeeRepository.find({ tenantId });
  }

  // Request leave allocation
  public static async requestLeave(
    tenantId: string,
    data: { employeeId: string; type: string; startDate: Date; endDate: Date; reason?: string }
  ) {
    logger.info(`📅 Creating leave request for Employee: ${data.employeeId} | Tenant: ${tenantId}`);
    
    const leave = await leaveRepository.create({
      tenantId,
      employeeId: data.employeeId,
      type: data.type,
      startDate: data.startDate,
      endDate: data.endDate,
      reason: data.reason,
      status: 'Pending',
    });
    
    return leave;
  }

  // Manager leaves approval pipeline
  public static async evaluateLeave(
    tenantId: string,
    leaveId: string,
    status: 'Approved' | 'Rejected',
    managerEmployeeId: string
  ) {
    logger.info(`📅 Leave evaluation | Leave ID: ${leaveId} | Status: ${status} | Manager: ${managerEmployeeId}`);

    const leave = await leaveRepository.findOne({ _id: leaveId, tenantId });
    if (!leave) {
      throw new Error('Leave request not found.');
    }

    leave.status = status;
    leave.approvedBy = managerEmployeeId as any;
    await leave.save();

    return leave;
  }

  // Daily punch card: Clock-In
  public static async clockIn(tenantId: string, employeeId: string) {
    logger.info(`⏰ Clock-In requested | Employee: ${employeeId} | Tenant: ${tenantId}`);

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    // Verify if already punched in today
    const existing = await attendanceRepository.findOne({ tenantId, employeeId, date: today });
    if (existing) {
      throw new Error('Employee already clocked-in for today.');
    }

    const attendance = await attendanceRepository.create({
      tenantId,
      employeeId,
      date: today,
      clockIn: new Date(),
    });

    return attendance;
  }

  // Daily punch card: Clock-Out
  public static async clockOut(tenantId: string, employeeId: string) {
    logger.info(`⏰ Clock-Out requested | Employee: ${employeeId} | Tenant: ${tenantId}`);

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const record = await attendanceRepository.findOne({ tenantId, employeeId, date: today });
    if (!record) {
      throw new Error('Punch Card Error: Active Clock-In record for today was not found.');
    }

    if (record.clockOut) {
      throw new Error('Employee has already clocked-out for today.');
    }

    record.clockOut = new Date();
    
    // Calculate total worked hours (decimal format)
    const diffMs = record.clockOut.getTime() - record.clockIn.getTime();
    const decimalHours = Number((diffMs / 3600000).toFixed(2));
    
    record.workHours = decimalHours;
    
    // Overtime registers beyond standard 8 hour day
    if (decimalHours > 8.0) {
      record.overtimeHours = Number((decimalHours - 8.0).toFixed(2));
    }

    await record.save();
    logger.info(`⏰ Clock-Out complete. Worked: ${record.workHours} hours. Overtime: ${record.overtimeHours} hours.`);
    return record;
  }
}

export default HrService;
