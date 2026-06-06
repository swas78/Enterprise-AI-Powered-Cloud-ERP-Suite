import React from 'react';


const GanttChart: React.FC = () => {


  return (
    <div className="w-full">
      
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Project Phoenix: System Architecture</h2>
<p className="text-secondary font-body-md">High-fidelity development timeline • Q3 - Q4 2024</p>
</div>
<div className="flex gap-sm">
<button className="bg-surface-container-highest border border-outline-variant text-on-surface px-md py-sm rounded-lg font-label-md flex items-center gap-xs hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined">filter_list</span>
                        Filter
                    </button>
<button className="bg-primary text-white px-lg py-sm rounded-lg font-label-md flex items-center gap-xs hover:bg-[#0B7DFF] transition-all shadow-sm">
<span className="material-symbols-outlined">add_circle</span>
                        Add Milestone
                    </button>
</div>

    </div>
  );
};

export default GanttChart;
