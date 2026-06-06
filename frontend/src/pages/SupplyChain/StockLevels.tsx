import React from 'react';


const StockLevels: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 sticky top-0 bg-surface border-b border-outline-variant">
<div className="flex items-center gap-lg flex-1">
<h1 className="font-headline-md text-headline-md font-bold text-primary">AMDOX</h1>
<div className="relative max-w-md w-full ml-lg">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" data-icon="search">search</span>
<input className="w-full bg-surface-container-low border-none rounded-lg pl-xl pr-md py-xs font-body-md text-body-md focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Search by SKU, Warehouse, or Batch..." type="text" />
<div className="absolute right-sm top-1/2 -translate-y-1/2 flex items-center gap-xs pointer-events-none">
<span className="px-1 py-0 bg-outline-variant/30 rounded text-[10px] font-bold text-outline">CMD</span>
<span className="px-1 py-0 bg-outline-variant/30 rounded text-[10px] font-bold text-outline">K</span>
</div>
</div>
</div>
<div className="flex items-center gap-md">
<button className="p-xs rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150 relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
</button>
<button className="p-xs rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<button className="p-xs rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150">
<span className="material-symbols-outlined" data-icon="cloud_done">cloud_done</span>
</button>
<div className="h-6 w-px bg-outline-variant mx-xs"></div>
<img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG-kBjdMZTWjlgKtbhhXnAbBMG1BkEizvkmK-ArSK66ntuBU14iZLIrLFqj-SarL9p17N6YrupWLP2nQtHwid-ArNo4PEw7GeVdTfyKkYKhL3n1WXlLwnYr07QBwhDzFpU6HopamX-6chXzyoFm_3QofsMSt2GpIGHGUJBmcMYoUzRKgEl86Pz4d2cIM7EHgAH6WjQiy6DG51KdqyY4_OLeDvfqL9a20o2pplK4fuI5j9qSkvDbsBGo8X1kNcJOUAOb0F-S7JHfAw" />
</div>
</header>

<div className="p-lg space-y-lg max-w-[1600px] mx-auto w-full">

<div className="flex justify-between items-end">
<div>
<div className="flex items-center gap-sm text-secondary mb-xs">
<span className="font-label-md text-label-md uppercase tracking-wider">Inventory Overview</span>
<span className="text-[10px] opacity-30">•</span>
<span className="font-label-md text-label-md">Last sync: 2m ago</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Real-time Stock Levels</h2>
</div>
<div className="flex gap-sm">
<button className="flex items-center gap-sm px-md py-sm tonal-layer-1 rounded-lg text-primary font-semibold hover:bg-surface-container-low transition-all">
<span className="material-symbols-outlined text-[18px]" data-icon="file_download">file_download</span>
                            Export Report
                        </button>
<button className="flex items-center gap-sm px-md py-sm bg-primary text-on-primary font-semibold rounded-lg hover:bg-primary-container transition-all active:scale-95">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                            New Workflow
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-lg">

<div className="tonal-layer-1 p-lg rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-lg opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[64px]" data-icon="inventory_2">inventory_2</span>
</div>
<p className="font-label-md text-label-md text-secondary mb-md">Total SKU Count</p>
<div className="flex items-baseline gap-sm">
<span className="font-display-lg text-display-lg text-on-surface">12,482</span>
<span className="font-body-md text-body-md text-primary font-semibold flex items-center">
<span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span>
                                4.2%
                            </span>
</div>
<div className="mt-xl h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full w-[72%]"></div>
</div>
<p className="mt-sm font-label-md text-label-md text-secondary">72% Warehouse Capacity</p>
</div>

<div className="tonal-layer-1 p-lg rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-lg opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[64px]" data-icon="account_balance_wallet">account_balance_wallet</span>
</div>
<p className="font-label-md text-label-md text-secondary mb-md">Stock Valuation</p>
<div className="flex items-baseline gap-sm">
<span className="font-display-lg text-display-lg text-on-surface">$2.84M</span>
<span className="font-body-md text-body-md text-primary font-semibold flex items-center">
<span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span>
                                1.8%
                            </span>
</div>
<div className="mt-xl flex gap-xs">
<div className="h-8 flex-1 bg-primary/10 rounded-sm flex items-end">
<div className="w-full bg-primary h-[40%] rounded-sm"></div>
</div>
<div className="h-8 flex-1 bg-primary/10 rounded-sm flex items-end">
<div className="w-full bg-primary h-[60%] rounded-sm"></div>
</div>
<div className="h-8 flex-1 bg-primary/10 rounded-sm flex items-end">
<div className="w-full bg-primary h-[55%] rounded-sm"></div>
</div>
<div className="h-8 flex-1 bg-primary/10 rounded-sm flex items-end">
<div className="w-full bg-primary h-[85%] rounded-sm"></div>
</div>
<div className="h-8 flex-1 bg-primary/10 rounded-sm flex items-end">
<div className="w-full bg-primary h-[70%] rounded-sm"></div>
</div>
</div>
<p className="mt-sm font-label-md text-label-md text-secondary">Asset value trend (5d)</p>
</div>

<div className="tonal-layer-1 p-lg rounded-xl relative overflow-hidden group border-l-4 border-l-error">
<div className="absolute top-0 right-0 p-lg opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[64px] text-error" data-icon="warning">warning</span>
</div>
<p className="font-label-md text-label-md text-error mb-md font-bold uppercase tracking-widest">Low Stock Alerts</p>
<div className="flex items-baseline gap-sm">
<span className="font-display-lg text-display-lg text-on-surface">42</span>
<span className="px-sm py-xs bg-error/10 text-error font-bold text-[10px] rounded uppercase">Critical</span>
</div>
<div className="mt-xl flex items-center gap-md">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-surface-container-highest border border-surface flex items-center justify-center text-[10px] font-bold">NH</div>
<div className="w-6 h-6 rounded-full bg-surface-container-highest border border-surface flex items-center justify-center text-[10px] font-bold">SL</div>
<div className="w-6 h-6 rounded-full bg-surface-container-highest border border-surface flex items-center justify-center text-[10px] font-bold">EP</div>
</div>
<p className="font-label-md text-label-md text-secondary">Affecting 3 facilities</p>
</div>
</div>
</div>

<div className="tonal-layer-1 rounded-xl overflow-hidden">
<div className="px-lg py-md border-b border-outline-variant bg-surface flex flex-col md:flex-row md:items-center justify-between gap-md">
<div className="flex items-center gap-md">
<h3 className="font-title-lg text-title-lg text-on-surface">Distribution by Warehouse</h3>
<div className="flex gap-xs bg-surface-container-low p-1 rounded-lg">
<button className="px-sm py-xs bg-surface text-primary font-bold text-[10px] rounded shadow-sm">All</button>
<button className="px-sm py-xs text-on-surface-variant font-medium text-[10px] rounded hover:bg-surface/50">High Velocity</button>
<button className="px-sm py-xs text-on-surface-variant font-medium text-[10px] rounded hover:bg-surface/50">Perishables</button>
</div>
</div>
<div className="flex gap-sm">
<div className="relative">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]" data-icon="filter_list">filter_list</span>
<select className="bg-surface-container-low border-none rounded-lg pl-xl pr-lg py-sm font-label-md text-label-md appearance-none focus:ring-1 focus:ring-primary">
<option>All Regions</option>
<option>North America</option>
<option>EU Logistics</option>
<option>Asia Pacific</option>
</select>
</div>
<button className="p-sm tonal-layer-1 rounded-lg text-on-surface-variant hover:bg-surface-container-low">
<span className="material-symbols-outlined text-[20px]" data-icon="refresh">refresh</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-background/50 border-b border-outline-variant">
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-widest">Warehouse Node</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-widest">Region</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-widest">Inventory Health</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-widest text-right">Active SKUs</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-widest text-right">In-Transit</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-widest text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold">NH</div>
<div>
<p className="font-body-md text-body-md font-semibold text-on-surface">North Hub Central</p>
<p className="text-[11px] text-secondary">Chicago, IL - Tier 1</p>
</div>
</div>
</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">North America</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<span className="px-sm py-xs bg-green-500/10 text-[#16A34A] font-bold text-[10px] rounded-full flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full"></span>
                                                OPTIMAL
                                            </span>
</div>
</td>
<td className="px-lg py-md text-right font-code-sm text-code-sm font-semibold">5,820</td>
<td className="px-lg py-md text-right font-code-sm text-code-sm">124</td>
<td className="px-lg py-md text-right">
<button className="p-xs rounded text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold">SL</div>
<div>
<p className="font-body-md text-body-md font-semibold text-on-surface">South Logistics</p>
<p className="text-[11px] text-secondary">Austin, TX - Tier 2</p>
</div>
</div>
</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">North America</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<span className="px-sm py-xs bg-orange-500/10 text-[#F59E0B] font-bold text-[10px] rounded-full flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full animate-pulse"></span>
                                                REBALANCING
                                            </span>
</div>
</td>
<td className="px-lg py-md text-right font-code-sm text-code-sm font-semibold">3,210</td>
<td className="px-lg py-md text-right font-code-sm text-code-sm">450</td>
<td className="px-lg py-md text-right">
<button className="p-xs rounded text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-error-container flex items-center justify-center text-on-error-container font-bold">EP</div>
<div>
<p className="font-body-md text-body-md font-semibold text-on-surface">East Port Facility</p>
<p className="text-[11px] text-secondary">Savannah, GA - Gateway</p>
</div>
</div>
</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">North America</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<span className="px-sm py-xs bg-red-500/10 text-[#DC2626] font-bold text-[10px] rounded-full flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-[#DC2626] rounded-full"></span>
                                                LOW STOCK
                                            </span>
</div>
</td>
<td className="px-lg py-md text-right font-code-sm text-code-sm font-semibold">2,140</td>
<td className="px-lg py-md text-right font-code-sm text-code-sm">12</td>
<td className="px-lg py-md text-right">
<button className="p-xs rounded text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed font-bold">RH</div>
<div>
<p className="font-body-md text-body-md font-semibold text-on-surface">Rotterdam Hub</p>
<p className="text-[11px] text-secondary">Netherlands - Global Port</p>
</div>
</div>
</td>
<td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">Europe</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<span className="px-sm py-xs bg-green-500/10 text-[#16A34A] font-bold text-[10px] rounded-full flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full"></span>
                                                OPTIMAL
                                            </span>
</div>
</td>
<td className="px-lg py-md text-right font-code-sm text-code-sm font-semibold">1,312</td>
<td className="px-lg py-md text-right font-code-sm text-code-sm">890</td>
<td className="px-lg py-md text-right">
<button className="p-xs rounded text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-lg py-md bg-surface-container-lowest border-t border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-md">
<p className="font-label-md text-label-md text-secondary">Showing 1 to 4 of 24 facilities</p>
<select className="bg-transparent border-none font-label-md text-label-md text-primary focus:ring-0">
<option>10 per page</option>
<option>25 per page</option>
<option>50 per page</option>
</select>
</div>
<div className="flex gap-xs">
<button className="p-xs tonal-layer-1 rounded opacity-50 cursor-not-allowed"><span className="material-symbols-outlined text-[18px]" data-icon="chevron_left">chevron_left</span></button>
<button className="w-8 h-8 bg-primary text-on-primary rounded font-bold text-[10px]">1</button>
<button className="w-8 h-8 hover:bg-surface-container-low rounded font-bold text-[10px]">2</button>
<button className="w-8 h-8 hover:bg-surface-container-low rounded font-bold text-[10px]">3</button>
<button className="p-xs tonal-layer-1 rounded text-primary hover:bg-surface-container-low"><span className="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span></button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-lg pb-xl">
<div className="lg:col-span-2 tonal-layer-1 rounded-xl overflow-hidden min-h-[400px] flex flex-col">
<div className="px-lg py-md border-b border-outline-variant flex items-center justify-between">
<h3 className="font-title-lg text-title-lg text-on-surface">Global Inventory Distribution</h3>
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-green-500" data-icon="public" style={{fontVariationSettings: "'FILL' 1"}}>public</span>
<span className="font-label-md text-label-md text-secondary">Connected via PWA Sync</span>
</div>
</div>
<div className="flex-1 bg-surface-container-low relative flex items-center justify-center group">
<div className="absolute inset-0 grayscale opacity-40 hover:grayscale-0 transition-all duration-700 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;q=80&amp;w=2074')] bg-cover bg-center" data-alt="A clean, minimalist high-tech world map interface on a large digital screen. The map features glowing data points in primary blue and teal representing global warehouse locations. The overall aesthetic is professional, architectural, and data-driven with a cool white and light blue color palette. The room is bright and modern with soft, diffused lighting."></div>
<div className="relative z-10 p-lg bg-surface/90 backdrop-blur rounded-lg border border-outline-variant text-center max-w-xs shadow-2xl">
<span className="material-symbols-outlined text-primary text-[48px] mb-md" data-icon="location_on" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
<p className="font-headline-md text-headline-md text-on-surface">Live Network View</p>
<p className="font-body-md text-body-md text-secondary mt-sm">Interactive geographic tracking is enabled for regional managers.</p>
<button className="mt-lg w-full py-sm bg-primary text-on-primary rounded-lg font-semibold text-label-md hover:bg-primary-container transition-all">Launch Map Module</button>
</div>
</div>
</div>
<div className="tonal-layer-1 rounded-xl p-lg space-y-lg">
<h3 className="font-title-lg text-title-lg text-on-surface">Velocity Heatmap</h3>
<div className="space-y-md">
<div className="space-y-sm">
<div className="flex justify-between font-label-md text-label-md">
<span className="text-on-surface-variant">Consumer Electronics</span>
<span className="text-primary font-bold">High Velocity</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded-full">
<div className="h-full bg-primary rounded-full w-[88%]"></div>
</div>
</div>
<div className="space-y-sm">
<div className="flex justify-between font-label-md text-label-md">
<span className="text-on-surface-variant">Industrial Parts</span>
<span className="text-secondary font-bold">Stable</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded-full">
<div className="h-full bg-secondary-container rounded-full w-[45%]"></div>
</div>
</div>
<div className="space-y-sm">
<div className="flex justify-between font-label-md text-label-md">
<span className="text-on-surface-variant">Apparel &amp; Textiles</span>
<span className="text-error font-bold">Overstock Risk</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded-full">
<div className="h-full bg-error rounded-full w-[94%]"></div>
</div>
</div>
<div className="space-y-sm">
<div className="flex justify-between font-label-md text-label-md">
<span className="text-on-surface-variant">Pharmaceuticals</span>
<span className="text-primary font-bold">High Velocity</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded-full">
<div className="h-full bg-primary rounded-full w-[76%]"></div>
</div>
</div>
</div>
<div className="pt-lg border-t border-outline-variant">
<p className="font-label-md text-label-md text-secondary mb-md">System Recommendations</p>
<div className="bg-surface-container-low p-md rounded-lg border-l-4 border-l-primary">
<p className="font-body-md text-body-md text-on-surface leading-snug">Initiate stock transfer from <strong>North Hub</strong> to <strong>East Port</strong> for SKU: PRX-900 within next 48h.</p>
<a className="inline-block mt-sm text-primary font-bold text-[10px] uppercase hover:underline" href="#">Execute Transfer Workflow →</a>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default StockLevels;
