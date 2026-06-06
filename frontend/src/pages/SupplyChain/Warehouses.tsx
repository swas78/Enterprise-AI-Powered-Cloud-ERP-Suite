import React from 'react';


const Warehouses: React.FC = () => {


  return (
    <div className="w-full">
      
<div className="max-w-7xl mx-auto">
<header className="mb-xl flex justify-between items-end">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-background mb-xs">Facilities Management</h1>
<p className="text-body-md text-secondary">Real-time oversight of global physical inventory nodes and zone utilization.</p>
</div>
<div className="flex gap-sm">
<button className="flex items-center gap-xs px-md py-sm bg-surface rounded border border-outline-variant text-body-md font-semibold hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-sm">filter_list</span>
                            Filter
                        </button>
<button className="flex items-center gap-xs px-md py-sm bg-primary text-on-primary rounded font-semibold hover:bg-[#0B7DFF] transition-colors">
<span className="material-symbols-outlined text-sm">add_location</span>
                            Register Facility
                        </button>
</div>
</header>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-lg mb-2xl">

<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg hover:border-primary transition-all group cursor-pointer" >
<div className="flex justify-between items-start mb-md">
<div className="flex gap-md">
<div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-3xl">warehouse</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-on-surface">North Logistics Hub</h3>
<div className="flex items-center gap-xs text-body-md text-secondary">
<span className="material-symbols-outlined text-[14px]">location_on</span>
                                        Rotterdam, NL
                                    </div>
</div>
</div>
<div className="flex flex-col items-end gap-xs">
<div className="flex items-center gap-sm px-sm py-xs bg-[#16A34A]/10 text-[#16A34A] rounded-full text-[10px] font-bold">
<div className="w-1.5 h-1.5 rounded-full bg-[#16A34A] status-pulse"></div>
                                    SYNCED
                                </div>
<span className="text-code-sm text-outline">ID: WH-44029</span>
</div>
</div>
<div className="grid grid-cols-3 gap-md border-t border-outline-variant pt-md">
<div>
<div className="text-[10px] text-outline font-bold uppercase mb-xs">Manager</div>
<div className="flex items-center gap-xs">
<img className="w-5 h-5 rounded-full" data-alt="Manager portrait in corporate setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD-KlwLVJalsldoWvU7pxcmyY7NQ0bMfHspN0Vph22SOFns183DH6_0zts4UhwziWeEKkZyXmwoIBJBQ0MLsXwvk05PZRpq0RdSq_zaa0jtfWKNK8UsGELP2zueqLAKH2lYlh3rC7dMuf3bW77tOWMKqSSBgpAiduzyvv-4KtgZcv5D3VhmDpyaGfFYOJW8_dWv3raqsqCasUvZXjLxTZ40r07K8d0fNWcDAt1MwVBLXHRrWJ27k_t7N2fCdcVZLkCj9-95LhkiHU"/>
<span className="text-body-md font-medium">L. Jensen</span>
</div>
</div>
<div>
<div className="text-[10px] text-outline font-bold uppercase mb-xs">Connectivity</div>
<div className="flex items-center gap-xs text-body-md text-primary font-medium">
<span className="material-symbols-outlined text-sm">wifi</span>
                                    99.8% Uptime
                                </div>
</div>
<div>
<div className="text-[10px] text-outline font-bold uppercase mb-xs">Capacity Util.</div>
<div className="flex items-center gap-sm">
<div className="flex-1 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{width: "78%"}}></div>
</div>
<span className="text-body-md font-bold">78%</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg hover:border-primary transition-all group cursor-pointer" >
<div className="flex justify-between items-start mb-md">
<div className="flex gap-md">
<div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-3xl">ac_unit</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-on-surface">Pacific Cold Storage</h3>
<div className="flex items-center gap-xs text-body-md text-secondary">
<span className="material-symbols-outlined text-[14px]">location_on</span>
                                        Seattle, US
                                    </div>
</div>
</div>
<div className="flex flex-col items-end gap-xs">
<div className="flex items-center gap-sm px-sm py-xs bg-[#F59E0B]/10 text-[#F59E0B] rounded-full text-[10px] font-bold">
<span className="material-symbols-outlined text-[12px] animate-spin">sync</span>
                                    SYNCING
                                </div>
<span className="text-code-sm text-outline">ID: WH-99011</span>
</div>
</div>
<div className="grid grid-cols-3 gap-md border-t border-outline-variant pt-md">
<div>
<div className="text-[10px] text-outline font-bold uppercase mb-xs">Manager</div>
<div className="flex items-center gap-xs">
<img className="w-5 h-5 rounded-full" data-alt="Manager portrait in corporate setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvoUHRSwyPV2oRrkueDohaEAmMQNEQEcGzE02vg3I9zuoK900dq7fKyt8KYGgj5J5YYpXaImholRex6QMlWJvsTUCmVXHwHWxIAq-c-j80brozG6qMNcBnjvOfnrRwp-P2USMJSgUh8mzvT8dTU8ppQLJKHGBIREG6LgHYGpe0vYZ8UfnyqQXRLsG2nYnhONWztvVbto_y-nFHCD5YowqvwJycrMf05LAr1dP8Ro7gUXdUkQ6TfOUTCNqiBMxPMbCYgkAFR9RSVoc"/>
<span className="text-body-md font-medium">S. Chen</span>
</div>
</div>
<div>
<div className="text-[10px] text-outline font-bold uppercase mb-xs">Connectivity</div>
<div className="flex items-center gap-xs text-body-md text-tertiary font-medium">
<span className="material-symbols-outlined text-sm">wifi_off</span>
                                    Intermittent
                                </div>
</div>
<div>
<div className="text-[10px] text-outline font-bold uppercase mb-xs">Capacity Util.</div>
<div className="flex items-center gap-sm">
<div className="flex-1 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-error" style={{width: "92%"}}></div>
</div>
<span className="text-body-md font-bold text-error">92%</span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden animate-in fade-in duration-500" id="zones-container">
<div className="flex items-center justify-between mb-lg">
<div className="flex items-center gap-md">
<button className="p-xs hover:bg-surface-container-high rounded transition-colors" >
<span className="material-symbols-outlined">arrow_back</span>
</button>
<h2 className="font-headline-md text-headline-md" id="active-wh-name">North Logistics Hub Zones</h2>
</div>
<div className="flex items-center gap-sm text-body-md">
<span className="text-secondary">View:</span>
<div className="flex bg-surface-container-high p-[2px] rounded">
<button className="px-md py-xs bg-surface shadow-sm rounded text-primary font-bold">Bento Grid</button>
<button className="px-md py-xs text-secondary font-medium hover:text-on-surface">Floor Plan</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-md">

<div className="bg-surface border border-outline-variant rounded-lg p-md zone-card transition-all duration-300">
<div className="flex justify-between items-center mb-md">
<span className="font-bold text-primary">Aisle 1-5</span>
<span className="text-code-sm px-xs py-[2px] bg-surface-container-high rounded text-secondary">Dry Goods</span>
</div>
<div className="mb-md">
<div className="text-[10px] text-outline font-bold mb-xs">SPACE OCCUPIED</div>
<div className="text-headline-md font-headline-md">452 <span className="text-body-md font-normal text-secondary">/ 600 SKU</span></div>
</div>
<div className="flex gap-[2px]">
<div className="h-2 w-full bg-primary rounded-l-full"></div>
<div className="h-2 w-full bg-primary"></div>
<div className="h-2 w-full bg-primary"></div>
<div className="h-2 w-full bg-surface-container-high"></div>
<div className="h-2 w-full bg-surface-container-high rounded-r-full"></div>
</div>
</div>

<div className="bg-surface border border-outline-variant rounded-lg p-md zone-card transition-all duration-300">
<div className="flex justify-between items-center mb-md">
<span className="font-bold text-primary">Cold Storage A</span>
<span className="text-code-sm px-xs py-[2px] bg-[#1B9CFF]/10 rounded text-primary">-18°C Stable</span>
</div>
<div className="mb-md">
<div className="text-[10px] text-outline font-bold mb-xs">SPACE OCCUPIED</div>
<div className="text-headline-md font-headline-md">890 <span className="text-body-md font-normal text-secondary">/ 1.2k SKU</span></div>
</div>
<div className="flex gap-[2px]">
<div className="h-2 w-full bg-primary rounded-l-full"></div>
<div className="h-2 w-full bg-primary"></div>
<div className="h-2 w-full bg-primary"></div>
<div className="h-2 w-full bg-primary"></div>
<div className="h-2 w-full bg-surface-container-high rounded-r-full"></div>
</div>
</div>

<div className="bg-surface border border-outline-variant rounded-lg p-md zone-card transition-all duration-300">
<div className="flex justify-between items-center mb-md">
<span className="font-bold text-primary">Loading Dock West</span>
<span className="text-code-sm px-xs py-[2px] bg-error-container rounded text-error">Critical Delay</span>
</div>
<div className="mb-md">
<div className="text-[10px] text-outline font-bold mb-xs">DOCK UTILIZATION</div>
<div className="text-headline-md font-headline-md">100% <span className="text-body-md font-normal text-secondary">Active</span></div>
</div>
<div className="flex gap-[2px]">
<div className="h-2 w-full bg-error rounded-l-full"></div>
<div className="h-2 w-full bg-error"></div>
<div className="h-2 w-full bg-error"></div>
<div className="h-2 w-full bg-error"></div>
<div className="h-2 w-full bg-error rounded-r-full"></div>
</div>
</div>

<div className="bg-surface border border-outline-variant rounded-lg p-md zone-card transition-all duration-300">
<div className="flex justify-between items-center mb-md">
<span className="font-bold text-primary">Hazmat Locker</span>
<span className="text-code-sm px-xs py-[2px] bg-surface-container-high rounded text-secondary">Secured</span>
</div>
<div className="mb-md">
<div className="text-[10px] text-outline font-bold mb-xs">MONITORING</div>
<div className="text-headline-md font-headline-md">Active <span className="text-body-md font-normal text-[#16A34A]">Optimal</span></div>
</div>
<div className="flex gap-xs">
<span className="material-symbols-outlined text-sm text-primary">verified_user</span>
<span className="material-symbols-outlined text-sm text-primary">visibility</span>
<span className="material-symbols-outlined text-sm text-primary">thermostat</span>
</div>
</div>

<div className="bg-surface border-2 border-dashed border-outline-variant rounded-lg p-md flex flex-col items-center justify-center text-outline hover:text-primary hover:border-primary transition-all cursor-pointer group">
<span className="material-symbols-outlined text-3xl mb-xs group-hover:scale-110 transition-transform">add_circle</span>
<span className="font-label-md text-label-md">Define New Zone</span>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-center py-3xl text-center" id="selection-hint">
<div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mb-md">
<span className="material-symbols-outlined text-outline text-3xl">blur_on</span>
</div>
<h4 className="font-title-lg text-title-lg text-on-surface">Select a facility to view zones</h4>
<p className="text-body-md text-secondary max-w-sm">Click any warehouse card above to drill down into internal location management and aisle utilization.</p>
</div>
</div>

    </div>
  );
};

export default Warehouses;
