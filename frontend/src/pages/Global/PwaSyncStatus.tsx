import React from 'react';


const PwaSyncStatus: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 bg-surface border-b border-outline-variant">
<div className="flex items-center gap-md">
<span className="font-headline-md text-headline-md font-bold text-primary">Intelligence</span>
<span className="text-outline-variant">/</span>
<span className="font-body-md text-body-md text-on-surface-variant font-medium">Sync Status</span>
</div>
<div className="flex items-center gap-lg">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-secondary hover:bg-surface-container-low p-xs transition-colors cursor-pointer">notifications</span>
<span className="material-symbols-outlined text-secondary hover:bg-surface-container-low p-xs transition-colors cursor-pointer">help</span>
<span className="material-symbols-outlined text-primary hover:bg-surface-container-low p-xs transition-colors cursor-pointer">cloud_done</span>
</div>
<img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYmWYOOqsWsfAh11VosX_6jidfsh1xA-PdSKizFXSnhWjJQy8Lb5uvOxIdzJ324wUnLxaKQy70ne8CinUhWQeAgUtEwJYY_OhyCDkBHXdT_ZZkf4dTDzJY_ypWcQ4AKOEbzVzvJh0Akh-ji-05GdWj8fBqytnQJS03_iu6RUN4NyXnfMyEwFh8TPeHvGWk4ew_yV5keWeto70m7YOIBCcTCA9MVsP1MM5Y4SGyXWEYFm9AkowL-klDp6SbCYflxfMk7jJNr8sXFqw"/>
</div>
</header>

<div className="flex-1 overflow-y-auto p-lg custom-scrollbar">
<div className="max-w-[1200px] mx-auto space-y-lg">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-lg mb-xl">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">PWA Data Synchronization</h1>
<p className="font-body-md text-body-md text-secondary mt-1">Manage offline changes and cloud reconciliation status.</p>
</div>
<div className="flex items-center gap-md">
<button className="flex items-center gap-sm px-lg h-10 bg-primary hover:bg-[#0B7DFF] text-white rounded-lg transition-all duration-150 active:scale-95">
<span className="material-symbols-outlined text-[20px]">sync</span>
<span className="font-label-md text-label-md">Sync Now</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-lg">

<div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col items-center justify-center relative overflow-hidden group">
<div className="absolute top-0 right-0 p-lg opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[80px]">cloud_sync</span>
</div>
<div className="relative w-32 h-32 mb-md">
<svg className="sync-progress-circle w-full h-full" viewBox="0 0 100 100">
<circle className="text-surface-container stroke-current" cx="50" cy="50" fill="transparent" r="40" stroke-width="8"></circle>
<circle className="text-primary stroke-current" cx="50" cy="50" fill="transparent" r="40" stroke-dasharray="251.2" stroke-dashoffset="62.8" stroke-linecap="round" stroke-width="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-headline-md text-headline-md text-on-surface">75%</span>
<span className="text-[10px] uppercase font-bold text-secondary">Complete</span>
</div>
</div>
<div className="text-center">
<span className="font-title-lg text-title-lg text-on-surface">Overall Sync Status</span>
<p className="font-body-md text-body-md text-secondary mt-1">Last synced: 2 mins ago</p>
</div>
</div>

<div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-lg">

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">pending_actions</span>
</div>
<span className="text-[10px] font-bold text-secondary px-2 py-1 bg-surface-container rounded-full">ACTIVE</span>
</div>
<div className="mt-4">
<div className="font-headline-lg text-headline-lg text-on-surface">12</div>
<div className="font-label-md text-label-md text-secondary uppercase tracking-wider">Pending Updates</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
<span className="material-symbols-outlined text-[#16A34A]">check_circle</span>
</div>
<span className="text-[10px] font-bold text-[#16A34A] px-2 py-1 bg-green-50 rounded-full">HEALTHY</span>
</div>
<div className="mt-4">
<div className="font-headline-lg text-headline-lg text-on-surface">1,204</div>
<div className="font-label-md text-label-md text-secondary uppercase tracking-wider">Successful Syncs</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
<span className="material-symbols-outlined text-error">error</span>
</div>
<span className="text-[10px] font-bold text-error px-2 py-1 bg-red-50 rounded-full">CRITICAL</span>
</div>
<div className="mt-4">
<div className="font-headline-lg text-headline-lg text-on-surface">3</div>
<div className="font-label-md text-label-md text-secondary uppercase tracking-wider">Failed Updates</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
<h3 className="font-title-lg text-title-lg text-on-surface mb-md flex items-center gap-sm">
<span className="material-symbols-outlined">settings_suggest</span>
                                Sync Configuration
                            </h3>
<div className="space-y-lg">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-semibold">Auto-sync frequency</span>
<span className="font-label-md text-label-md text-secondary">Set interval for automated cloud checks</span>
</div>
<select className="bg-white border border-outline-variant rounded-lg text-body-md px-md py-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none">
<option>Real-time</option>
<option selected={true}>Every 5 minutes</option>
<option>Every 1 hour</option>
<option>Daily</option>
</select>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-semibold">Sync over metered connections</span>
<span className="font-label-md text-label-md text-secondary">Allow background sync on cellular data</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col justify-center">
<div className="flex gap-md items-center">
<div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary">wifi</span>
</div>
<div>
<div className="font-title-lg text-title-lg text-on-surface">Network Connectivity</div>
<div className="flex items-center gap-sm mt-1">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="font-body-md text-body-md text-secondary font-medium">Online - 120ms Latency</span>
</div>
</div>
<button className="ml-auto text-primary font-label-md text-label-md hover:underline">RE-TEST</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
<div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest sticky top-0 z-10">
<h3 className="font-title-lg text-title-lg text-on-surface">Synchronization Log</h3>
<div className="flex items-center gap-md">
<div className="relative">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-secondary text-[20px]">search</span>
<input className="pl-xl pr-md py-xs bg-white border border-outline-variant rounded-lg text-body-md focus:ring-1 focus:ring-primary outline-none w-64" placeholder="Search logs..." type="text"/>
</div>
<button className="flex items-center gap-xs px-md py-xs border border-outline-variant rounded-lg text-secondary font-label-md text-label-md hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                                    Filter
                                </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface sticky top-0">
<tr className="font-label-md text-label-md text-secondary">
<th className="px-lg py-md border-b border-outline-variant font-semibold">ACTION TYPE</th>
<th className="px-lg py-md border-b border-outline-variant font-semibold">TIMESTAMP</th>
<th className="px-lg py-md border-b border-outline-variant font-semibold">STATUS</th>
<th className="px-lg py-md border-b border-outline-variant font-semibold">ERROR DETAILS</th>
<th className="px-lg py-md border-b border-outline-variant font-semibold text-right">ACTIONS</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[20px]">add_box</span>
</div>
<span className="font-body-md text-body-md text-on-surface font-medium">Create Invoice #88412</span>
</div>
</td>
<td className="px-lg py-md font-body-md text-body-md text-secondary">Oct 24, 2023 10:14:22</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary animate-spin text-[18px]">sync</span>
<span className="font-label-md text-label-md text-primary font-bold">Syncing...</span>
</div>
</td>
<td className="px-lg py-md font-body-md text-body-md text-secondary">-</td>
<td className="px-lg py-md text-right">
<button className="text-secondary hover:text-on-surface p-sm transition-colors rounded-lg">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group bg-red-50/10">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-error-container flex items-center justify-center">
<span className="material-symbols-outlined text-error text-[20px]">edit_note</span>
</div>
<span className="font-body-md text-body-md text-on-surface font-medium">Update Project Alpha</span>
</div>
</td>
<td className="px-lg py-md font-body-md text-body-md text-secondary">Oct 24, 2023 10:12:05</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm px-2 py-1 bg-red-50 rounded-full inline-flex">
<span className="material-symbols-outlined text-error text-[16px]">error</span>
<span className="font-label-md text-label-md text-error">Conflict</span>
</div>
</td>
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-error font-medium">Remote record modified by another user.</span>
<span className="text-[11px] text-secondary">ID: PRJ-992-CONFLICT-X</span>
</div>
</td>
<td className="px-lg py-md text-right">
<div className="flex justify-end gap-xs">
<button className="p-xs hover:bg-surface-container-high rounded text-primary transition-colors" title="Retry">
<span className="material-symbols-outlined text-[20px]">refresh</span>
</button>
<button className="p-xs hover:bg-surface-container-high rounded text-secondary transition-colors" title="Edit">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-xs hover:bg-surface-container-high rounded text-error transition-colors" title="Discard">
<span className="material-symbols-outlined text-[20px]">delete_outline</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">person_add</span>
</div>
<span className="font-body-md text-body-md text-on-surface font-medium">New Contractor Onboard</span>
</div>
</td>
<td className="px-lg py-md font-body-md text-body-md text-secondary">Oct 24, 2023 09:45:12</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm px-2 py-1 bg-green-50 rounded-full inline-flex">
<span className="material-symbols-outlined text-[#16A34A] text-[16px]">check</span>
<span className="font-label-md text-label-md text-[#16A34A]">Success</span>
</div>
</td>
<td className="px-lg py-md font-body-md text-body-md text-secondary">Verified by HR module.</td>
<td className="px-lg py-md text-right">
<button className="text-secondary hover:text-on-surface p-sm transition-colors rounded-lg">
<span className="material-symbols-outlined">visibility</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-surface-container-low border border-outline-variant flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-[20px]">inventory</span>
</div>
<span className="font-body-md text-body-md text-on-surface font-medium">Inventory Adjustment: WH-02</span>
</div>
</td>
<td className="px-lg py-md font-body-md text-body-md text-secondary">Oct 24, 2023 10:15:01</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm px-2 py-1 bg-surface-container-high rounded-full inline-flex">
<span className="material-symbols-outlined text-secondary text-[16px]">schedule</span>
<span className="font-label-md text-label-md text-secondary">Pending</span>
</div>
</td>
<td className="px-lg py-md font-body-md text-body-md text-secondary">Waiting for network slot.</td>
<td className="px-lg py-md text-right">
<button className="text-secondary hover:text-on-surface p-sm transition-colors rounded-lg">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-lg py-sm border-t border-outline-variant bg-surface-container-lowest flex justify-between items-center">
<span className="font-label-md text-label-md text-secondary">Showing 1-4 of 12 entries</span>
<div className="flex items-center gap-sm">
<button className="p-xs hover:bg-surface-container-high rounded disabled:opacity-30" disabled={true}>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<span className="font-label-md text-label-md text-on-surface font-bold">1</span>
<span className="font-label-md text-label-md text-secondary">of 3</span>
<button className="p-xs hover:bg-surface-container-high rounded">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default PwaSyncStatus;
