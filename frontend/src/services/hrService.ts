import { apiFetch } from './api';
import { Employee, LeaveRequest } from '../types/hr';

export const hrService = {
  getEmployees: async (): Promise<Employee[]> => {
    const res = await apiFetch('/api/v1/hr/employees');
    if (!res.ok) throw new Error('Failed to fetch employees');
    const json = await res.json();
    return json.data;
  },

  getLeaves: async (): Promise<LeaveRequest[]> => {
    const res = await apiFetch('/api/v1/hr/leaves');
    if (!res.ok) throw new Error('Failed to fetch leaves');
    const json = await res.json();
    return json.data;
  },

  submitLeaveRequest: async (leave: Partial<LeaveRequest>): Promise<LeaveRequest> => {
    const res = await apiFetch('/api/v1/hr/leaves', {
      method: 'POST',
      body: JSON.stringify(leave),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to submit leave request');
    return json.data;
  },

  runPayroll: async (batchNumber: string, periodStart: string, periodEnd: string): Promise<any> => {
    const res = await apiFetch('/api/v1/hr/payroll/run', {
      method: 'POST',
      body: JSON.stringify({ batchNumber, startDate: periodStart, endDate: periodEnd }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to run payroll');
    return json.data;
  },

  getPayrollRuns: async (): Promise<any[]> => {
    const res = await apiFetch('/api/v1/hr/payroll/history');
    if (!res.ok) throw new Error('Failed to fetch payroll runs');
    const json = await res.json();
    return json.data;
  },

  getAttendance: async (): Promise<any[]> => {
    const res = await apiFetch('/api/v1/hr/attendance');
    if (!res.ok) throw new Error('Failed to fetch attendance records');
    const json = await res.json();
    return json.data;
  },

  clockIn: async (employeeId: string): Promise<any> => {
    const res = await apiFetch('/api/v1/hr/attendance/clock-in', {
      method: 'POST',
      body: JSON.stringify({ employeeId }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to clock in');
    return json.data;
  },

  clockOut: async (employeeId: string): Promise<any> => {
    const res = await apiFetch('/api/v1/hr/attendance/clock-out', {
      method: 'POST',
      body: JSON.stringify({ employeeId }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to clock out');
    return json.data;
  },

  getOrgChart: async (): Promise<any> => {
    const res = await apiFetch('/api/v1/hr/organisation/org-chart');
    if (!res.ok) throw new Error('Failed to fetch org chart');
    const json = await res.json();
    return json.data;
  }
};

export default hrService;
