import React from 'react';


const ReorderAutomation: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 bg-surface border-b border-outline-variant sticky top-0">
<div className="flex items-center gap-md flex-1">
<div className="relative w-full max-w-md hidden md:block">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full bg-surface-container-low border-none rounded-lg pl-xl py-1 text-body-md font-body-md focus:ring-1 focus:ring-primary" placeholder="Global Search (CMD+K)" type="text" />
</div>
</div>
<div className="flex items-center gap-lg">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-outline cursor-pointer hover:bg-surface-container-low p-1 rounded transition-colors">notifications</span>
<span className="material-symbols-outlined text-outline cursor-pointer hover:bg-surface-container-low p-1 rounded transition-colors">help</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:bg-surface-container-low p-1 rounded transition-colors">cloud_done</span>
</div>
<div className="flex items-center gap-sm cursor-pointer ml-sm">
<div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant">
<img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAymrKEhosAjFg6yygkFsavr9WeEWdAmUaQ5fWS-mlTNWAL7ClbfDdOe_jmtZNIBqBYOOA8QyOY3FmMVnSP8krsdoL31CoNe6nNLW_uq0Kjr4yK6XFH6e2ol2dW5owybMD5HrP72tPUyVcr0X0t_CJOrXDCICtDrcdmRUhgfbd7rkyiDBFWJONoB4uRZpNiWExOtSxOO8BzsfceFGwuXoNa_9ci4AGuyfPxF1XfpR2zKRdStKY-5Z0d1o2cs6Yv-AJcaNPD4T7tGQQ" />
</div>
</div>
</div>
</header>
<div className="p-lg md:p-xl space-y-lg max-w-[1600px] mx-auto w-full">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
<div className="space-y-xs">
<div className="flex items-center gap-xs text-outline font-label-md text-label-md uppercase tracking-wider">
<span>Supply Chain</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-bold">Reorder Automation</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Reorder Control Center</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">AI-triggered reorder drafts based on dynamic forecasting and real-time inventory thresholds.</p>
</div>
<div className="flex items-center gap-sm">
<button className="bg-surface-container-lowest border border-outline-variant text-on-surface-variant font-label-md text-label-md px-md py-sm rounded-lg flex items-center gap-xs hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                        Filters
                    </button>
<button className="bg-primary text-white font-label-md text-label-md px-md py-sm rounded-lg flex items-center gap-xs hover:bg-[#0B7DFF] transition-all active:scale-95 shadow-md active:scale-95 text-on-primary">
<span className="material-symbols-outlined text-[18px]">publish</span>
                        Export Summary
                    </button>
</div>
</div>

<div className="bento-grid">
<div className="col-span-12 md:col-span-3 bg-surface-container-lowest border border-outline-variant p-md rounded-xl space-y-sm">
<div className="flex justify-between items-start">
<div className="p-xs bg-primary-container/10 rounded-lg">
<span className="material-symbols-outlined text-primary">robot_2</span>
</div>
<span className="text-success Green font-label-md text-[10px] bg-primary-container/20 text-on-primary-container px-xs py-0.5 rounded">Active</span>
</div>
<div>
<p className="text-outline font-label-md text-label-md">Pending AI Drafts</p>
<h3 className="font-headline-md text-headline-md">24 <span className="text-body-md font-normal text-outline">Items</span></h3>
</div>
</div>
<div className="col-span-12 md:col-span-3 bg-surface-container-lowest border border-outline-variant p-md rounded-xl space-y-sm">
<div className="flex justify-between items-start">
<div className="p-xs bg-error-container/10 rounded-lg">
<span className="material-symbols-outlined text-error">warning</span>
</div>
<span className="text-error Red font-label-md text-[10px] bg-error-container text-on-error-container px-xs py-0.5 rounded">Critical</span>
</div>
<div>
<p className="text-outline font-label-md text-label-md">Below Threshold</p>
<h3 className="font-headline-md text-headline-md">12 <span className="text-body-md font-normal text-outline">SKUs</span></h3>
</div>
</div>
<div className="col-span-12 md:col-span-3 bg-surface-container-lowest border border-outline-variant p-md rounded-xl space-y-sm">
<div className="flex justify-between items-start">
<div className="p-xs bg-tertiary-container/10 rounded-lg">
<span className="material-symbols-outlined text-tertiary">trending_up</span>
</div>
</div>
<div>
<p className="text-outline font-label-md text-label-md">Forecasted Spend</p>
<h3 className="font-headline-md text-headline-md">$142.8k <span className="text-body-md font-normal text-outline">USD</span></h3>
</div>
</div>
<div className="col-span-12 md:col-span-3 bg-surface-container-lowest border border-outline-variant p-md rounded-xl space-y-sm">
<div className="flex justify-between items-start">
<div className="p-xs bg-secondary-container/10 rounded-lg">
<span className="material-symbols-outlined text-secondary">verified</span>
</div>
</div>
<div>
<p className="text-outline font-label-md text-label-md">Automation Accuracy</p>
<h3 className="font-headline-md text-headline-md">98.2% <span className="text-body-md font-normal text-outline">Last 30d</span></h3>
</div>
</div>
</div>

<div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="p-md border-b border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-md">
<div className="flex items-center gap-md w-full sm:w-auto">
<h3 className="font-title-lg text-title-lg">Reorder Drafts</h3>
<div className="flex bg-surface-container-low p-1 rounded-lg">
<button className="bg-white shadow-sm px-md py-1 rounded-md font-label-md text-label-md text-primary">All Drafts</button>
<button className="px-md py-1 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface">Urgent Only</button>
</div>
</div>
<div className="flex items-center gap-sm">
<span className="font-body-md text-body-md text-outline">Batch Action:</span>
<button className="bg-surface-container-low border border-outline-variant text-on-surface-variant px-sm py-1 rounded font-label-md text-label-md hover:bg-surface-container-high">Select All</button>
<button className="bg-primary-container text-on-primary-container px-md py-1 rounded font-label-md text-label-md hover:opacity-90">Approve Selected</button>
</div>
</div>
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface sticky top-0 border-b border-outline-variant">
<th className="px-md py-sm font-label-md text-label-md text-outline uppercase">Item</th>
<th className="px-md py-sm font-label-md text-label-md text-outline uppercase">Forecasted Demand <span className="material-symbols-outlined text-[14px]">info</span></th>
<th className="px-md py-sm font-label-md text-label-md text-outline uppercase">Current Stock</th>
<th className="px-md py-sm font-label-md text-label-md text-outline uppercase">Threshold</th>
<th className="px-md py-sm font-label-md text-label-md text-outline uppercase">Order Quantity</th>
<th className="px-md py-sm font-label-md text-label-md text-outline uppercase">Recommended Vendor</th>
<th className="px-md py-sm font-label-md text-label-md text-outline uppercase text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="group hover:bg-surface-container-low transition-colors duration-150">
<td className="px-md py-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-outline">memory</span>
</div>
<div>
<p className="font-body-md text-body-md font-bold text-on-surface">Neural Core X1-Pro</p>
<p className="font-code-sm text-code-sm text-outline">SKU-29304-NC</p>
</div>
</div>
</td>
<td className="px-md py-md">
<div className="flex items-baseline gap-xs">
<span className="font-body-md text-body-md font-semibold text-on-surface">450 units</span>
<span className="text-[10px] text-success Green font-bold">↑ 12%</span>
</div>
<p className="text-[11px] text-outline">Next 30 Days</p>
</td>
<td className="px-md py-md">
<div className="w-full bg-surface-container-low h-1.5 rounded-full mt-2 mb-1 overflow-hidden">
<div className="bg-error h-full" style={{width: "15%"}}></div>
</div>
<span className="font-body-md text-body-md font-bold text-error">42</span> <span className="text-body-md text-outline">/ 300 target</span>
</td>
<td className="px-md py-md">
<span className="font-body-md text-body-md text-on-surface font-medium">80 units</span>
<button className="block text-primary text-[11px] hover:underline font-semibold">Adjust Threshold</button>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-sm">
<input className="w-20 px-2 py-1 bg-surface-container-lowest border border-outline-variant rounded text-body-md font-bold text-primary focus:ring-1 focus:ring-primary-container outline-none" type="number" value="300" />
<span className="material-symbols-outlined text-outline text-[18px]">auto_fix_high</span>
</div>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-xs">
<span className="font-body-md text-body-md text-on-surface">Quantum Silicon Inc.</span>
<span className="material-symbols-outlined text-success Green text-[16px]">verified</span>
</div>
<p className="text-[11px] text-outline">Lead Time: 4 days</p>
</td>
<td className="px-md py-md text-right">
<div className="flex items-center justify-end gap-sm">
<button className="px-md py-1.5 bg-primary text-white font-label-md text-label-md rounded hover:bg-[#0B7DFF] shadow-sm transition-all transform active:scale-95 active:scale-95 text-on-primary">Approve &amp; Create PO</button>
<button className="p-1.5 hover:bg-surface-container-high rounded text-outline transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</div>
</td>
</tr>

<tr className="group hover:bg-surface-container-low transition-colors duration-150">
<td className="px-md py-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-outline">router</span>
</div>
<div>
<p className="font-body-md text-body-md font-bold text-on-surface">5G Node Interface v4</p>
<p className="font-code-sm text-code-sm text-outline">SKU-11209-GT</p>
</div>
</div>
</td>
<td className="px-md py-md">
<div className="flex items-baseline gap-xs">
<span className="font-body-md text-body-md font-semibold text-on-surface">1,200 units</span>
<span className="text-[10px] text-on-surface-variant font-bold">~ Stable</span>
</div>
<p className="text-[11px] text-outline">Next 30 Days</p>
</td>
<td className="px-md py-md">
<div className="w-full bg-surface-container-low h-1.5 rounded-full mt-2 mb-1 overflow-hidden">
<div className="bg-primary-container h-full" style={{width: "35%"}}></div>
</div>
<span className="font-body-md text-body-md font-bold text-on-surface">320</span> <span className="text-body-md text-outline">/ 1,000 target</span>
</td>
<td className="px-md py-md">
<span className="font-body-md text-body-md text-on-surface font-medium">400 units</span>
<button className="block text-primary text-[11px] hover:underline font-semibold">Adjust Threshold</button>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-sm">
<input className="w-20 px-2 py-1 bg-surface-container-lowest border border-outline-variant rounded text-body-md font-bold text-primary focus:ring-1 focus:ring-primary-container outline-none" type="number" value="700" />
<span className="material-symbols-outlined text-outline text-[18px]">auto_fix_high</span>
</div>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-xs">
<span className="font-body-md text-body-md text-on-surface">Global Dynamics Lab</span>
</div>
<p className="text-[11px] text-outline">Lead Time: 12 days</p>
</td>
<td className="px-md py-md text-right">
<div className="flex items-center justify-end gap-sm">
<button className="px-md py-1.5 bg-primary text-white font-label-md text-label-md rounded hover:bg-[#0B7DFF] shadow-sm transition-all transform active:scale-95 active:scale-95 text-on-primary">Approve &amp; Create PO</button>
<button className="p-1.5 hover:bg-surface-container-high rounded text-outline transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</div>
</td>
</tr>

<tr className="group hover:bg-surface-container-low transition-colors duration-150">
<td className="px-md py-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-outline">developer_board</span>
</div>
<div>
<p className="font-body-md text-body-md font-bold text-on-surface">Optic Bus Connector</p>
<p className="font-code-sm text-code-sm text-outline">SKU-88210-OP</p>
</div>
</div>
</td>
<td className="px-md py-md">
<div className="flex items-baseline gap-xs">
<span className="font-body-md text-body-md font-semibold text-on-surface">85 units</span>
<span className="text-[10px] text-error Red font-bold">↓ 4%</span>
</div>
<p className="text-[11px] text-outline">Next 30 Days</p>
</td>
<td className="px-md py-md">
<div className="w-full bg-surface-container-low h-1.5 rounded-full mt-2 mb-1 overflow-hidden">
<div className="bg-warning Orange bg-[#F59E0B] h-full" style={{width: "25%"}}></div>
</div>
<span className="font-body-md text-body-md font-bold text-[#F59E0B]">22</span> <span className="text-body-md text-outline">/ 100 target</span>
</td>
<td className="px-md py-md">
<span className="font-body-md text-body-md text-on-surface font-medium">30 units</span>
<button className="block text-primary text-[11px] hover:underline font-semibold">Adjust Threshold</button>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-sm">
<input className="w-20 px-2 py-1 bg-surface-container-lowest border border-outline-variant rounded text-body-md font-bold text-primary focus:ring-1 focus:ring-primary-container outline-none" type="number" value="80" />
<span className="material-symbols-outlined text-outline text-[18px]">auto_fix_high</span>
</div>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-xs">
<span className="font-body-md text-body-md text-on-surface">Spectrum Logistics</span>
<span className="material-symbols-outlined text-error Red text-[16px]">warning</span>
</div>
<p className="text-[11px] text-error font-medium">Risk: Delay expected</p>
</td>
<td className="px-md py-md text-right">
<div className="flex items-center justify-end gap-sm">
<button className="px-md py-1.5 bg-primary text-white font-label-md text-label-md rounded hover:bg-[#0B7DFF] shadow-sm transition-all transform active:scale-95 active:scale-95 text-on-primary">Approve &amp; Create PO</button>
<button className="p-1.5 hover:bg-surface-container-high rounded text-outline transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-md border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-md bg-surface">
<div className="flex items-center gap-md font-body-md text-body-md text-on-surface-variant">
<span>Showing 1-3 of 24 drafts</span>
<div className="h-4 w-px bg-outline-variant"></div>
<div className="flex items-center gap-sm">
<span>Rows per page:</span>
<select className="bg-transparent border-none text-on-surface font-semibold focus:ring-0">
<option>10</option>
<option>25</option>
<option>50</option>
</select>
</div>
</div>
<div className="flex items-center gap-sm">
<button className="p-1 rounded hover:bg-surface-container-high text-outline transition-colors"><span className="material-symbols-outlined">first_page</span></button>
<button className="p-1 rounded hover:bg-surface-container-high text-outline transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
<div className="flex items-center gap-xs">
<button className="w-8 h-8 rounded bg-primary text-white font-label-md text-label-md active:scale-95 text-on-primary">1</button>
<button className="w-8 h-8 rounded hover:bg-surface-container-high font-label-md text-label-md transition-colors">2</button>
<button className="w-8 h-8 rounded hover:bg-surface-container-high font-label-md text-label-md transition-colors">3</button>
</div>
<button className="p-1 rounded hover:bg-surface-container-high text-outline transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
<button className="p-1 rounded hover:bg-surface-container-high text-outline transition-colors"><span className="material-symbols-outlined">last_page</span></button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-lg mt-xl">
<div className="bg-surface-container border border-outline-variant p-lg rounded-xl flex items-start gap-md">
<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>insights</span>
</div>
<div className="space-y-sm">
<h4 className="font-title-lg text-title-lg text-on-surface">Forecast Confidence Insight</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Neural engine predicts a 15% surge in 5G interface demand due to upcoming regional deployment phase. Recommended reorder buffer has been adjusted automatically to prevent stockout.</p>
<div className="flex gap-md pt-sm">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span className="font-label-md text-label-md text-primary">Buffer Increased: +12 units</span>
</div>
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
<span className="font-label-md text-label-md text-primary">Confidence Score: 94%</span>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-low border border-outline-variant p-lg rounded-xl flex flex-col justify-between">
<div className="flex justify-between items-start">
<h4 className="font-title-lg text-title-lg text-on-surface">Auto-Approval Settings</h4>
<div className="relative inline-block w-10 h-6 align-middle select-none transition duration-200 ease-in">
<input checked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-primary-container" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-primary-fixed cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
<p className="font-body-md text-body-md text-outline mt-sm">Items with high confidence (90%+) and value &lt; $5,000 are currently set to auto-approve. You have 4 items eligible today.</p>
<div className="mt-md flex justify-end">
<button className="text-primary font-label-md text-label-md hover:underline">Review Auto-Approval Logs</button>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default ReorderAutomation;
