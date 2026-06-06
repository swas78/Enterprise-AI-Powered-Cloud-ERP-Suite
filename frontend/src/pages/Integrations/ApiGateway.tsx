import React from 'react';


const ApiGateway: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 bg-surface border-b border-outline-variant sticky top-0">
<div className="flex items-center gap-md">
<h1 className="font-title-lg text-title-lg text-on-surface">Integration Settings</h1>
</div>
<div className="flex items-center gap-md">
<div className="flex items-center gap-sm px-sm py-1 bg-surface-container-low rounded border border-outline-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="search">search</span>
<input className="bg-transparent border-none text-body-md focus:ring-0 w-48" placeholder="Search integrations..." type="text"/>
<span className="text-[10px] text-outline px-1 border border-outline rounded">⌘K</span>
</div>
<div className="flex items-center gap-xs">
<button className="p-2 rounded hover:bg-surface-container-low text-on-surface-variant transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 rounded hover:bg-surface-container-low text-on-surface-variant transition-colors">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center border border-outline-variant ml-xs">
<img alt="User profile" className="w-full h-full rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZMslkPEfI-lCZQkwlhTS12ITULuWmJ8vzUGqXK5QzOZwKoeGSg1HnKHfPzXKTGL7rqqbQi328dMG-MpCYHtAdSgkf6z5ckzfLMdB9RmM6jRxVhWH72My-WWpIpJVTJKB-G05EN-DWM_7C3WzHy2IpRwWDfR3lGKCuvFtw7o1qAJRFsj0DPmIfmpGDY4ERFAQXuvvVw7K6zHBvXOaDMyZ2kQ6AcHBhVPTsMq9SqdIrSbKyKcWUqbHaP7PeLg9OAvMa1_iUo92c8jU"/>
</div>
</div>
</div>
</header>

<div className="p-lg flex-1 overflow-y-auto custom-scrollbar">

<div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
<div className="col-span-1 md:col-span-2 bg-surface-container-lowest border border-outline-variant p-lg rounded-lg flex items-center justify-between relative overflow-hidden group">
<div className="relative z-10">
<span className="font-label-md text-label-md text-outline uppercase tracking-wider">API Gateway Status</span>
<div className="flex items-baseline gap-sm mt-xs">
<h2 className="font-display-lg text-display-lg text-on-surface">1.2M</h2>
<span className="font-body-md text-primary">Requests / Month</span>
</div>
<div className="mt-md flex items-center gap-md">
<div className="flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-success-green bg-[#16A34A] animate-pulse"></span>
<span className="font-body-md text-[#16A34A]">Operational</span>
</div>
<div className="text-outline text-[12px]">Avg latency: 42ms</div>
</div>
</div>

<div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-20 group-hover:opacity-30 transition-opacity">
<div className="h-full w-full flex items-end gap-1 p-xs">
<div className="bg-primary-container w-full h-[60%]"></div>
<div className="bg-primary-container w-full h-[75%]"></div>
<div className="bg-primary-container w-full h-[65%]"></div>
<div className="bg-primary-container w-full h-[90%]"></div>
<div className="bg-primary-container w-full h-[80%]"></div>
</div>
</div>
</div>
<div className="bg-primary-container text-on-primary-container p-lg rounded-lg flex flex-col justify-between border border-primary">
<div>
<span className="font-label-md text-label-md uppercase tracking-wider opacity-80">Developer Portal</span>
<p className="font-body-md mt-sm leading-relaxed">Access full documentation, sandbox environments, and advanced SDK configurations.</p>
</div>
<a className="mt-md inline-flex items-center gap-sm font-title-lg text-white hover:underline" href="#">
                            Open Portal <span className="material-symbols-outlined" data-icon="open_in_new">open_in_new</span>
</a>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">

<div className="lg:col-span-8 space-y-lg">
<div className="flex items-center justify-between">
<h3 className="font-headline-md text-headline-md text-on-surface">Connected Applications</h3>
<button className="bg-primary hover:bg-[#0B7DFF] text-white px-md py-sm rounded-lg font-label-md transition-colors shadow-sm flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                                Discover More
                            </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">

<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg flex flex-col gap-md hover:border-primary transition-all group">
<div className="flex justify-between items-start">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-low border border-outline-variant">
<span className="material-symbols-outlined text-[#E01E5A]" data-icon="chat">chat</span>
</div>
<div>
<h4 className="font-title-lg text-title-lg">Slack</h4>
<p className="font-body-md text-outline">Real-time alerts &amp; logs</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div className="flex items-center gap-xs text-[12px] text-outline">
<span className="material-symbols-outlined text-[14px]" data-icon="sync">sync</span>
                                    Last synced 2m ago
                                </div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg flex flex-col gap-md hover:border-primary transition-all group">
<div className="flex justify-between items-start">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-low border border-outline-variant">
<span className="material-symbols-outlined text-[#00A1E0]" data-icon="cloud">cloud</span>
</div>
<div>
<h4 className="font-title-lg text-title-lg">Salesforce</h4>
<p className="font-body-md text-outline">CRM Data Ingestion</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div className="flex items-center gap-xs text-[12px] text-outline">
<span className="material-symbols-outlined text-[14px]" data-icon="check_circle">check_circle</span>
                                    12 Pipelines active
                                </div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg flex flex-col gap-md hover:border-primary transition-all group">
<div className="flex justify-between items-start">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-low border border-outline-variant">
<span className="material-symbols-outlined text-[#464EB8]" data-icon="groups_2">groups_2</span>
</div>
<div>
<h4 className="font-title-lg text-title-lg">Microsoft Teams</h4>
<p className="font-body-md text-outline">Collaboration sync</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div className="bg-surface-container px-sm py-1 rounded w-fit text-[11px] font-bold text-outline">DISCONNECTED</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg flex flex-col gap-md hover:border-primary transition-all group">
<div className="flex justify-between items-start">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-low border border-outline-variant">
<span className="material-symbols-outlined text-[#FF9900]" data-icon="storage">storage</span>
</div>
<div>
<h4 className="font-title-lg text-title-lg">AWS S3</h4>
<p className="font-body-md text-outline">Log Storage &amp; Backups</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div className="flex items-center gap-xs text-[12px] text-[#DC2626]">
<span className="material-symbols-outlined text-[14px]" data-icon="warning">warning</span>
                                    Permission error detected
                                </div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
<div className="p-lg border-b border-outline-variant flex justify-between items-center">
<div>
<h3 className="font-headline-md text-headline-md">Global Webhooks</h3>
<p className="font-body-md text-outline">Configure global endpoints for event streaming</p>
</div>
<button className="text-primary hover:bg-primary-fixed px-md py-sm rounded-lg border border-primary transition-all font-label-md">Add Endpoint</button>
</div>
<div className="divide-y divide-outline-variant">
<div className="p-md flex items-center justify-between hover:bg-surface transition-colors">
<div className="flex flex-col">
<code className="text-code-sm bg-surface-container px-2 py-1 rounded w-fit">https://api.internal.corp/webhooks/prod</code>
<span className="font-body-md text-outline mt-1">Status Events, Financial Alerts</span>
</div>
<div className="flex items-center gap-md">
<span className="px-2 py-1 bg-green-100 text-[#16A34A] text-[10px] font-bold rounded">ACTIVE</span>
<button className="text-outline hover:text-on-surface">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
<div className="p-md flex items-center justify-between hover:bg-surface transition-colors opacity-60">
<div className="flex flex-col">
<code className="text-code-sm bg-surface-container px-2 py-1 rounded w-fit">https://dev-sandbox.io/catch/amdx_991</code>
<span className="font-body-md text-outline mt-1">Debugging, Dev Events</span>
</div>
<div className="flex items-center gap-md">
<span className="px-2 py-1 bg-surface-container text-outline text-[10px] font-bold rounded">INACTIVE</span>
<button className="text-outline hover:text-on-surface">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-lg">
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg">
<h3 className="font-title-lg text-title-lg mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" data-icon="key">key</span>
                                API Key Management
                            </h3>
<div className="space-y-md">
<div className="p-sm bg-surface-container-low border border-outline-variant rounded relative group">
<div className="flex justify-between items-center mb-1">
<span className="font-label-md text-outline">Production Key</span>
<span className="text-[10px] text-outline">Expires in 12d</span>
</div>
<div className="flex items-center justify-between">
<code className="text-code-sm text-on-surface">amdx_live_••••••••39a1</code>
<button className="p-1 hover:bg-surface-container rounded transition-colors" >
<span className="material-symbols-outlined text-[18px]" data-icon="content_copy">content_copy</span>
</button>
</div>
</div>
<div className="p-sm bg-surface-container-low border border-outline-variant rounded relative group">
<div className="flex justify-between items-center mb-1">
<span className="font-label-md text-outline">Analytics Read-Only</span>
<span className="text-[10px] text-outline">Never Expires</span>
</div>
<div className="flex items-center justify-between">
<code className="text-code-sm text-on-surface">amdx_ro_••••••••81f2</code>
<button className="p-1 hover:bg-surface-container rounded transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="content_copy">content_copy</span>
</button>
</div>
</div>
</div>
<button className="w-full mt-lg bg-surface border border-primary text-primary hover:bg-primary-fixed py-md rounded-lg font-label-md transition-all">
                                Generate New Key
                            </button>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg">
<h3 className="font-title-lg text-title-lg mb-md">Usage Quotas</h3>
<div className="space-y-lg">
<div>
<div className="flex justify-between text-label-md mb-xs">
<span className="text-outline">Monthly Requests</span>
<span className="text-on-surface">1.2M / 2.0M</span>
</div>
<div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="bg-primary h-full w-[60%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-label-md mb-xs">
<span className="text-outline">Active Endpoints</span>
<span className="text-on-surface">18 / 50</span>
</div>
<div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="bg-[#16A34A] h-full w-[36%]"></div>
</div>
</div>
</div>
<div className="mt-xl p-md bg-secondary-container bg-opacity-30 rounded-lg flex items-start gap-md border border-outline-variant">
<span className="material-symbols-outlined text-secondary" data-icon="info">info</span>
<p className="text-code-sm text-on-secondary-container">Your plan will auto-renew on the 24th of each month. Overages are billed at $0.005 per 1k requests.</p>
</div>
</div>

<div className="rounded-lg border border-outline-variant h-32 relative overflow-hidden bg-inverse-surface group">
<div className="absolute inset-0 opacity-10">

</div>
<div className="relative z-10 p-md flex flex-col justify-center h-full text-white">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary-fixed">Premium Feature</span>
<h4 className="font-title-lg">Enterprise Identity Sync</h4>
<a className="text-primary-fixed text-[12px] flex items-center gap-xs mt-1 group-hover:underline" href="#">
                                    Request access <span className="material-symbols-outlined text-[14px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default ApiGateway;
