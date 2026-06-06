import React from 'react';


const ArInvoicing: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 sticky top-0 bg-surface border-b border-outline-variant">
<div className="flex items-center gap-lg flex-1">
<div className="relative w-full max-w-md group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
<input className="w-full bg-surface-container-low border-none rounded-full pl-10 pr-4 py-1.5 text-body-md focus:ring-1 focus:ring-primary placeholder:text-outline-variant transition-all" placeholder="Search Invoices (CMD+K)" type="text" />
</div>
</div>
<div className="flex items-center gap-md text-primary">
<button className="p-1.5 rounded-full hover:bg-surface-container-low transition-colors duration-150">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-1.5 rounded-full hover:bg-surface-container-low transition-colors duration-150">
<span className="material-symbols-outlined">help</span>
</button>
<button className="p-1.5 rounded-full hover:bg-surface-container-low transition-colors duration-150">
<span className="material-symbols-outlined">cloud_done</span>
</button>
<div className="h-6 w-[1px] bg-outline-variant mx-1"></div>
<img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX7JINvSVmA02nWSV-fJBqRAMggSFRZtLNu5E-pgye9P-km1_8w4eJocqnsOaZpJf1VuWJoTFtxFZ5Qa3mYXOXVMO2Hdf9M_-uX7FI4saA2mvtxY7kdxUZCeh02IRLSXt5UDzSy_WoC3_S7nJITPI7t3zww9zZ30UxqpHlrz3MaOqKreq3JGqZNHnwSYQsVvIg76e0f-gAcK_38v-ZyCwrrzyHNLLHtYdjJ9AjN5EK2ug85vWADg1Fb8KoglClZhTI3S9QTO161NM" />
</div>
</header>

<div className="p-lg md:p-xl flex flex-col gap-lg">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Accounts Receivable</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Manage customer billing and reconcile payments</p>
</div>
<div className="flex gap-md">
<button className="px-lg py-md border border-primary text-primary rounded-lg font-title-lg text-sm hover:bg-primary/5 transition-all active:scale-95 flex items-center gap-2">
<span className="material-symbols-outlined">download</span>
                            Export AR Report
                        </button>
<button className="px-lg py-md bg-primary text-on-primary rounded-lg font-title-lg text-sm hover:bg-[#0b7dff] transition-all active:scale-95 shadow-sm flex items-center gap-2" >
<span className="material-symbols-outlined">add_card</span>
                            Record Payment
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant flex flex-col gap-2">
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[20px]">pending_actions</span>
<span className="font-label-md text-label-md uppercase tracking-wider">Total Outstanding</span>
</div>
<p className="font-headline-lg text-headline-lg text-primary">$412,850.00</p>
<div className="flex items-center gap-1 text-error text-xs font-semibold">
<span className="material-symbols-outlined text-xs">trending_up</span>
                            +12% from last month
                        </div>
</div>
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant flex flex-col gap-2">
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[20px]">event_busy</span>
<span className="font-label-md text-label-md uppercase tracking-wider">Past Due</span>
</div>
<p className="font-headline-lg text-headline-lg text-error">$64,210.00</p>
<span className="text-on-surface-variant text-xs">22 invoices overdue</span>
</div>
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant flex flex-col gap-2">
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
<span className="font-label-md text-label-md uppercase tracking-wider">Collected (MTD)</span>
</div>
<p className="font-headline-lg text-headline-lg text-primary-container">$128,400.00</p>
<div className="flex items-center gap-1 text-success Green text-xs font-semibold" style={{color: "#16A34A"}}>
<span className="material-symbols-outlined text-xs">trending_up</span>
                            84% of target
                        </div>
</div>
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant flex flex-col gap-2">
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[20px]">schedule</span>
<span className="font-label-md text-label-md uppercase tracking-wider">Avg. Days to Pay</span>
</div>
<p className="font-headline-lg text-headline-lg">24.5 Days</p>
<span className="text-on-surface-variant text-xs">-2 days vs Q3 average</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden flex flex-col">
<div className="px-lg py-md bg-surface-container-low border-b border-outline-variant flex justify-between items-center">
<h2 className="font-title-lg text-title-lg text-on-surface">AR Invoices</h2>
<div className="flex items-center gap-md">
<div className="flex items-center bg-white border border-outline-variant rounded-lg p-1">
<button className="px-3 py-1 text-xs font-semibold bg-surface-container-high rounded text-on-surface">All</button>
<button className="px-3 py-1 text-xs font-semibold text-secondary hover:text-on-surface">Overdue</button>
<button className="px-3 py-1 text-xs font-semibold text-secondary hover:text-on-surface">Pending</button>
</div>
<button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors">
<span className="material-symbols-outlined text-outline">filter_list</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface border-b border-outline-variant">
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider">Invoice ID</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider">Customer</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider">Due Date</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider text-right">Amount</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider text-right">Balance</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider">Status</th>
<th className="px-lg py-md"></th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer" >
<td className="px-lg py-md font-body-md font-semibold text-primary">INV-8821</td>
<td className="px-lg py-md font-body-md text-on-surface">Aether Dynamics</td>
<td className="px-lg py-md font-body-md text-on-surface-variant">Oct 12, 2023</td>
<td className="px-lg py-md font-body-md text-on-surface text-right">$12,400.00</td>
<td className="px-lg py-md font-body-md text-on-surface text-right font-semibold">$4,200.00</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F59E0B]/10 text-[#F59E0B]">
                                            Partial
                                        </span>
</td>
<td className="px-lg py-md text-right">
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer" >
<td className="px-lg py-md font-body-md font-semibold text-primary">INV-8822</td>
<td className="px-lg py-md font-body-md text-on-surface">Vertex Solutions</td>
<td className="px-lg py-md font-body-md text-error">Oct 05, 2023</td>
<td className="px-lg py-md font-body-md text-on-surface text-right">$8,900.00</td>
<td className="px-lg py-md font-body-md text-on-surface text-right font-semibold">$8,900.00</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#DC2626]/10 text-[#DC2626]">
                                            Overdue
                                        </span>
</td>
<td className="px-lg py-md text-right">
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer" >
<td className="px-lg py-md font-body-md font-semibold text-primary">INV-8823</td>
<td className="px-lg py-md font-body-md text-on-surface">Skyline Infra</td>
<td className="px-lg py-md font-body-md text-on-surface-variant">Oct 28, 2023</td>
<td className="px-lg py-md font-body-md text-on-surface text-right">$22,500.00</td>
<td className="px-lg py-md font-body-md text-on-surface text-right font-semibold">$22,500.00</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#475569]/10 text-[#475569]">
                                            Draft
                                        </span>
</td>
<td className="px-lg py-md text-right">
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer" >
<td className="px-lg py-md font-body-md font-semibold text-primary">INV-8824</td>
<td className="px-lg py-md font-body-md text-on-surface">Lumina Corp</td>
<td className="px-lg py-md font-body-md text-on-surface-variant">Oct 10, 2023</td>
<td className="px-lg py-md font-body-md text-on-surface text-right">$5,400.00</td>
<td className="px-lg py-md font-body-md text-on-surface text-right font-semibold">$0.00</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#16A34A]/10 text-[#16A34A]">
                                            Paid
                                        </span>
</td>
<td className="px-lg py-md text-right">
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-lg py-md border-t border-outline-variant bg-surface flex justify-between items-center text-on-surface-variant text-xs font-medium">
<div className="flex items-center gap-md">
<span>Showing 1-4 of 128 results</span>
<div className="flex items-center gap-1">
<span className="text-outline">Results per page:</span>
<select className="bg-transparent border-none py-0 text-xs focus:ring-0 cursor-pointer">
<option>10</option>
<option>25</option>
<option>50</option>
</select>
</div>
</div>
<div className="flex items-center gap-sm">
<button className="p-1 hover:bg-surface-container-low rounded border border-outline-variant disabled:opacity-30" disabled={true}>
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<span className="px-2">Page 1 of 32</span>
<button className="p-1 hover:bg-surface-container-low rounded border border-outline-variant">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default ArInvoicing;
