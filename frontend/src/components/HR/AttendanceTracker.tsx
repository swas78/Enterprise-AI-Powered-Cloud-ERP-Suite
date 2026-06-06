import React, { useState, useEffect } from 'react';
import hrService from '../../services/hrService';
import { Employee } from '../../types/hr';

interface AttendanceRecord {
  _id: string;
  employeeId: string | Employee;
  date: string;
  clockInTime: string;
  clockOutTime?: string;
  totalHoursWorked?: number;
  status: 'Present' | 'Absent' | 'Half-Day' | 'Late';
}

export const AttendanceTracker: React.FC = () => {
  const [records, setRecords] = useState<AttendanceRecord[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPunching, setIsPunching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Punch state
  const [selectedEmpId, setSelectedEmpId] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [attData, empData] = await Promise.all([
        hrService.getAttendance(),
        hrService.getEmployees()
      ]);
      setRecords(attData);
      setEmployees(empData);
    } catch (err: any) {
      setError(err.message || 'Failed to load attendance data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClockIn = async () => {
    if (!selectedEmpId) return;
    setIsPunching(true);
    setError(null);
    try {
      await hrService.clockIn(selectedEmpId);
      await fetchData();
    } catch (err: any) {
      setError(err.message || 'Failed to clock in');
    } finally {
      setIsPunching(false);
    }
  };

  const handleClockOut = async () => {
    if (!selectedEmpId) return;
    setIsPunching(true);
    setError(null);
    try {
      await hrService.clockOut(selectedEmpId);
      await fetchData();
    } catch (err: any) {
      setError(err.message || 'Failed to clock out');
    } finally {
      setIsPunching(false);
    }
  };

  const getEmployeeName = (emp: string | Employee) => {
    if (typeof emp === 'string') {
      return employees.find(e => e._id === emp)?.name || 'Unknown';
    }
    return emp.name || 'Unknown';
  };

  const formatTime = (isoString?: string) => {
    if (!isoString) return '--:--';
    return new Date(isoString).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col gap-lg w-full">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-display text-[32px] font-extrabold text-on-surface">Attendance Tracker</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Monitor real-time clock-in logs and shift rotations.</p>
        </div>
      </div>

      {error && (
        <div className="bg-error-container text-on-error-container p-md rounded-lg flex items-center gap-sm">
          <span className="material-symbols-outlined">error</span>
          <span>{error}</span>
        </div>
      )}

      {/* Manual Punch Kiosk (Simulated) */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col flex-1 w-full gap-1 max-w-sm">
          <label className="text-sm font-bold text-on-surface-variant">Simulate Biometric Punch</label>
          <select 
            value={selectedEmpId} 
            onChange={(e) => setSelectedEmpId(e.target.value)}
            className="p-2 rounded bg-surface border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full"
          >
            <option value="">Select Employee</option>
            {employees.map(emp => (
              <option key={emp._id} value={emp._id}>{emp.name} ({emp.role})</option>
            ))}
          </select>
        </div>
        
        <div className="flex gap-2 w-full md:w-auto">
          <button 
            onClick={handleClockIn}
            disabled={!selectedEmpId || isPunching}
            className="flex-1 md:flex-none flex justify-center items-center gap-xs px-md h-10 bg-[#16A34A] text-white font-bold rounded hover:bg-[#15803d] transition-transform active:scale-95 duration-150 disabled:opacity-50 disabled:active:scale-100"
          >
            <span className="material-symbols-outlined text-[20px]">login</span>
            Clock In
          </button>
          <button 
            onClick={handleClockOut}
            disabled={!selectedEmpId || isPunching}
            className="flex-1 md:flex-none flex justify-center items-center gap-xs px-md h-10 bg-error text-white font-bold rounded hover:bg-error/90 transition-transform active:scale-95 duration-150 disabled:opacity-50 disabled:active:scale-100"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Clock Out
          </button>
        </div>
      </div>

      {/* Today's Logs */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden flex flex-col flex-1">
        <div className="p-md bg-surface-container-low border-b border-outline-variant">
          <h3 className="font-bold text-on-surface">Recent Punch Logs</h3>
        </div>
        <div className="overflow-x-auto custom-scrollbar flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-surface-container-low border-b border-outline-variant z-10">
              <tr>
                <th className="p-md font-label-md text-label-md text-secondary">Employee</th>
                <th className="p-md font-label-md text-label-md text-secondary">Date</th>
                <th className="p-md font-label-md text-label-md text-secondary text-center">Clock In</th>
                <th className="p-md font-label-md text-label-md text-secondary text-center">Clock Out</th>
                <th className="p-md font-label-md text-label-md text-secondary text-right">Hours</th>
                <th className="p-md font-label-md text-label-md text-secondary text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="p-lg text-center">
                    <div className="flex flex-col items-center gap-sm">
                      <span className="material-symbols-outlined animate-spin text-primary text-[32px]">progress_activity</span>
                      <span className="font-body-md text-secondary">Loading logs...</span>
                    </div>
                  </td>
                </tr>
              ) : records.length > 0 ? (
                records.map(record => (
                  <tr key={record._id} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-md font-body-md text-body-md font-bold text-primary">{getEmployeeName(record.employeeId)}</td>
                    <td className="p-md font-body-md text-body-md">
                      {new Date(record.date).toLocaleDateString()}
                    </td>
                    <td className="p-md font-mono text-center font-bold text-green-600 dark:text-green-400">
                      {formatTime(record.clockInTime)}
                    </td>
                    <td className="p-md font-mono text-center font-bold text-red-600 dark:text-red-400">
                      {formatTime(record.clockOutTime)}
                    </td>
                    <td className="p-md font-body-md text-body-md text-right font-bold">
                      {record.totalHoursWorked ? record.totalHoursWorked.toFixed(2) : '--'}
                    </td>
                    <td className="p-md text-center">
                      <span className={`status-pill px-2 py-0.5 rounded text-[11px] font-bold 
                        ${record.status === 'Present' ? 'bg-green-100 text-[#16A34A]' : 
                          record.status === 'Absent' ? 'bg-error-container text-on-error-container' : 
                          'bg-amber-100 text-amber-700'}`}>
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-lg text-center text-on-surface-variant font-medium">
                    No attendance logs found.
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

export default AttendanceTracker;
