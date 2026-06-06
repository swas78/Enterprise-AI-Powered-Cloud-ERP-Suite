import React from 'react';


const ExecutiveAnalytics: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 bg-surface border-b border-outline-variant sticky top-0">
<div className="flex items-center gap-lg">
<h1 className="font-headline-md text-headline-md font-bold text-primary">AMDOX</h1>
<div className="relative hidden lg:block w-64">
<span className="absolute inset-y-0 left-0 flex items-center pl-sm text-outline">
<span className="material-symbols-outlined text-[18px]">search</span>
</span>
<input className="w-full pl-lg pr-sm py-xs bg-surface-container-low border border-outline-variant rounded text-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Search insights..." type="text"/>
<span className="absolute inset-y-0 right-2 flex items-center px-xs py-0.5 my-1.5 text-[10px] font-bold text-outline border border-outline-variant rounded bg-surface">⌘K</span>
</div>
</div>
<div className="flex items-center gap-md">
<div className="flex items-center gap-sm mr-md bg-surface-container-low px-sm py-1 rounded-full border border-outline-variant">
<span className="w-2 h-2 bg-green-500 rounded-full pulse-indicator"></span>
<span className="text-label-md font-label-md text-on-surface-variant">Live Metrics: Last Updated 2 mins ago</span>
</div>
<button className="text-primary hover:bg-surface-container-low p-1.5 rounded transition-colors duration-150">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-primary hover:bg-surface-container-low p-1.5 rounded transition-colors duration-150">
<span className="material-symbols-outlined">help</span>
</button>
<button className="text-primary hover:bg-surface-container-low p-1.5 rounded transition-colors duration-150">
<span className="material-symbols-outlined">cloud_done</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
<img alt="User" data-alt="A professional headshot of a middle-aged executive with a clean-cut look, wearing a tailored navy blue suit against a soft-focus office background. The lighting is bright and airy, reflecting a high-end corporate environment. The image is crisp and detailed, aligning with a modern minimalist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs2S5QoAZr8dulb6ij5jPzQcFfk2lmVTFpmC1b9oh2YZ1i2WHFvzKAIcoYi6tD9IHyeDInc6J5L_ktRIc3nUzqRGwipQ-hht1IzxM0OsUbbOvsFKxfcTmkO8l2Rh7q7QmWVkIfc83GyhYjFrt-umWY8RCIbOC-Oj4T-Fjnj7F4-uUUGMad5fPP2H0vhtw2hsE353SOlHvRPFFGoWE6CW2rsJlp7JMcRPlU0U35DaOZFM2evrFtK_ss4a5-RMcokXstNo79By1iwe8"/>
</div>
</div>
</header>

<div className="p-lg space-y-lg">

<div className="bg-surface border border-outline-variant p-sm rounded-lg flex flex-wrap items-center gap-md shadow-sm">
<div className="flex items-center gap-xs">
<span className="font-label-md text-label-md text-secondary">Date Range:</span>
<select className="bg-surface-container-low border-none rounded text-body-md font-medium text-primary py-1 px-2 focus:ring-1 focus:ring-primary cursor-pointer">
<option>Last 30 Days</option>
<option>Last Quarter</option>
<option>Year to Date</option>
</select>
</div>
<div className="h-4 w-px bg-outline-variant"></div>
<div className="flex items-center gap-xs">
<span className="font-label-md text-label-md text-secondary">Region:</span>
<select className="bg-surface-container-low border-none rounded text-body-md font-medium text-primary py-1 px-2 focus:ring-1 focus:ring-primary cursor-pointer">
<option>North America</option>
<option>EMEA</option>
<option>APAC</option>
</select>
</div>
<div className="h-4 w-px bg-outline-variant"></div>
<div className="flex items-center gap-xs">
<span className="font-label-md text-label-md text-secondary">Department:</span>
<select className="bg-surface-container-low border-none rounded text-body-md font-medium text-primary py-1 px-2 focus:ring-1 focus:ring-primary cursor-pointer">
<option>All Operations</option>
<option>Supply Chain</option>
<option>Infrastructure</option>
</select>
</div>
<button className="ml-auto flex items-center gap-sm bg-primary text-on-primary px-md py-1.5 rounded font-label-md text-label-md hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export Report
                    </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
<div className="bg-surface border border-outline-variant p-md rounded shadow-sm hover:border-primary transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-sm">
<span className="text-secondary font-label-md text-label-md uppercase tracking-wider">Gross Revenue</span>
<span className="text-green-600 bg-green-50 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">+12.4%</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="font-headline-md text-headline-md font-bold text-on-surface">$2.48M</span>
<span className="text-secondary font-body-md text-code-sm">USD</span>
</div>
<div className="mt-md h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary w-[75%]"></div>
</div>
</div>
<div className="bg-surface border border-outline-variant p-md rounded shadow-sm hover:border-primary transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-sm">
<span className="text-secondary font-label-md text-label-md uppercase tracking-wider">Operational Efficiency</span>
<span className="text-green-600 bg-green-50 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">+2.1%</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="font-headline-md text-headline-md font-bold text-on-surface">94.2%</span>
</div>
<div className="mt-md h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary w-[94%]"></div>
</div>
</div>
<div className="bg-surface border border-outline-variant p-md rounded shadow-sm hover:border-primary transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-sm">
<span className="text-secondary font-label-md text-label-md uppercase tracking-wider">Active Deployments</span>
<span className="text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded text-[10px] font-bold border border-outline-variant">Stable</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="font-headline-md text-headline-md font-bold text-on-surface">1,204</span>
</div>
<div className="mt-md h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary w-[60%]"></div>
</div>
</div>
<div className="bg-surface border border-outline-variant p-md rounded shadow-sm hover:border-primary transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-sm">
<span className="text-secondary font-label-md text-label-md uppercase tracking-wider">Risk Index</span>
<span className="text-error bg-error-container px-2 py-0.5 rounded text-[10px] font-bold border border-error/10">-0.4%</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="font-headline-md text-headline-md font-bold text-on-surface">0.08</span>
</div>
<div className="mt-md h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary w-[15%]"></div>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-lg">

<div className="col-span-12 lg:col-span-8 bg-surface border border-outline-variant rounded p-lg shadow-sm">
<div className="flex justify-between items-center mb-lg">
<div>
<h3 className="font-title-lg text-title-lg text-on-surface">Revenue Trend Analysis</h3>
<p className="font-body-md text-body-md text-secondary">Financial performance across core business units</p>
</div>
<div className="flex items-center gap-sm">
<div className="flex items-center gap-xs">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="text-label-md font-label-md text-secondary">Actual</span>
</div>
<div className="flex items-center gap-xs">
<span className="w-3 h-3 rounded-full bg-outline-variant"></span>
<span className="text-label-md font-label-md text-secondary">Forecast</span>
</div>
</div>
</div>
<div className="h-64 w-full relative">

<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200">
<defs>
<linearGradient id="line-grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#1B9CFF" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#1B9CFF" stop-opacity="0"></stop>
</linearGradient>
</defs>
<path d="M0,180 L80,160 L160,175 L240,140 L320,130 L400,150 L480,110 L560,90 L640,105 L720,70 L800,60 L800,200 L0,200 Z" fill="url(#line-grad)"></path>
<path d="M0,180 L80,160 L160,175 L240,140 L320,130 L400,150 L480,110 L560,90 L640,105 L720,70 L800,60" fill="none" stroke="#0061a4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
<g className="text-outline-variant opacity-20" stroke="currentColor" stroke-width="0.5">
<line x1="0" x2="800" y1="40" y2="40"></line>
<line x1="0" x2="800" y1="80" y2="80"></line>
<line x1="0" x2="800" y1="120" y2="120"></line>
<line x1="0" x2="800" y1="160" y2="160"></line>
</g>
</svg>
<div className="absolute inset-0 flex justify-between items-end pb-2 px-1">
<span className="text-code-sm font-label-md text-secondary">JAN</span>
<span className="text-code-sm font-label-md text-secondary">FEB</span>
<span className="text-code-sm font-label-md text-secondary">MAR</span>
<span className="text-code-sm font-label-md text-secondary">APR</span>
<span className="text-code-sm font-label-md text-secondary">MAY</span>
<span className="text-code-sm font-label-md text-secondary">JUN</span>
<span className="text-code-sm font-label-md text-secondary">JUL</span>
<span className="text-code-sm font-label-md text-secondary">AUG</span>
<span className="text-code-sm font-label-md text-secondary">SEP</span>
<span className="text-code-sm font-label-md text-secondary">OCT</span>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 bg-surface border border-outline-variant rounded p-lg shadow-sm">
<h3 className="font-title-lg text-title-lg text-on-surface mb-lg">Top Vendors</h3>
<div className="space-y-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined">hub</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="font-label-md text-label-md text-on-surface">DataNexus Systems</span>
<span className="font-code-sm text-code-sm text-secondary">42%</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded-full">
<div className="h-full bg-primary w-[42%] rounded-full"></div>
</div>
</div>
</div>
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined">cloud</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="font-label-md text-label-md text-on-surface">Skyline Cloud</span>
<span className="font-code-sm text-code-sm text-secondary">31%</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded-full">
<div className="h-full bg-primary w-[31%] rounded-full"></div>
</div>
</div>
</div>
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined">security</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="font-label-md text-label-md text-on-surface">Fortress Cyber</span>
<span className="font-code-sm text-code-sm text-secondary">18%</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded-full">
<div className="h-full bg-primary w-[18%] rounded-full"></div>
</div>
</div>
</div>
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined">memory</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="font-label-md text-label-md text-on-surface">NeuroFlow AI</span>
<span className="font-code-sm text-code-sm text-secondary">9%</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded-full">
<div className="h-full bg-primary w-[9%] rounded-full"></div>
</div>
</div>
</div>
</div>
<button className="w-full mt-lg py-2 border border-outline-variant rounded font-label-md text-label-md text-primary hover:bg-surface-container-low transition-colors">
                            View All Partners
                        </button>
</div>

<div className="col-span-12 lg:col-span-12 bg-surface border border-outline-variant rounded p-lg shadow-sm">
<div className="flex justify-between items-center mb-lg">
<h3 className="font-title-lg text-title-lg text-on-surface">Global Utilization Heatmap</h3>
<div className="flex items-center gap-md">
<div className="flex items-center gap-1">
<span className="text-[10px] text-secondary">Low</span>
<div className="w-4 h-4 rounded bg-[#E8F6FF]"></div>
<div className="w-4 h-4 rounded bg-[#D1EFFF]"></div>
<div className="w-4 h-4 rounded bg-[#99DCFF]"></div>
<div className="w-4 h-4 rounded bg-[#4DBFFF]"></div>
<div className="w-4 h-4 rounded bg-[#1B9CFF]"></div>
<span className="text-[10px] text-secondary">Peak</span>
</div>
</div>
</div>
<div className="overflow-x-auto">
<div className="grid grid-cols-24 gap-1 min-w-[800px]">


</div>
</div>
<div className="mt-md flex justify-between text-code-sm text-secondary font-label-md">
<span>MON</span>
<span>TUE</span>
<span>WED</span>
<span>THU</span>
<span>FRI</span>
<span>SAT</span>
<span>SUN</span>
</div>
</div>
</div>

<div className="bg-surface border border-outline-variant rounded shadow-sm overflow-hidden">
<div className="p-lg border-b border-outline-variant flex justify-between items-center">
<h3 className="font-title-lg text-title-lg text-on-surface">Critical System Logs</h3>
<button className="text-primary font-label-md text-label-md flex items-center gap-xs">
                            Filter Logs <span className="material-symbols-outlined text-[18px]">filter_list</span>
</button>
</div>
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low">
<th className="px-lg py-md font-label-md text-label-md text-secondary border-b border-outline-variant">Timestamp</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary border-b border-outline-variant">Process</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary border-b border-outline-variant">Status</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary border-b border-outline-variant">Operator</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary border-b border-outline-variant text-right">Performance</th>
</tr>
</thead>
<tbody className="text-body-md font-body-md">
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-lg py-md border-b border-outline-variant text-on-surface">14:24:02 UTC</td>
<td className="px-lg py-md border-b border-outline-variant">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px] text-primary">terminal</span>
<span>Cluster Sync: HK-01</span>
</div>
</td>
<td className="px-lg py-md border-b border-outline-variant">
<span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-800 border border-green-200">SUCCESS</span>
</td>
<td className="px-lg py-md border-b border-outline-variant text-secondary">System Root</td>
<td className="px-lg py-md border-b border-outline-variant text-right font-medium">12ms</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-lg py-md border-b border-outline-variant text-on-surface">14:21:45 UTC</td>
<td className="px-lg py-md border-b border-outline-variant">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px] text-primary">database</span>
<span>Schema Migration</span>
</div>
</td>
<td className="px-lg py-md border-b border-outline-variant">
<span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">IN PROGRESS</span>
</td>
<td className="px-lg py-md border-b border-outline-variant text-secondary">A. Jenkins</td>
<td className="px-lg py-md border-b border-outline-variant text-right font-medium">842ms</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-lg py-md border-b border-outline-variant text-on-surface">14:18:22 UTC</td>
<td className="px-lg py-md border-b border-outline-variant">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px] text-primary">security</span>
<span>Auth Handshake</span>
</div>
</td>
<td className="px-lg py-md border-b border-outline-variant">
<span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-800 border border-red-200">FAILED</span>
</td>
<td className="px-lg py-md border-b border-outline-variant text-secondary">Service_Auth_04</td>
<td className="px-lg py-md border-b border-outline-variant text-right font-medium">--</td>
</tr>
</tbody>
</table>
<div className="p-md bg-surface-container-low flex justify-between items-center">
<span className="text-label-md font-label-md text-secondary">Showing 1-12 of 244 entries</span>
<div className="flex gap-xs">
<button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center text-secondary hover:bg-surface"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
<button className="w-8 h-8 rounded border border-primary bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md">1</button>
<button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center text-secondary hover:bg-surface font-label-md text-label-md">2</button>
<button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center text-secondary hover:bg-surface font-label-md text-label-md">3</button>
<button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center text-secondary hover:bg-surface"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
</div>
</div>
</div>
</div>

<footer className="mt-auto px-lg py-md text-code-sm text-secondary flex justify-between items-center border-t border-outline-variant">
<span>© 2024 AMDOX Systems. All rights reserved.</span>
<div className="flex gap-lg">
<a className="hover:text-primary transition-colors" href="#">API Status: Operational</a>
<a className="hover:text-primary transition-colors" href="#">Security Policy</a>
<a className="hover:text-primary transition-colors" href="#">v4.8.2-stable</a>
</div>
</footer>

    </div>
  );
};

export default ExecutiveAnalytics;
