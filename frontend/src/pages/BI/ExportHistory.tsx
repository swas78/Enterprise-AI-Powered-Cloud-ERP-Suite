import React from 'react';


const ExportHistory: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 bg-surface border-b border-outline-variant">
<div className="flex items-center gap-md flex-1">
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="w-full bg-surface-container-low border-none rounded-lg pl-xl pr-md py-1 text-body-md focus:ring-2 focus:ring-primary-container" placeholder="Global search (CMD+K)" type="text"/>
</div>
</div>
<div className="flex items-center gap-lg">
<div className="flex items-center gap-md">
<button className="text-on-surface-variant hover:bg-surface-container-low p-xs rounded transition-colors duration-150 relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
</button>
<button className="text-on-surface-variant hover:bg-surface-container-low p-xs rounded transition-colors duration-150">
<span className="material-symbols-outlined">help</span>
</button>
<button className="text-primary hover:bg-surface-container-low p-xs rounded transition-colors duration-150">
<span className="material-symbols-outlined">cloud_done</span>
</button>
</div>
<img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant bg-surface-container-high" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDlPBTImEJwTbdhaPusSDOv94XC4ZrwMl8Xrn7M5FkLms8L5rlJDc_THIwgqwqt5evNoqxJJwA7JhQPKI4FCiI4luX4BTMG_c94PwvGqq5RNyDMFkepUhOzeJwi8JIFSdqacmOE8VHF0r14OuPh-lqimywAbd-DfIAEslH8hTEq3zmZ2ctlyVmAIb3av9H8b9NpKcyLK2o6tRu5Y0or1_P5am4o2SbAmAIl_WXsW-RhRBEHIJOHqXF1Q56zErVB8SzJy8Jcp9FA9k"/>
</div>
</header>

<div className="p-lg md:p-xl max-w-7xl mx-auto w-full">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
<div>
<nav className="flex items-center gap-xs text-label-md text-secondary mb-base">
<span>Finance</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Export History</span>
</nav>
<h1 className="font-headline-lg text-headline-lg text-on-surface">File Export Status</h1>
<p className="text-body-md text-on-surface-variant mt-xs">Monitor and manage your generated enterprise reports and data exports.</p>
</div>
<div className="flex items-center gap-sm">
<button className="flex items-center gap-xs px-md py-2 border border-outline text-primary rounded-lg font-label-md hover:bg-surface-container-low transition-colors duration-150">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                            Filters
                        </button>
<button className="flex items-center gap-xs px-md py-2 bg-primary text-white rounded-lg font-label-md hover:bg-on-primary-fixed-variant transition-colors duration-150 active:scale-95">
<span className="material-symbols-outlined text-[18px]">add</span>
                            New Export
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-xl">
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl flex items-center gap-md">
<div className="w-10 h-10 rounded bg-primary-container/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>description</span>
</div>
<div>
<p className="text-label-md text-secondary">Total Exports</p>
<p className="font-headline-md text-headline-md text-on-surface">1,284</p>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl flex items-center gap-md">
<div className="w-10 h-10 rounded bg-green-100 flex items-center justify-center text-green-600">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
</div>
<div>
<p className="text-label-md text-secondary">Completed</p>
<p className="font-headline-md text-headline-md text-on-surface">1,242</p>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl flex items-center gap-md">
<div className="w-10 h-10 rounded bg-amber-100 flex items-center justify-center text-amber-600">
<span className="material-symbols-outlined status-pulse" style={{fontVariationSettings: "'FILL' 1"}}>sync</span>
</div>
<div>
<p className="text-label-md text-secondary">Processing</p>
<p className="font-headline-md text-headline-md text-on-surface">38</p>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl flex items-center gap-md">
<div className="w-10 h-10 rounded bg-error-container/20 flex items-center justify-center text-error">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>error</span>
</div>
<div>
<p className="text-label-md text-secondary">Failed</p>
<p className="font-headline-md text-headline-md text-on-surface">4</p>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container sticky top-0 border-b border-outline-variant">
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider w-1/3">
<div className="flex items-center gap-xs cursor-pointer hover:text-on-surface group">
                                            File Name
                                            <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">expand_more</span>
</div>
</th>
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
<div className="flex items-center gap-xs cursor-pointer hover:text-on-surface group">
                                            Status
                                            <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">expand_more</span>
</div>
</th>
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                                        Type
                                    </th>
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                                        Date Generated
                                    </th>
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">
                                        Actions
                                    </th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/50">

<tr className="hover:bg-surface-container-low transition-colors duration-150">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="p-xs bg-surface-container-high rounded border border-outline-variant">
<span className="material-symbols-outlined text-primary">description</span>
</div>
<div>
<p className="font-body-md font-semibold text-on-surface">Q3_Financial_Summary_v2.xlsx</p>
<p className="text-code-sm text-secondary">2.4 MB • Generated by System</p>
</div>
</div>
</td>
<td className="px-lg py-md">
<span className="inline-flex items-center gap-xs px-sm py-1 rounded-full bg-green-50 text-green-700 font-label-md text-[11px] border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                                            Completed
                                        </span>
</td>
<td className="px-lg py-md text-body-md text-on-surface-variant">XLSX</td>
<td className="px-lg py-md text-body-md text-on-surface-variant">Oct 24, 2023, 09:12 AM</td>
<td className="px-lg py-md text-right">
<div className="flex items-center justify-end gap-sm">
<button className="p-xs hover:bg-primary-container/10 text-primary rounded transition-colors duration-150" title="Download">
<span className="material-symbols-outlined">download</span>
</button>
<button className="p-xs hover:bg-surface-container-high text-on-surface-variant rounded transition-colors duration-150" title="Resend">
<span className="material-symbols-outlined">send</span>
</button>
<button className="p-xs hover:bg-error-container/20 text-error rounded transition-colors duration-150" title="Delete">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors duration-150">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="p-xs bg-surface-container-high rounded border border-outline-variant">
<span className="material-symbols-outlined text-primary">analytics</span>
</div>
<div>
<p className="font-body-md font-semibold text-on-surface">Global_Supply_Chain_Risk_Assessment.pdf</p>
<p className="text-code-sm text-secondary">Calculating... • Requested by J. Doe</p>
</div>
</div>
</td>
<td className="px-lg py-md">
<span className="inline-flex items-center gap-xs px-sm py-1 rounded-full bg-amber-50 text-amber-700 font-label-md text-[11px] border border-amber-200">
<span className="w-1.5 h-1.5 rounded-full bg-amber-600 status-pulse"></span>
                                            Processing
                                        </span>
</td>
<td className="px-lg py-md text-body-md text-on-surface-variant">PDF</td>
<td className="px-lg py-md text-body-md text-on-surface-variant">Oct 24, 2023, 10:45 AM</td>
<td className="px-lg py-md text-right">
<div className="flex items-center justify-end gap-sm">
<button className="p-xs opacity-30 cursor-not-allowed" disabled={true}>
<span className="material-symbols-outlined">download</span>
</button>
<button className="p-xs hover:bg-surface-container-high text-on-surface-variant rounded transition-colors duration-150">
<span className="material-symbols-outlined">block</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors duration-150">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="p-xs bg-surface-container-high rounded border border-outline-variant">
<span className="material-symbols-outlined text-error">warning</span>
</div>
<div>
<p className="font-body-md font-semibold text-on-surface">Employee_Payroll_Tax_Ledger_2023.csv</p>
<p className="text-code-sm text-error">Error: Database connection timeout</p>
</div>
</div>
</td>
<td className="px-lg py-md">
<span className="inline-flex items-center gap-xs px-sm py-1 rounded-full bg-error-container/20 text-error font-label-md text-[11px] border border-error-container">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                            Failed
                                        </span>
</td>
<td className="px-lg py-md text-body-md text-on-surface-variant">CSV</td>
<td className="px-lg py-md text-body-md text-on-surface-variant">Oct 24, 2023, 08:30 AM</td>
<td className="px-lg py-md text-right">
<div className="flex items-center justify-end gap-sm">
<button className="p-xs hover:bg-amber-100 text-amber-700 rounded transition-colors duration-150" title="Retry">
<span className="material-symbols-outlined">replay</span>
</button>
<button className="p-xs hover:bg-error-container/20 text-error rounded transition-colors duration-150" title="Delete">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors duration-150">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="p-xs bg-surface-container-high rounded border border-outline-variant">
<span className="material-symbols-outlined text-primary">table_chart</span>
</div>
<div>
<p className="font-body-md font-semibold text-on-surface">Compliance_Audit_Log_Archive.zip</p>
<p className="text-code-sm text-secondary">156.8 MB • Scheduled Task</p>
</div>
</div>
</td>
<td className="px-lg py-md">
<span className="inline-flex items-center gap-xs px-sm py-1 rounded-full bg-green-50 text-green-700 font-label-md text-[11px] border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                                            Completed
                                        </span>
</td>
<td className="px-lg py-md text-body-md text-on-surface-variant">ZIP</td>
<td className="px-lg py-md text-body-md text-on-surface-variant">Oct 23, 2023, 11:59 PM</td>
<td className="px-lg py-md text-right">
<div className="flex items-center justify-end gap-sm">
<button className="p-xs hover:bg-primary-container/10 text-primary rounded transition-colors duration-150">
<span className="material-symbols-outlined">download</span>
</button>
<button className="p-xs hover:bg-surface-container-high text-on-surface-variant rounded transition-colors duration-150">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between px-lg py-md bg-surface border-t border-outline-variant">
<div className="flex items-center gap-md text-label-md text-secondary">
<span>Rows per page:</span>
<select className="bg-transparent border-none focus:ring-0 cursor-pointer text-primary font-semibold">
<option>10</option>
<option>25</option>
<option>50</option>
</select>
<span className="ml-xl">Page 1 of 129</span>
</div>
<div className="flex items-center gap-xs">
<button className="p-xs hover:bg-surface-container-high rounded disabled:opacity-30" disabled={true}>
<span className="material-symbols-outlined">first_page</span>
</button>
<button className="p-xs hover:bg-surface-container-high rounded disabled:opacity-30" disabled={true}>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="p-xs hover:bg-surface-container-high rounded">
<span className="material-symbols-outlined">chevron_right</span>
</button>
<button className="p-xs hover:bg-surface-container-high rounded">
<span className="material-symbols-outlined">last_page</span>
</button>
</div>
</div>
</div>

<div className="mt-xl p-lg bg-surface-container-lowest border border-outline-variant rounded-xl border-dashed">
<div className="flex items-center justify-between mb-md">
<h3 className="font-title-lg text-title-lg text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">terminal</span>
                            Export Engine Status
                        </h3>
<span className="inline-flex items-center gap-xs text-label-md text-green-600 font-semibold uppercase">
<span className="w-2 h-2 rounded-full bg-green-600"></span>
                            All Nodes Healthy
                        </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
<div className="p-sm bg-surface-container rounded border border-outline-variant">
<p className="text-label-md text-secondary mb-xs">Queue Latency</p>
<div className="flex items-end gap-sm">
<span className="font-headline-md text-headline-md text-primary">1.2s</span>
<span className="text-code-sm text-green-600 mb-xs">▼ 12%</span>
</div>
</div>
<div className="p-sm bg-surface-container rounded border border-outline-variant">
<p className="text-label-md text-secondary mb-xs">Daily Compute</p>
<div className="flex items-end gap-sm">
<span className="font-headline-md text-headline-md text-primary">84.2 GB</span>
<span className="text-code-sm text-secondary mb-xs">Avg. Load</span>
</div>
</div>
<div className="p-sm bg-surface-container rounded border border-outline-variant">
<p className="text-label-md text-secondary mb-xs">Success Rate</p>
<div className="flex items-end gap-sm">
<span className="font-headline-md text-headline-md text-primary">99.7%</span>
<span className="text-code-sm text-green-600 mb-xs">Optimal</span>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default ExportHistory;
