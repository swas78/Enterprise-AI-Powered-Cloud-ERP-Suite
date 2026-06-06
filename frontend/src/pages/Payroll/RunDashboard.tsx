import React from 'react';


const RunDashboard: React.FC = () => {


  return (
    <div className="w-full">
      
<div className="max-w-7xl mx-auto space-y-lg">

<div className="flex justify-between items-end mb-xl">
<div>
<p className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-xs">BullMQ Engine v4.2</p>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Payroll Run Dashboard</h2>
</div>
<button className="bg-primary text-white px-lg py-md rounded-xl font-semibold flex items-center gap-sm hover:bg-[#0B7DFF] transition-all shadow-sm" >
<span className="material-symbols-outlined" data-icon="bolt">bolt</span>
                            Start New Payroll Run
                        </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-lg">

<div className="md:col-span-8 bg-white border border-outline-variant rounded-xl p-lg overflow-hidden relative">
<div className="flex justify-between items-start mb-xl">
<div>
<div className="flex items-center gap-sm mb-xs">
<div className="px-sm py-xs bg-primary-fixed text-primary rounded-full flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-primary live-pulse"></span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Live Process</span>
</div>
<span className="text-body-md text-secondary">ID: RUN-2023-OCT-02</span>
</div>
<h3 className="font-title-lg text-title-lg mb-xs">Processing Q3 Regional Disbursements</h3>
<p className="text-on-surface-variant">Queue: <span className="font-mono text-primary">priority_payroll_worker</span></p>
</div>
<div className="text-right">
<div className="text-headline-lg font-extrabold text-primary">68%</div>
<p className="text-label-md text-secondary uppercase">Completion</p>
</div>
</div>
<div className="mb-xl">
<div className="w-full bg-surface-container-low h-3 rounded-full overflow-hidden">
<div className="bg-primary h-full transition-all duration-1000 ease-in-out" style={{width: "68%"}}></div>
</div>
<div className="flex justify-between mt-sm text-label-md text-on-surface-variant font-medium">
<span>Validated: 2,450 / 3,600</span>
<span>Est. Remaining: 4m 12s</span>
</div>
</div>
<div className="grid grid-cols-3 gap-lg border-t border-outline-variant pt-lg">
<div>
<p className="text-label-md text-secondary mb-xs">Total Employees</p>
<p className="text-title-lg font-bold">12,482</p>
</div>
<div>
<p className="text-label-md text-secondary mb-xs">Gross Pay</p>
<p className="text-title-lg font-bold">$4,821,090.45</p>
</div>
<div>
<p className="text-label-md text-secondary mb-xs">Deductions</p>
<p className="text-title-lg font-bold text-error">$842,102.12</p>
</div>
</div>

<div className="absolute -right-16 -top-16 w-48 h-48 opacity-5 pointer-events-none">
<svg className="text-primary" fill="none" stroke="currentColor" viewBox="0 0 100 100">
<path d="M0 20 H100 M0 40 H100 M0 60 H100 M0 80 H100 M20 0 V100 M40 0 V100 M60 0 V100 M80 0 V100" stroke-width="0.5"></path>
</svg>
</div>
</div>

<div className="md:col-span-4 bg-white border border-outline-variant rounded-xl p-lg flex flex-col">
<h4 className="font-title-lg text-title-lg mb-lg flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" data-icon="lan">lan</span>
                                Active Workers
                            </h4>
<div className="flex-1 space-y-md">
<div className="flex items-center justify-between p-sm bg-surface-container-low rounded-lg border border-outline-variant/30">
<div className="flex items-center gap-sm">
<span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
<span className="font-mono text-body-md">worker-node-01</span>
</div>
<span className="text-label-md font-bold text-primary">BUSY</span>
</div>
<div className="flex items-center justify-between p-sm bg-surface-container-low rounded-lg border border-outline-variant/30">
<div className="flex items-center gap-sm">
<span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
<span className="font-mono text-body-md">worker-node-02</span>
</div>
<span className="text-label-md font-bold text-primary">BUSY</span>
</div>
<div className="flex items-center justify-between p-sm bg-surface-container-low rounded-lg border border-outline-variant/30">
<div className="flex items-center gap-sm">
<span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
<span className="font-mono text-body-md">worker-node-03</span>
</div>
<span className="text-label-md font-bold text-secondary">SYNCING</span>
</div>
<div className="flex-1 min-h-[100px] flex items-end">
<div className="w-full h-16 flex items-end gap-1">
<div className="flex-1 bg-primary-container h-[20%] rounded-t-sm"></div>
<div className="flex-1 bg-primary-container h-[40%] rounded-t-sm"></div>
<div className="flex-1 bg-primary-container h-[80%] rounded-t-sm"></div>
<div className="flex-1 bg-primary-container h-[60%] rounded-t-sm"></div>
<div className="flex-1 bg-primary-container h-[95%] rounded-t-sm"></div>
<div className="flex-1 bg-primary-container h-[70%] rounded-t-sm"></div>
<div className="flex-1 bg-primary-container h-[30%] rounded-t-sm"></div>
<div className="flex-1 bg-primary-container h-[50%] rounded-t-sm"></div>
</div>
</div>
<p className="text-center text-label-md text-secondary">Queue Throughput: 142 msgs/sec</p>
</div>
</div>
</div>

<div className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden">
<div className="px-lg py-md border-b border-outline-variant flex justify-between items-center">
<h3 className="font-title-lg text-title-lg">Recent Payroll History</h3>
<div className="flex gap-sm">
<button className="px-sm py-xs border border-outline-variant rounded hover:bg-surface-container-low text-label-md font-semibold transition-colors">EXPORT CSV</button>
<button className="px-sm py-xs border border-outline-variant rounded hover:bg-surface-container-low text-label-md font-semibold transition-colors">FILTER</button>
</div>
</div>
<table className="w-full text-left">
<thead className="bg-surface-container-low/50 text-label-md font-bold text-secondary uppercase tracking-widest border-b border-outline-variant">
<tr>
<th className="px-lg py-md">Reference ID</th>
<th className="px-lg py-md">Cycle Name</th>
<th className="px-lg py-md text-center">Date Launched</th>
<th className="px-lg py-md text-center">Status</th>
<th className="px-lg py-md text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md font-mono text-primary">RUN-9821-SEPT</td>
<td className="px-lg py-md font-medium">September 2023 End-of-Month</td>
<td className="px-lg py-md text-center text-on-surface-variant">Sept 30, 2023</td>
<td className="px-lg py-md">
<div className="flex justify-center">
<span className="px-sm py-xs bg-[#16A34A]/10 text-[#16A34A] rounded text-[11px] font-bold border border-[#16A34A]/20">COMPLETED</span>
</div>
</td>
<td className="px-lg py-md text-right">
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors" data-icon="visibility">visibility</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md font-mono text-primary">RUN-7654-BONUS</td>
<td className="px-lg py-md font-medium">Q3 Sales Commission Bonus</td>
<td className="px-lg py-md text-center text-on-surface-variant">Oct 12, 2023</td>
<td className="px-lg py-md">
<div className="flex justify-center">
<span className="px-sm py-xs bg-primary-container/10 text-primary-container rounded text-[11px] font-bold border border-primary-container/20">PROCESSING</span>
</div>
</td>
<td className="px-lg py-md text-right">
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors" data-icon="pause_circle">pause_circle</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors bg-error-container/5">
<td className="px-lg py-md font-mono text-primary">RUN-1243-CORRECT</td>
<td className="px-lg py-md font-medium">Correction Run - EMEA Branch</td>
<td className="px-lg py-md text-center text-on-surface-variant">Oct 14, 2023</td>
<td className="px-lg py-md">
<div className="flex justify-center">
<span className="px-sm py-xs bg-error/10 text-error rounded text-[11px] font-bold border border-error/20">FAILED</span>
</div>
</td>
<td className="px-lg py-md text-right flex gap-md justify-end">
<button className="text-error font-bold text-label-md flex items-center gap-xs hover:underline">
<span className="material-symbols-outlined text-[16px]" data-icon="refresh">refresh</span>
                                            RETRY
                                        </button>
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors" data-icon="error">error</button>
</td>
</tr>
</tbody>
</table>
<div className="px-lg py-md flex justify-between items-center text-body-md text-on-surface-variant border-t border-outline-variant">
<span>Showing 1-3 of 42 payroll runs</span>
<div className="flex gap-md">
<button className="p-xs hover:bg-surface-container-low rounded border border-outline-variant"><span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span></button>
<button className="p-xs hover:bg-surface-container-low rounded border border-outline-variant"><span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span></button>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default RunDashboard;
