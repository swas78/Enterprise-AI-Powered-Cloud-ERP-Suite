export type EmploymentType = 'full_time' | 'part_time' | 'contract' | 'intern';
export type EmployeeStatus = 'active' | 'inactive' | 'terminated' | 'on_leave';
export type LeaveType = 'annual' | 'sick' | 'maternity' | 'paternity' | 'unpaid' | 'emergency';
export type LeaveStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';
export type PayFrequency = 'monthly' | 'bi_monthly' | 'weekly' | 'bi_weekly';
export type AttendanceStatus = 'present' | 'absent' | 'late' | 'half_day' | 'holiday' | 'weekend';

export interface CreateEmployeeDTO {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  departmentId: string;
  designationId?: string;
  managerId?: string;
  employmentType: EmploymentType;
  startDate: Date;
  salary: number;
  currency?: string;
  tenantId: string;
}

export interface UpdateEmployeeDTO extends Partial<CreateEmployeeDTO> {
  status?: EmployeeStatus;
}

export interface CreateLeaveRequestDTO {
  employeeId: string;
  leaveType: LeaveType;
  startDate: Date;
  endDate: Date;
  reason: string;
  tenantId: string;
}

export interface ApproveLeaveDTO {
  leaveId: string;
  approverId: string;
  status: 'approved' | 'rejected';
  remarks?: string;
}

export interface MarkAttendanceDTO {
  employeeId: string;
  date: Date;
  checkIn?: Date;
  checkOut?: Date;
  status: AttendanceStatus;
  notes?: string;
  tenantId: string;
}

export interface RunPayrollDTO {
  tenantId: string;
  month: number;
  year: number;
  employeeIds?: string[];
  createdBy: string;
}

export interface PayrollCalculation {
  employeeId: string;
  basicSalary: number;
  allowances: number;
  deductions: number;
  tax: number;
  netPay: number;
  currency: string;
}

export interface Department {
  _id: string;
  name: string;
  parentId?: string;
  managerId?: string;
  tenantId: string;
}

export interface Designation {
  _id: string;
  title: string;
  departmentId: string;
  tenantId: string;
}
