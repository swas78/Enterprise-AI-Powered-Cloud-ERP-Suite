import React from 'react';


const SystemHealth: React.FC = () => {


  return (
    <div className="w-full">
      
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#16A34A]"></div>
<div className="flex items-center gap-lg">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-[#16A34A]/10 flex items-center justify-center">
<span className="material-symbols-outlined text-[#16A34A] text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
</div>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-[#16A34A] rounded-full status-pulse"></div>
</div>
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface leading-tight">All Systems Operational</h1>
<p className="text-on-surface-variant font-body-lg">Everything is running smoothly. Last checked 2 minutes ago.</p>
</div>
</div>
<button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-title-lg hover:bg-primary-container transition-all duration-150 flex items-center gap-sm">
<span className="material-symbols-outlined text-[20px]">mail</span>
                        Subscribe to Updates
                    </button>

    </div>
  );
};

export default SystemHealth;
