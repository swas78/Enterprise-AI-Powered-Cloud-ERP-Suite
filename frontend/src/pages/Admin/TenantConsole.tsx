import React from 'react';


const TenantConsole: React.FC = () => {


  return (
    <div className="w-full">
      
<div className="flex justify-between items-end mb-xl">
<div>
<nav className="flex gap-xs text-on-surface-variant font-label-md text-label-md mb-xs">
<span>Administration</span>
<span>/</span>
<span className="text-primary">Tenant Console</span>
</nav>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Tenant Admin Console</h2>
</div>
<div className="flex gap-sm">
<button className="flex items-center gap-sm px-lg py-sm bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-[#0B7DFF] transition-colors">
<span className="material-symbols-outlined text-[18px]">person_add</span>
                            Invite User
                        </button>
</div>
</div>

<div className="flex gap-xl border-b border-outline-variant overflow-x-auto no-scrollbar">
<button className="relative pb-md text-primary font-bold border-b-2 border-primary whitespace-nowrap transition-all">Overview</button>
<button className="relative pb-md text-on-surface-variant font-medium hover:text-primary whitespace-nowrap transition-all">User Management</button>
<button className="relative pb-md text-on-surface-variant font-medium hover:text-primary whitespace-nowrap transition-all">Role Matrix</button>
<button className="relative pb-md text-on-surface-variant font-medium hover:text-primary whitespace-nowrap transition-all">Security Policies</button>
<button className="relative pb-md text-on-surface-variant font-medium hover:text-primary whitespace-nowrap transition-all">SSO Connectivity</button>
</div>

    </div>
  );
};

export default TenantConsole;
