import React from 'react';


const ModelStatus: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 bg-surface border-b border-outline-variant sticky top-0">
<div className="flex items-center gap-xl">
<h1 className="font-headline-md text-headline-md font-bold text-primary">AMDOX</h1>
<div className="relative hidden md:block">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="pl-xl pr-md py-xs bg-surface-container-low border border-outline-variant rounded-lg text-body-md w-[320px] focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="Search resources (CMD+K)" type="text"/>
</div>
</div>
<div className="flex items-center gap-lg">
<div className="flex items-center gap-sm px-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]" data-icon="cloud_done">cloud_done</span>
<span className="font-label-md text-label-md">Synced</span>
</div>
<div className="flex items-center gap-md">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant">
<img alt="User profile" className="w-full h-full object-cover" data-alt="Professional studio portrait of a technology executive in a minimalist environment. The image is crisp, using soft high-key lighting and a neutral white background. The subject is wearing a tailored charcoal suit, embodying a modern corporate aesthetic that aligns with clean enterprise software design principles." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYVf0YUZqZZQYm5QQB6lsFz6v_OGuJ4D3YO3f_6Ka8FR7VEeYKMCzQkstbbYNGFo1tGKpTh85AmJzT5lo3LMyCLS4u6OwRzFZegyoMJpgjV0GMckHEtq9ouGv7xSjcmgwH_IEXXaqznyNGtVF4ORp3yQM1CSoObksKOhriMJG40G1r4IqBOyl8WuqnXjveRm1nKoX-BuR-JUvYE5v1a-_afPLDfMOjnP5kFwlKyrB5jg8AblpPQy4S6F5Z_5MzF0K9ybsv6sWVlZU"/>
</div>
</div>
</div>
</header>

<div className="p-xl max-w-[1600px] mx-auto w-full">

<div className="flex justify-between items-end mb-2xl">
<div>
<div className="flex items-center gap-sm text-primary mb-xs">
<span className="material-symbols-outlined text-[18px]">psychology</span>
<span className="font-label-md text-label-md uppercase tracking-widest">Intelligence Engine</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-background">AI Model Management</h2>
<p className="text-secondary font-body-md mt-xs">Real-time telemetry and health monitoring for predictive demand forecasting.</p>
</div>
<div className="flex gap-md">
<button className="flex items-center gap-sm px-lg py-sm border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors text-on-surface">
<span className="material-symbols-outlined text-[18px]">download</span>
                            Export Metrics
                        </button>
<button className="flex items-center gap-sm px-lg py-sm bg-primary text-white rounded-lg font-label-md text-label-md hover:bg-[#0B7DFF] transition-colors shadow-sm active:scale-95 duration-150">
<span className="material-symbols-outlined text-[18px]">refresh</span>
                            Retrain Now
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
<div className="bg-white p-lg rounded-xl border border-outline-variant flex flex-col gap-md">
<div className="flex justify-between items-start">
<span className="text-secondary font-label-md text-label-md uppercase tracking-wider">Active Version</span>
<span className="material-symbols-outlined text-primary" data-icon="verified" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
</div>
<div>
<p className="font-headline-md text-headline-md text-on-background">v4.2.1-stable</p>
<span className="font-label-md text-label-md text-success-green bg-green-50 text-[#16A34A] px-sm py-[2px] rounded">Production</span>
</div>
</div>
<div className="bg-white p-lg rounded-xl border border-outline-variant flex flex-col gap-md">
<div className="flex justify-between items-start">
<span className="text-secondary font-label-md text-label-md uppercase tracking-wider">MAPE</span>
<span className="material-symbols-outlined text-primary" data-icon="show_chart">show_chart</span>
</div>
<div>
<p className="font-headline-md text-headline-md text-on-background">4.2%</p>
<span className="font-label-md text-label-md text-[#16A34A] flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                                0.3% vs v4.1.9
                            </span>
</div>
</div>
<div className="bg-white p-lg rounded-xl border border-outline-variant flex flex-col gap-md">
<div className="flex justify-between items-start">
<span className="text-secondary font-label-md text-label-md uppercase tracking-wider">Last Trained</span>
<span className="material-symbols-outlined text-primary" data-icon="timer">timer</span>
</div>
<div>
<p className="font-headline-md text-headline-md text-on-background">2h ago</p>
<p className="font-label-md text-label-md text-secondary">Duration: 14m 22s</p>
</div>
</div>
<div className="bg-white p-lg rounded-xl border border-outline-variant flex flex-col gap-md">
<div className="flex justify-between items-start">
<span className="text-secondary font-label-md text-label-md uppercase tracking-wider">Next Retrain</span>
<span className="material-symbols-outlined text-primary" data-icon="event_repeat">event_repeat</span>
</div>
<div>
<p className="font-headline-md text-headline-md text-on-background">Today, 02:00</p>
<p className="font-label-md text-label-md text-secondary">UTC standard interval</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl mb-xl">

<div className="lg:col-span-8 bg-white p-lg rounded-xl border border-outline-variant">
<div className="flex justify-between items-center mb-xl">
<h3 className="font-title-lg text-title-lg text-on-background">Training Performance Trends</h3>
<div className="flex items-center gap-sm">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="font-label-md text-label-md text-secondary">MAPE (%)</span>
</div>
</div>
<div className="chart-container flex items-end justify-between px-md">

<div className="group relative flex-1 flex flex-col items-center gap-sm">
<div className="w-full bg-surface-container-high rounded-t-sm h-[80%] group-hover:bg-primary-container transition-colors relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-[10px] px-sm py-[2px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">8.2%</div>
</div>
<span className="font-code-sm text-code-sm text-secondary">v4.1.2</span>
</div>
<div className="w-lg"></div>
<div className="group relative flex-1 flex flex-col items-center gap-sm">
<div className="w-full bg-surface-container-high rounded-t-sm h-[75%] group-hover:bg-primary-container transition-colors relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-[10px] px-sm py-[2px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">7.8%</div>
</div>
<span className="font-code-sm text-code-sm text-secondary">v4.1.3</span>
</div>
<div className="w-lg"></div>
<div className="group relative flex-1 flex flex-col items-center gap-sm">
<div className="w-full bg-surface-container-high rounded-t-sm h-[70%] group-hover:bg-primary-container transition-colors relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-[10px] px-sm py-[2px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">7.1%</div>
</div>
<span className="font-code-sm text-code-sm text-secondary">v4.1.4</span>
</div>
<div className="w-lg"></div>
<div className="group relative flex-1 flex flex-col items-center gap-sm">
<div className="w-full bg-surface-container-high rounded-t-sm h-[60%] group-hover:bg-primary-container transition-colors relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-[10px] px-sm py-[2px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">6.2%</div>
</div>
<span className="font-code-sm text-code-sm text-secondary">v4.1.5</span>
</div>
<div className="w-lg"></div>
<div className="group relative flex-1 flex flex-col items-center gap-sm">
<div className="w-full bg-surface-container-high rounded-t-sm h-[55%] group-hover:bg-primary-container transition-colors relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-[10px] px-sm py-[2px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">5.8%</div>
</div>
<span className="font-code-sm text-code-sm text-secondary">v4.1.6</span>
</div>
<div className="w-lg"></div>
<div className="group relative flex-1 flex flex-col items-center gap-sm">
<div className="w-full bg-surface-container-high rounded-t-sm h-[50%] group-hover:bg-primary-container transition-colors relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-[10px] px-sm py-[2px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">5.2%</div>
</div>
<span className="font-code-sm text-code-sm text-secondary">v4.1.7</span>
</div>
<div className="w-lg"></div>
<div className="group relative flex-1 flex flex-col items-center gap-sm">
<div className="w-full bg-surface-container-high rounded-t-sm h-[48%] group-hover:bg-primary-container transition-colors relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-[10px] px-sm py-[2px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">4.9%</div>
</div>
<span className="font-code-sm text-code-sm text-secondary">v4.1.8</span>
</div>
<div className="w-lg"></div>
<div className="group relative flex-1 flex flex-col items-center gap-sm">
<div className="w-full bg-surface-container-high rounded-t-sm h-[45%] group-hover:bg-primary-container transition-colors relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-[10px] px-sm py-[2px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">4.5%</div>
</div>
<span className="font-code-sm text-code-sm text-secondary">v4.1.9</span>
</div>
<div className="w-lg"></div>
<div className="group relative flex-1 flex flex-col items-center gap-sm">
<div className="w-full bg-primary rounded-t-sm h-[42%] group-hover:bg-primary-container transition-colors relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-[10px] px-sm py-[2px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">4.2%</div>
</div>
<span className="font-code-sm text-code-sm text-primary font-bold">v4.2.1</span>
</div>
</div>
</div>

<div className="lg:col-span-4 bg-white p-lg rounded-xl border border-outline-variant flex flex-col">
<div className="flex justify-between items-center mb-lg">
<h3 className="font-title-lg text-title-lg text-on-background">Data Health</h3>
<span className="font-label-md text-label-md text-secondary">Sources: 04</span>
</div>
<div className="flex-1 space-y-md">
<div className="flex items-center justify-between p-md bg-surface-container-low rounded-lg border border-outline-variant/30">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-primary text-[20px]">insights</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-background">Sales Data</p>
<p className="text-[10px] text-secondary">Sync: 1m ago</p>
</div>
</div>
<div className="flex items-center gap-xs px-sm py-xs bg-green-100 text-[#16A34A] rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
<span className="text-[10px] font-bold uppercase">Synced</span>
</div>
</div>
<div className="flex items-center justify-between p-md bg-surface-container-low rounded-lg border border-outline-variant/30">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-primary text-[20px]">inventory</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-background">Inventory Levels</p>
<p className="text-[10px] text-secondary">Sync: 4m ago</p>
</div>
</div>
<div className="flex items-center gap-xs px-sm py-xs bg-green-100 text-[#16A34A] rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
<span className="text-[10px] font-bold uppercase">Synced</span>
</div>
</div>
<div className="flex items-center justify-between p-md bg-surface-container-low rounded-lg border border-outline-variant/30">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-primary text-[20px]">trending_up</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-background">Market Trends</p>
<p className="text-[10px] text-secondary">Last: 22m ago</p>
</div>
</div>
<div className="flex items-center gap-xs px-sm py-xs bg-orange-100 text-[#F59E0B] rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse"></span>
<span className="text-[10px] font-bold uppercase">Delayed</span>
</div>
</div>
<div className="flex items-center justify-between p-md bg-surface-container-low rounded-lg border border-outline-variant/30 opacity-70">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-secondary text-[20px]">cloud_off</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-background">Weather API</p>
<p className="text-[10px] text-secondary">Last: 2h ago</p>
</div>
</div>
<div className="flex items-center gap-xs px-sm py-xs bg-slate-200 text-[#475569] rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-[#475569]"></span>
<span className="text-[10px] font-bold uppercase">Offline</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-outline-variant overflow-hidden">
<div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-[#F7FAFF]">
<h3 className="font-title-lg text-title-lg text-on-background">Model Version History</h3>
<div className="flex gap-sm">
<button className="p-sm hover:bg-surface-container-low rounded-lg transition-colors"><span className="material-symbols-outlined text-[20px]">filter_list</span></button>
<button className="p-sm hover:bg-surface-container-low rounded-lg transition-colors"><span className="material-symbols-outlined text-[20px]">download</span></button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant">
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider">Version ID</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider">Deployment Date</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider">MAPE</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider">Parameters</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider">Status</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md font-code-sm text-code-sm text-primary font-bold">v4.2.1-stable</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface">Oct 24, 2023 14:30</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface">4.2%</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface">1.2B</td>
<td className="px-lg py-md">
<span className="px-sm py-xs bg-green-100 text-[#16A34A] text-[10px] font-bold rounded uppercase">Active</span>
</td>
<td className="px-lg py-md">
<button className="text-primary font-label-md text-label-md hover:underline">View Metadata</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md font-code-sm text-code-sm text-on-surface-variant">v4.1.9-stable</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface">Oct 12, 2023 09:15</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface">4.5%</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface">1.2B</td>
<td className="px-lg py-md">
<span className="px-sm py-xs bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase">Archived</span>
</td>
<td className="px-lg py-md">
<button className="text-primary font-label-md text-label-md hover:underline">Rollback</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md font-code-sm text-code-sm text-on-surface-variant">v4.1.8-legacy</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface">Sep 28, 2023 11:45</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface">4.9%</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface">850M</td>
<td className="px-lg py-md">
<span className="px-sm py-xs bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase">Archived</span>
</td>
<td className="px-lg py-md">
<button className="text-primary font-label-md text-label-md hover:underline">Rollback</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md font-code-sm text-code-sm text-on-surface-variant text-error">v4.1.7-fail</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface">Sep 14, 2023 16:20</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface">12.1%</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface">1.2B</td>
<td className="px-lg py-md">
<span className="px-sm py-xs bg-red-100 text-error text-[10px] font-bold rounded uppercase">Rejected</span>
</td>
<td className="px-lg py-md">
<button className="text-primary font-label-md text-label-md hover:underline">Error Log</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-lg py-md border-t border-outline-variant flex justify-between items-center bg-[#F7FAFF]">
<p className="text-secondary font-label-md text-label-md">Showing 4 of 42 versions</p>
<div className="flex gap-xs">
<button className="p-xs border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
<button className="px-md py-xs border border-primary bg-primary text-white rounded-lg font-label-md text-label-md">1</button>
<button className="px-md py-xs border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container-low">2</button>
<button className="px-md py-xs border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container-low">3</button>
<button className="p-xs border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
</div>
</div>

<footer className="mt-auto px-lg py-md flex justify-between items-center border-t border-outline-variant bg-white">
<div className="flex items-center gap-xl text-secondary font-label-md text-label-md">
<span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">verified_user</span> System Encrypted</span>
<span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">memory</span> AMDOX Core AI Cluster 09</span>
</div>
<div className="flex items-center gap-md">
<span className="font-label-md text-label-md text-secondary">Service Status:</span>
<span className="flex items-center gap-xs px-sm py-xs bg-green-50 text-[#16A34A] rounded-full text-[10px] font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse"></span>
                        NOMINAL
                    </span>
</div>
</footer>

    </div>
  );
};

export default ModelStatus;
