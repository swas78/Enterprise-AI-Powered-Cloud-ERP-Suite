import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

interface ExecutiveDashboardProps {
  accountsCount: number;
  employeesCount: number;
  projectsCount: number;
}

export const ExecutiveDashboard: React.FC<ExecutiveDashboardProps> = ({
  employeesCount,
  projectsCount
}) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setLastUpdated(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-lg w-full">
      {/* Breadcrumbs & Title Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
        <div>
          <div className="flex items-center gap-xs text-secondary font-label-md mb-xs">
            <span>AMDOX</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface font-semibold">Overview Dashboard</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">Enterprise Overview</h1>
        </div>
        <div className="flex items-center gap-md">
          <div className="flex items-center gap-sm bg-surface-container border border-outline-variant px-md py-sm rounded-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" style={{ backgroundColor: '#16A34A' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" style={{ backgroundColor: '#16A34A' }}></span>
            </span>
            <span className="font-label-md text-on-surface font-semibold uppercase tracking-wider">Live</span>
            <span className="h-4 w-px bg-outline-variant"></span>
            <span className="font-code-sm text-secondary">Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Bento Grid of Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
        {/* Revenue Widget */}
        <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant hover:border-primary transition-all group flex flex-col h-full">
          <div className="flex justify-between items-start mb-md">
            <div>
              <p className="font-label-md text-secondary uppercase tracking-tight mb-xs">Total Revenue</p>
              <p className="font-headline-md text-headline-md text-on-surface">$2.48M</p>
            </div>
            <div className="p-sm rounded bg-primary-fixed-dim text-primary">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
          </div>
          <div className="flex-1 min-h-[40px] flex items-end">
            <svg className="w-full h-12" viewBox="0 0 200 40">
              <path className="sparkline-svg" d="M0,35 Q20,30 40,32 T80,20 T120,25 T160,10 L200,5"></path>
            </svg>
          </div>
          <div className="mt-md pt-md border-t border-outline-variant flex items-center justify-between text-on-surface-variant">
            <span className="font-label-md">+12.4% vs last month</span>
            <span className="font-code-sm">FY24 Q3</span>
          </div>
        </div>

        {/* Headcount Widget */}
        <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant hover:border-primary transition-all group flex flex-col h-full">
          <div className="flex justify-between items-start mb-md">
            <div>
              <p className="font-label-md text-secondary uppercase tracking-tight mb-xs">Active Headcount</p>
              <p className="font-headline-md text-headline-md text-on-surface">{employeesCount || 1204}</p>
            </div>
            <div className="p-sm rounded bg-surface-container-high text-secondary">
              <span className="material-symbols-outlined">person</span>
            </div>
          </div>
          <div className="flex-1 min-h-[40px] flex items-end">
            <svg className="w-full h-12" viewBox="0 0 200 40">
              <path className="sparkline-svg" d="M0,20 Q25,22 50,18 T100,25 T150,15 L200,18" style={{ stroke: '#5d5f5f' }}></path>
            </svg>
          </div>
          <div className="mt-md pt-md border-t border-outline-variant flex items-center justify-between text-on-surface-variant">
            <span className="font-label-md">+22 new starts this week</span>
            <span className="font-code-sm">On Track</span>
          </div>
        </div>

        {/* Active POs Widget */}
        <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant hover:border-primary transition-all group flex flex-col h-full">
          <div className="flex justify-between items-start mb-md">
            <div>
              <p className="font-label-md text-secondary uppercase tracking-tight mb-xs">Active Projects</p>
              <p className="font-headline-md text-headline-md text-on-surface">{projectsCount || 842}</p>
            </div>
            <div className="p-sm rounded bg-surface-container-high text-secondary">
              <span className="material-symbols-outlined">receipt_long</span>
            </div>
          </div>
          <div className="flex-1 min-h-[40px] flex items-end">
            <svg className="w-full h-12" viewBox="0 0 200 40">
              <path className="sparkline-svg" d="M0,38 L30,35 L60,30 L90,28 L120,32 L150,25 L180,20 L200,15" style={{ stroke: '#0061a4' }}></path>
            </svg>
          </div>
          <div className="mt-md pt-md border-t border-outline-variant flex items-center justify-between text-on-surface-variant">
            <span className="font-label-md">Avg turnaround: 4.2 days</span>
            <span className="font-code-sm">Critical</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg items-start">
        {/* Left Column: Recent Activity */}
        <div className="lg:col-span-2 space-y-lg">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden">
            <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
              <h3 className="font-title-lg text-title-lg text-on-surface">Recent Transactional Activity</h3>
              <button onClick={() => navigate('/compliance')} className="text-primary font-label-md hover:underline bg-transparent border-0 cursor-pointer">
                View Audit Logs
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-body-md border-collapse">
                <thead className="bg-surface text-secondary uppercase font-label-md border-b border-outline-variant">
                  <tr>
                    <th className="px-lg py-md font-semibold">Entity</th>
                    <th className="px-lg py-md font-semibold">Status</th>
                    <th className="px-lg py-md font-semibold text-right">Amount</th>
                    <th className="px-lg py-md font-semibold text-right">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                    <td className="px-lg py-md font-medium text-on-surface">Amdox Global Logistics</td>
                    <td className="px-lg py-md">
                      <span className="px-sm py-xs bg-success/10 text-[#16A34A] rounded-full text-[12px] font-bold">APPROVED</span>
                    </td>
                    <td className="px-lg py-md text-right font-code-sm">$124,500.00</td>
                    <td className="px-lg py-md text-right text-secondary">Oct 24, 2023</td>
                  </tr>
                  <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                    <td className="px-lg py-md font-medium text-on-surface">Vertex Systems Inc</td>
                    <td className="px-lg py-md">
                      <span className="px-sm py-xs bg-secondary-container text-secondary rounded-full text-[12px] font-bold">IN REVIEW</span>
                    </td>
                    <td className="px-lg py-md text-right font-code-sm">$8,900.00</td>
                    <td className="px-lg py-md text-right text-secondary">Oct 24, 2023</td>
                  </tr>
                  <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                    <td className="px-lg py-md font-medium text-on-surface">Northstar Capital</td>
                    <td className="px-lg py-md">
                      <span className="px-sm py-xs bg-error-container text-error rounded-full text-[12px] font-bold">FAILED</span>
                    </td>
                    <td className="px-lg py-md text-right font-code-sm">$452,100.00</td>
                    <td className="px-lg py-md text-right text-secondary">Oct 23, 2023</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-lg py-md font-medium text-on-surface">CloudBase Foundations</td>
                    <td className="px-lg py-md">
                      <span className="px-sm py-xs bg-success/10 text-[#16A34A] rounded-full text-[12px] font-bold">APPROVED</span>
                    </td>
                    <td className="px-lg py-md text-right font-code-sm">$12,000.00</td>
                    <td className="px-lg py-md text-right text-secondary">Oct 23, 2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Actions & Pulse */}
        <div className="space-y-lg">
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant geometric-bg">
            <h3 className="font-title-lg text-title-lg text-on-surface mb-lg">Quick Actions</h3>
            <div className="grid grid-cols-1 gap-md">
              <button 
                onClick={() => navigate('/finance')}
                className="flex items-center gap-md p-md bg-white border border-outline-variant rounded-lg hover:border-primary hover:shadow-md transition-all text-left group cursor-pointer"
              >
                <div className="w-10 h-10 rounded bg-primary-container/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <div>
                  <p className="font-label-md text-on-surface font-bold">New Journal Entry</p>
                  <p className="font-code-sm text-secondary">Manual finance posting</p>
                </div>
              </button>

              <button 
                onClick={() => navigate('/projects')}
                className="flex items-center gap-md p-md bg-white border border-outline-variant rounded-lg hover:border-primary hover:shadow-md transition-all text-left group cursor-pointer"
              >
                <div className="w-10 h-10 rounded bg-secondary-container/50 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">shopping_cart_checkout</span>
                </div>
                <div>
                  <p className="font-label-md text-on-surface font-bold">Create Purchase Requisition</p>
                  <p className="font-code-sm text-secondary">Procurement request</p>
                </div>
              </button>

              <button 
                onClick={() => navigate('/hr')}
                className="flex items-center gap-md p-md bg-white border border-outline-variant rounded-lg hover:border-primary hover:shadow-md transition-all text-left group cursor-pointer"
              >
                <div className="w-10 h-10 rounded bg-secondary-container/50 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">person_add</span>
                </div>
                <div>
                  <p className="font-label-md text-on-surface font-bold">Onboard New Employee</p>
                  <p className="font-code-sm text-secondary">HR workflow launch</p>
                </div>
              </button>
            </div>
          </div>

          {/* System Pulse */}
          <div className="bg-surface-container p-lg rounded-xl border border-outline-variant">
            <div className="flex items-center gap-sm mb-md">
              <span className="material-symbols-outlined text-primary">analytics</span>
              <h4 className="font-label-md text-on-surface uppercase tracking-widest font-bold">Platform Pulse</h4>
            </div>
            <div className="space-y-md">
              <div className="flex items-center justify-between">
                <span className="font-body-md text-secondary">API Latency</span>
                <span className="font-code-sm text-on-surface">12ms</span>
              </div>
              <div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body-md text-secondary">Active Tenant Role</span>
                <span className="font-code-sm text-on-surface font-semibold text-primary">{user?.role || 'Viewer'}</span>
              </div>
              <div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
                <div className="bg-secondary h-full rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;
