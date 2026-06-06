import React from 'react';


const AgingReport: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline flex justify-between items-center w-full px-lg h-[48px] z-50 sticky top-0">
<div className="flex items-center gap-xl w-1/2">
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed uppercase tracking-tighter">AMDOX</span>
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" data-icon="search">search</span>
<input className="w-full bg-surface-container-low border-none rounded-full pl-xl pr-md py-1 text-body-md focus:ring-2 focus:ring-primary-container" placeholder="Search accounts or invoices (CMD+K)" type="text" />
</div>
</div>
<div className="flex items-center gap-lg">
<div className="flex items-center gap-md border-r border-outline-variant pr-lg mr-sm">
<button className="text-on-surface-variant hover:bg-surface-container-low p-1 rounded cubic-bezier-transition relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border border-surface"></span>
</button>
<button className="text-on-surface-variant hover:bg-surface-container-low p-1 rounded cubic-bezier-transition">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<button className="text-on-surface-variant hover:bg-surface-container-low p-1 rounded cubic-bezier-transition">
<span className="material-symbols-outlined text-primary" data-icon="cloud_done">cloud_done</span>
</button>
</div>
<div className="flex items-center gap-md">
<div className="text-right hidden sm:block">
<p className="font-label-md text-label-md text-on-surface font-semibold">Alex Chen</p>
<p className="font-code-sm text-code-sm text-on-surface-variant">Finance Lead</p>
</div>
<img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="A professional headshot of a corporate finance lead with a neutral expression, high-end photography with soft studio lighting, set against a blurred modern office interior with cool blue tones and white architectural details to match the AMDOX design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Pc5in-Fhuz5NZOssipQ5aCXgRMtr5SEe95InzqFPcttAS3OQGpgh8jhGMp8TIpA-ltztntvZjH0bLKTDmbkXovyRJJ0o5FmnCz8TZs2PJn34laJrVQ1ebqSksbubXPnzPZPW_U_qsNg7rwddutnGhBALjc2ESmkYEzOWXeDznddQRqSCBr0UxpWxRxKGBEuh-JC9uN4PsdsD4UhprxgF0XhnxEThkkAE9DhAQso0G5p-wHKyhM0WQ9TW5HE62WFJGEXAFnfIoT8" />
</div>
</div>
</header>

<div className="flex-1 p-margin-desktop overflow-y-auto">

<div className="flex justify-between items-end mb-xl">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-background">Aging Report Explorer</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Real-time AR/AP exposure across time-based buckets.</p>
</div>
<div className="flex gap-md">
<div className="flex bg-surface-container rounded-lg p-1">
<button className="px-md py-1 bg-surface-container-lowest shadow-sm rounded text-primary font-semibold text-label-md">Receivables</button>
<button className="px-md py-1 text-on-surface-variant hover:text-on-surface text-label-md">Payables</button>
</div>
<button className="flex items-center gap-sm bg-surface-container-lowest border border-outline-variant px-md py-2 rounded text-primary font-semibold text-label-md hover:bg-surface-container-low cubic-bezier-transition">
<span className="material-symbols-outlined" data-icon="download">download</span>
                            Export PDF/Excel
                        </button>
</div>
</div>

<div className="bento-grid">

<div className="col-span-12 lg:col-span-3 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col justify-between">
<div>
<span className="text-label-md text-secondary uppercase font-bold tracking-widest">Total Outstanding</span>
<div className="flex items-baseline gap-sm mt-md">
<h3 className="font-display-lg text-display-lg text-primary">$4.2M</h3>
<span className="text-error font-semibold text-label-md flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span>
                                    12%
                                </span>
</div>
</div>
<div className="mt-xl h-2 w-full bg-surface-container-low rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{width: "65%"}}></div>
</div>
</div>
<div className="col-span-12 lg:col-span-3 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col justify-between">
<div>
<span className="text-label-md text-secondary uppercase font-bold tracking-widest">DSO (Avg Days)</span>
<div className="flex items-baseline gap-sm mt-md">
<h3 className="font-display-lg text-display-lg text-on-surface">42</h3>
<span className="text-success-green font-semibold text-label-md flex items-center gap-xs text-[#16A34A]">
<span className="material-symbols-outlined text-[16px]" data-icon="trending_down">trending_down</span>
                                    4d
                                </span>
</div>
</div>
<div className="flex gap-xs mt-xl">
<div className="h-8 flex-1 bg-surface-container-low rounded-sm"></div>
<div className="h-10 flex-1 bg-surface-container-low rounded-sm"></div>
<div className="h-12 flex-1 bg-primary-container rounded-sm"></div>
<div className="h-6 flex-1 bg-surface-container-low rounded-sm"></div>
<div className="h-14 flex-1 bg-surface-container-low rounded-sm"></div>
</div>
</div>

<div className="col-span-12 lg:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
<div className="flex justify-between items-start mb-lg">
<span className="text-label-md text-secondary uppercase font-bold tracking-widest">Exposure by Bucket</span>
<span className="text-code-sm text-on-surface-variant">Last updated: 5m ago</span>
</div>
<div className="flex items-end justify-between h-32 gap-xl px-md">

<div className="flex-1 flex flex-col items-center group">
<div className="w-full bg-[#E8F6FF] rounded-t-lg group-hover:bg-[#d0e6f5] cubic-bezier-transition" style={{height: "40%"}}></div>
<span className="mt-sm text-label-md text-on-surface-variant font-bold">0-30</span>
</div>

<div className="flex-1 flex flex-col items-center group">
<div className="w-full bg-[#C6E7FF] rounded-t-lg group-hover:bg-[#b0dcf5] cubic-bezier-transition" style={{height: "65%"}}></div>
<span className="mt-sm text-label-md text-on-surface-variant font-bold">31-60</span>
</div>

<div className="flex-1 flex flex-col items-center group">
<div className="w-full bg-[#7AC3FF] rounded-t-lg group-hover:bg-[#68aee6] cubic-bezier-transition" style={{height: "85%"}}></div>
<span className="mt-sm text-label-md text-on-surface-variant font-bold">61-90</span>
</div>

<div className="flex-1 flex flex-col items-center group">
<div className="w-full bg-[#1B9CFF] rounded-t-lg group-hover:bg-[#0086eb] cubic-bezier-transition" style={{height: "55%"}}></div>
<span className="mt-sm text-label-md text-primary font-extrabold">90+</span>
</div>
</div>
</div>

<div className="col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="p-lg border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-primary" data-icon="filter_list">filter_list</span>
<h4 className="font-title-lg text-title-lg text-on-surface">Aging Breakdown by Customer</h4>
</div>
<div className="flex gap-md">
<div className="relative">
<select className="appearance-none bg-surface-container-lowest border border-outline-variant pl-md pr-xl py-1 rounded text-body-md text-on-surface focus:ring-primary focus:border-primary">
<option>Currency: USD</option>
<option>Currency: EUR</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" data-icon="expand_more">expand_more</span>
</div>
</div>
</div>
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full border-collapse text-left">
<thead className="sticky top-0 bg-surface-container-low border-b border-outline-variant z-10">
<tr>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-widest whitespace-nowrap">Customer / ID</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-widest text-right whitespace-nowrap">Total Due</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-widest text-right whitespace-nowrap">0-30 Days</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-widest text-right whitespace-nowrap">31-60 Days</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-widest text-right whitespace-nowrap">61-90 Days</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-widest text-right whitespace-nowrap">90+ Days</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-widest text-center whitespace-nowrap">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="hover:bg-surface-container-low cubic-bezier-transition group">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center font-bold text-on-primary-fixed text-label-md">SL</div>
<div>
<p className="font-body-md font-semibold text-on-surface">Starlight Dynamics</p>
<p className="font-code-sm text-on-surface-variant">CUST-88210</p>
</div>
</div>
</td>
<td className="px-lg py-md text-right font-semibold text-on-surface">$1,240,000</td>
<td className="px-lg py-md text-right text-on-surface-variant">$820,000</td>
<td className="px-lg py-md text-right text-on-surface-variant">$420,000</td>
<td className="px-lg py-md text-right text-on-surface-variant">$0</td>
<td className="px-lg py-md text-right text-on-surface-variant">$0</td>
<td className="px-lg py-md text-center">
<span className="inline-flex items-center px-2 py-1 rounded text-code-sm bg-[#16A34A]/10 text-[#16A34A] font-bold">HEALTHY</span>
</td>
</tr>

<tr className="hover:bg-surface-container-low cubic-bezier-transition group">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-tertiary-fixed flex items-center justify-center font-bold text-on-tertiary-fixed text-label-md">NE</div>
<div>
<p className="font-body-md font-semibold text-on-surface">Nova Electron</p>
<p className="font-code-sm text-on-surface-variant">CUST-11923</p>
</div>
</div>
</td>
<td className="px-lg py-md text-right font-semibold text-on-surface">$890,200</td>
<td className="px-lg py-md text-right text-on-surface-variant">$120,000</td>
<td className="px-lg py-md text-right text-on-surface-variant">$230,200</td>
<td className="px-lg py-md text-right text-error font-bold">$540,000</td>
<td className="px-lg py-md text-right text-on-surface-variant">$0</td>
<td className="px-lg py-md text-center">
<span className="inline-flex items-center px-2 py-1 rounded text-code-sm bg-error-container text-on-error-container font-bold">WARNING</span>
</td>
</tr>

<tr className="hover:bg-surface-container-low cubic-bezier-transition group">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center font-bold text-on-surface text-label-md">AP</div>
<div>
<p className="font-body-md font-semibold text-on-surface">Apex Portals</p>
<p className="font-code-sm text-on-surface-variant">CUST-33421</p>
</div>
</div>
</td>
<td className="px-lg py-md text-right font-semibold text-on-surface">$425,000</td>
<td className="px-lg py-md text-right text-on-surface-variant">$0</td>
<td className="px-lg py-md text-right text-on-surface-variant">$0</td>
<td className="px-lg py-md text-right text-on-surface-variant">$0</td>
<td className="px-lg py-md text-right text-error font-bold">$425,000</td>
<td className="px-lg py-md text-center">
<span className="inline-flex items-center px-2 py-1 rounded text-code-sm bg-error-container text-on-error-container font-bold">CRITICAL</span>
</td>
</tr>

<tr className="hover:bg-surface-container-low cubic-bezier-transition group">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container text-label-md">QS</div>
<div>
<p className="font-body-md font-semibold text-on-surface">Quantum Systems</p>
<p className="font-code-sm text-on-surface-variant">CUST-99081</p>
</div>
</div>
</td>
<td className="px-lg py-md text-right font-semibold text-on-surface">$2,100,000</td>
<td className="px-lg py-md text-right text-on-surface-variant">$1,900,000</td>
<td className="px-lg py-md text-right text-on-surface-variant">$200,000</td>
<td className="px-lg py-md text-right text-on-surface-variant">$0</td>
<td className="px-lg py-md text-right text-on-surface-variant">$0</td>
<td className="px-lg py-md text-center">
<span className="inline-flex items-center px-2 py-1 rounded text-code-sm bg-[#16A34A]/10 text-[#16A34A] font-bold">HEALTHY</span>
</td>
</tr>
</tbody>
<tfoot className="bg-surface-container-low border-t-2 border-outline font-bold">
<tr>
<td className="px-lg py-md">Total (Page)</td>
<td className="px-lg py-md text-right text-primary font-extrabold">$4,655,200</td>
<td className="px-lg py-md text-right">$2,840,000</td>
<td className="px-lg py-md text-right">$850,200</td>
<td className="px-lg py-md text-right text-error">$540,000</td>
<td className="px-lg py-md text-right text-error">$425,000</td>
<td className="px-lg py-md"></td>
</tr>
</tfoot>
</table>
</div>
<div className="p-md flex items-center justify-between text-body-md text-on-surface-variant">
<div>Showing 4 of 124 customers</div>
<div className="flex items-center gap-sm">
<button className="p-1 rounded hover:bg-surface-container-low disabled:opacity-30" disabled={true}>
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<span className="px-md">Page 1 of 31</span>
<button className="p-1 rounded hover:bg-surface-container-low">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col gap-lg">
<div className="flex items-center justify-between">
<h4 className="font-title-lg text-title-lg text-on-surface">Predictive Analysis</h4>
<span className="material-symbols-outlined text-primary" data-icon="auto_awesome">auto_awesome</span>
</div>
<div className="p-md bg-primary-fixed/30 rounded-lg border border-primary-fixed-dim">
<p className="font-label-md text-label-md text-on-primary-fixed mb-xs uppercase font-bold">AI Insight</p>
<p className="font-body-md text-on-primary-fixed">Based on historical payment patterns, <strong>Nova Electron</strong> is projected to clear their 61-90 day bucket by next Friday.</p>
</div>
<div className="space-y-md">
<div className="flex justify-between items-center text-body-md">
<span className="text-on-surface-variant">Expected Inflow (Next 7d)</span>
<span className="font-bold text-on-surface">$1.2M</span>
</div>
<div className="flex justify-between items-center text-body-md">
<span className="text-on-surface-variant">Projected Cash Deficit</span>
<span className="font-bold text-error">$0</span>
</div>
</div>
<button className="w-full py-md bg-surface-container border border-outline-variant rounded font-semibold text-primary hover:bg-surface-container-high cubic-bezier-transition flex items-center justify-center gap-sm">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
                            Bulk Follow-up Emails
                        </button>
</div>
<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
<div className="flex justify-between items-center mb-lg">
<h4 className="font-title-lg text-title-lg text-on-surface">Global Collection Efficiency</h4>
<div className="flex items-center gap-xs text-code-sm text-on-surface-variant">
<span className="w-3 h-3 rounded-full bg-primary"></span> Collected
                                <span className="w-3 h-3 rounded-full bg-surface-container-high ml-md"></span> Pending
                            </div>
</div>
<div className="space-y-xl">
<div className="space-y-sm">
<div className="flex justify-between text-label-md font-bold text-on-surface-variant uppercase tracking-wider">
<span>North America</span>
<span>92% Efficiency</span>
</div>
<div className="h-2 w-full bg-surface-container rounded-full overflow-hidden flex">
<div className="h-full bg-primary" style={{width: "92%"}}></div>
</div>
</div>
<div className="space-y-sm">
<div className="flex justify-between text-label-md font-bold text-on-surface-variant uppercase tracking-wider">
<span>Europe</span>
<span>78% Efficiency</span>
</div>
<div className="h-2 w-full bg-surface-container rounded-full overflow-hidden flex">
<div className="h-full bg-primary" style={{width: "78%"}}></div>
</div>
</div>
<div className="space-y-sm">
<div className="flex justify-between text-label-md font-bold text-on-surface-variant uppercase tracking-wider">
<span>Asia Pacific</span>
<span>65% Efficiency</span>
</div>
<div className="h-2 w-full bg-surface-container rounded-full overflow-hidden flex">
<div className="h-full bg-primary" style={{width: "65%"}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default AgingReport;
