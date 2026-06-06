import React from 'react';


const CreateJournalEntry: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-30 bg-surface border-b border-outline-variant">
<div className="flex items-center gap-lg">
<span className="font-headline-md text-headline-md font-bold text-primary">AMDOX</span>
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant scale-75">search</span>
<input className="bg-surface-container-low border-none rounded text-body-md py-1 pl-xl pr-sm w-full focus:ring-1 focus:ring-primary-container" placeholder="Search entries... CMD+K" type="text"/>
</div>
</div>
<div className="flex items-center gap-md">
<button className="material-symbols-outlined text-primary hover:bg-surface-container-low p-1 rounded-full transition-colors" data-icon="notifications">notifications</button>
<button className="material-symbols-outlined text-primary hover:bg-surface-container-low p-1 rounded-full transition-colors" data-icon="help">help</button>
<button className="material-symbols-outlined text-primary hover:bg-surface-container-low p-1 rounded-full transition-colors" data-icon="cloud_done">cloud_done</button>
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant">
<img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDytgPRcnUrPGUWxRCvtVyH_KR-fGCTDuh8lGFt3F734572ePjpe-Yy_cZYYwpB6_WyBZR7RLxlLsZKzUlfHx6AKUXXbAhcEbTfDN9jbTahUCvhjvM14mdsT6Cm2vECiS1FRrNfjqjdqN4eIL33VIuDYCZ6Krd4_xBLB-9FYKTyHKH8NHv5NGAl9hYX2IQr6OUtEWV-8S-W2QU-Scn1Z1oyW-a8drJP3xrSSdkKgIC2d_L6Vk4PWsVLcybjMZoyCrYbxuKqRdHK0Gg"/>
</div>
</div>
</header>

<div className="flex-1 p-lg overflow-y-auto custom-scrollbar">
<div className="flex justify-between items-end mb-lg">
<div>
<nav className="flex items-center gap-xs text-on-surface-variant font-label-md mb-xs">
<span>Finance</span>
<span className="material-symbols-outlined text-[12px]">chevron_right</span>
<span className="text-primary">General Ledger</span>
</nav>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Journal Entries</h2>
</div>
<div className="flex gap-sm">
<button className="px-md py-sm bg-surface border border-outline rounded font-label-md flex items-center gap-sm hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                            Filter
                        </button>
<button className="px-md py-sm bg-primary text-on-primary rounded font-label-md flex items-center gap-sm hover:bg-primary-container transition-colors shadow-sm active:scale-95 duration-150" >
<span className="material-symbols-outlined text-[18px]">add</span>
                            New Entry
                        </button>
</div>
</div>

<div className="bg-surface border border-outline-variant rounded-lg overflow-hidden flex flex-col">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container sticky top-0 z-10 border-b border-outline-variant">
<tr>
<th className="px-md py-sm font-label-md text-on-surface-variant border-r border-outline-variant">Date</th>
<th className="px-md py-sm font-label-md text-on-surface-variant border-r border-outline-variant">ID</th>
<th className="px-md py-sm font-label-md text-on-surface-variant border-r border-outline-variant">Memo</th>
<th className="px-md py-sm font-label-md text-on-surface-variant border-r border-outline-variant">Created By</th>
<th className="px-md py-sm font-label-md text-on-surface-variant border-r border-outline-variant text-right">Debit</th>
<th className="px-md py-sm font-label-md text-on-surface-variant border-r border-outline-variant text-right">Credit</th>
<th className="px-md py-sm font-label-md text-on-surface-variant">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-md py-xs text-body-md">Oct 24, 2023</td>
<td className="px-md py-xs text-body-md font-mono text-primary">JE-90421</td>
<td className="px-md py-xs text-body-md">Quarterly Tax Accrual</td>
<td className="px-md py-xs text-body-md">A. Henderson</td>
<td className="px-md py-xs text-body-md text-right tabular-nums">$12,450.00</td>
<td className="px-md py-xs text-body-md text-right tabular-nums">$12,450.00</td>
<td className="px-md py-xs">
<span className="px-sm py-0.5 rounded text-[10px] font-bold uppercase bg-[#16A34A]/10 text-[#16A34A]">Approved</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-md py-xs text-body-md">Oct 23, 2023</td>
<td className="px-md py-xs text-body-md font-mono text-primary">JE-90420</td>
<td className="px-md py-xs text-body-md">Petty Cash Reimb.</td>
<td className="px-md py-xs text-body-md">S. Miller</td>
<td className="px-md py-xs text-body-md text-right tabular-nums">$450.25</td>
<td className="px-md py-xs text-body-md text-right tabular-nums">$450.25</td>
<td className="px-md py-xs">
<span className="px-sm py-0.5 rounded text-[10px] font-bold uppercase bg-[#475569]/10 text-[#475569]">In Review</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-md py-xs text-body-md">Oct 23, 2023</td>
<td className="px-md py-xs text-body-md font-mono text-primary">JE-90419</td>
<td className="px-md py-xs text-body-md">Office Supply - Staples</td>
<td className="px-md py-xs text-body-md">S. Miller</td>
<td className="px-md py-xs text-body-md text-right tabular-nums">$2,100.00</td>
<td className="px-md py-xs text-body-md text-right tabular-nums">$2,100.00</td>
<td className="px-md py-xs">
<span className="px-sm py-0.5 rounded text-[10px] font-bold uppercase bg-[#16A34A]/10 text-[#16A34A]">Approved</span>
</td>
</tr>
<tr className="bg-error-container/20 hover:bg-error-container/30 transition-colors">
<td className="px-md py-xs text-body-md">Oct 22, 2023</td>
<td className="px-md py-xs text-body-md font-mono text-primary">JE-90418</td>
<td className="px-md py-xs text-body-md">Vendor Adjustment (Error)</td>
<td className="px-md py-xs text-body-md">M. Chen</td>
<td className="px-md py-xs text-body-md text-right tabular-nums">$1,500.00</td>
<td className="px-md py-xs text-body-md text-right tabular-nums">$1,550.00</td>
<td className="px-md py-xs">
<span className="px-sm py-0.5 rounded text-[10px] font-bold uppercase bg-[#ba1a1a]/10 text-[#ba1a1a]">Rejected</span>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-md py-xs text-body-md">Oct 22, 2023</td>
<td className="px-md py-xs text-body-md font-mono text-primary">JE-90417</td>
<td className="px-md py-xs text-body-md">Utility Payment - Oct</td>
<td className="px-md py-xs text-body-md">A. Henderson</td>
<td className="px-md py-xs text-body-md text-right tabular-nums">$8,320.10</td>
<td className="px-md py-xs text-body-md text-right tabular-nums">$8,320.10</td>
<td className="px-md py-xs">
<span className="px-sm py-0.5 rounded text-[10px] font-bold uppercase bg-[#16A34A]/10 text-[#16A34A]">Approved</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-md py-xs text-body-md">Oct 21, 2023</td>
<td className="px-md py-xs text-body-md font-mono text-primary">JE-90416</td>
<td className="px-md py-xs text-body-md">Asset Depreciation</td>
<td className="px-md py-xs text-body-md">System</td>
<td className="px-md py-xs text-body-md text-right tabular-nums">$42,000.00</td>
<td className="px-md py-xs text-body-md text-right tabular-nums">$42,000.00</td>
<td className="px-md py-xs">
<span className="px-sm py-0.5 rounded text-[10px] font-bold uppercase bg-[#16A34A]/10 text-[#16A34A]">Approved</span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between mt-md font-label-md text-secondary">
<div className="flex items-center gap-sm">
<span>Show</span>
<select className="bg-surface border-outline-variant rounded py-1 pl-2 pr-6 text-label-md focus:ring-primary">
<option>10</option>
<option selected={true}>25</option>
<option>50</option>
</select>
<span>entries</span>
</div>
<div className="flex items-center gap-md">
<span>Page 1 of 42</span>
<div className="flex border border-outline-variant rounded">
<button className="p-1 border-r border-outline-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
<button className="p-1 hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default CreateJournalEntry;
