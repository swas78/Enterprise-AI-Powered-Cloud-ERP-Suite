import React, { useState, useEffect } from 'react';
import hrService from '../../services/hrService';
import { LeaveRequest, Employee } from '../../types/hr';

export const LeaveManagement: React.FC = () => {
  const [leaves, setLeaves] = useState<LeaveRequest[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Form State
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    employeeId: '',
    type: 'Annual',
    startDate: '',
    endDate: '',
    reason: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [leavesData, employeesData] = await Promise.all([
        hrService.getLeaves(),
        hrService.getEmployees()
      ]);
      setLeaves(leavesData);
      setEmployees(employeesData);
    } catch (err: any) {
      setError(err.message || 'Failed to load HR data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await hrService.submitLeaveRequest(formData);
      setShowForm(false);
      setFormData({
        employeeId: '',
        type: 'Annual',
        startDate: '',
        endDate: '',
        reason: ''
      });
      await fetchData();
    } catch (err: any) {
      setError(err.message || 'Failed to submit leave request');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getEmployeeName = (emp: string | Employee) => {
    if (typeof emp === 'string') {
      return employees.find(e => e._id === emp)?.name || 'Unknown';
    }
    return emp.name || 'Unknown';
  };

  return (
    <div className="flex flex-col gap-lg w-full">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-display text-[32px] font-extrabold text-on-surface">Leave Management</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage employee leave requests and balances.</p>
        </div>
        <div className="flex gap-sm">
          <button 
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-xs px-md h-10 bg-primary text-white font-semibold rounded hover:bg-primary-fixed-dim transition-transform active:scale-95 duration-150"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Request Leave
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-error-container text-on-error-container p-md rounded-lg flex items-center gap-sm">
          <span className="material-symbols-outlined">error</span>
          <span>{error}</span>
        </div>
      )}

      {showForm && (
        <div className="bg-surface-container rounded-xl border border-outline-variant p-lg">
          <h3 className="font-display text-xl font-bold text-on-surface mb-md">New Leave Request</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-on-surface-variant">Employee</label>
                <select 
                  name="employeeId" 
                  value={formData.employeeId} 
                  onChange={handleInputChange} 
                  required
                  className="p-2 rounded bg-surface border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                >
                  <option value="">Select Employee</option>
                  {employees.map(emp => (
                    <option key={emp._id} value={emp._id}>{emp.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-on-surface-variant">Leave Type</label>
                <select 
                  name="type" 
                  value={formData.type} 
                  onChange={handleInputChange} 
                  required
                  className="p-2 rounded bg-surface border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                >
                  <option value="Annual">Annual</option>
                  <option value="Sick">Sick</option>
                  <option value="Maternity">Maternity</option>
                  <option value="Unpaid">Unpaid</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-on-surface-variant">Start Date</label>
                <input 
                  type="date" 
                  name="startDate" 
                  value={formData.startDate} 
                  onChange={handleInputChange} 
                  required
                  className="p-2 rounded bg-surface border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-on-surface-variant">End Date</label>
                <input 
                  type="date" 
                  name="endDate" 
                  value={formData.endDate} 
                  onChange={handleInputChange} 
                  required
                  className="p-2 rounded bg-surface border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-sm font-bold text-on-surface-variant">Reason</label>
                <textarea 
                  name="reason" 
                  value={formData.reason} 
                  onChange={handleInputChange} 
                  rows={2}
                  className="p-2 rounded bg-surface border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button 
                type="button" 
                onClick={() => setShowForm(false)}
                className="px-4 py-2 font-bold text-secondary hover:bg-surface-container-high rounded transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="px-4 py-2 font-bold bg-primary text-white rounded hover:bg-primary-fixed-dim transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden flex flex-col flex-1">
        <div className="overflow-x-auto custom-scrollbar flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-surface-container-low border-b border-outline-variant z-10">
              <tr>
                <th className="p-md font-label-md text-label-md text-secondary">Employee</th>
                <th className="p-md font-label-md text-label-md text-secondary">Type</th>
                <th className="p-md font-label-md text-label-md text-secondary">Duration</th>
                <th className="p-md font-label-md text-label-md text-secondary">Reason</th>
                <th className="p-md font-label-md text-label-md text-secondary text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="p-lg text-center">
                    <div className="flex flex-col items-center gap-sm">
                      <span className="material-symbols-outlined animate-spin text-primary text-[32px]">progress_activity</span>
                      <span className="font-body-md text-secondary">Loading leave requests...</span>
                    </div>
                  </td>
                </tr>
              ) : leaves.length > 0 ? (
                leaves.map(leave => (
                  <tr key={leave._id} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-md font-body-md text-body-md font-bold text-primary">{getEmployeeName(leave.employeeId)}</td>
                    <td className="p-md font-body-md text-body-md">{leave.type || 'Annual'}</td>
                    <td className="p-md font-body-md text-body-md">
                      {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}
                    </td>
                    <td className="p-md font-body-md text-body-md truncate max-w-[200px]">{leave.reason}</td>
                    <td className="p-md text-center">
                      <span className={`status-pill px-2 py-0.5 rounded text-[11px] font-bold 
                        ${leave.status === 'Approved' ? 'bg-green-100 text-[#16A34A]' : 
                          leave.status === 'Rejected' ? 'bg-error-container text-on-error-container' : 
                          'bg-amber-100 text-amber-700'}`}>
                        {leave.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-lg text-center text-on-surface-variant font-medium">
                    No active leave requests.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveManagement;
