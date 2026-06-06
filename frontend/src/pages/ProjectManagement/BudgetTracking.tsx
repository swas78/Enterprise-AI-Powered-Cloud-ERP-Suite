import React from 'react';


const BudgetTracking: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 bg-surface border-b border-outline-variant shrink-0">
<div className="flex items-center gap-md">
<h1 className="font-headline-md text-headline-md font-bold text-primary">AMDOX</h1>
<div className="relative flex items-center md:ml-xl">
<span className="material-symbols-outlined absolute left-3 text-secondary text-[20px]">search</span>
<input className="bg-surface-container-low border-none rounded-full pl-10 pr-lg py-1 text-body-md w-[320px] focus:ring-1 focus:ring-primary" placeholder="Search budget entities... (CMD+K)" type="text"/>
</div>
</div>
<div className="flex items-center gap-lg">
<button className="hover:bg-surface-container-low p-2 rounded-full transition-colors duration-150 active:scale-95">
<span className="material-symbols-outlined text-secondary">cloud_done</span>
</button>
<button className="hover:bg-surface-container-low p-2 rounded-full transition-colors duration-150 active:scale-95">
<span className="material-symbols-outlined text-secondary">help</span>
</button>
<div className="relative">
<button className="hover:bg-surface-container-low p-2 rounded-full transition-colors duration-150 active:scale-95">
<span className="material-symbols-outlined text-secondary">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
</div>
<img alt="User profile" className="w-8 h-8 rounded-full bg-primary-container p-1 cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo4YZRtlzKekFXhbZvUYZRe-DCrpbMMAu6vVKft6ZF6SnxfQAR8KBsxv7JAd2lHPP0MmdhEk4ZTaPjm52bsLRVauZ9mUBvJFLBVDHi_ekGgxVybow47LqytEn6K7IzR0H13BiO9HYf-mmwj5RpKnJRZEhHvPQdIx_4MbWIxt8HWP69YhbRtm5MKl5ZQEiuTRir-j_biOrylhrTAblxSseTZR-6LRJCusEoPHgkUdro7K_tNwQTu_K86GpsfSXE3ko03mo8VV3KNf0"/>
</div>
</header>

<div className="flex-grow overflow-y-auto p-lg custom-scrollbar bg-surface-bright">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-xl gap-md">
<div>
<div className="flex items-center gap-2 text-primary font-semibold mb-1">
<span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
<span className="font-label-md text-label-md tracking-wider uppercase">Financial Overview</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Project Budget Tracking</h2>
<p className="font-body-md text-on-surface-variant max-w-2xl">Monitor real-time resource allocation and fiscal variance across active product workstreams.</p>
</div>
<div className="flex gap-sm">
<button className="px-md py-2 border border-outline-variant rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-surface-container-low transition-all">
<span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
                        </button>
<button className="px-md py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-opacity-90 transition-all active:scale-95">
<span className="material-symbols-outlined text-[18px]">ios_share</span> Export Report
                        </button>
</div>
</div>

<div className="grid grid-cols-12 gap-gutter">

<div className="col-span-12 lg:col-span-8 bg-surface border border-outline-variant rounded-xl p-xl relative overflow-hidden">
<div className="flex items-center justify-between mb-lg">
<div>
<h3 className="font-title-lg text-title-lg text-on-surface">Planned vs. Actual Spending</h3>
<p className="font-body-md text-on-surface-variant">Monthly cumulative expenditure comparison</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="font-label-md text-label-md text-on-surface-variant">Actual</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-outline-variant"></span>
<span className="font-label-md text-label-md text-on-surface-variant">Planned</span>
</div>
</div>
</div>

<div className="h-64 flex items-end justify-between px-md relative">

<div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-between pointer-events-none opacity-5">
<div className="border-t border-on-surface w-full"></div>
<div className="border-t border-on-surface w-full"></div>
<div className="border-t border-on-surface w-full"></div>
<div className="border-t border-on-surface w-full"></div>
</div>

<div className="w-full flex items-end justify-between gap-6 px-4">
<div className="flex flex-col items-center gap-2 w-full max-w-[40px]">
<div className="w-full bg-outline-variant rounded-t h-32 opacity-40"></div>
<div className="w-full bg-primary rounded-t -mt-32 h-24 relative z-10"></div>
<span className="font-label-md text-label-md text-on-surface-variant">Jan</span>
</div>
<div className="flex flex-col items-center gap-2 w-full max-w-[40px]">
<div className="w-full bg-outline-variant rounded-t h-40 opacity-40"></div>
<div className="w-full bg-primary rounded-t -mt-40 h-36 relative z-10"></div>
<span className="font-label-md text-label-md text-on-surface-variant">Feb</span>
</div>
<div className="flex flex-col items-center gap-2 w-full max-w-[40px]">
<div className="w-full bg-outline-variant rounded-t h-48 opacity-40"></div>
<div className="w-full bg-primary rounded-t -mt-48 h-52 relative z-10">
<div className="absolute -top-1 left-0 right-0 h-1 bg-error"></div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Mar</span>
</div>
<div className="flex flex-col items-center gap-2 w-full max-w-[40px]">
<div className="w-full bg-outline-variant rounded-t h-56 opacity-40"></div>
<div className="w-full bg-primary rounded-t -mt-56 h-60 relative z-10">
<div className="absolute -top-1 left-0 right-0 h-1 bg-error"></div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Apr</span>
</div>
<div className="flex flex-col items-center gap-2 w-full max-w-[40px]">
<div className="w-full bg-outline-variant rounded-t h-60 opacity-40"></div>
<div className="w-full bg-primary rounded-t -mt-60 h-48 relative z-10"></div>
<span className="font-label-md text-label-md text-on-surface-variant">May</span>
</div>
</div>
</div>
<div className="absolute top-4 right-4 group">
<div className="flex items-center gap-1 text-error text-[12px] font-bold bg-error-container/20 px-2 py-1 rounded variance-alert-animate">
<span className="material-symbols-outlined text-[14px]">warning</span>
                                VARIANCE ALERT: +12.4%
                             </div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
<div className="bg-surface border border-outline-variant rounded-xl p-lg flex flex-col justify-between">
<div className="flex justify-between items-start">
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Total Budget</p>
<span className="material-symbols-outlined text-primary">account_balance</span>
</div>
<div className="mt-4">
<h4 className="font-headline-lg text-headline-lg text-on-surface">$2,450,000</h4>
<div className="flex items-center gap-1 text-[#16A34A] font-medium text-body-md mt-1">
<span className="material-symbols-outlined text-[18px]">trending_up</span>
<span>2.1% from last FY</span>
</div>
</div>
</div>
<div className="bg-surface border border-outline-variant rounded-xl p-lg flex flex-col justify-between">
<div className="flex justify-between items-start">
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Utilized to Date</p>
<span className="material-symbols-outlined text-primary">monetization_on</span>
</div>
<div className="mt-4">
<h4 className="font-headline-lg text-headline-lg text-on-surface">$1,842,500</h4>
<div className="w-full bg-surface-container-highest h-2 rounded-full mt-4 overflow-hidden">
<div className="bg-primary-container h-full w-[75%]" style={{transition: "width 1s ease-out"}}></div>
</div>
<div className="flex justify-between mt-2">
<span className="font-label-md text-label-md text-on-surface-variant">75.2% consumed</span>
<span className="font-label-md text-label-md text-on-surface-variant">Q3 Target: 70%</span>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-7 bg-surface border border-outline-variant rounded-xl overflow-hidden">
<div className="px-xl py-lg border-b border-outline-variant flex items-center justify-between">
<h3 className="font-title-lg text-title-lg text-on-surface">Detailed Cost Breakdown</h3>
<div className="flex gap-2">
<button className="text-label-md font-label-md px-3 py-1 bg-surface-container-low border border-outline-variant rounded">Comfortable</button>
<button className="text-label-md font-label-md px-3 py-1 hover:bg-surface-container-low rounded transition-colors">Compact</button>
</div>
</div>
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-lowest sticky top-0 border-b border-outline-variant">
<tr>
<th className="px-xl py-4 font-label-md text-label-md text-on-surface-variant">Category</th>
<th className="px-md py-4 font-label-md text-label-md text-on-surface-variant text-right">Planned ($)</th>
<th className="px-md py-4 font-label-md text-label-md text-on-surface-variant text-right">Actual ($)</th>
<th className="px-xl py-4 font-label-md text-label-md text-on-surface-variant text-right">Variance (%)</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-xl py-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary">engineering</span>
<span className="font-body-md text-on-surface font-medium">Labor</span>
</div>
</td>
<td className="px-md py-4 font-body-md text-on-surface text-right">850,000</td>
<td className="px-md py-4 font-body-md text-on-surface text-right">842,000</td>
<td className="px-xl py-4 text-right">
<span className="text-[#16A34A] bg-[#16A34A]/10 px-2 py-1 rounded font-label-md text-label-md">-0.9%</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-xl py-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary">inventory</span>
<span className="font-body-md text-on-surface font-medium">Materials</span>
</div>
</td>
<td className="px-md py-4 font-body-md text-on-surface text-right">420,000</td>
<td className="px-md py-4 font-body-md text-on-surface text-right">495,000</td>
<td className="px-xl py-4 text-right">
<span className="text-error bg-error/10 px-2 py-1 rounded font-label-md text-label-md">+17.8%</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-xl py-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary">code</span>
<span className="font-body-md text-on-surface font-medium">Software</span>
</div>
</td>
<td className="px-md py-4 font-body-md text-on-surface text-right">300,000</td>
<td className="px-md py-4 font-body-md text-on-surface text-right">312,000</td>
<td className="px-xl py-4 text-right">
<span className="text-warning-orange text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-1 rounded font-label-md text-label-md">+4.0%</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-xl py-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary">corporate_fare</span>
<span className="font-body-md text-on-surface font-medium">Overhead</span>
</div>
</td>
<td className="px-md py-4 font-body-md text-on-surface text-right">150,000</td>
<td className="px-md py-4 font-body-md text-on-surface text-right">148,000</td>
<td className="px-xl py-4 text-right">
<span className="text-[#16A34A] bg-[#16A34A]/10 px-2 py-1 rounded font-label-md text-label-md">-1.3%</span>
</td>
</tr>
</tbody>
</table>
<div className="px-xl py-4 bg-surface-container-lowest flex justify-between items-center border-t border-outline-variant">
<p className="font-label-md text-label-md text-on-surface-variant">Showing 1-4 of 12 categories</p>
<div className="flex items-center gap-4">
<span className="font-label-md text-label-md text-on-surface-variant">Page 1 of 3</span>
<div className="flex gap-1">
<button className="p-1 border border-outline-variant rounded hover:bg-surface-container-low"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
<button className="p-1 border border-outline-variant rounded hover:bg-surface-container-low"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 bg-surface border border-outline-variant rounded-xl p-xl">
<div className="flex items-center justify-between mb-lg">
<h3 className="font-title-lg text-title-lg text-on-surface">Resource Intensity</h3>
<span className="material-symbols-outlined text-secondary hover:text-primary cursor-pointer">info</span>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between mb-2">
<span className="font-body-md text-on-surface">Product Design</span>
<span className="font-label-md text-label-md font-bold">92%</span>
</div>
<div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden">
<div className="h-full bg-[#1B9CFF]" style={{width: "92%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="font-body-md text-on-surface">Core Infrastructure</span>
<span className="font-label-md text-label-md font-bold">78%</span>
</div>
<div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden">
<div className="h-full bg-[#5FBFFF]" style={{width: "78%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="font-body-md text-on-surface">QA &amp; Security</span>
<span className="font-label-md text-label-md font-bold">45%</span>
</div>
<div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden">
<div className="h-full bg-[#A5DCFF]" style={{width: "45%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="font-body-md text-on-surface">Marketing Tech</span>
<span className="font-label-md text-label-md font-bold">18%</span>
</div>
<div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden">
<div className="h-full bg-[#E8F6FF]" style={{width: "18%"}}></div>
</div>
</div>
</div>
<div className="mt-xl p-md bg-surface-container-low rounded-lg border border-outline-variant border-dashed">
<div className="flex gap-3">
<span className="material-symbols-outlined text-[#F59E0B]">auto_awesome</span>
<div>
<p className="font-label-md text-label-md text-on-surface font-bold uppercase">AI Prediction</p>
<p className="font-body-md text-on-surface-variant mt-1">Based on current burn rate, Q4 budget will exceed threshold by 4.2% unless resource allocation is optimized by Nov 15th.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<nav className="md:hidden flex justify-around items-center w-full bg-surface h-[64px] border-t border-outline-variant fixed bottom-0 left-0 z-50">
<button className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
<span className="font-label-md text-[10px]">Dashboard</span>
</button>
<button className="flex flex-col items-center gap-1 text-secondary">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-md text-[10px]">Finance</span>
</button>
<button className="flex flex-col items-center gap-1 text-secondary">
<span className="material-symbols-outlined">psychology</span>
<span className="font-label-md text-[10px]">AI</span>
</button>
<button className="flex flex-col items-center gap-1 text-secondary">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-[10px]">Settings</span>
</button>
</nav>

    </div>
  );
};

export default BudgetTracking;
