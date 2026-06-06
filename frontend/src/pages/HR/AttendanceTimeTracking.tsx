import React from 'react';


const AttendanceTimeTracking: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] bg-surface border-b border-outline-variant z-40">
<div className="flex items-center gap-lg flex-1">
<div className="relative w-full max-w-md group">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-full py-1.5 pl-10 pr-md text-body-md focus:outline-none focus:border-primary transition-all" placeholder="Search attendance, employees or logs... (CMD+K)" type="text" />
</div>
</div>
<div className="flex items-center gap-md">
<div className="flex items-center gap-xs px-sm py-1 bg-surface-container-high rounded-full border border-outline-variant/50">
<span className="w-2 h-2 bg-[#16A34A] rounded-full status-pulse"></span>
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Live Sync</span>
</div>
<div className="flex items-center gap-sm border-l border-outline-variant pl-md ml-sm">
<button className="w-8 h-8 flex items-center justify-center text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-8 h-8 flex items-center justify-center text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined">help</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-fixed overflow-hidden border border-outline-variant">
<img alt="User profile" className="w-full h-full object-cover" data-alt="Close up professional portrait of a tech executive with a confident smile, wearing a modern minimalist navy blazer, soft neutral studio lighting, high resolution office background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDolQ7nVV0FMKEH8XX3FgFDrRyIv8KgZQys12-7IDmV7Vp7Bo5f6O4nZAD2ImKLz9pFfsH2z2ss3FrP_EmKUmYYdeB03cbIu60SQsBb2pCyh_P3B7pbO8gJnlGIUYzagGuHY1LBb3JrgmVE2maEw9PuFpudXgJdLXCjpC2vPKDYjsI3GEgh-e3NBh3AylhekAf8A6EarXjPxW1rwWZmrJH9gQsKxYv9Eml8cYrLRyFjnz6lqyHywet_JCOWfNtk3sxbNLJdDHzK6U0" />
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-lg scroll-hide">
<div className="flex justify-between items-end mb-lg">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-background">Attendance Dashboard</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Monitoring human capital performance &amp; physical presence.</p>
</div>
<div className="flex gap-sm">
<button className="px-md py-sm border border-outline-variant bg-white text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors rounded-lg flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
                            Nov 24, 2023
                        </button>
<button className="px-md py-sm bg-primary text-white font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-all rounded-lg flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">download</span>
                            Export Report
                        </button>
</div>
</div>

<div className="bento-grid">

<div className="col-span-12 lg:col-span-4 bg-white border border-outline-variant rounded-xl p-lg flex flex-col justify-between overflow-hidden relative group">
<div className="absolute -right-4 -top-4 opacity-5 pointer-events-none transition-transform group-hover:scale-110 duration-500">
<span className="material-symbols-outlined text-[120px]">timer</span>
</div>
<div>
<div className="flex justify-between items-start mb-md">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary">Live Terminal</span>
<div className="bg-surface-container-high px-sm py-0.5 rounded text-[10px] font-mono text-outline">v2.4.0-cloud</div>
</div>
<div className="mb-lg">
<div className="font-display-lg text-display-lg text-on-background tracking-tight tabular-nums" id="clock-display">22:07:26</div>
<div className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-[14px]">location_on</span>
                                    San Francisco HQ — 192.168.1.104
                                </div>
</div>
</div>
<div className="space-y-sm">
<button className="w-full py-md bg-primary text-white rounded-lg font-headline-md text-headline-md flex items-center justify-center gap-md hover:bg-primary-container hover:text-on-primary-container active:scale-95 transition-all shadow-sm group" id="clock-btn">
<span className="material-symbols-outlined text-[24px]" id="clock-icon">login</span>
<span id="clock-text">Clock In</span>
</button>
<div className="flex justify-between text-on-surface-variant text-[11px] font-medium uppercase tracking-tighter px-xs">
<span>Shift Start: 08:30</span>
<span className="text-error font-bold">Status: Late (12m)</span>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-8 bg-white border border-outline-variant rounded-xl p-lg">
<div className="flex justify-between items-center mb-xl">
<div>
<h3 className="font-title-lg text-title-lg text-on-background">Work Intensity</h3>
<p className="text-on-surface-variant font-body-md text-body-md">Weekly hours worked vs. scheduled baseline</p>
</div>
<div className="flex items-center gap-md">
<div className="flex items-center gap-xs">
<div className="w-3 h-3 bg-primary-container rounded-sm"></div>
<span className="text-[11px] font-medium text-outline uppercase tracking-wider">Actual</span>
</div>
<div className="flex items-center gap-xs">
<div className="w-3 h-3 bg-surface-container-highest rounded-sm"></div>
<span className="text-[11px] font-medium text-outline uppercase tracking-wider">Target</span>
</div>
</div>
</div>
<div className="h-48 flex items-end gap-md">

<div className="flex-1 flex flex-col items-center gap-sm group">
<div className="w-full flex items-end gap-1 h-32">
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-[90%]"></div>
<div className="flex-1 bg-primary rounded-t-sm h-[85%] group-hover:bg-primary-container transition-colors"></div>
</div>
<span className="text-label-md font-label-md text-outline">MON</span>
</div>

<div className="flex-1 flex flex-col items-center gap-sm group">
<div className="w-full flex items-end gap-1 h-32">
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-[90%]"></div>
<div className="flex-1 bg-primary rounded-t-sm h-[95%] group-hover:bg-primary-container transition-colors"></div>
</div>
<span className="text-label-md font-label-md text-outline">TUE</span>
</div>

<div className="flex-1 flex flex-col items-center gap-sm group">
<div className="w-full flex items-end gap-1 h-32">
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-[90%]"></div>
<div className="flex-1 bg-primary rounded-t-sm h-[100%] group-hover:bg-primary-container transition-colors"></div>
</div>
<span className="text-label-md font-label-md text-outline">WED</span>
</div>

<div className="flex-1 flex flex-col items-center gap-sm group">
<div className="w-full flex items-end gap-1 h-32">
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-[90%]"></div>
<div className="flex-1 bg-primary rounded-t-sm h-[70%] group-hover:bg-primary-container transition-colors"></div>
</div>
<span className="text-label-md font-label-md text-outline text-primary font-bold">THU</span>
</div>

<div className="flex-1 flex flex-col items-center gap-sm group">
<div className="w-full flex items-end gap-1 h-32">
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-[90%]"></div>
<div className="flex-1 bg-outline-variant/30 rounded-t-sm h-[0%]"></div>
</div>
<span className="text-label-md font-label-md text-outline">FRI</span>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-8 bg-white border border-outline-variant rounded-xl overflow-hidden flex flex-col">
<div className="px-lg py-md border-b border-outline-variant flex justify-between items-center">
<h3 className="font-title-lg text-title-lg text-on-background">Attendance Log</h3>
<div className="flex gap-xs">
<button className="px-sm py-1 bg-surface-container rounded font-label-md text-label-md text-primary">Daily</button>
<button className="px-sm py-1 hover:bg-surface-container rounded font-label-md text-label-md text-outline transition-colors">Monthly</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-bright sticky top-0 border-b border-outline-variant">
<tr>
<th className="px-lg py-sm font-label-md text-label-md text-outline uppercase tracking-wider">Date</th>
<th className="px-lg py-sm font-label-md text-label-md text-outline uppercase tracking-wider">Clock In</th>
<th className="px-lg py-sm font-label-md text-label-md text-outline uppercase tracking-wider">Clock Out</th>
<th className="px-lg py-sm font-label-md text-label-md text-outline uppercase tracking-wider">Total</th>
<th className="px-lg py-sm font-label-md text-label-md text-outline uppercase tracking-wider">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md font-body-md text-body-md text-on-surface">Nov 23, 2023</td>
<td className="px-lg py-md font-code-sm text-code-sm">08:28 AM</td>
<td className="px-lg py-md font-code-sm text-code-sm">05:42 PM</td>
<td className="px-lg py-md font-body-md text-body-md">9h 14m</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-0.5 rounded-full bg-[#16A34A]/10 text-[#16A34A] font-label-md text-[11px] uppercase">Present</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md font-body-md text-body-md text-on-surface">Nov 22, 2023</td>
<td className="px-lg py-md font-code-sm text-code-sm">08:45 AM</td>
<td className="px-lg py-md font-code-sm text-code-sm">06:15 PM</td>
<td className="px-lg py-md font-body-md text-body-md">9h 30m</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-0.5 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] font-label-md text-[11px] uppercase">Late</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md font-body-md text-body-md text-on-surface">Nov 21, 2023</td>
<td className="px-lg py-md font-code-sm text-code-sm">-- : --</td>
<td className="px-lg py-md font-code-sm text-code-sm">-- : --</td>
<td className="px-lg py-md font-body-md text-body-md">0h 0m</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-0.5 rounded-full bg-error/10 text-error font-label-md text-[11px] uppercase">Missing</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md font-body-md text-body-md text-on-surface">Nov 20, 2023</td>
<td className="px-lg py-md font-code-sm text-code-sm">08:25 AM</td>
<td className="px-lg py-md font-code-sm text-code-sm">05:30 PM</td>
<td className="px-lg py-md font-body-md text-body-md">9h 05m</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-0.5 rounded-full bg-[#16A34A]/10 text-[#16A34A] font-label-md text-[11px] uppercase">Present</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="col-span-12 lg:col-span-4 space-y-lg">

<div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-lg relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-label-md text-label-md uppercase tracking-[0.2em] mb-md opacity-70">Overtime Summary</h3>
<div className="flex items-baseline gap-sm mb-lg">
<div className="text-[48px] font-bold leading-none tracking-tighter">14.5</div>
<div className="text-title-lg font-body-md">Hours</div>
</div>
<div className="space-y-md">
<div className="flex justify-between items-center text-body-md">
<span className="opacity-60">Payout Estimated</span>
<span className="font-bold text-primary-fixed-dim">$652.50</span>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
<div className="bg-primary-container h-full w-[72%]"></div>
</div>
<p className="text-[11px] opacity-60 leading-relaxed italic">You are currently 72% toward the max monthly approved overtime limit.</p>
</div>
</div>

<div className="absolute right-[-20%] bottom-[-10%] w-48 h-48 border-[1px] border-white/5 rotate-45 pointer-events-none"></div>
</div>

<div className="bg-white border border-outline-variant rounded-xl p-md">
<h4 className="font-label-md text-label-md mb-md px-xs">Recent Locations</h4>
<div className="space-y-sm">
<div className="flex items-center gap-md p-sm hover:bg-surface-container-low transition-colors rounded-lg group">
<div className="w-10 h-10 bg-surface-container flex items-center justify-center rounded border border-outline-variant/30">
<span className="material-symbols-outlined text-primary">router</span>
</div>
<div className="flex-1">
<div className="text-body-md font-bold">Office WiFi - A</div>
<div className="text-[10px] text-outline uppercase tracking-tight">Nov 23 • 08:30 AM</div>
</div>
<span className="material-symbols-outlined text-[18px] text-primary">verified</span>
</div>
<div className="flex items-center gap-md p-sm hover:bg-surface-container-low transition-colors rounded-lg group">
<div className="w-10 h-10 bg-surface-container flex items-center justify-center rounded border border-outline-variant/30">
<span className="material-symbols-outlined text-secondary">lan</span>
</div>
<div className="flex-1">
<div className="text-body-md font-bold">Wired LAN - Port 12</div>
<div className="text-[10px] text-outline uppercase tracking-tight">Nov 22 • 09:12 AM</div>
</div>
<span className="material-symbols-outlined text-[18px] text-primary">verified</span>
</div>
<div className="flex items-center gap-md p-sm hover:bg-surface-container-low transition-colors rounded-lg group">
<div className="w-10 h-10 bg-surface-container flex items-center justify-center rounded border border-outline-variant/30">
<span className="material-symbols-outlined text-outline">vpn_lock</span>
</div>
<div className="flex-1">
<div className="text-body-md font-bold">Home (Remote VPN)</div>
<div className="text-[10px] text-outline uppercase tracking-tight">Nov 21 • 08:00 AM</div>
</div>
<span className="material-symbols-outlined text-[18px] text-outline">pending</span>
</div>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default AttendanceTimeTracking;
