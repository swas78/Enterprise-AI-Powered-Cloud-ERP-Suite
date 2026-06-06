import React from 'react';


const Payslips: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-40 sticky top-0 bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-md">
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed tracking-tight">AMDOX</span>
<div className="h-4 w-px bg-outline-variant mx-sm"></div>
<span className="font-body-md text-body-md text-on-surface-variant font-medium">Payslip History</span>
</div>
<div className="flex items-center gap-md">
<div className="relative flex items-center bg-surface-container-low px-sm py-1 rounded border border-outline-variant group focus-within:border-primary transition-colors">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md px-sm py-0 w-48" placeholder="Search records..." type="text" />
<span className="text-xs text-outline font-medium px-1 border border-outline rounded bg-surface">⌘K</span>
</div>
<div className="flex items-center gap-sm">
<button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors">
<span className="material-symbols-outlined">help</span>
</button>
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden border border-outline-variant">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a young male executive with short groomed hair, wearing a navy blue blazer over a white shirt. The background is a soft, blurred office environment with natural daylight, conveying a corporate and approachable modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV8f8LYDIuD4q1WzHdoXNZxX0zyJZgAjHxYlWPt5kIWGS0COmhJGngVg5widd9IELG6tTwTvsQ4i8ur1bWwIqUGwgcCDP1FCKSdH6pR5xmfLsDoAm1vnyBDKzuPO-ugXliguXsJFjyMjNu568Qxnfy46ij6GESVGMt-RODX53pFmiGYzlb-lYzdyyt1AWdr_byn5HP9dhQMyzy9wszNVqXJpoJQDFq5mk0sCKbA_3D2lzJ6iWMu-vMfi8btpT6uqUJ3tHhqMit5qY" />
</div>
</div>
</div>
</header>

<div className="p-xl max-w-7xl mx-auto w-full">

<div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant flex items-center justify-between">
<div>
<p className="text-label-md font-label-md text-secondary uppercase tracking-wider">Annual Gross</p>
<h3 className="text-headline-lg font-headline-lg text-on-surface mt-xs">$114,250.00</h3>
</div>
<div className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>account_balance_wallet</span>
</div>
</div>
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant flex items-center justify-between">
<div>
<p className="text-label-md font-label-md text-secondary uppercase tracking-wider">Tax Year Progress</p>
<h3 className="text-headline-lg font-headline-lg text-on-surface mt-xs">Q3 · 75%</h3>
</div>
<div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-on-tertiary-fixed-variant">trending_up</span>
</div>
</div>
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant flex items-center justify-between">
<div>
<p className="text-label-md font-label-md text-secondary uppercase tracking-wider">Next Pay Date</p>
<h3 className="text-headline-lg font-headline-lg text-on-surface mt-xs">Oct 31, 2023</h3>
</div>
<div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">calendar_today</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm">
<div className="px-lg py-md border-b border-outline-variant bg-surface-bright flex items-center justify-between">
<h2 className="text-title-lg font-title-lg text-on-surface">Payment History</h2>
<div className="flex items-center gap-md">
<button className="flex items-center gap-sm px-md py-sm bg-surface-container-lowest border border-outline-variant rounded-lg text-label-md font-label-md hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                                Filter
                            </button>
<button className="flex items-center gap-sm px-md py-sm bg-primary text-white rounded-lg text-label-md font-label-md hover:bg-[#0B7DFF] transition-colors">
<span className="material-symbols-outlined text-[18px]">download_for_offline</span>
                                Export All
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="px-lg py-md text-label-md font-label-md text-secondary uppercase tracking-wider">Pay Period</th>
<th className="px-lg py-md text-label-md font-label-md text-secondary uppercase tracking-wider">Date Paid</th>
<th className="px-lg py-md text-label-md font-label-md text-secondary uppercase tracking-wider">Gross Amount</th>
<th className="px-lg py-md text-label-md font-label-md text-secondary uppercase tracking-wider">Net Amount</th>
<th className="px-lg py-md text-label-md font-label-md text-secondary uppercase tracking-wider">Status</th>
<th className="px-lg py-md text-label-md font-label-md text-secondary uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="px-lg py-md">
<div className="font-body-md font-semibold text-on-surface">September 2023</div>
<div className="text-xs text-outline">Monthly Payroll Cycle</div>
</td>
<td className="px-lg py-md font-body-md text-on-surface">Sep 30, 2023</td>
<td className="px-lg py-md font-body-md text-on-surface">$9,520.83</td>
<td className="px-lg py-md font-body-md font-bold text-primary">$7,214.45</td>
<td className="px-lg py-md">
<span className="inline-flex items-center gap-xs px-sm py-xs rounded-full bg-[#16A34A]/10 text-[#16A34A] text-xs font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
                                            Sent
                                        </span>
</td>
<td className="px-lg py-md text-right space-x-sm">
<button className="text-primary hover:underline text-label-md font-label-md" >View Details</button>
<button className="p-2 text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="px-lg py-md">
<div className="font-body-md font-semibold text-on-surface">August 2023</div>
<div className="text-xs text-outline">Monthly Payroll Cycle</div>
</td>
<td className="px-lg py-md font-body-md text-on-surface">Aug 31, 2023</td>
<td className="px-lg py-md font-body-md text-on-surface">$9,520.83</td>
<td className="px-lg py-md font-body-md font-bold text-primary">$7,214.45</td>
<td className="px-lg py-md">
<span className="inline-flex items-center gap-xs px-sm py-xs rounded-full bg-[#16A34A]/10 text-[#16A34A] text-xs font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
                                            Sent
                                        </span>
</td>
<td className="px-lg py-md text-right space-x-sm">
<button className="text-primary hover:underline text-label-md font-label-md" >View Details</button>
<button className="p-2 text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="px-lg py-md">
<div className="font-body-md font-semibold text-on-surface">July 2023</div>
<div className="text-xs text-outline">Monthly Payroll Cycle + Bonus</div>
</td>
<td className="px-lg py-md font-body-md text-on-surface">Jul 31, 2023</td>
<td className="px-lg py-md font-body-md text-on-surface">$12,520.83</td>
<td className="px-lg py-md font-body-md font-bold text-primary">$9,418.12</td>
<td className="px-lg py-md">
<span className="inline-flex items-center gap-xs px-sm py-xs rounded-full bg-[#16A34A]/10 text-[#16A34A] text-xs font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
                                            Sent
                                        </span>
</td>
<td className="px-lg py-md text-right space-x-sm">
<button className="text-primary hover:underline text-label-md font-label-md" >View Details</button>
<button className="p-2 text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-lg py-md border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between">
<div className="text-body-md text-secondary">
                            Showing <span className="font-bold text-on-surface">1-10</span> of <span className="font-bold text-on-surface">24</span> records
                        </div>
<div className="flex gap-sm">
<button className="p-2 border border-outline-variant rounded hover:bg-surface-container-low disabled:opacity-50" disabled={true}>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="px-3 py-1 bg-primary text-white rounded font-bold">1</button>
<button className="px-3 py-1 hover:bg-surface-container-low rounded">2</button>
<button className="px-3 py-1 hover:bg-surface-container-low rounded">3</button>
<button className="p-2 border border-outline-variant rounded hover:bg-surface-container-low">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default Payslips;
