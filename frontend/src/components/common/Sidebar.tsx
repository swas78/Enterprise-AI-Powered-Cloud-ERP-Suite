import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export const Sidebar: React.FC = () => {
  const { logout, activeTenant } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showTenantDropdown, setShowTenantDropdown] = useState(false);

  const navLinks = [
    { path: '/', label: 'Dashboard', icon: 'dashboard' },
    { path: '/supply-chain', label: 'Supply Chain', icon: 'inventory_2' },
    { path: '/finance', label: 'Finance', icon: 'payments' },
    { path: '/hr', label: 'Human Resources', icon: 'groups' },
    { path: '/projects', label: 'Projects', icon: 'account_tree' },
    { path: '/payroll/run-dashboard', label: 'Payroll', icon: 'payments' },
    { path: '/bi/executive-analytics', label: 'Analytics', icon: 'bar_chart' },
    { path: '/ai/model-status', label: 'AI Intelligence', icon: 'psychology' },
    { path: '/compliance', label: 'Compliance', icon: 'shield' }
  ];

  return (
    <aside className="hidden md:flex flex-col h-screen sticky top-0 py-md bg-surface-container-lowest border-r border-outline-variant w-[256px] z-40">
      <div className="px-lg mb-md">
        <div className="flex items-center gap-sm mb-base">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>corporate_fare</span>
          </div>
          <span className="font-headline-md text-headline-md text-primary">AMDOX ERP</span>
        </div>
        <span className="font-body-md text-body-md text-on-surface-variant">Enterprise Tier</span>
      </div>

      <div className="px-lg pb-lg flex flex-col gap-xs">
        <button 
          onClick={() => setShowTenantDropdown(!showTenantDropdown)}
          className="flex items-center justify-between w-full p-sm bg-surface-container-high rounded border border-outline-variant hover:bg-surface-container transition-colors"
        >
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
            <span className="font-label-md text-on-surface">{activeTenant || 'NA-EAST-01'}</span>
          </div>
          <span className="material-symbols-outlined text-secondary">unfold_more</span>
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-sm">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`w-full flex items-center gap-md px-md py-sm rounded transition-all duration-150 ${
                isActive 
                  ? 'bg-primary-fixed text-on-primary-fixed border-r-4 border-primary font-semibold' 
                  : 'text-secondary hover:bg-surface-container-high'
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : undefined }}>{link.icon}</span>
              <span className="font-label-md text-label-md uppercase tracking-wider">{link.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="px-sm mt-auto space-y-1">
        <button className="w-full mb-md py-sm px-md bg-primary-container text-on-primary-container font-bold rounded flex items-center justify-center gap-sm hover:brightness-95 active:scale-95 transition-all">
          <span className="material-symbols-outlined">add</span>
          <span className="font-label-md">New Workflow</span>
        </button>
        <div className="border-t border-outline-variant pt-md">
          <a className="flex items-center gap-md px-md py-sm rounded text-secondary hover:bg-surface-container-high transition-all" href="#support">
            <span className="material-symbols-outlined">contact_support</span>
            <span className="font-label-md text-label-md">Support</span>
          </a>
          <button 
            onClick={logout}
            className="w-full flex items-center gap-md px-md py-sm rounded text-secondary hover:bg-surface-container-high transition-all text-left"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-md text-label-md">Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
