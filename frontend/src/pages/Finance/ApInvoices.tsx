import React from 'react';


const ApInvoices: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline z-30">
<div className="flex items-center gap-lg flex-1">
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full bg-surface-container-low border-none rounded-lg pl-xl pr-md py-xs font-body-md text-body-md focus:ring-1 focus:ring-primary" placeholder="Search Invoices (CMD+K)" type="text" />
</div>
</div>
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors" data-icon="cloud_done">cloud_done</span>
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center border border-outline-variant overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAzkf-VGdzIodTfQCFcDM5qPjo5Ny6hhieTxfWUFv_cj0V86Au6kU5aDzRerWotY6H5wD0-o_De_tDjcMIlsSY9wo-Tg-KKPSLfFX5we4AosHFMK8fd2Xysy2lX10zEDx8ugpVV8VWC95VQ5GaEWTXL5YNOeeJk4PIlfNDGDBHHfR1RO9AmvX9GCf1kzb9KQd-F7JxqIV3mA2PnXXlDbKUxW0atFFnqnwyTBeM7aFTcutDVpbDu8PV1iqSR1ErruSuBsNFuSVSehI" />
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-lg space-y-lg hide-scrollbar" id="content-scroll">

<div className="flex justify-between items-end">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-background">Invoices</h2>
<p className="font-body-md text-body-md text-outline">Manage your accounts payable and vendor relationships.</p>
</div>
<button className="bg-primary hover:bg-primary-container text-white px-lg py-sm rounded-lg font-label-md text-label-md interactive-scale shadow-sm flex items-center gap-sm" >
<span className="material-symbols-outlined" data-icon="add">add</span>
                    Upload Invoice
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
<div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex flex-col justify-between">
<span className="text-outline font-label-md">PENDING APPROVAL</span>
<div className="mt-md flex items-baseline gap-xs">
<span className="font-headline-md text-headline-md">24</span>
<span className="text-error font-label-md flex items-center"><span className="material-symbols-outlined text-[14px]">trending_up</span> 12%</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex flex-col justify-between">
<span className="text-outline font-label-md">DUE TODAY</span>
<div className="mt-md flex items-baseline gap-xs">
<span className="font-headline-md text-headline-md">$14,203</span>
<span className="text-primary font-label-md">8 items</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex flex-col justify-between">
<span className="text-outline font-label-md">3-WAY MATCH RATE</span>
<div className="mt-md flex items-baseline gap-xs">
<span className="font-headline-md text-headline-md">94.2%</span>
<div className="w-24 h-2 bg-outline-variant rounded-full overflow-hidden ml-sm">
<div className="h-full bg-primary" style={{width: "94%"}}></div>
</div>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex flex-col justify-between">
<span className="text-outline font-label-md">PROCESSED THIS MONTH</span>
<div className="mt-md flex items-baseline gap-xs">
<span className="font-headline-md text-headline-md">1,842</span>
<span className="text-tertiary font-label-md">Total</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-low border-b border-outline-variant sticky top-0">
<tr>
<th className="p-md font-label-md text-outline uppercase tracking-wider">Invoice ID</th>
<th className="p-md font-label-md text-outline uppercase tracking-wider">Vendor</th>
<th className="p-md font-label-md text-outline uppercase tracking-wider">Date</th>
<th className="p-md font-label-md text-outline uppercase tracking-wider">Due Date</th>
<th className="p-md font-label-md text-outline uppercase tracking-wider">Amount</th>
<th className="p-md font-label-md text-outline uppercase tracking-wider">Matching</th>
<th className="p-md font-label-md text-outline uppercase tracking-wider">Status</th>
<th className="p-md"></th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="hover:bg-surface-container-low cursor-pointer transition-colors group" >
<td className="p-md font-body-md text-primary font-bold">INV-2024-001</td>
<td className="p-md font-body-md">Cyberdyne Systems</td>
<td className="p-md font-body-md text-outline">Oct 12, 2023</td>
<td className="p-md font-body-md text-outline">Nov 12, 2023</td>
<td className="p-md font-body-md font-semibold">$1,250.00</td>
<td className="p-md">
<div className="flex gap-xs">
<span className="material-symbols-outlined text-primary text-[18px]" title="PO Matched">description</span>
<span className="material-symbols-outlined text-primary text-[18px]" title="GR Matched">inventory</span>
<span className="material-symbols-outlined text-primary text-[18px]" title="Invoice Validated">check_circle</span>
</div>
</td>
<td className="p-md">
<span className="px-md py-xs rounded-full bg-primary/10 text-primary font-label-md">Approved</span>
</td>
<td className="p-md text-right">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
</td>
</tr>

<tr className="hover:bg-surface-container-low cursor-pointer transition-colors group">
<td className="p-md font-body-md text-primary font-bold">INV-2024-002</td>
<td className="p-md font-body-md">Hooli Corp</td>
<td className="p-md font-body-md text-outline">Oct 14, 2023</td>
<td className="p-md font-body-md text-outline">Nov 14, 2023</td>
<td className="p-md font-body-md font-semibold">$8,420.50</td>
<td className="p-md">
<div className="flex gap-xs">
<span className="material-symbols-outlined text-primary text-[18px]" title="PO Matched">description</span>
<span className="material-symbols-outlined text-error text-[18px]" title="GR Discrepancy">inventory</span>
</div>
</td>
<td className="p-md">
<span className="px-md py-xs rounded-full bg-error/10 text-error font-label-md">Pending</span>
</td>
<td className="p-md text-right">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
</td>
</tr>

<tr className="hover:bg-surface-container-low cursor-pointer transition-colors group">
<td className="p-md font-body-md text-primary font-bold">INV-2024-003</td>
<td className="p-md font-body-md">Stark Industries</td>
<td className="p-md font-body-md text-outline">Oct 15, 2023</td>
<td className="p-md font-body-md text-outline">Nov 15, 2023</td>
<td className="p-md font-body-md font-semibold">$12,000.00</td>
<td className="p-md">
<div className="flex gap-xs">
<span className="material-symbols-outlined text-primary text-[18px]">description</span>
<span className="material-symbols-outlined text-primary text-[18px]">inventory</span>
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
</div>
</td>
<td className="p-md">
<span className="px-md py-xs rounded-full bg-tertiary-container/20 text-tertiary font-label-md">Paid</span>
</td>
<td className="p-md text-right">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
</td>
</tr>

<tr className="hover:bg-surface-container-low cursor-pointer transition-colors group">
<td className="p-md font-body-md text-primary font-bold">INV-2024-004</td>
<td className="p-md font-body-md">Wayne Enterprises</td>
<td className="p-md font-body-md text-outline">Oct 16, 2023</td>
<td className="p-md font-body-md text-outline">Nov 16, 2023</td>
<td className="p-md font-body-md font-semibold">$3,150.75</td>
<td className="p-md">
<div className="flex gap-xs">
<span className="material-symbols-outlined text-primary text-[18px]">description</span>
</div>
</td>
<td className="p-md">
<span className="px-md py-xs rounded-full bg-error/10 text-error font-label-md">Pending</span>
</td>
<td className="p-md text-right">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-md flex justify-between items-center bg-surface-container-low">
<span className="font-body-md text-outline">Showing 1-10 of 1,842 results</span>
<div className="flex gap-sm">
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white font-label-md">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high transition-colors font-label-md">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-50 flex justify-end transition-transform duration-300 translate-x-full" id="invoice-detail-overlay">
<div className="w-full max-w-5xl bg-surface shadow-2xl flex flex-col h-full border-l border-outline-variant">

<div className="h-16 flex items-center justify-between px-lg border-b border-outline-variant bg-white">
<div className="flex items-center gap-md">
<button className="hover:bg-surface-container-low p-sm rounded-full transition-colors" >
<span className="material-symbols-outlined">close</span>
</button>
<div>
<h3 className="font-title-lg text-title-lg">INV-2024-001 <span className="ml-md text-body-md font-normal text-outline">Cyberdyne Systems</span></h3>
</div>
</div>
<div className="flex items-center gap-md">
<button className="px-md py-sm rounded border border-outline-variant hover:bg-surface-container-low font-label-md transition-colors flex items-center gap-sm">
<span className="material-symbols-outlined text-[20px]">print</span> Print
                        </button>
<button className="px-md py-sm rounded border border-outline-variant hover:bg-surface-container-low font-label-md transition-colors flex items-center gap-sm">
<span className="material-symbols-outlined text-[20px]">download</span> Download
                        </button>
<button className="bg-primary text-white px-lg py-sm rounded-lg font-label-md interactive-scale shadow-sm">
                            Approve Invoice
                        </button>
</div>
</div>

<div className="flex-1 overflow-hidden flex">

<div className="flex-1 bg-surface-container-low p-lg overflow-y-auto">
<div className="bg-white shadow-md w-full min-h-[800px] rounded p-[40px] relative">

<div className="absolute top-8 right-8 text-primary/10 font-headline-lg select-none">DIGITALIZED COPY</div>

<div className="flex justify-between mb-xl">
<div>
<div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-md font-bold text-headline-md">C</div>
<h4 className="font-headline-md text-primary">Cyberdyne Systems</h4>
<p className="text-body-md text-outline">123 Neural Way<br />Skynet Industrial Park<br />San Francisco, CA 94103</p>
</div>
<div className="text-right">
<h1 className="font-headline-lg text-headline-lg uppercase mb-sm">Invoice</h1>
<div className="space-y-xs">
<p className="font-body-md"><span className="text-outline">Invoice #:</span> INV-2024-001</p>
<p className="font-body-md"><span className="text-outline">Date:</span> Oct 12, 2023</p>
<p className="font-body-md"><span className="text-outline">Due:</span> Nov 12, 2023</p>
</div>
</div>
</div>
<hr className="border-outline-variant mb-xl" />

<div className="grid grid-cols-2 gap-xl mb-xl">
<div>
<h5 className="font-label-md text-outline uppercase mb-sm">Bill To</h5>
<p className="font-body-md font-semibold">AMDOX Global Corp</p>
<p className="text-body-md text-outline">Operations Center - Finance Dept.<br />Level 42, Electric Avenue<br />Austin, TX 78701</p>
</div>
<div>
<h5 className="font-label-md text-outline uppercase mb-sm">Ship To</h5>
<p className="font-body-md font-semibold">AMDOX Global Corp - HQ</p>
<p className="text-body-md text-outline">Building B, Loading Bay 4<br />Austin, TX 78701</p>
</div>
</div>

<table className="w-full text-left mb-xl">
<thead className="border-b-2 border-primary/20">
<tr>
<th className="py-sm font-label-md text-outline">Description</th>
<th className="py-sm font-label-md text-outline text-right">Qty</th>
<th className="py-sm font-label-md text-outline text-right">Unit Price</th>
<th className="py-sm font-label-md text-outline text-right">Total</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr>
<td className="py-md font-body-md">Industrial Robot Arm Maintenance - Series T-800</td>
<td className="py-md font-body-md text-right">1</td>
<td className="py-md font-body-md text-right">$850.00</td>
<td className="py-md font-body-md text-right">$850.00</td>
</tr>
<tr>
<td className="py-md font-body-md">Neural Link Synchronization Cables (v4.2)</td>
<td className="py-md font-body-md text-right">5</td>
<td className="py-md font-body-md text-right">$80.00</td>
<td className="py-md font-body-md text-right">$400.00</td>
</tr>
</tbody>
</table>

<div className="flex justify-end">
<div className="w-full max-w-xs space-y-sm">
<div className="flex justify-between">
<span className="text-outline">Subtotal</span>
<span>$1,250.00</span>
</div>
<div className="flex justify-between">
<span className="text-outline">Tax (0%)</span>
<span>$0.00</span>
</div>
<div className="flex justify-between pt-md border-t-2 border-primary font-bold text-title-lg">
<span>Total</span>
<span className="text-primary">$1,250.00</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-[380px] border-l border-outline-variant bg-white p-lg space-y-lg overflow-y-auto">

<div className="space-y-md">
<h4 className="font-label-md text-outline uppercase tracking-wider">3-Way Matching</h4>
<div className="space-y-sm">
<div className="flex items-center justify-between p-sm rounded bg-surface-container-low">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-primary" data-icon="description">description</span>
<span className="font-body-md">PO #PO-9872</span>
</div>
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
</div>
<div className="flex items-center justify-between p-sm rounded bg-surface-container-low">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-primary" data-icon="inventory">inventory</span>
<span className="font-body-md">GR #GR-4552</span>
</div>
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
</div>
<div className="flex items-center justify-between p-sm rounded bg-surface-container-low border border-primary/20">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-primary" data-icon="receipt">receipt</span>
<span className="font-body-md">Invoice #INV-2024-001</span>
</div>
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
</div>
</div>
</div>

<div className="space-y-md">
<h4 className="font-label-md text-outline uppercase tracking-wider">Audit Details</h4>
<div className="p-md rounded-lg border border-outline-variant space-y-md bg-surface-bright">
<div>
<p className="text-label-md text-outline mb-xs">GL ACCOUNT</p>
<p className="text-body-md font-semibold">61000 - Maintenance &amp; Repairs</p>
</div>
<div>
<p className="text-label-md text-outline mb-xs">COST CENTER</p>
<p className="text-body-md font-semibold">CC-OP-SF - SF Operations</p>
</div>
<div>
<p className="text-label-md text-outline mb-xs">CONFIDENCE SCORE</p>
<div className="flex items-center gap-sm">
<div className="flex-1 h-1.5 bg-outline-variant rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{width: "98%"}}></div>
</div>
<span className="font-label-md text-primary">98%</span>
</div>
</div>
</div>
</div>

<div className="space-y-md">
<h4 className="font-label-md text-outline uppercase tracking-wider">Approval History</h4>
<div className="relative pl-lg border-l-2 border-outline-variant space-y-lg py-sm">
<div className="relative">
<span className="absolute -left-[27px] top-0 w-3 h-3 rounded-full bg-primary ring-4 ring-white"></span>
<p className="text-label-md font-bold text-on-surface">Sarah Connor (Finance)</p>
<p className="text-body-md text-outline">Verified matching &amp; Tax compliance.</p>
<p className="text-label-md text-outline opacity-70">Oct 14, 2023 10:45 AM</p>
</div>
<div className="relative">
<span className="absolute -left-[27px] top-0 w-3 h-3 rounded-full bg-primary ring-4 ring-white"></span>
<p className="text-label-md font-bold text-on-surface">John Smith (AP Clerk)</p>
<p className="text-body-md text-outline">Initial OCR digitalization successful.</p>
<p className="text-label-md text-outline opacity-70">Oct 12, 2023 04:12 PM</p>
</div>
<div className="relative">
<span className="absolute -left-[27px] top-0 w-3 h-3 rounded-full bg-outline-variant ring-4 ring-white"></span>
<p className="text-label-md font-bold text-outline">System Auto-Validation</p>
<p className="text-body-md text-outline">Ruleset R-90 checked: No anomalies found.</p>
<p className="text-label-md text-outline opacity-70">Oct 12, 2023 04:10 PM</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default ApInvoices;
