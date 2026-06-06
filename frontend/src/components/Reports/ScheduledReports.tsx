import React from 'react';

export const ScheduledReports: React.FC = () => {
  return (
    <div className="glass-panel p-6 space-y-4">
      <h3 className="text-xl font-bold text-white">Scheduled Automated Reports</h3>
      <p className="text-sm text-[var(--text-secondary)]">Set automated export crons for General Ledgers, Aging AP/AR Reports, and Workforce heatmaps to PDF/Excel.</p>
      <div className="p-4 bg-slate-900/30 rounded-lg border border-[var(--glass-border)] border-dashed text-center text-xs text-[var(--text-muted)]">
        No active scheduled report jobs.
      </div>
    </div>
  );
};

export default ScheduledReports;
