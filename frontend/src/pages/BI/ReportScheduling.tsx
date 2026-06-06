import React from 'react';


const ReportScheduling: React.FC = () => {


  return (
    <div className="w-full">
      
<div className="flex justify-between items-end">
<h2 className="font-headline-md text-headline-md text-on-background">Active Schedules</h2>
<span className="text-label-md text-primary font-bold">4 TOTAL</span>
</div>
<div className="space-y-sm">

<div className="group bg-surface-container-lowest border border-outline-variant p-md rounded-lg hover:border-primary transition-colors cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-2">
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">more_vert</span>
</div>
<div className="flex items-start gap-md">
<div className="w-10 h-10 bg-surface-container rounded flex items-center justify-center text-primary">
<span className="material-symbols-outlined">picture_as_pdf</span>
</div>
<div className="flex-grow">
<h3 className="font-title-lg text-title-lg text-on-surface">Weekly Sales PDF</h3>
<p className="text-body-md text-secondary">Every Monday at 08:00 AM</p>
<div className="mt-md flex items-center gap-sm">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-[#16A34A] uppercase tracking-wider">Approved</span>
<span className="text-label-md text-outline-variant">3 Recipients</span>
</div>
</div>
</div>
</div>

<div className="group bg-surface-container-lowest border border-outline-variant p-md rounded-lg hover:border-primary transition-colors cursor-pointer">
<div className="flex items-start gap-md">
<div className="w-10 h-10 bg-surface-container rounded flex items-center justify-center text-primary">
<span className="material-symbols-outlined">description</span>
</div>
<div className="flex-grow">
<h3 className="font-title-lg text-title-lg text-on-surface">Monthly HR CSV</h3>
<p className="text-body-md text-secondary">1st of every month</p>
<div className="mt-md flex items-center gap-sm">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F1F5F9] text-[#475569] uppercase tracking-wider">In Review</span>
<span className="text-label-md text-outline-variant">1 Recipient</span>
</div>
</div>
</div>
</div>

<div className="group bg-surface-container-lowest border border-outline-variant p-md rounded-lg hover:border-primary transition-colors cursor-pointer">
<div className="flex items-start gap-md">
<div className="w-10 h-10 bg-surface-container rounded flex items-center justify-center text-primary">
<span className="material-symbols-outlined">table_view</span>
</div>
<div className="flex-grow">
<h3 className="font-title-lg text-title-lg text-on-surface">Quarterly Inventory</h3>
<p className="text-body-md text-secondary">Next run: Oct 1, 2024</p>
<div className="mt-md flex items-center gap-sm">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-[#16A34A] uppercase tracking-wider">Live</span>
<span className="text-label-md text-outline-variant">12 Recipients</span>
</div>
</div>
</div>
</div>

<div className="group bg-surface-container-lowest border border-error/20 border-dashed p-md rounded-lg hover:border-error transition-colors cursor-pointer">
<div className="flex items-start gap-md">
<div className="w-10 h-10 bg-error-container rounded flex items-center justify-center text-error">
<span className="material-symbols-outlined">warning</span>
</div>
<div className="flex-grow">
<h3 className="font-title-lg text-title-lg text-on-surface">Daily Log Sync</h3>
<p className="text-body-md text-secondary">Paused due to sync error</p>
<div className="mt-md flex items-center gap-sm">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-[#DC2626] uppercase tracking-wider">Failed</span>
<span className="text-label-md text-error flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] animate-spin">sync</span> Retrying...
                                        </span>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default ReportScheduling;
