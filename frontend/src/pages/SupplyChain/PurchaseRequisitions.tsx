import React from 'react';


const PurchaseRequisitions: React.FC = () => {


  return (
    <div className="w-full">
      

<div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Purchase Requisitions</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage and track procurement requests across departments.</p>
</div>
<button className="flex items-center gap-sm bg-primary hover:bg-primary-container text-white px-lg py-sm rounded-lg font-label-md text-label-md transition-standard shadow-sm active:scale-95">
<span className="material-symbols-outlined">add</span>
                    Create Requisition
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-md">
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl flex flex-col justify-between">
<span className="text-secondary font-label-md text-label-md">Total Pending</span>
<div className="flex items-end justify-between mt-sm">
<span className="text-headline-md font-headline-md text-primary">24</span>
<span className="text-green-600 font-label-md text-xs bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">trending_up</span> 12%
                        </span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl flex flex-col justify-between">
<span className="text-secondary font-label-md text-label-md">Average Approval Time</span>
<div className="flex items-end justify-between mt-sm">
<span className="text-headline-md font-headline-md text-on-surface">1.4 Days</span>
<span className="text-blue-600 font-label-md text-xs bg-blue-50 px-2 py-0.5 rounded-full">Optimal</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl flex flex-col justify-between">
<span className="text-secondary font-label-md text-label-md">Budget Utilization</span>
<div className="flex items-end justify-between mt-sm w-full">
<div className="flex-1 mr-md">
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[65%]"></div>
</div>
</div>
<span className="text-headline-md font-headline-md text-on-surface">65%</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl flex flex-col justify-between">
<span className="text-secondary font-label-md text-label-md">High Priority Actions</span>
<div className="flex items-end justify-between mt-sm">
<span className="text-headline-md font-headline-md text-error">08</span>
<span className="material-symbols-outlined text-error" style={{fontVariationSettings: "'FILL' 1"}}>error</span>
</div>
</div>
</div>

<div className="bg-white border border-outline-variant rounded-lg p-md flex flex-wrap items-center gap-md">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-outline">filter_list</span>
<span className="font-label-md text-label-md text-secondary uppercase">Filters</span>
</div>
<div className="h-6 w-px bg-outline-variant mx-1"></div>
<div className="flex-1 flex flex-wrap items-center gap-sm">
<select className="bg-surface-container-low border border-outline-variant rounded px-md py-sm text-body-md font-body-md text-on-surface-variant focus:ring-1 focus:ring-primary outline-none min-w-[140px]">
<option>All Statuses</option>
<option>Draft</option>
<option>Pending Approval</option>
<option>Approved</option>
<option>Rejected</option>
</select>
<select className="bg-surface-container-low border border-outline-variant rounded px-md py-sm text-body-md font-body-md text-on-surface-variant focus:ring-1 focus:ring-primary outline-none min-w-[140px]">
<option>All Departments</option>
<option>Engineering</option>
<option>Marketing</option>
<option>Operations</option>
<option>Finance</option>
</select>
<div className="relative">
<input className="bg-surface-container-low border border-outline-variant rounded pl-md pr-xl py-sm text-body-md font-body-md text-on-surface-variant focus:ring-1 focus:ring-primary outline-none w-[180px]" placeholder="Date Range" type="text" />
<span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-sm">calendar_today</span>
</div>
</div>
<button className="text-primary font-label-md text-label-md hover:underline">Clear all</button>
</div>

<div className="bg-white border border-outline-variant rounded-lg overflow-hidden shadow-sm flex flex-col">
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead className="sticky top-0 bg-surface-container-low z-10 border-b border-outline-variant">
<tr>
<th className="px-md py-sm font-label-md text-label-md text-secondary uppercase whitespace-nowrap">
<div className="flex items-center gap-xs cursor-pointer group">
                                        PR ID <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-standard">expand_more</span>
</div>
</th>
<th className="px-md py-sm font-label-md text-label-md text-secondary uppercase whitespace-nowrap">Requester</th>
<th className="px-md py-sm font-label-md text-label-md text-secondary uppercase whitespace-nowrap">Department</th>
<th className="px-md py-sm font-label-md text-label-md text-secondary uppercase whitespace-nowrap text-center">Priority</th>
<th className="px-md py-sm font-label-md text-label-md text-secondary uppercase whitespace-nowrap text-right">Total Value</th>
<th className="px-md py-sm font-label-md text-label-md text-secondary uppercase whitespace-nowrap">Status</th>
<th className="px-md py-sm font-label-md text-label-md text-secondary uppercase whitespace-nowrap">Date Created</th>
<th className="px-md py-sm font-label-md text-label-md text-secondary uppercase whitespace-nowrap text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="row-hover transition-standard group">
<td className="px-md py-sm font-code-sm text-code-sm text-primary font-medium">PR-2024-00128</td>
<td className="px-md py-sm">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-[10px] font-bold">JD</div>
<span className="font-body-md text-body-md">Jane Doe</span>
</div>
</td>
<td className="px-md py-sm font-body-md text-body-md text-secondary">Engineering</td>
<td className="px-md py-sm text-center">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold bg-error/10 text-error uppercase">Urgent</span>
</td>
<td className="px-md py-sm font-body-md text-body-md text-on-surface text-right font-semibold">$12,450.00</td>
<td className="px-md py-sm">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-amber-50 text-amber-700 text-[11px] font-semibold border border-amber-200">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Pending Approval
                                    </span>
</td>
<td className="px-md py-sm font-body-md text-body-md text-secondary whitespace-nowrap">Oct 24, 2023</td>
<td className="px-md py-sm text-right">
<button className="p-1 rounded hover:bg-surface-container-high transition-standard">
<span className="material-symbols-outlined text-outline">more_vert</span>
</button>
</td>
</tr>

<tr className="row-hover transition-standard group">
<td className="px-md py-sm font-code-sm text-code-sm text-primary font-medium">PR-2024-00129</td>
<td className="px-md py-sm">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-tertiary-container text-white flex items-center justify-center text-[10px] font-bold">MS</div>
<span className="font-body-md text-body-md">Michael Smith</span>
</div>
</td>
<td className="px-md py-sm font-body-md text-body-md text-secondary">Marketing</td>
<td className="px-md py-sm text-center">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600 uppercase">Medium</span>
</td>
<td className="px-md py-sm font-body-md text-body-md text-on-surface text-right font-semibold">$3,200.00</td>
<td className="px-md py-sm">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-50 text-green-700 text-[11px] font-semibold border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Approved
                                    </span>
</td>
<td className="px-md py-sm font-body-md text-body-md text-secondary whitespace-nowrap">Oct 23, 2023</td>
<td className="px-md py-sm text-right">
<button className="p-1 rounded hover:bg-surface-container-high transition-standard">
<span className="material-symbols-outlined text-outline">more_vert</span>
</button>
</td>
</tr>

<tr className="row-hover transition-standard group">
<td className="px-md py-sm font-code-sm text-code-sm text-primary font-medium">PR-2024-00130</td>
<td className="px-md py-sm">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center text-[10px] font-bold">AR</div>
<span className="font-body-md text-body-md">Alice Reed</span>
</div>
</td>
<td className="px-md py-sm font-body-md text-body-md text-secondary">Operations</td>
<td className="px-md py-sm text-center">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-500 uppercase">Low</span>
</td>
<td className="px-md py-sm font-body-md text-body-md text-on-surface text-right font-semibold">$850.00</td>
<td className="px-md py-sm">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200">
<span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Draft
                                    </span>
</td>
<td className="px-md py-sm font-body-md text-body-md text-secondary whitespace-nowrap">Oct 22, 2023</td>
<td className="px-md py-sm text-right">
<button className="p-1 rounded hover:bg-surface-container-high transition-standard">
<span className="material-symbols-outlined text-outline">more_vert</span>
</button>
</td>
</tr>

<tr className="row-hover transition-standard group">
<td className="px-md py-sm font-code-sm text-code-sm text-primary font-medium">PR-2024-00131</td>
<td className="px-md py-sm">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-primary-container text-white flex items-center justify-center text-[10px] font-bold">RK</div>
<span className="font-body-md text-body-md">Robert King</span>
</div>
</td>
<td className="px-md py-sm font-body-md text-body-md text-secondary">Finance</td>
<td className="px-md py-sm text-center">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold bg-error/10 text-error uppercase">Urgent</span>
</td>
<td className="px-md py-sm font-body-md text-body-md text-on-surface text-right font-semibold">$45,000.00</td>
<td className="px-md py-sm">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-red-50 text-red-700 text-[11px] font-semibold border border-red-200">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Rejected
                                    </span>
</td>
<td className="px-md py-sm font-body-md text-body-md text-secondary whitespace-nowrap">Oct 22, 2023</td>
<td className="px-md py-sm text-right">
<button className="p-1 rounded hover:bg-surface-container-high transition-standard">
<span className="material-symbols-outlined text-outline">more_vert</span>
</button>
</td>
</tr>

<tr className="row-hover transition-standard group">
<td className="px-md py-sm font-code-sm text-code-sm text-primary font-medium">PR-2024-00132</td>
<td className="px-md py-sm">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[10px] font-bold">SL</div>
<span className="font-body-md text-body-md">Sarah Lee</span>
</div>
</td>
<td className="px-md py-sm font-body-md text-body-md text-secondary">Engineering</td>
<td className="px-md py-sm text-center">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600 uppercase">Medium</span>
</td>
<td className="px-md py-sm font-body-md text-body-md text-on-surface text-right font-semibold">$1,120.00</td>
<td className="px-md py-sm">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-50 text-green-700 text-[11px] font-semibold border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Approved
                                    </span>
</td>
<td className="px-md py-sm font-body-md text-body-md text-secondary whitespace-nowrap">Oct 21, 2023</td>
<td className="px-md py-sm text-right">
<button className="p-1 rounded hover:bg-surface-container-high transition-standard">
<span className="material-symbols-outlined text-outline">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-surface-container-low px-md py-sm border-t border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-md">
<span className="font-body-md text-body-md text-secondary">Page 1 of 42</span>
<div className="flex items-center gap-sm">
<span className="font-body-md text-body-md text-secondary">Results per page:</span>
<select className="bg-transparent border-none text-body-md font-body-md text-on-surface focus:ring-0 cursor-pointer">
<option>15</option>
<option>30</option>
<option>50</option>
</select>
</div>
</div>
<div className="flex items-center gap-sm">
<button className="p-1.5 rounded border border-outline-variant hover:bg-surface-container-high text-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-standard" disabled={true}>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<div className="flex items-center gap-xs">
<button className="w-8 h-8 rounded flex items-center justify-center font-label-md text-label-md bg-primary text-white transition-standard">1</button>
<button className="w-8 h-8 rounded flex items-center justify-center font-label-md text-label-md hover:bg-surface-container-high transition-standard">2</button>
<button className="w-8 h-8 rounded flex items-center justify-center font-label-md text-label-md hover:bg-surface-container-high transition-standard">3</button>
<span className="px-1 text-secondary">...</span>
<button className="w-8 h-8 rounded flex items-center justify-center font-label-md text-label-md hover:bg-surface-container-high transition-standard">42</button>
</div>
<button className="p-1.5 rounded border border-outline-variant hover:bg-surface-container-high text-secondary transition-standard">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 p-2xl">
<div className="relative z-10 max-w-lg">
<h3 className="font-headline-md text-headline-md text-on-surface">Streamlining Approvals</h3>
<p className="font-body-lg text-body-lg text-secondary mt-md">AMDOX Intelligence proactively identifies common purchase patterns to suggest vendors and auto-approve small-ticket requisitions. Current system efficiency is at an all-time high.</p>
<div className="mt-lg flex gap-md">
<button className="text-primary font-label-md text-label-md flex items-center gap-sm hover:underline">
                            View Procurement Analytics <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>

<div className="absolute -right-12 -bottom-12 w-64 h-64 opacity-5 pointer-events-none rotate-12">
<span className="material-symbols-outlined text-[256px]">token</span>
</div>
</div>

    </div>
  );
};

export default PurchaseRequisitions;
