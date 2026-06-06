import React from 'react';

export const UserManagement: React.FC = () => {
  return (
    <div className="glass-panel p-6 space-y-4">
      <h3 className="text-xl font-bold text-white">RBAC Identity Management</h3>
      <p className="text-sm text-[var(--text-secondary)]">Grant permissions and roles (TenantAdmin, SuperAdmin, Manager, Viewer).</p>
      <div className="p-4 bg-slate-900/30 rounded-lg border border-[var(--glass-border)] border-dashed text-center text-xs text-[var(--text-muted)]">
        Role-based permissions active.
      </div>
    </div>
  );
};

export default UserManagement;
