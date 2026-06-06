import React, { useState } from 'react';
import EmployeeList from '../../components/HR/EmployeeList';
import EmployeeForm from '../../components/HR/EmployeeForm';
import LeaveManagement from '../../components/HR/LeaveManagement';
import AttendanceTracker from '../../components/HR/AttendanceTracker';
import OrganisationChart from '../../components/HR/OrganisationChart';
import PayrollDashboard from '../../components/HR/PayrollDashboard';

export const Employees: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'add' | 'leaves' | 'attendance' | 'org' | 'payroll'>('list');

  return (
    <div className="space-y-6">
      <header className="pb-4 border-b border-[var(--glass-border)]">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">HR Core & Payroll Engine</h1>
        <p className="text-[var(--text-secondary)] mt-1 font-medium">Lifecycle rosters, statutory compliance adjustments, and async batch payslips.</p>
      </header>

      {/* Navigation Sub-Tabs */}
      <div className="flex gap-2 border-b border-[var(--glass-border)] pb-2 overflow-x-auto">
        {[
          { id: 'list', label: 'Employee Roster' },
          { id: 'add', label: 'Add Employee' },
          { id: 'leaves', label: 'Leave management' },
          { id: 'attendance', label: 'Attendance tracker' },
          { id: 'org', label: 'Organisation Chart' },
          { id: 'payroll', label: 'Payroll batches' }
        ].map(sub => (
          <button
            key={sub.id}
            onClick={() => setActiveTab(sub.id as any)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
              activeTab === sub.id
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                : 'text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            {sub.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === 'list' && <EmployeeList />}
        {activeTab === 'add' && <EmployeeForm />}
        {activeTab === 'leaves' && <LeaveManagement />}
        {activeTab === 'attendance' && <AttendanceTracker />}
        {activeTab === 'org' && <OrganisationChart />}
        {activeTab === 'payroll' && <PayrollDashboard />}
      </div>
    </div>
  );
};

export default Employees;
