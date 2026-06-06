import React, { useState } from 'react';

export const EmployeeForm: React.FC = () => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Roster update draft created for: ${name}`);
    setName('');
    setDepartment('');
    setRole('');
    setSalary('');
  };

  return (
    <div className="glass-panel p-6 space-y-4">
      <h3 className="text-xl font-bold text-white">Add New Employee</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2.5 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-sm text-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">Department</label>
          <input
            type="text"
            required
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full p-2.5 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-sm text-white"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">Role</label>
            <input
              type="text"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2.5 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-sm text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">Salary ($/yr)</label>
            <input
              type="number"
              required
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full p-2.5 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-sm text-white"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2.5 rounded-lg text-xs font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
        >
          Add Employee to Roster
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
