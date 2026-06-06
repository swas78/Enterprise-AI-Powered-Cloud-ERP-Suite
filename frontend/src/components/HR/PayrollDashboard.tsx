import React, { useState, useEffect } from 'react';
import hrService from '../../services/hrService';

interface PayrollRun {
  _id: string;
  batchNumber: string;
  startDate: string;
  endDate: string;
  status: 'Pending' | 'Processing' | 'Completed' | 'Failed';
  totalGrossPay?: number;
  totalNetPay?: number;
  processedCount?: number;
  createdAt: string;
}

export const PayrollDashboard: React.FC = () => {
  const [runs, setRuns] = useState<PayrollRun[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Form state
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    batchNumber: `PR-${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, '0')}`,
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await hrService.getPayrollRuns();
      setRuns(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load payroll history');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRunPayroll = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await hrService.runPayroll(formData.batchNumber, formData.startDate, formData.endDate);
      setShowForm(false);
      await fetchHistory();
    } catch (err: any) {
      setError(err.message || 'Failed to initiate payroll run');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-lg w-full">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-display text-[32px] font-extrabold text-on-surface">Payroll Dashboard</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage statutory deductions and generate payslips.</p>
        </div>
        <div className="flex gap-sm">
          <button 
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-xs px-md h-10 bg-primary text-white font-semibold rounded hover:bg-primary-fixed-dim transition-transform active:scale-95 duration-150"
          >
            <span className="material-symbols-outlined text-[20px]">play_circle</span>
            Run Payroll Batch
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
          <h3 className="font-display text-xl font-bold text-on-surface mb-md">Initiate Payroll Run</h3>
          <form onSubmit={handleRunPayroll} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-on-surface-variant">Batch Number</label>
                <input 
                  type="text" 
                  name="batchNumber" 
                  value={formData.batchNumber} 
                  onChange={handleInputChange} 
                  required
                  className="p-2 rounded bg-surface border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none font-mono"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-on-surface-variant">Period Start</label>
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
                <label className="text-sm font-bold text-on-surface-variant">Period End</label>
                <input 
                  type="date" 
                  name="endDate" 
                  value={formData.endDate} 
                  onChange={handleInputChange} 
                  required
                  className="p-2 rounded bg-surface border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
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
                className="px-4 py-2 font-bold bg-primary text-white rounded hover:bg-primary-fixed-dim transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {isSubmitting && <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>}
                {isSubmitting ? 'Processing...' : 'Run Batch'}
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
                <th className="p-md font-label-md text-label-md text-secondary">Batch #</th>
                <th className="p-md font-label-md text-label-md text-secondary">Period</th>
                <th className="p-md font-label-md text-label-md text-secondary text-right">Processed</th>
                <th className="p-md font-label-md text-label-md text-secondary text-right">Gross Pay</th>
                <th className="p-md font-label-md text-label-md text-secondary text-right">Net Pay</th>
                <th className="p-md font-label-md text-label-md text-secondary text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="p-lg text-center">
                    <div className="flex flex-col items-center gap-sm">
                      <span className="material-symbols-outlined animate-spin text-primary text-[32px]">progress_activity</span>
                      <span className="font-body-md text-secondary">Loading history...</span>
                    </div>
                  </td>
                </tr>
              ) : runs.length > 0 ? (
                runs.map(run => (
                  <tr key={run._id} className="hover:bg-surface-container-low transition-colors group">
                    <td className="p-md font-code-sm text-code-sm text-primary font-bold">{run.batchNumber}</td>
                    <td className="p-md font-body-md text-body-md">
                      {new Date(run.startDate).toLocaleDateString()} - {new Date(run.endDate).toLocaleDateString()}
                    </td>
                    <td className="p-md font-body-md text-body-md text-right">{run.processedCount || 0}</td>
                    <td className="p-md font-body-md text-body-md text-right">
                      {run.totalGrossPay ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(run.totalGrossPay) : '--'}
                    </td>
                    <td className="p-md font-body-md text-body-md text-right font-bold">
                      {run.totalNetPay ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(run.totalNetPay) : '--'}
                    </td>
                    <td className="p-md text-center">
                      <span className={`status-pill px-2 py-0.5 rounded text-[11px] font-bold 
                        ${run.status === 'Completed' ? 'bg-green-100 text-[#16A34A]' : 
                          run.status === 'Failed' ? 'bg-error-container text-on-error-container' : 
                          'bg-indigo-100 text-indigo-700'}`}>
                        {run.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-lg text-center text-on-surface-variant font-medium">
                    No payroll history found.
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

export default PayrollDashboard;
