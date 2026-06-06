import React from 'react';


const OfflineStatus: React.FC = () => {


  return (
    <div className="w-full">
      

<div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center py-xl">
<div className="relative mb-xl">
<div className="w-32 h-32 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-primary text-[64px]" style={{fontVariationSettings: "'wght' 200"}}>cloud_off</span>
</div>
<div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-outline-variant shadow-sm">
<span className="material-symbols-outlined text-error" style={{fontVariationSettings: "'FILL' 1"}}>wifi_off</span>
</div>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface mb-md">You are currently offline.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-xl">
                    Critical views are available from cache. Your data will automatically sync once a stable connection is restored.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-md mb-3xl">
<button className="bg-primary hover:bg-primary-container text-on-primary px-xl h-12 rounded-lg font-semibold flex items-center gap-sm transition-all active:scale-95 reconnect-pulse" >
<span className="material-symbols-outlined">refresh</span>
                        Try Reconnecting
                    </button>
<div className="flex items-center gap-sm px-md py-sm bg-surface-container-low rounded-lg border border-outline-variant">
<span className="material-symbols-outlined text-tertiary-container">sync</span>
<span className="font-label-md text-label-md text-tertiary">Last synced: 2m ago</span>
</div>
</div>

<div className="w-full text-left">
<div className="flex items-center justify-between mb-lg border-b border-outline-variant pb-sm">
<h2 className="font-title-lg text-title-lg flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">download_done</span>
                            Available Offline Modules
                        </h2>
<span className="font-label-md text-label-md text-secondary">Local Storage Cache</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-md">

<div className="bg-white border border-outline-variant p-lg rounded-xl hover:border-primary transition-all group cursor-pointer">
<div className="flex items-start justify-between mb-md">
<div className="p-sm bg-surface-container-high rounded-lg text-primary group-hover:bg-primary-fixed">
<span className="material-symbols-outlined">receipt_long</span>
</div>
<span className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold px-xs py-0.5 rounded">CACHED</span>
</div>
<h3 className="font-title-lg text-title-lg mb-xs">Recent Purchase Orders</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Access last 30 days of transactional history and drafts.</p>
<div className="mt-lg flex items-center text-primary font-semibold text-sm">
                                View Module <span className="material-symbols-outlined text-[16px] ml-xs">arrow_forward</span>
</div>
</div>

<div className="bg-white border border-outline-variant p-lg rounded-xl hover:border-primary transition-all group cursor-pointer">
<div className="flex items-start justify-between mb-md">
<div className="p-sm bg-surface-container-high rounded-lg text-primary group-hover:bg-primary-fixed">
<span className="material-symbols-outlined">contact_page</span>
</div>
<span className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold px-xs py-0.5 rounded">CACHED</span>
</div>
<h3 className="font-title-lg text-title-lg mb-xs">Employee Directory</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Global corporate contacts and organizational chart hierarchy.</p>
<div className="mt-lg flex items-center text-primary font-semibold text-sm">
                                View Module <span className="material-symbols-outlined text-[16px] ml-xs">arrow_forward</span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant border-dashed p-lg rounded-xl relative overflow-hidden group">
<div className="flex items-start justify-between mb-md opacity-50">
<div className="p-sm bg-surface-container-high rounded-lg text-secondary">
<span className="material-symbols-outlined">analytics</span>
</div>
</div>
<h3 className="font-title-lg text-title-lg mb-xs opacity-50">Live Analytics</h3>
<p className="font-body-md text-body-md text-on-surface-variant opacity-50">Real-time data stream requires active server connection.</p>
<div className="mt-lg flex items-center text-secondary font-semibold text-sm">
<span className="material-symbols-outlined text-[16px] mr-xs">lock</span> Unavailable
                            </div>
<div className="absolute top-0 right-0 p-2">
<span className="bg-error-container text-on-error-container text-[10px] font-bold px-xs py-0.5 rounded">OFFLINE</span>
</div>
</div>
</div>
</div>

<div className="mt-3xl w-full flex flex-col md:flex-row items-center justify-between p-lg bg-surface-container-low rounded-2xl border border-outline-variant">
<div className="flex items-center gap-md mb-md md:mb-0">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-primary-fixed-dim"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-tertiary-fixed-dim"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-secondary-fixed-dim"></div>
</div>
<p className="font-label-md text-label-md text-on-surface-variant">12 colleagues also working in offline mode.</p>
</div>
<div className="flex items-center gap-lg">
<div className="text-right">
<p className="font-label-md text-label-md text-on-surface">PWA Health</p>
<p className="text-[10px] text-on-surface-variant">Storage: 24.5 MB / 100 MB</p>
</div>
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-outline-variant shadow-sm text-primary">
<span className="material-symbols-outlined">web</span>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default OfflineStatus;
