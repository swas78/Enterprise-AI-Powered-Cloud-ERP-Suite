import React from 'react';

export const ReorderAutomation: React.FC = () => {
  return (
    <div className="glass-panel p-6 space-y-4">
      <h3 className="text-xl font-bold text-white">Reorder Automation drafts</h3>
      <p className="text-xs text-[var(--text-secondary)]">Triggers automated purchase requests when inventory falls below safety stocks.</p>
      <div className="p-4 bg-slate-900/30 rounded-lg border border-[var(--glass-border)] border-dashed text-center text-xs text-[var(--text-muted)]">
        Automated safety limits active.
      </div>
    </div>
  );
};

export default ReorderAutomation;
