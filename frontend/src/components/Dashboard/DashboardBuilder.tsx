import React from 'react';

export const DashboardBuilder: React.FC = () => {
  return (
    <div className="glass-panel p-6 space-y-4">
      <h3 className="text-xl font-bold text-white">Interactive Dashboard Builder</h3>
      <p className="text-sm text-[var(--text-secondary)]">Drag and drop widgets to configure executive dashboards.</p>
      <div className="p-4 bg-slate-900/30 rounded-lg border border-[var(--glass-border)] border-dashed text-center text-xs text-[var(--text-muted)]">
        Interactive dashboard constructor initialized.
      </div>
    </div>
  );
};

export default DashboardBuilder;
