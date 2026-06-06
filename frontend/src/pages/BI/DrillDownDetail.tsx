import React from 'react';


const DrillDownDetail: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 bg-surface border-b border-outline-variant">
<div className="flex items-center gap-md">
<span className="font-headline-md text-headline-md font-bold text-primary">AMDOX</span>
<div className="hidden md:flex items-center gap-sm px-sm py-1 bg-surface-container-low rounded border border-outline-variant">
<span className="material-symbols-outlined text-[18px] text-secondary">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-48" placeholder="Search transactions..." type="text"/>
<span className="text-[10px] text-outline font-bold">CMD+K</span>
</div>
</div>
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-secondary cursor-pointer hover:text-primary transition-all-150" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined text-secondary cursor-pointer hover:text-primary transition-all-150" data-icon="help">help</span>
<span className="material-symbols-outlined text-secondary cursor-pointer hover:text-primary transition-all-150" data-icon="cloud_done">cloud_done</span>
<div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant">
<img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQwNyisyIOin0CIsWwUDcM0zzh-GPAQ-6JQerZKlkJ0MFHoe6rYnWFKkpiDHPWjuzFafgT95pgysDURtpiFx8gaKejRGZmwHEDJbmzISaN7jBLV_RxCt0rkC4vL9oo8rOrDhAqVK4JkMntAblr45qNbqADSGgZhoKZd-OEWJ9AJ13fprP2daPAaAq0e7r0Ab2mVzjiCSKDCSH_R-wrT8FUM3jiykfM4CJZ9iyw9-O-S-bsv7eZdhKzBFCWc_RHR3nW6iPVVZuixBk"/>
</div>
</div>
</header>

<div className="flex-1 flex flex-col px-lg py-md overflow-hidden">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-lg">
<div className="flex flex-col gap-xs">
<nav className="flex items-center gap-xs text-secondary font-label-md text-label-md">
<span className="hover:text-primary cursor-pointer">Analytics</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-primary cursor-pointer">Revenue</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-background font-bold">Detail</span>
</nav>
<h1 className="font-headline-lg text-headline-lg text-on-background mt-sm">Transaction Drill-down</h1>
<p className="text-secondary font-body-md">Showing 1,284 results for <span className="text-on-background font-semibold">Q3 Fiscal Operations</span></p>
</div>
<div className="flex items-center gap-sm">
<button className="flex items-center gap-sm px-md py-sm bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container-high transition-all-150 rounded">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
<span className="font-label-md">Advanced Filters</span>
</button>
<button className="flex items-center gap-sm px-lg py-sm bg-primary text-on-primary hover:bg-[#0B7DFF] transition-all-150 rounded">
<span className="material-symbols-outlined text-[20px]">download</span>
<span className="font-label-md">Export Selection</span>
</button>
</div>
</div>

<div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-lg flex flex-col overflow-hidden shadow-sm">

<div className="px-md py-sm glass-header border-b border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-md">
<div className="flex items-center gap-sm text-secondary font-label-md">
<span className="px-2 py-0.5 bg-primary-container/10 text-primary-container rounded-full text-[10px] font-bold">12 SELECTED</span>
<button className="hover:text-error transition-all-150">Clear</button>
</div>
<div className="h-4 w-[1px] bg-outline-variant"></div>
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">calendar_today</span>
<span className="font-label-md text-on-surface">Oct 01 - Dec 31, 2023</span>
</div>
</div>
<div className="flex items-center gap-sm">
<span className="text-secondary font-label-md">Density:</span>
<div className="flex border border-outline-variant rounded overflow-hidden">
<button className="px-2 py-1 bg-surface-container-high text-primary"><span className="material-symbols-outlined text-[18px]">density_medium</span></button>
<button className="px-2 py-1 bg-transparent text-secondary hover:bg-surface-container-low"><span className="material-symbols-outlined text-[18px]">density_small</span></button>
</div>
</div>
</div>

<div className="flex-1 overflow-auto data-table-container">
<table className="w-full border-collapse text-left min-w-[1000px]">
<thead className="sticky top-0 z-10 bg-surface-container-low shadow-sm">
<tr>
<th className="p-md w-12">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4 cursor-pointer" type="checkbox"/>
</th>
<th className="p-md font-label-md text-secondary uppercase tracking-wider cursor-pointer hover:text-on-background group">
<div className="flex items-center gap-xs">
                                            Transaction ID
                                            <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100">unfold_more</span>
</div>
</th>
<th className="p-md font-label-md text-secondary uppercase tracking-wider cursor-pointer hover:text-on-background group">
<div className="flex items-center gap-xs">
                                            Date
                                            <span className="material-symbols-outlined text-[16px] text-primary">expand_more</span>
</div>
</th>
<th className="p-md font-label-md text-secondary uppercase tracking-wider cursor-pointer hover:text-on-background group">
<div className="flex items-center gap-xs">
                                            Entity
                                            <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100">unfold_more</span>
</div>
</th>
<th className="p-md font-label-md text-secondary uppercase tracking-wider">
                                        Category
                                    </th>
<th className="p-md font-label-md text-secondary uppercase tracking-wider text-right">
                                        Amount
                                    </th>
<th className="p-md font-label-md text-secondary uppercase tracking-wider">
                                        Status
                                    </th>
<th className="p-md w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="hover:bg-surface-container-low transition-all-150">
<td className="p-md"><input checked={true} className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox"/></td>
<td className="p-md font-code-sm text-on-surface">TXN-902-182</td>
<td className="p-md font-body-md text-on-surface">Oct 12, 2023 14:22</td>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded bg-primary-fixed text-[10px] flex items-center justify-center font-bold text-on-primary-fixed">AZ</div>
<span className="font-body-md">Azure Cloud Svcs</span>
</div>
</td>
<td className="p-md"><span className="px-2 py-1 bg-surface-container-high rounded text-[11px] font-bold uppercase text-secondary">Infrastructure</span></td>
<td className="p-md text-right font-semibold text-on-background">$12,450.00</td>
<td className="p-md">
<span className="flex items-center gap-xs text-[12px] font-semibold text-[#16A34A] bg-[#16A34A]/10 px-2 py-0.5 rounded-full w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span> Approved
                                        </span>
</td>
<td className="p-md text-secondary cursor-pointer hover:text-primary"><span className="material-symbols-outlined">more_vert</span></td>
</tr>

<tr className="hover:bg-surface-container-low transition-all-150">
<td className="p-md"><input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox"/></td>
<td className="p-md font-code-sm text-on-surface">TXN-881-004</td>
<td className="p-md font-body-md text-on-surface">Oct 12, 2023 11:05</td>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded bg-secondary-fixed text-[10px] flex items-center justify-center font-bold text-on-secondary-fixed">ST</div>
<span className="font-body-md">Stripe Billing</span>
</div>
</td>
<td className="p-md"><span className="px-2 py-1 bg-surface-container-high rounded text-[11px] font-bold uppercase text-secondary">FinOps</span></td>
<td className="p-md text-right font-semibold text-on-background">$4,200.50</td>
<td className="p-md">
<span className="flex items-center gap-xs text-[12px] font-semibold text-[#475569] bg-[#F1F5F9] px-2 py-0.5 rounded-full w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-[#475569]"></span> In Review
                                        </span>
</td>
<td className="p-md text-secondary cursor-pointer hover:text-primary"><span className="material-symbols-outlined">more_vert</span></td>
</tr>

<tr className="hover:bg-surface-container-low transition-all-150">
<td className="p-md"><input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox"/></td>
<td className="p-md font-code-sm text-on-surface">TXN-725-392</td>
<td className="p-md font-body-md text-on-surface">Oct 11, 2023 16:45</td>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded bg-error-container text-[10px] flex items-center justify-center font-bold text-on-error-container">MS</div>
<span className="font-body-md">Microsoft Enterprise</span>
</div>
</td>
<td className="p-md"><span className="px-2 py-1 bg-surface-container-high rounded text-[11px] font-bold uppercase text-secondary">Software</span></td>
<td className="p-md text-right font-semibold text-on-background">$45,000.00</td>
<td className="p-md">
<span className="flex items-center gap-xs text-[12px] font-semibold text-[#DC2626] bg-[#DC2626]/10 px-2 py-0.5 rounded-full w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span> Failed
                                        </span>
</td>
<td className="p-md text-secondary cursor-pointer hover:text-primary"><span className="material-symbols-outlined">more_vert</span></td>
</tr>

<tr className="hover:bg-surface-container-low transition-all-150">
<td className="p-md"><input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox"/></td>
<td className="p-md font-code-sm text-on-surface">TXN-412-992</td>
<td className="p-md font-body-md text-on-surface">Oct 11, 2023 09:12</td>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded bg-tertiary-fixed text-[10px] flex items-center justify-center font-bold text-on-tertiary-fixed">SL</div>
<span className="font-body-md">Slack Technologies</span>
</div>
</td>
<td className="p-md"><span className="px-2 py-1 bg-surface-container-high rounded text-[11px] font-bold uppercase text-secondary">Communication</span></td>
<td className="p-md text-right font-semibold text-on-background">$2,800.00</td>
<td className="p-md">
<span className="flex items-center gap-xs text-[12px] font-semibold text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-0.5 rounded-full w-fit">
<span className="material-symbols-outlined text-[14px] animate-spin">sync</span> Retrying
                                        </span>
</td>
<td className="p-md text-secondary cursor-pointer hover:text-primary"><span className="material-symbols-outlined">more_vert</span></td>
</tr>

<tr className="hover:bg-surface-container-low transition-all-150">
<td className="p-md"><input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox"/></td>
<td className="p-md font-code-sm text-on-surface">TXN-301-554</td>
<td className="p-md font-body-md text-on-surface">Oct 10, 2023 18:30</td>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded bg-primary-fixed text-[10px] flex items-center justify-center font-bold text-on-primary-fixed">AM</div>
<span className="font-body-md">Amazon Web Svcs</span>
</div>
</td>
<td className="p-md"><span className="px-2 py-1 bg-surface-container-high rounded text-[11px] font-bold uppercase text-secondary">Infrastructure</span></td>
<td className="p-md text-right font-semibold text-on-background">$8,940.22</td>
<td className="p-md">
<span className="flex items-center gap-xs text-[12px] font-semibold text-[#16A34A] bg-[#16A34A]/10 px-2 py-0.5 rounded-full w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span> Approved
                                        </span>
</td>
<td className="p-md text-secondary cursor-pointer hover:text-primary"><span className="material-symbols-outlined">more_vert</span></td>
</tr>
<tr className="hover:bg-surface-container-low transition-all-150">
<td className="p-md"><input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox"/></td>
<td className="p-md font-code-sm text-on-surface">TXN-221-884</td>
<td className="p-md font-body-md text-on-surface">Oct 10, 2023 15:15</td>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded bg-secondary-fixed text-[10px] flex items-center justify-center font-bold text-on-secondary-fixed">HU</div>
<span className="font-body-md">HubSpot Inc.</span>
</div>
</td>
<td className="p-md"><span className="px-2 py-1 bg-surface-container-high rounded text-[11px] font-bold uppercase text-secondary">Marketing</span></td>
<td className="p-md text-right font-semibold text-on-background">$1,200.00</td>
<td className="p-md">
<span className="flex items-center gap-xs text-[12px] font-semibold text-[#16A34A] bg-[#16A34A]/10 px-2 py-0.5 rounded-full w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span> Approved
                                        </span>
</td>
<td className="p-md text-secondary cursor-pointer hover:text-primary"><span className="material-symbols-outlined">more_vert</span></td>
</tr>
</tbody>
</table>
</div>

<div className="px-md py-sm bg-surface-container-lowest border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-md">
<div className="flex items-center gap-lg">
<div className="flex items-center gap-sm">
<span className="text-secondary font-label-md">Results per page:</span>
<select className="bg-surface-container-low border-outline-variant rounded text-sm py-1 focus:ring-primary">
<option>25</option>
<option selected={true}>50</option>
<option>100</option>
</select>
</div>
<span className="text-secondary font-label-md">Showing 1-50 of 1,284 results</span>
</div>
<div className="flex items-center gap-sm">
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-secondary hover:bg-surface-container-high transition-all-150">
<span className="material-symbols-outlined text-[18px]">first_page</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-secondary hover:bg-surface-container-high transition-all-150">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<div className="flex items-center gap-xs px-2">
<span className="text-sm font-bold text-primary">1</span>
<span className="text-sm text-secondary">of</span>
<span className="text-sm font-bold text-on-surface">26</span>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-secondary hover:bg-surface-container-high transition-all-150">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-secondary hover:bg-surface-container-high transition-all-150">
<span className="material-symbols-outlined text-[18px]">last_page</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-md mt-lg h-32">
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded flex flex-col justify-between group overflow-hidden relative">
<div className="absolute -right-2 -bottom-2 opacity-5 group-hover:opacity-20 transition-all duration-500">
<span className="material-symbols-outlined text-[80px]">payments</span>
</div>
<span className="text-secondary font-label-md uppercase">Selected Total</span>
<div className="flex flex-col">
<span className="text-headline-md font-bold text-on-surface">$124,500.00</span>
<span className="text-xs text-[#16A34A] flex items-center gap-xs"><span className="material-symbols-outlined text-[12px]">trending_up</span> +2.4% vs Avg</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded flex flex-col justify-between">
<span className="text-secondary font-label-md uppercase">Pending Verif.</span>
<div className="flex flex-col">
<span className="text-headline-md font-bold text-on-surface">18</span>
<span className="text-xs text-secondary italic">Requires Admin approval</span>
</div>
</div>
<div className="md:col-span-2 bg-primary-container/5 border border-primary/20 p-md rounded flex items-center gap-lg">
<div className="flex-1">
<span className="text-primary font-label-md uppercase">Sync Status</span>
<div className="flex items-center gap-sm mt-1">
<span className="material-symbols-outlined text-primary text-[24px]">cloud_done</span>
<span className="text-on-surface font-semibold">Cloud Database Synced</span>
</div>
<p className="text-xs text-secondary mt-1">Last update: 2 minutes ago</p>
</div>
<div className="w-32 h-16 relative overflow-hidden rounded bg-surface-container-high">

<div className="absolute inset-0 flex items-end gap-[2px] p-1">
<div className="flex-1 bg-primary/20 h-[30%] rounded-t-sm"></div>
<div className="flex-1 bg-primary/20 h-[45%] rounded-t-sm"></div>
<div className="flex-1 bg-primary/20 h-[35%] rounded-t-sm"></div>
<div className="flex-1 bg-primary/20 h-[60%] rounded-t-sm"></div>
<div className="flex-1 bg-primary/40 h-[80%] rounded-t-sm"></div>
<div className="flex-1 bg-primary/40 h-[70%] rounded-t-sm"></div>
<div className="flex-1 bg-primary/60 h-[90%] rounded-t-sm"></div>
<div className="flex-1 bg-primary h-[100%] rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default DrillDownDetail;
