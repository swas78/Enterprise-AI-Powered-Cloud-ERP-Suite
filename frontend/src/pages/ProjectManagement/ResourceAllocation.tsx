import React from 'react';


const ResourceAllocation: React.FC = () => {


  return (
    <div className="w-full">
      

<div className="flex flex-wrap items-center justify-between gap-md">
<div className="flex items-center gap-md">
<div className="flex flex-col gap-xs">
<span className="font-label-md text-label-md text-on-surface-variant">Department</span>
<select className="h-10 border border-outline-variant rounded bg-surface px-md font-body-md text-body-md focus:ring-primary focus:border-primary outline-none min-w-[160px]">
<option>Engineering</option>
<option>Product Design</option>
<option>Data Science</option>
<option>Operations</option>
</select>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-md text-label-md text-on-surface-variant">Skillset</span>
<select className="h-10 border border-outline-variant rounded bg-surface px-md font-body-md text-body-md focus:ring-primary focus:border-primary outline-none min-w-[160px]">
<option>All Skills</option>
<option>React/Next.js</option>
<option>Python/ML</option>
<option>UI/UX Design</option>
</select>
</div>
<div className="flex flex-col gap-xs self-end">
<button className="h-10 px-md border border-outline-variant rounded bg-surface flex items-center gap-sm text-secondary hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
<span className="font-label-md text-label-md">Oct 23 - Nov 05</span>
</button>
</div>
</div>

<div className="flex items-center gap-lg bg-surface px-lg py-sm rounded-lg border border-outline-variant">
<div className="flex items-center gap-sm">
<div className="w-3 h-3 rounded bg-primary-fixed border border-outline-variant"></div>
<span className="text-code-sm font-code-sm text-on-surface-variant">Available (&lt;40%)</span>
</div>
<div className="flex items-center gap-sm">
<div className="w-3 h-3 rounded bg-primary"></div>
<span className="text-code-sm font-code-sm text-on-surface-variant">Optimal (40-90%)</span>
</div>
<div className="flex items-center gap-sm">
<div className="w-3 h-3 rounded bg-error-container border border-error"></div>
<span className="text-code-sm font-code-sm text-on-surface-variant">Over-capacity (&gt;90%)</span>
</div>
</div>
</div>

<div className="flex-1 bg-white border border-outline-variant rounded-xl overflow-hidden flex flex-col shadow-sm">

<div className="flex bg-surface-container-low border-b border-outline-variant sticky top-0 z-20">
<div className="w-[240px] p-md border-r border-outline-variant shrink-0 bg-surface-container-low">
<span className="font-label-md text-label-md uppercase text-on-surface-variant tracking-widest">Team Members</span>
</div>
<div className="flex-1 flex overflow-x-auto hide-scrollbar">

<div className="flex">
<template id="day-header-template">
<div className="w-20 p-md flex flex-col items-center justify-center border-r border-outline-variant bg-surface-container-low shrink-0">
<span className="text-code-sm font-code-sm text-on-surface-variant opacity-70 uppercase">Mon</span>
<span className="font-title-lg text-title-lg">23</span>
</div>
</template>
<div className="flex" id="timeline-headers">

</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto overflow-x-auto hide-scrollbar">
<div className="flex flex-col min-w-max" id="heatmap-rows">

</div>
</div>
</div>

<div className="flex justify-between items-center py-md border-t border-outline-variant">
<div className="flex items-center gap-xl">
<div>
<span className="text-code-sm font-code-sm text-on-surface-variant uppercase">Avg. Utilization</span>
<p className="font-headline-md text-headline-md text-primary">72.4%</p>
</div>
<div>
<span className="text-code-sm font-code-sm text-on-surface-variant uppercase">Active Projects</span>
<p className="font-headline-md text-headline-md text-on-surface">14</p>
</div>
<div>
<span className="text-code-sm font-code-sm text-on-surface-variant uppercase">Unassigned Slots</span>
<p className="font-headline-md text-headline-md text-secondary">3</p>
</div>
</div>
<div className="flex items-center gap-md">
<button className="h-10 px-lg bg-surface border border-outline-variant text-secondary rounded-lg hover:bg-surface-container-low transition-colors font-label-md text-label-md">Export PDF</button>
<button className="h-10 px-lg bg-primary text-on-primary rounded-lg hover:bg-[#0B7DFF] transition-colors font-label-md text-label-md shadow-sm">Allocate Resources</button>
</div>
</div>

    </div>
  );
};

export default ResourceAllocation;
