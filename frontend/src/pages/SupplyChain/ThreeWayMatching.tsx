import React from 'react';


const ThreeWayMatching: React.FC = () => {


  return (
    <div className="w-full">
      
<div className="max-w-7xl mx-auto">

<div className="flex justify-between items-end mb-xl">
<div>
<div className="flex items-center gap-sm text-secondary mb-xs">
<span className="font-label-md text-label-md">Supply Chain</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="font-label-md text-label-md">Accounts Payable</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">3-Way Matching Reconciliation</h1>
</div>
<div className="flex gap-md">
<button className="px-md py-sm bg-white border border-outline text-primary font-semibold rounded-lg hover:bg-surface-container-low transition-all">
                            Export Report
                        </button>
<button className="px-md py-sm bg-primary text-on-primary font-semibold rounded-lg hover:bg-[#0B7DFF] shadow-sm transition-all flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">add</span>
                            New Reconciliation
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-lg mb-xl">
<div className="glass-card p-lg rounded-xl">
<div className="text-secondary font-label-md text-label-md mb-sm uppercase tracking-wider">Total Pending</div>
<div className="text-headline-md font-headline-md text-on-surface">42 Units</div>
<div className="mt-xs text-xs text-primary font-medium flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">schedule</span> Processing
                        </div>
</div>
<div className="glass-card p-lg rounded-xl border-l-4 border-primary">
<div className="text-secondary font-label-md text-label-md mb-sm uppercase tracking-wider">Perfect Matches</div>
<div className="text-headline-md font-headline-md text-on-surface">1,284</div>
<div className="mt-xs text-xs text-green-600 font-medium flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">check_circle</span> 94% Accuracy
                        </div>
</div>
<div className="glass-card p-lg rounded-xl border-l-4 border-error">
<div className="text-secondary font-label-md text-label-md mb-sm uppercase tracking-wider">Price Mismatches</div>
<div className="text-headline-md font-headline-md text-error">12 Flagged</div>
<div className="mt-xs text-xs text-error font-medium flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px] status-pulse">error</span> Action Required
                        </div>
</div>
<div className="glass-card p-lg rounded-xl border-l-4 border-amber-500">
<div className="text-secondary font-label-md text-label-md mb-sm uppercase tracking-wider">Qty Variance</div>
<div className="text-headline-md font-headline-md text-on-surface">8 Pending</div>
<div className="mt-xs text-xs text-amber-600 font-medium">Partial Receipts</div>
</div>
</div>

<div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm">
<div className="p-md bg-surface-container-low border-b border-outline-variant flex justify-between items-center">
<div className="flex gap-lg">
<button className="text-primary font-bold border-b-2 border-primary pb-xs text-body-md">All Entries</button>
<button className="text-on-surface-variant font-medium pb-xs text-body-md hover:text-primary">Mismatches</button>
<button className="text-on-surface-variant font-medium pb-xs text-body-md hover:text-primary">Pending Approval</button>
</div>
<div className="flex items-center gap-sm">
<span className="text-body-md text-secondary">Filter by Vendor:</span>
<select className="text-xs border-outline-variant rounded bg-white py-1">
<option>All Vendors</option>
<option>TechLogistics Inc.</option>
<option>Prime Supplies</option>
</select>
</div>
</div>
<table className="w-full text-left">
<thead className="bg-surface-bright text-on-surface-variant text-[11px] uppercase tracking-widest font-bold">
<tr>
<th className="px-md py-sm border-b border-outline-variant">Transaction ID</th>
<th className="px-md py-sm border-b border-outline-variant">Purchase Order</th>
<th className="px-md py-sm border-b border-outline-variant">Goods Receipt</th>
<th className="px-md py-sm border-b border-outline-variant">Invoice Detail</th>
<th className="px-md py-sm border-b border-outline-variant">Status</th>
<th className="px-md py-sm border-b border-outline-variant text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant text-body-md">

<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="px-md py-md">
<div className="font-semibold text-on-surface">TRX-99201</div>
<div className="text-[10px] text-secondary">TechLogistics Inc.</div>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-sm">
<div className="text-xs font-mono bg-surface-container px-2 py-1 rounded">PO-8821</div>
<span className="text-primary font-bold">$12,400.00</span>
</div>
<div className="text-[10px] text-secondary">Qty: 500 units</div>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-sm">
<div className="text-xs font-mono bg-surface-container px-2 py-1 rounded">GR-7712</div>
<span className="text-primary font-bold">$12,400.00</span>
</div>
<div className="text-[10px] text-secondary">Qty: 500 units</div>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-sm">
<div className="text-xs font-mono bg-surface-container px-2 py-1 rounded">INV-440</div>
<span className="text-primary font-bold">$12,400.00</span>
</div>
<div className="text-[10px] text-secondary">Qty: 500 units</div>
</td>
<td className="px-md py-md">
<span className="inline-flex items-center gap-xs px-sm py-xs rounded bg-green-50 text-green-700 text-[10px] font-bold border border-green-200 uppercase">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Matched
                                    </span>
</td>
<td className="px-md py-md text-right">
<button className="text-secondary hover:text-primary p-xs rounded-full">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>

<tr className="bg-red-50/30 hover:bg-red-50 transition-colors group">
<td className="px-md py-md">
<div className="font-semibold text-on-surface">TRX-99205</div>
<div className="text-[10px] text-secondary">Prime Supplies</div>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-sm">
<div className="text-xs font-mono bg-surface-container px-2 py-1 rounded">PO-8822</div>
<span className="text-primary font-bold">$4,200.00</span>
</div>
<div className="text-[10px] text-secondary">Qty: 100 units</div>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-sm">
<div className="text-xs font-mono bg-surface-container px-2 py-1 rounded">GR-7715</div>
<span className="text-error font-bold">$4,200.00</span>
</div>
<div className="text-[10px] text-error font-bold italic">Qty: 95 units</div>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-sm">
<div className="text-xs font-mono bg-surface-container px-2 py-1 rounded">INV-442</div>
<span className="text-error font-bold">$4,410.00</span>
</div>
<div className="text-[10px] text-secondary">Qty: 100 units</div>
</td>
<td className="px-md py-md">
<span className="inline-flex items-center gap-xs px-sm py-xs rounded bg-error/10 text-error text-[10px] font-bold border border-error/20 uppercase">
<span className="material-symbols-outlined text-[14px]">warning</span> Mismatch
                                    </span>
</td>
<td className="px-md py-md text-right">
<button className="px-sm py-1 bg-error text-on-error rounded text-[10px] font-bold hover:bg-[#b01616] transition-all opacity-0 group-hover:opacity-100 uppercase tracking-tight" >
                                        Force Approve
                                    </button>
</td>
</tr>

<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="px-md py-md">
<div className="font-semibold text-on-surface">TRX-99208</div>
<div className="text-[10px] text-secondary">Apex Manufacturing</div>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-sm">
<div className="text-xs font-mono bg-surface-container px-2 py-1 rounded">PO-8829</div>
<span className="text-primary font-bold">$18,900.00</span>
</div>
<div className="text-[10px] text-secondary">Qty: 1200 units</div>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-sm italic text-secondary">
<span className="material-symbols-outlined text-[18px]">pending</span>
                                        Waiting for Receipt
                                    </div>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-sm">
<div className="text-xs font-mono bg-surface-container px-2 py-1 rounded">INV-449</div>
<span className="text-primary font-bold">$18,900.00</span>
</div>
<div className="text-[10px] text-secondary">Qty: 1200 units</div>
</td>
<td className="px-md py-md">
<span className="inline-flex items-center gap-xs px-sm py-xs rounded bg-surface-container-high text-on-surface-variant text-[10px] font-bold border border-outline-variant uppercase">
<span className="material-symbols-outlined text-[14px]">hourglass_empty</span> Pending
                                    </span>
</td>
<td className="px-md py-md text-right">
<button className="text-secondary hover:text-primary p-xs rounded-full">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
<div className="p-md bg-surface-bright border-t border-outline-variant flex justify-between items-center text-xs">
<div className="text-secondary">Showing <span className="font-bold text-on-surface">1 - 3</span> of 1,338 transactions</div>
<div className="flex items-center gap-md">
<div className="flex items-center gap-xs">
<span className="text-secondary">Results per page:</span>
<select className="bg-white border-outline-variant rounded p-1">
<option>20</option>
<option>50</option>
<option>100</option>
</select>
</div>
<div className="flex items-center gap-xs">
<button className="p-1 hover:bg-surface-container rounded border border-outline-variant"><span className="material-symbols-outlined text-[16px]">chevron_left</span></button>
<span className="px-2">Page 1 of 67</span>
<button className="p-1 hover:bg-surface-container rounded border border-outline-variant"><span className="material-symbols-outlined text-[16px]">chevron_right</span></button>
</div>
</div>
</div>
</div>

<div className="mt-xl grid grid-cols-1 lg:grid-cols-3 gap-xl">
<div className="lg:col-span-2 glass-card rounded-xl p-lg">
<h3 className="font-title-lg text-title-lg text-on-surface mb-lg flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">analytics</span>
                            Discrepancy Breakdown
                        </h3>
<div className="h-64 flex items-end gap-xl px-lg">
<div className="flex-1 flex flex-col items-center gap-sm">
<div className="w-full bg-primary-container rounded-t-lg" style={{height: "85%"}}></div>
<span className="text-[10px] font-bold text-secondary uppercase">Quantity Match</span>
</div>
<div className="flex-1 flex flex-col items-center gap-sm">
<div className="w-full bg-error rounded-t-lg" style={{height: "15%"}}></div>
<span className="text-[10px] font-bold text-secondary uppercase">Unit Price</span>
</div>
<div className="flex-1 flex flex-col items-center gap-sm">
<div className="w-full bg-amber-400 rounded-t-lg" style={{height: "35%"}}></div>
<span className="text-[10px] font-bold text-secondary uppercase">Tax Logic</span>
</div>
<div className="flex-1 flex flex-col items-center gap-sm">
<div className="w-full bg-secondary-container rounded-t-lg" style={{height: "25%"}}></div>
<span className="text-[10px] font-bold text-secondary uppercase">Partial Receipts</span>
</div>
</div>
</div>
<div className="glass-card rounded-xl p-lg bg-surface-container-low border-dashed border-2">
<h3 className="font-title-lg text-title-lg text-on-surface mb-lg">Match Health</h3>
<div className="flex flex-col items-center justify-center h-full pb-xl">
<div className="relative w-32 h-32 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-container-high" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" stroke-width="8"></circle>
<circle className="text-primary" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" stroke-dasharray="364.4" stroke-dashoffset="36.4" stroke-width="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-headline-md font-headline-md text-primary">92%</span>
<span className="text-[10px] font-bold text-secondary uppercase">Automated</span>
</div>
</div>
<p className="text-body-md text-center text-on-surface-variant mt-lg">
                                Your automated matching rate is 4% higher than last quarter.
                            </p>
<button className="mt-md w-full py-sm bg-white border border-primary text-primary font-bold rounded hover:bg-primary-fixed transition-all text-label-md">
                                VIEW AI RECOMMENDATIONS
                            </button>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default ThreeWayMatching;
