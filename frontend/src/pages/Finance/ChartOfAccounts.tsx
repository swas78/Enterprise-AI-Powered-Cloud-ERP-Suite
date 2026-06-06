import React from 'react';


const ChartOfAccounts: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-30 sticky top-0 bg-surface border-b border-outline-variant">
<div className="flex items-center gap-lg flex-1">
<span className="font-headline-md text-headline-md font-bold text-primary">AMDOX</span>
<div className="relative w-full max-w-md hidden md:block">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="w-full bg-surface-container-low border-none rounded-lg pl-[40px] pr-md py-xs font-body-md text-body-md focus:ring-1 focus:ring-primary" placeholder="Search accounts (CMD+K)" type="text"/>
</div>
</div>
<div className="flex items-center gap-md">
<button className="p-xs rounded-full hover:bg-surface-container-low transition-colors duration-150 text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-xs rounded-full hover:bg-surface-container-low transition-colors duration-150 text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<button className="p-xs rounded-full hover:bg-surface-container-low transition-colors duration-150 text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="cloud_done">cloud_done</span>
</button>
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant">
<img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVFjH_EegRMiLfBfyjuJZq842qbhtj-6Lg9Z8ALZX-aiFsRbGLY1jzYdyilMaZCcGIsqpOGq4KfYDkSmTiEhaw-kRiKMSmYaXIYrIEtbx2ZSmtL-4STS-qJyxyvVuFrU5liMd28zAPZ4iDLR358Q3BFLPDSfGBTUtjbGKUG2tHWRdREVVQyANvmj7kZ9DVkOkihpX3lJSr0mX7BaCJKsqd5aKCVsGY0SGGNzyHXxB___9oFU_mt4Q4poXkkUDt5FCbHOHt-xwOwuA"/>
</div>
</div>
</header>

<div className="p-lg md:p-xl flex-1 max-w-[1440px] mx-auto w-full">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-xl gap-md">
<div>
<nav className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md mb-xs">
<span>Finance</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary">Chart of Accounts</span>
</nav>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Chart of Accounts</h2>
<p className="font-body-md text-body-md text-secondary mt-xs">Manage your organizational financial structure and GL codes.</p>
</div>
<div className="flex items-center gap-sm">
<button className="flex items-center gap-xs px-md py-sm border border-outline-variant rounded-lg font-label-md text-label-md text-secondary hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                        Filters
                    </button>
<button className="flex items-center gap-xs px-md py-sm border border-outline-variant rounded-lg font-label-md text-label-md text-secondary hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[18px]">ios_share</span>
                        Export
                    </button>
<button className="flex items-center gap-xs px-md py-sm bg-primary text-white rounded-lg font-label-md text-label-md hover:bg-[#0B7DFF] transition-colors shadow-sm" >
<span className="material-symbols-outlined text-[18px]">add</span>
                        Create Account
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-lg mb-xl">
<div className="bg-white p-lg rounded-xl border border-outline-variant flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-secondary font-label-md text-label-md">Total Assets</span>
<span className="material-symbols-outlined text-primary text-[20px]">trending_up</span>
</div>
<div className="mt-md">
<div className="font-headline-md text-headline-md">$14,204,500</div>
<div className="text-[12px] text-green-600 font-medium flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">north</span> 12.5% vs LY
                        </div>
</div>
</div>
<div className="bg-white p-lg rounded-xl border border-outline-variant flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-secondary font-label-md text-label-md">Liabilities</span>
<span className="material-symbols-outlined text-error text-[20px]">trending_down</span>
</div>
<div className="mt-md">
<div className="font-headline-md text-headline-md">$3,840,200</div>
<div className="text-[12px] text-on-surface-variant font-medium flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">horizontal_rule</span> Steady
                        </div>
</div>
</div>
<div className="bg-white p-lg rounded-xl border border-outline-variant flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-secondary font-label-md text-label-md">Active Accounts</span>
<span className="material-symbols-outlined text-primary text-[20px]">account_tree</span>
</div>
<div className="mt-md">
<div className="font-headline-md text-headline-md">142</div>
<div className="text-[12px] text-secondary font-medium">+4 this month</div>
</div>
</div>
<div className="bg-primary p-lg rounded-xl border border-primary flex flex-col justify-between text-white md:hidden lg:flex">
<div className="flex justify-between items-start">
<span className="font-label-md text-label-md opacity-80">Equity Ratio</span>
<span className="material-symbols-outlined text-[20px]">pie_chart</span>
</div>
<div className="mt-md">
<div className="font-headline-md text-headline-md">72.4%</div>
<div className="h-1 w-full bg-white/20 rounded-full mt-sm overflow-hidden">
<div className="h-full bg-white w-[72.4%]"></div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-[#F7FAFF] border-b border-outline-variant">
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider group cursor-pointer hover:text-primary transition-colors">
<div className="flex items-center gap-xs">
                                        Code
                                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100">unfold_more</span>
</div>
</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider group cursor-pointer hover:text-primary transition-colors">
<div className="flex items-center gap-xs">
                                        Account Name
                                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100">unfold_more</span>
</div>
</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider">Type</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider text-right group cursor-pointer hover:text-primary transition-colors">
<div className="flex items-center justify-end gap-xs">
                                        Balance
                                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100">unfold_more</span>
</div>
</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider">Status</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md font-code-sm text-code-sm text-secondary">1001-001</td>
<td className="px-lg py-md font-body-md text-body-md font-semibold text-on-surface">Operating Cash (USD)</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">Asset</td>
<td className="px-lg py-md font-body-md text-body-md text-right font-semibold">$1,240,500.00</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-xs rounded-full text-[12px] font-semibold bg-[#16A34A]/10 text-[#16A34A]">
                                        Approved
                                    </span>
</td>
<td className="px-lg py-md text-right">
<button className="p-xs text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md font-code-sm text-code-sm text-secondary">1100-240</td>
<td className="px-lg py-md font-body-md text-body-md font-semibold text-on-surface">Accounts Receivable</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">Asset</td>
<td className="px-lg py-md font-body-md text-body-md text-right font-semibold">$845,000.00</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-xs rounded-full text-[12px] font-semibold bg-[#F59E0B]/10 text-[#F59E0B] gap-xs">
<span className="material-symbols-outlined text-[14px] animate-spin">sync</span> Processing
                                    </span>
</td>
<td className="px-lg py-md text-right">
<button className="p-xs text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md font-code-sm text-code-sm text-secondary">2005-000</td>
<td className="px-lg py-md font-body-md text-body-md font-semibold text-on-surface">Corporate Credit Line</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">Liability</td>
<td className="px-lg py-md font-body-md text-body-md text-right font-semibold">($120,000.00)</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-xs rounded-full text-[12px] font-semibold bg-[#16A34A]/10 text-[#16A34A]">
                                        Approved
                                    </span>
</td>
<td className="px-lg py-md text-right">
<button className="p-xs text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md font-code-sm text-code-sm text-secondary">4000-100</td>
<td className="px-lg py-md font-body-md text-body-md font-semibold text-on-surface">SaaS Subscription Revenue</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">Revenue</td>
<td className="px-lg py-md font-body-md text-body-md text-right font-semibold">$3,420,000.00</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-xs rounded-full text-[12px] font-semibold bg-[#16A34A]/10 text-[#16A34A]">
                                        Approved
                                    </span>
</td>
<td className="px-lg py-md text-right">
<button className="p-xs text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md font-code-sm text-code-sm text-secondary">6000-010</td>
<td className="px-lg py-md font-body-md text-body-md font-semibold text-on-surface">Cloud Infrastructure Costs</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">Expense</td>
<td className="px-lg py-md font-body-md text-body-md text-right font-semibold">$540,200.00</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-xs rounded-full text-[12px] font-semibold bg-[#16A34A]/10 text-[#16A34A]">
                                        Approved
                                    </span>
</td>
<td className="px-lg py-md text-right">
<button className="p-xs text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-lg py-md bg-[#F7FAFF] flex items-center justify-between border-t border-outline-variant">
<div className="flex items-center gap-md">
<span className="font-body-md text-body-md text-secondary">Showing 1 to 5 of 142 results</span>
<div className="flex items-center gap-xs">
<span className="font-label-md text-label-md text-on-surface-variant">Per page:</span>
<select className="bg-transparent border-none font-label-md text-label-md focus:ring-0 cursor-pointer">
<option>10</option>
<option>25</option>
<option>50</option>
</select>
</div>
</div>
<div className="flex items-center gap-xs">
<button className="p-xs rounded-lg border border-outline-variant text-secondary hover:bg-white disabled:opacity-50" disabled={true}>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-lg bg-primary text-white font-label-md text-label-md">1</button>
<button className="w-8 h-8 rounded-lg hover:bg-surface-container font-label-md text-label-md">2</button>
<button className="w-8 h-8 rounded-lg hover:bg-surface-container font-label-md text-label-md">3</button>
<button className="p-xs rounded-lg border border-outline-variant text-secondary hover:bg-white">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>

<div className="mt-2xl flex flex-col md:flex-row gap-lg">
<div className="flex-1 glass-panel p-xl rounded-2xl relative overflow-hidden group">
<div className="relative z-10">
<h3 className="font-title-lg text-title-lg mb-sm">Financial Intelligence</h3>
<p className="font-body-md text-body-md text-secondary mb-md">Our AI engine has identified 3 potential duplicate ledger entries in your recent imports.</p>
<button className="font-label-md text-label-md text-primary flex items-center gap-xs hover:gap-md transition-all">
                            Review suggestions <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
<div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
</div>
<div className="w-full md:w-[400px] bg-inverse-surface text-inverse-on-surface p-xl rounded-2xl">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-primary-fixed">bolt</span>
<h3 className="font-title-lg text-title-lg">System Health</h3>
</div>
<div className="space-y-md">
<div className="flex justify-between items-center">
<span className="font-body-md text-body-md opacity-80">Ledger Sync</span>
<span className="text-[12px] text-green-400">Stable</span>
</div>
<div className="flex justify-between items-center">
<span className="font-body-md text-body-md opacity-80">API Gateway</span>
<span className="text-[12px] text-green-400">99.9% Up</span>
</div>
<div className="flex justify-between items-center">
<span className="font-body-md text-body-md opacity-80">Last Backup</span>
<span className="text-[12px] opacity-60">14m ago</span>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default ChartOfAccounts;
