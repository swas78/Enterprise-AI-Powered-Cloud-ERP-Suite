import React from 'react';


const DashboardBuilder: React.FC = () => {


  return (
    <div className="w-full">
      
<div className="max-w-[1400px] mx-auto grid grid-cols-12 auto-rows-[120px] gap-md">

<div className="col-span-12 md:col-span-3 row-span-1 bento-card p-md flex flex-col justify-between group cursor-move">
<div className="flex justify-between items-start">
<span className="font-label-md text-secondary uppercase tracking-widest">Revenue Q3</span>
<span className="material-symbols-outlined text-outline opacity-0 group-hover:opacity-100 transition-opacity">drag_indicator</span>
</div>
<div className="flex items-end justify-between">
<h2 className="font-headline-md text-headline-md text-primary">$4.2M</h2>
<span className="text-xs font-bold text-[#16A34A] bg-[#16A34A]/10 px-sm py-xs rounded">+12.4%</span>
</div>
</div>

<div className="col-span-12 md:col-span-3 row-span-1 bento-card p-md flex flex-col justify-between group cursor-move">
<div className="flex justify-between items-start">
<span className="font-label-md text-secondary uppercase tracking-widest">Active Users</span>
<span className="material-symbols-outlined text-outline opacity-0 group-hover:opacity-100 transition-opacity">drag_indicator</span>
</div>
<div className="flex items-end justify-between">
<h2 className="font-headline-md text-headline-md text-primary">84.5k</h2>
<span className="text-xs font-bold text-[#16A34A] bg-[#16A34A]/10 px-sm py-xs rounded">+5.2%</span>
</div>
</div>

<div className="col-span-12 md:col-span-3 row-span-1 bento-card p-md flex flex-col justify-between group cursor-move">
<div className="flex justify-between items-start">
<span className="font-label-md text-secondary uppercase tracking-widest">Error Rate</span>
<span className="material-symbols-outlined text-outline opacity-0 group-hover:opacity-100 transition-opacity">drag_indicator</span>
</div>
<div className="flex items-end justify-between">
<h2 className="font-headline-md text-headline-md text-primary">0.08%</h2>
<span className="text-xs font-bold text-[#DC2626] bg-[#DC2626]/10 px-sm py-xs rounded">-2.1%</span>
</div>
</div>

<div className="col-span-12 md:col-span-3 row-span-1 bento-card p-md flex flex-col justify-between group cursor-move">
<div className="flex justify-between items-start">
<span className="font-label-md text-secondary uppercase tracking-widest">Avg Session</span>
<span className="material-symbols-outlined text-outline opacity-0 group-hover:opacity-100 transition-opacity">drag_indicator</span>
</div>
<div className="flex items-end justify-between">
<h2 className="font-headline-md text-headline-md text-primary">14m 22s</h2>
<span className="text-xs font-bold text-[#475569] bg-[#F1F5F9] px-sm py-xs rounded">Stable</span>
</div>
</div>

<div className="col-span-12 md:col-span-8 row-span-3 bento-card p-lg flex flex-col group cursor-move">
<div className="flex justify-between items-center mb-md">
<div>
<h3 className="font-title-lg text-title-lg text-on-background">Sales Growth Projection</h3>
<p className="font-body-md text-secondary">Quarterly performance vs predictive AI model</p>
</div>
<div className="flex gap-sm">
<span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">more_vert</span>
</div>
</div>
<div className="flex-1 relative bg-surface-container-low rounded flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="w-full h-full" style={{backgroundImage: "radial-gradient(circle at 2px 2px, #1B9CFF 1px, transparent 0)", backgroundSize: "24px 24px"}}></div>
</div>
<div className="w-full h-full px-lg flex items-end gap-sm">

<div className="w-full h-full flex items-end pb-xl relative">
<svg className="w-full h-48 fill-none stroke-primary stroke-[3px]" viewBox="0 0 1000 300">
<path d="M0,250 Q100,220 200,240 T400,150 T600,180 T800,100 T1000,120"></path>
<path className="stroke-outline-variant stroke-[2px] stroke-dasharray-[4,4]" d="M0,280 Q100,260 200,270 T400,200 T600,210 T800,150 T1000,160"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-4 row-span-3 bento-card p-lg flex flex-col group cursor-move">
<div className="flex justify-between items-center mb-md">
<h3 className="font-title-lg text-title-lg text-on-background">Market Share</h3>
<span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">filter_list</span>
</div>
<div className="flex-1 flex flex-col items-center justify-center gap-lg">
<div className="relative w-48 h-48 rounded-full border-[20px] border-primary-container flex items-center justify-center before:content-[''] before:absolute before:inset-[-20px] before:rounded-full before:border-[20px] before:border-primary before:border-r-transparent before:border-b-transparent">
<div className="text-center">
<span className="font-headline-md text-headline-md block">64%</span>
<span className="font-label-md text-secondary uppercase">Lead</span>
</div>
</div>
<div className="w-full grid grid-cols-2 gap-sm">
<div className="flex items-center gap-xs">
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span className="text-xs text-secondary">Enterprise</span>
</div>
<div className="flex items-center gap-xs">
<div className="w-3 h-3 rounded-full bg-primary-container"></div>
<span className="text-xs text-secondary">Growth</span>
</div>
<div className="flex items-center gap-xs">
<div className="w-3 h-3 rounded-full bg-tertiary-container"></div>
<span className="text-xs text-secondary">Public</span>
</div>
<div className="flex items-center gap-xs">
<div className="w-3 h-3 rounded-full bg-outline-variant"></div>
<span className="text-xs text-secondary">Others</span>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-12 row-span-2 bento-card p-lg group cursor-move">
<div className="flex justify-between items-center mb-md">
<h3 className="font-title-lg text-title-lg text-on-background">Operational Throughput</h3>
<div className="flex gap-md items-center">
<div className="flex bg-surface-container-low p-xs rounded-lg">
<button className="px-md py-1 text-xs font-bold bg-white text-primary rounded shadow-sm">Real-time</button>
<button className="px-md py-1 text-xs font-bold text-secondary">Historical</button>
</div>
<span className="material-symbols-outlined text-outline">settings</span>
</div>
</div>
<div className="h-24 flex items-end justify-between gap-1">
<div className="w-full bg-primary-container/20 rounded-t h-[40%] hover:bg-primary-container transition-all"></div>
<div className="w-full bg-primary-container/20 rounded-t h-[65%] hover:bg-primary-container transition-all"></div>
<div className="w-full bg-primary-container/20 rounded-t h-[45%] hover:bg-primary-container transition-all"></div>
<div className="w-full bg-primary-container/20 rounded-t h-[80%] hover:bg-primary-container transition-all"></div>
<div className="w-full bg-primary-container/20 rounded-t h-[95%] hover:bg-primary-container transition-all"></div>
<div className="w-full bg-primary-container/20 rounded-t h-[30%] hover:bg-primary-container transition-all"></div>
<div className="w-full bg-primary-container/20 rounded-t h-[55%] hover:bg-primary-container transition-all"></div>
<div className="w-full bg-primary-container/20 rounded-t h-[75%] hover:bg-primary-container transition-all"></div>
<div className="w-full bg-primary-container/20 rounded-t h-[40%] hover:bg-primary-container transition-all"></div>
<div className="w-full bg-primary-container/20 rounded-t h-[90%] hover:bg-primary-container transition-all"></div>
<div className="w-full bg-primary-container/20 rounded-t h-[60%] hover:bg-primary-container transition-all"></div>
<div className="w-full bg-primary-container/20 rounded-t h-[85%] hover:bg-primary-container transition-all"></div>
<div className="w-full bg-primary-container/20 rounded-t h-[50%] hover:bg-primary-container transition-all"></div>
<div className="w-full bg-primary-container/20 rounded-t h-[70%] hover:bg-primary-container transition-all"></div>
</div>
</div>
</div>

    </div>
  );
};

export default DashboardBuilder;
