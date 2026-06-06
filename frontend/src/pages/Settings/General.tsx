import React from 'react';
import TenantSettings from '../../components/Settings/TenantSettings';
import UserManagement from '../../components/Settings/UserManagement';

export const General: React.FC = () => {
  return (
    <div className="space-y-6">
      <header className="pb-4 border-b border-[var(--glass-border)]">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">General Settings</h1>
        <p className="text-[var(--text-secondary)] mt-1">Configure tenant information, access permissions, and roles mapping.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TenantSettings />
        <UserManagement />
      </div>
    </div>
  );
};

export default General;
