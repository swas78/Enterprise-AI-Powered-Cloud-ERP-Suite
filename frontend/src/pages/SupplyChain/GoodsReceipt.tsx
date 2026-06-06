import React from 'react';


const GoodsReceipt: React.FC = () => {


  return (
    <div className="w-full">
      

<div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<nav className="flex items-center gap-xs text-label-md text-on-surface-variant mb-xs">
<span>Supply Chain</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary">Goods Receipt</span>
</nav>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Goods Receipt Management</h2>
<p className="text-body-md text-on-surface-variant">Monitor, verify, and document incoming shipments from global vendors.</p>
</div>
<div className="flex gap-sm">
<button className="flex items-center gap-xs border border-outline-variant px-md py-sm rounded font-label-md text-label-md hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                        Filters
                    </button>
<button className="flex items-center gap-xs border border-outline-variant px-md py-sm rounded font-label-md text-label-md hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export CSV
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-md">
<div className="bg-surface-container-lowest p-md border border-outline-variant rounded-xl flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Received (MTD)</span>
<span className="material-symbols-outlined text-primary">analytics</span>
</div>
<div className="mt-md">
<div className="font-headline-md text-headline-md">1,284</div>
<div className="text-label-md text-success-green flex items-center gap-xs mt-xs" style={{color: "#16A34A"}}>
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                            12% vs last month
                        </div>
</div>
</div>
<div className="bg-surface-container-lowest p-md border border-outline-variant rounded-xl flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Open POs</span>
<span className="material-symbols-outlined text-tertiary">assignment</span>
</div>
<div className="mt-md">
<div className="font-headline-md text-headline-md">42</div>
<div className="text-label-md text-on-surface-variant mt-xs">Awaiting delivery</div>
</div>
</div>
<div className="bg-surface-container-lowest p-md border border-outline-variant rounded-xl flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Pending Verification</span>
<span className="material-symbols-outlined text-[#F59E0B]">pending_actions</span>
</div>
<div className="mt-md">
<div className="font-headline-md text-headline-md">8</div>
<div className="text-label-md text-on-surface-variant mt-xs">Needs QA approval</div>
</div>
</div>
<div className="bg-primary text-white p-md border-none rounded-xl flex flex-col justify-between overflow-hidden relative">
<div className="z-10 flex justify-between items-start">
<span className="font-label-md text-label-md text-primary-fixed uppercase tracking-wider">Storage Capacity</span>
<span className="material-symbols-outlined text-primary-fixed">warehouse</span>
</div>
<div className="z-10 mt-md">
<div className="font-headline-md text-headline-md">84%</div>
<div className="w-full bg-white/20 h-1 rounded-full mt-sm overflow-hidden">
<div className="bg-white h-full" style={{width: "84%"}}></div>
</div>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10">
<span className="material-symbols-outlined text-[120px]">inventory_2</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
<div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low/50">
<h3 className="font-title-lg text-title-lg">Recent Goods Receipts</h3>
<div className="flex items-center gap-sm">
<div className="text-label-md text-on-surface-variant">Showing 1-10 of 248</div>
<div className="flex gap-xs">
<button className="p-xs border border-outline-variant rounded hover:bg-surface-container-high disabled:opacity-50" disabled={true}>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="p-xs border border-outline-variant rounded hover:bg-surface-container-high">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
<div className="overflow-x-auto scrollbar-hide">
<table className="w-full border-collapse">
<thead>
<tr className="bg-surface-container-low text-left">
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase border-b border-outline-variant">Receipt ID</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase border-b border-outline-variant">PO Reference</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase border-b border-outline-variant">Vendor</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase border-b border-outline-variant">Date Received</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase border-b border-outline-variant">Warehouse Location</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase border-b border-outline-variant">Status</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase border-b border-outline-variant">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-md font-label-md text-label-md text-primary font-bold">GR-2023-8902</td>
<td className="p-md text-body-md text-on-surface">PO-77421</td>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">TK</div>
<span className="text-body-md">Teknova Solutions</span>
</div>
</td>
<td className="p-md text-body-md">Oct 24, 2023 14:32</td>
<td className="p-md text-body-md">WH-A, Bay 14</td>
<td className="p-md">
<span className="px-sm py-xs bg-[#16A34A]/10 text-[#16A34A] rounded-full text-[11px] font-bold uppercase tracking-tight">Completed</span>
</td>
<td className="p-md">
<button className="text-primary hover:underline font-label-md">Details</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-md font-label-md text-label-md text-primary font-bold">GR-2023-8901</td>
<td className="p-md text-body-md text-on-surface">PO-77405</td>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">SM</div>
<span className="text-body-md">Swift Metrics Mfg</span>
</div>
</td>
<td className="p-md text-body-md">Oct 24, 2023 11:15</td>
<td className="p-md text-body-md">WH-B, Dock 2</td>
<td className="p-md">
<span className="px-sm py-xs bg-[#F59E0B]/10 text-[#F59E0B] rounded-full text-[11px] font-bold uppercase tracking-tight">Retrying</span>
</td>
<td className="p-md">
<button className="text-primary hover:underline font-label-md">Details</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-md font-label-md text-label-md text-primary font-bold">GR-2023-8898</td>
<td className="p-md text-body-md text-on-surface">PO-77390</td>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">GL</div>
<span className="text-body-md">Global Logistics</span>
</div>
</td>
<td className="p-md text-body-md">Oct 23, 2023 16:50</td>
<td className="p-md text-body-md">WH-A, Bay 02</td>
<td className="p-md">
<span className="px-sm py-xs bg-outline-variant/30 text-secondary rounded-full text-[11px] font-bold uppercase tracking-tight">Draft</span>
</td>
<td className="p-md">
<button className="text-primary hover:underline font-label-md">Details</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-md font-label-md text-label-md text-primary font-bold">GR-2023-8895</td>
<td className="p-md text-body-md text-on-surface">PO-77382</td>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">NX</div>
<span className="text-body-md">Nexus Corp</span>
</div>
</td>
<td className="p-md text-body-md">Oct 23, 2023 09:20</td>
<td className="p-md text-body-md">WH-C, Cold Storage</td>
<td className="p-md">
<span className="px-sm py-xs bg-[#DC2626]/10 text-[#DC2626] rounded-full text-[11px] font-bold uppercase tracking-tight">Error</span>
</td>
<td className="p-md">
<button className="text-primary hover:underline font-label-md">Details</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

    </div>
  );
};

export default GoodsReceipt;
