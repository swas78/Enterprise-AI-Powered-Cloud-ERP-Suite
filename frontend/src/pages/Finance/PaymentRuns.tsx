import React from 'react';


const PaymentRuns: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-md">
<span className="font-headline-md text-headline-md font-bold text-primary">AMDOX</span>
<div className="h-4 w-px bg-outline-variant mx-sm"></div>
<span className="font-label-md text-label-md text-on-surface-variant">Finance / Payment Runs</span>
</div>
<div className="flex items-center gap-lg">
<div className="relative group">
<span className="absolute left-md top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-[18px]">search</span>
<input className="bg-surface-container-low border-none rounded-full pl-3xl pr-md py-xs font-body-md text-body-md w-64 focus:ring-1 focus:ring-primary transition-all" placeholder="Global Search (CMD+K)" type="text" />
</div>
<div className="flex items-center gap-md text-primary">
<span className="material-symbols-outlined cursor-pointer hover:bg-surface-container-low p-xs rounded transition-colors" title="Notifications">notifications</span>
<span className="material-symbols-outlined cursor-pointer hover:bg-surface-container-low p-xs rounded transition-colors" title="Help">help</span>
<span className="material-symbols-outlined cursor-pointer hover:bg-surface-container-low p-xs rounded transition-colors" title="Sync Status">cloud_done</span>
<img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsUTGwuRai3lOE30tcHCSiRhX8p8mkxI0zaXc8GCQwDa5WplqxZNB0FHpNOvvWlGfWaMkYMveu1shMdQtXcwZczIauaG-m-AhrRGcnxae670vqNWALr5BuV7bBajqAiynpm_Gnl94GSwBa9m7EDj_hRhgtXXlTtRlyDheiEl4nVyYJRhUvcX_yiM56JbymV0VKn18A42lAQS_Ac-zLWh99RQnRApSamon8EKshZshFiPn0-gNcpaXvWDAIPjz0W3GCXVOyBu1yxdI" />
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-background p-lg space-y-lg">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-background">Batch Payment Runs</h2>
<p className="text-on-surface-variant font-body-md">Monitor and manage automated disbursement cycles.</p>
</div>
<div className="flex flex-wrap gap-sm">
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Currency</label>
<select className="bg-surface-container-lowest border border-outline-variant rounded px-md py-sm font-body-md text-body-md focus:border-primary outline-none min-w-[120px]">
<option>All Currencies</option>
<option>USD - Dollars</option>
<option>EUR - Euro</option>
<option>GBP - Sterling</option>
</select>
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Method</label>
<select className="bg-surface-container-lowest border border-outline-variant rounded px-md py-sm font-body-md text-body-md focus:border-primary outline-none min-w-[140px]">
<option>All Methods</option>
<option>ACH Transfer</option>
<option>SWIFT/Wire</option>
<option>SEPA</option>
<option>Virtual Card</option>
</select>
</div>
<button className="bg-surface-container-lowest border border-outline-variant text-primary px-lg py-sm rounded flex items-center gap-sm font-label-md hover:bg-surface-container-low transition-colors h-[40px] mt-auto">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
                        Advanced Filters
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
<div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-lg flex flex-col justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Active Batches</span>
<div className="flex items-baseline gap-sm mt-md">
<span className="font-display-lg text-display-lg text-primary">03</span>
<span className="text-on-surface-variant font-body-md">running now</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-lg flex flex-col justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Success Rate (24h)</span>
<div className="flex items-baseline gap-sm mt-md">
<span className="font-display-lg text-display-lg text-on-background">98.4%</span>
<span className="text-[#16A34A] flex items-center font-label-md"><span className="material-symbols-outlined text-[16px]">arrow_upward</span> 0.2%</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-lg flex flex-col justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Failed Transactions</span>
<div className="flex items-baseline gap-sm mt-md">
<span className="font-display-lg text-display-lg text-error">12</span>
<span className="text-on-surface-variant font-body-md">awaiting retry</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-lg relative overflow-hidden flex flex-col justify-between">

<span className="font-label-md text-label-md text-on-surface-variant relative z-10">Total Volume (Today)</span>
<div className="flex items-baseline gap-sm mt-md relative z-10">
<span className="font-display-lg text-display-lg text-on-background">$1.2M</span>
<span className="text-on-surface-variant font-body-md">USD</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
<div className="p-lg border-b border-outline-variant flex justify-between items-center bg-[#F7FAFF]">
<h3 className="font-title-lg text-title-lg">Recent Payment Runs</h3>
<div className="flex gap-sm">
<span className="flex items-center gap-xs px-md py-xs bg-surface-container-low rounded font-label-md text-label-md text-secondary">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Live Monitoring Active
                        </span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Run ID</th>
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Scheduled Time</th>
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Progress</th>
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-widest text-center">Outcome</th>
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Method</th>
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-widest text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-lg py-md">
<span className="font-label-md text-label-md text-primary bg-primary-fixed px-sm py-xs rounded">B-88219</span>
</td>
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="font-body-md font-semibold text-on-background">Oct 24, 09:00 AM</span>
<span className="text-xs text-on-surface-variant">Regional Payroll US-EAST</span>
</div>
</td>
<td className="px-lg py-md min-w-[200px]">
<div className="flex flex-col gap-xs">
<div className="flex justify-between font-label-md text-[10px] text-on-surface-variant">
<span>742 / 1,000</span>
<span className="text-primary font-bold">74%</span>
</div>
<div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="batch-progress-bar h-full bg-primary" style={{width: "74%"}}></div>
</div>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center justify-center gap-lg">
<div className="flex flex-col items-center">
<span className="text-[#16A34A] font-bold text-body-md">738</span>
<span className="text-[10px] uppercase text-secondary font-label-md">Success</span>
</div>
<div className="flex flex-col items-center">
<span className="text-error font-bold text-body-md">4</span>
<span className="text-[10px] uppercase text-secondary font-label-md">Fail</span>
</div>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">account_balance</span>
<span className="font-body-md">ACH Transfer</span>
</div>
</td>
<td className="px-lg py-md text-right">
<button className="bg-surface-container-high text-on-surface-variant px-md py-sm rounded-lg font-label-md text-label-md hover:bg-outline-variant transition-colors group-hover:bg-primary group-hover:text-on-primary">
                                        Monitor
                                    </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-lg py-md">
<span className="font-label-md text-label-md text-primary bg-primary-fixed px-sm py-xs rounded">B-88218</span>
</td>
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="font-body-md font-semibold text-on-background">Oct 24, 08:30 AM</span>
<span className="text-xs text-on-surface-variant">Vendor Disbursements</span>
</div>
</td>
<td className="px-lg py-md min-w-[200px]">
<div className="flex flex-col gap-xs">
<div className="flex justify-between font-label-md text-[10px] text-on-surface-variant">
<span>500 / 500</span>
<span className="text-[#16A34A] font-bold">100%</span>
</div>
<div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="batch-progress-bar h-full bg-[#16A34A]" style={{width: "100%"}}></div>
</div>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center justify-center gap-lg">
<div className="flex flex-col items-center">
<span className="text-[#16A34A] font-bold text-body-md">492</span>
<span className="text-[10px] uppercase text-secondary font-label-md">Success</span>
</div>
<div className="flex flex-col items-center">
<span className="text-error font-bold text-body-md">8</span>
<span className="text-[10px] uppercase text-secondary font-label-md">Fail</span>
</div>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">public</span>
<span className="font-body-md">SWIFT/Wire</span>
</div>
</td>
<td className="px-lg py-md text-right">
<button className="bg-error/10 text-error px-md py-sm rounded-lg font-label-md text-label-md flex items-center gap-xs ml-auto hover:bg-error hover:text-on-error transition-all active:scale-95">
<span className="material-symbols-outlined text-[18px]">replay</span>
                                        Retry 8
                                    </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-lg py-md">
<span className="font-label-md text-label-md text-primary bg-primary-fixed px-sm py-xs rounded">B-88217</span>
</td>
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="font-body-md font-semibold text-on-background">Oct 24, 08:00 AM</span>
<span className="text-xs text-on-surface-variant">Affiliate Commissions</span>
</div>
</td>
<td className="px-lg py-md min-w-[200px]">
<div className="flex flex-col gap-xs">
<div className="flex justify-between font-label-md text-[10px] text-on-surface-variant">
<span>1,250 / 1,250</span>
<span className="text-[#16A34A] font-bold">100%</span>
</div>
<div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="batch-progress-bar h-full bg-[#16A34A]" style={{width: "100%"}}></div>
</div>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center justify-center gap-lg">
<div className="flex flex-col items-center">
<span className="text-[#16A34A] font-bold text-body-md">1250</span>
<span className="text-[10px] uppercase text-secondary font-label-md">Success</span>
</div>
<div className="flex flex-col items-center opacity-30">
<span className="text-on-surface-variant font-bold text-body-md">0</span>
<span className="text-[10px] uppercase text-secondary font-label-md">Fail</span>
</div>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">credit_card</span>
<span className="font-body-md">Virtual Card</span>
</div>
</td>
<td className="px-lg py-md text-right">
<button className="text-primary px-md py-sm font-label-md text-label-md hover:underline">
                                        View Report
                                    </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors group bg-surface-container-low/20">
<td className="px-lg py-md">
<span className="font-label-md text-label-md text-primary bg-primary-fixed px-sm py-xs rounded">B-88210</span>
</td>
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="font-body-md font-semibold text-on-background">Oct 23, 11:45 PM</span>
<span className="text-xs text-on-surface-variant">Correction Cycle</span>
</div>
</td>
<td className="px-lg py-md min-w-[200px]">
<div className="flex flex-col gap-xs">
<div className="flex justify-between font-label-md text-[10px] text-on-surface-variant">
<span>Retrying (2/3)</span>
<span className="text-[#F59E0B] font-bold">60%</span>
</div>
<div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="batch-progress-bar h-full bg-[#F59E0B]" style={{width: "60%"}}></div>
</div>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center justify-center gap-lg">
<div className="flex items-center gap-xs text-[#F59E0B] bg-[#F59E0B]/10 px-md py-xs rounded-full font-label-md text-label-md">
<span className="material-symbols-outlined animate-spin text-[16px]">sync</span>
                                            Retrying Failed...
                                        </div>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">account_balance_wallet</span>
<span className="font-body-md">SEPA</span>
</div>
</td>
<td className="px-lg py-md text-right">
<button className="bg-surface-container-lowest border border-outline-variant text-on-surface-variant px-md py-sm rounded-lg font-label-md text-label-md active:scale-95 transition-transform">
                                        Stop
                                    </button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-lg border-t border-outline-variant flex justify-between items-center bg-[#F7FAFF]">
<div className="flex items-center gap-md">
<span className="font-label-md text-label-md text-on-surface-variant">Show</span>
<select className="bg-surface-container-lowest border border-outline-variant rounded px-sm py-xs font-label-md">
<option>10 rows</option>
<option>25 rows</option>
<option>50 rows</option>
</select>
<span className="font-body-md text-on-surface-variant">Showing 1-10 of 42 runs</span>
</div>
<div className="flex items-center gap-sm">
<button className="p-xs rounded hover:bg-surface-container-high transition-colors disabled:opacity-30" disabled={true}>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<div className="flex gap-xs">
<button className="w-8 h-8 rounded bg-primary text-on-primary font-label-md">1</button>
<button className="w-8 h-8 rounded hover:bg-surface-container-high font-label-md">2</button>
<button className="w-8 h-8 rounded hover:bg-surface-container-high font-label-md">3</button>
<button className="w-8 h-8 rounded hover:bg-surface-container-high font-label-md">4</button>
</div>
<button className="p-xs rounded hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="bg-primary-container/10 border border-primary/20 p-lg rounded-xl flex items-start gap-lg relative overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-md">
<span className="material-symbols-outlined">lightbulb</span>
</div>
<h4 className="font-title-lg text-title-lg text-on-primary-container">Optimization Suggestion</h4>
<p className="text-body-md text-on-primary-container mt-xs max-w-md">Batch run B-88219 is currently encountering 4% higher latency than usual for SEPA transfers. Consider shifting future SEPA batches to start 30 minutes earlier.</p>
<button className="mt-md font-label-md text-label-md text-primary font-bold hover:underline">Dismiss Recommendation</button>
</div>
<div className="hidden md:block absolute -right-4 -bottom-4 opacity-10">
<span className="material-symbols-outlined text-[160px]">insights</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex flex-col justify-between">
<div>
<h4 className="font-title-lg text-title-lg">System Health</h4>
<p className="text-body-md text-on-surface-variant mt-xs">All payment gateway connectors are operational.</p>
</div>
<div className="mt-md flex items-center gap-lg">
<div className="flex items-center gap-xs">
<div className="w-2.5 h-2.5 rounded-full bg-[#16A34A]"></div>
<span className="font-label-md text-[10px] text-secondary">STRIPE GATEWAY</span>
</div>
<div className="flex items-center gap-xs">
<div className="w-2.5 h-2.5 rounded-full bg-[#16A34A]"></div>
<span className="font-label-md text-[10px] text-secondary">ADYEN CLOUD</span>
</div>
<div className="flex items-center gap-xs">
<div className="w-2.5 h-2.5 rounded-full bg-[#16A34A]"></div>
<span className="font-label-md text-[10px] text-secondary">PLAIDS SYNC</span>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default PaymentRuns;
