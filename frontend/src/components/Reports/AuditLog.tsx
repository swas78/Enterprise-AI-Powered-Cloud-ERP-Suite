import React, { useState, useEffect } from 'react';
import reportService from '../../services/reportService';

export const AuditLog: React.FC = () => {
  const [gdprEmail, setGdprEmail] = useState('');
  const [auditLogs, setAuditLogs] = useState<any[]>([]);
  const [complianceSuccessMessage, setComplianceSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const logs = await reportService.getAuditLogs();
      setAuditLogs(logs);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleGdprErasure = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gdprEmail) return;

    if (!window.confirm(`Warning: You are executing a Right to Erasure command for: ${gdprEmail}. This scrubs all PII and cannot be undone. Proceed?`)) {
      return;
    }

    try {
      await reportService.executeGdprErasure(gdprEmail);
      setComplianceSuccessMessage(`Successfully anonymized and soft-deleted personal data for: ${gdprEmail}`);
      setGdprEmail('');
      fetchLogs();
    } catch (err: any) {
      alert(err.message || 'Erasure request failed');
    }
  };

  const handleDsrExport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gdprEmail) return;

    try {
      const blob = await reportService.downloadDsrExport(gdprEmail);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `DSR-GDPR-Export-${gdprEmail}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      setComplianceSuccessMessage(`Exported DSR archive file downloaded successfully for: ${gdprEmail}`);
      setGdprEmail('');
      fetchLogs();
    } catch (err: any) {
      alert(err.message || 'DSR Export failed');
    }
  };

  return (
    <div className="space-y-6">
      <header className="pb-4 border-b border-[var(--glass-border)]">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Compliance & GDPR Controls</h1>
        <p className="text-[var(--text-secondary)] mt-1 font-medium">Immutable audit trails logs (Capped MongoDB), DSR exports, and Right to Erasure anonymizers.</p>
      </header>

      {complianceSuccessMessage && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          {complianceSuccessMessage}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-panel p-6 space-y-4 lg:col-span-1">
          <h3 className="text-xl font-bold flex items-center gap-2 text-white">
            <span className="material-symbols-outlined text-indigo-400 text-[20px]">shield</span>
            GDPR User Data Operations
          </h3>
          <p className="text-xs text-[var(--text-secondary)]">
            Fulfill GDPR requests securely. Data Subject Requests export user profiles, attendance, leaves, and payroll logs. Right to Erasure scrubs all sensitive details and anonymizes records.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">Target User Email</label>
              <input
                type="email"
                required
                placeholder="e.g. employee@company.com"
                value={gdprEmail}
                onChange={(e) => {
                  setComplianceSuccessMessage('');
                  setGdprEmail(e.target.value);
                }}
                className="w-full p-2.5 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-sm text-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleDsrExport}
                className="py-2.5 rounded-lg text-xs font-bold tracking-wide bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-1.5 animate-all-300"
              >
                <span className="material-symbols-outlined text-[16px] text-white">download</span> DSR Export
              </button>
              <button
                onClick={handleGdprErasure}
                className="py-2.5 rounded-lg text-xs font-bold tracking-wide bg-rose-600/10 border border-rose-500/20 hover:bg-rose-600 text-rose-400 hover:text-white flex items-center justify-center gap-1.5 animate-all-300"
              >
                <span className="material-symbols-outlined text-[16px]">delete</span> GDPR Erase
              </button>
            </div>
          </form>
        </div>

        <div className="glass-panel p-6 space-y-4 lg:col-span-2">
          <h3 className="text-xl font-bold flex items-center justify-between text-white">
            <span>Immutable System Audit Trail</span>
            <button 
              onClick={fetchLogs}
              disabled={loading}
              className="p-1.5 bg-indigo-500/10 text-indigo-400 rounded hover:bg-indigo-500/20 disabled:opacity-50"
            >
              <span className={`material-symbols-outlined text-[16px] ${loading ? 'animate-spin' : ''}`}>sync</span>
            </button>
          </h3>
          <div className="overflow-x-auto max-h-[350px] overflow-y-auto pr-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--glass-border)] text-xs text-[var(--text-secondary)] uppercase">
                  <th className="py-2 px-3">Timestamp</th>
                  <th className="py-2 px-3">User Email</th>
                  <th className="py-2 px-3">Action</th>
                  <th className="py-2 px-3">Target Entity</th>
                </tr>
              </thead>
              <tbody className="text-xs text-white">
                {auditLogs.length > 0 ? (
                  auditLogs.map((log, idx) => (
                    <tr key={idx} className="border-b border-[var(--glass-border)] hover:bg-slate-900/20">
                      <td className="py-2 px-3 font-mono text-[10px] text-[var(--text-muted)]">
                        {new Date(log.timestamp).toLocaleString()}
                      </td>
                      <td className="py-2 px-3 text-[var(--text-secondary)]">{log.userEmail}</td>
                      <td className="py-2 px-3 font-semibold text-indigo-300">{log.action}</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-cyan-400">
                        {log.entityType ? `${log.entityType}(${log.entityId})` : 'System'}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center py-6 text-[var(--text-muted)]">No audit trails recorded.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLog;
