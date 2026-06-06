import React from 'react';


const VendorPortal: React.FC = () => {


  return (
    <div className="w-full">
      

<div className="flex flex-col md:flex-row justify-between items-end gap-md mb-2xl">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Welcome back, Precision Logics</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">External Supplier ID: #SUP-99201-PL</p>
</div>
<div className="flex gap-sm">
<div className="px-md py-sm bg-white border border-outline-variant flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">cloud_done</span>
<span className="font-label-md text-label-md">Synced 2m ago</span>
</div>
</div>
</div>

<div className="bento-grid">

<div className="col-span-12 md:col-span-4 card-elevation-1 p-lg flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-md">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Active Orders</span>
<span className="material-symbols-outlined text-primary">shopping_cart</span>
</div>
<div className="font-display-lg text-display-lg text-on-surface">24</div>
</div>
<div className="mt-lg flex items-center gap-xs text-on-secondary-fixed-variant">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span className="font-code-sm text-code-sm">+3 from last week</span>
</div>
</div>
<div className="col-span-12 md:col-span-4 card-elevation-1 p-lg flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-md">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Pending Invoices</span>
<span className="material-symbols-outlined text-primary">receipt_long</span>
</div>
<div className="font-display-lg text-display-lg text-on-surface">$124.8k</div>
</div>
<div className="mt-lg flex items-center gap-xs text-on-secondary-fixed-variant">
<span className="material-symbols-outlined text-sm">schedule</span>
<span className="font-code-sm text-code-sm">Avg. 12 days to pay</span>
</div>
</div>
<div className="col-span-12 md:col-span-4 card-elevation-1 p-lg flex flex-col justify-between overflow-hidden relative">

<div className="absolute -right-4 -bottom-4 opacity-5">
<span className="material-symbols-outlined text-9xl">verified</span>
</div>
<div>
<div className="flex justify-between items-start mb-md">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Quality Score</span>
<span className="material-symbols-outlined text-primary">verified</span>
</div>
<div className="font-display-lg text-display-lg text-on-surface">98.4%</div>
</div>
<div className="mt-lg">
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full" style={{width: "98.4%"}}></div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-8 card-elevation-1">
<div className="p-lg border-b border-outline-variant flex justify-between items-center">
<h3 className="font-title-lg text-title-lg text-on-surface">Order Tracking</h3>
<button className="text-primary font-label-md text-label-md hover:underline">View All Orders</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-lowest sticky top-0">
<tr className="border-b border-outline-variant">
<th className="p-md font-label-md text-label-md text-on-surface-variant">Order ID</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant">Description</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant text-right">Qty</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant">Status</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant">Date</th>
</tr>
</thead>
<tbody>
<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
<td className="p-md font-code-sm text-code-sm text-primary">#PO-88219</td>
<td className="p-md font-body-md text-body-md">Silicon Wafer Batch A-9</td>
<td className="p-md font-body-md text-body-md text-right">500</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-[#F1F5F9] text-[#475569]">DRAFT</span>
</td>
<td className="p-md font-body-md text-body-md text-on-surface-variant">Oct 24, 2023</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer border-t border-outline-variant">
<td className="p-md font-code-sm text-code-sm text-primary">#PO-88214</td>
<td className="p-md font-body-md text-body-md">Thermal Paste Composite</td>
<td className="p-md font-body-md text-body-md text-right">1,200</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-[#DC2626] bg-opacity-10 text-[#DC2626]">FAILED</span>
</td>
<td className="p-md font-body-md text-body-md text-on-surface-variant">Oct 22, 2023</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer border-t border-outline-variant">
<td className="p-md font-code-sm text-code-sm text-primary">#PO-88102</td>
<td className="p-md font-body-md text-body-md">Optical Sensors G-Type</td>
<td className="p-md font-body-md text-body-md text-right">80</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-[#16A34A] bg-opacity-10 text-[#16A34A]">COMPLETED</span>
</td>
<td className="p-md font-body-md text-body-md text-on-surface-variant">Oct 20, 2023</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer border-t border-outline-variant">
<td className="p-md font-code-sm text-code-sm text-primary">#PO-88098</td>
<td className="p-md font-body-md text-body-md">Titanium Alloy Rods</td>
<td className="p-md font-body-md text-body-md text-right">250</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-[#F59E0B] bg-opacity-10 text-[#F59E0B]">
<span className="material-symbols-outlined text-[12px] animate-spin mr-1">sync</span> RETRYING
                                        </span>
</td>
<td className="p-md font-body-md text-body-md text-on-surface-variant">Oct 19, 2023</td>
</tr>
</tbody>
</table>
</div>
<div className="p-md border-t border-outline-variant bg-surface-container-lowest flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface-variant">Showing 4 of 24 items</span>
<div className="flex gap-xs">
<button className="p-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="p-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 card-elevation-1 p-lg flex flex-col">
<h3 className="font-title-lg text-title-lg text-on-surface mb-lg">Performance Trend</h3>
<div className="flex-1 min-h-[200px] flex items-end justify-between gap-2 px-md">
<div className="w-full bg-surface-container-high h-[60%] rounded-t-sm relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">60%</div>
</div>
<div className="w-full bg-surface-container-high h-[75%] rounded-t-sm relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">75%</div>
</div>
<div className="w-full bg-surface-container-high h-[70%] rounded-t-sm relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">70%</div>
</div>
<div className="w-full bg-primary h-[85%] rounded-t-sm relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">85%</div>
</div>
<div className="w-full bg-primary h-[98%] rounded-t-sm relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">98.4%</div>
</div>
</div>
<div className="flex justify-between mt-sm border-t border-outline-variant pt-xs">
<span className="font-label-md text-label-md text-on-surface-variant">JUN</span>
<span className="font-label-md text-label-md text-on-surface-variant">JUL</span>
<span className="font-label-md text-label-md text-on-surface-variant">AUG</span>
<span className="font-label-md text-label-md text-on-surface-variant">SEP</span>
<span className="font-label-md text-label-md text-primary font-bold">OCT</span>
</div>
<div className="mt-lg p-md bg-primary-fixed-dim bg-opacity-20 rounded border border-primary-container">
<p className="font-body-md text-body-md text-on-primary-fixed-variant">
<strong>Note:</strong> Your defect rate is 0.4% below the threshold. Keep it up for 'Platinum Supplier' status.
                        </p>
</div>
</div>

<div className="col-span-12 md:col-span-6 lg:col-span-4 card-elevation-1 p-lg border-l-4 border-l-primary group cursor-pointer hover:bg-surface-container-low">
<div className="flex gap-md">
<div className="p-3 bg-primary-fixed rounded">
<span className="material-symbols-outlined text-primary">upload_file</span>
</div>
<div>
<h4 className="font-title-lg text-title-lg mb-xs">Submit Invoices</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Batch upload or manual entry for pending orders.</p>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-6 lg:col-span-4 card-elevation-1 p-lg border-l-4 border-l-tertiary group cursor-pointer hover:bg-surface-container-low">
<div className="flex gap-md">
<div className="p-3 bg-surface-container-high rounded">
<span className="material-symbols-outlined text-tertiary">contact_page</span>
</div>
<div>
<h4 className="font-title-lg text-title-lg mb-xs">Contract Review</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Renewal for Q1 2024 is now available for review.</p>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-6 lg:col-span-4 card-elevation-1 p-lg border-l-4 border-l-error group cursor-pointer hover:bg-surface-container-low">
<div className="flex gap-md">
<div className="p-3 bg-error-container rounded">
<span className="material-symbols-outlined text-error">warning</span>
</div>
<div>
<h4 className="font-title-lg text-title-lg mb-xs">Disputes (2)</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Requires your immediate clarification on quantity mismatches.</p>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default VendorPortal;
