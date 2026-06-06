import React from 'react';

export const TenantSettings: React.FC = () => {
  return (
    <div className="glass-panel p-6 space-y-4">
      <h3 className="text-xl font-bold text-white">Tenant Policy Configurations</h3>
      <p className="text-sm text-[var(--text-secondary)]">Manage tenant compliance schemas and sub-domains.</p>
      <div className="p-4 bg-slate-900/30 rounded-lg border border-[var(--glass-border)] border-dashed text-center text-xs text-[var(--text-muted)]">
        Tenant specifications default to SOC 2 regulations.
      </div>
    </div>
  );
};

export default TenantSettings;
