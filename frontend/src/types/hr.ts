export interface Employee {
  _id: string;
  tenantId: string;
  name: string;
  email: string;
  department: string;
  role: string;
  salary: number;
  managerId?: string | Employee;
}

export interface LeaveRequest {
  _id: string;
  employeeId: string | Employee;
  startDate: string;
  endDate: string;
  type?: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}
