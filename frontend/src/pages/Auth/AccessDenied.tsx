import React from 'react';


const AccessDenied: React.FC = () => {


  return (
    <div className="w-full">
      

<main className="min-h-screen flex items-center justify-center p-margin-mobile md:p-margin-desktop relative overflow-hidden">

<div className="geometric-accent top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-primary-container m-lg"></div>
<div className="geometric-accent bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-primary-container m-lg"></div>
<div className="absolute top-1/4 right-1/4 w-32 h-32 rotate-45 border border-outline-variant opacity-20"></div>
<div className="absolute bottom-1/4 left-1/3 w-12 h-12 flex items-center justify-center opacity-30">
<span className="material-symbols-outlined text-primary text-3xl">close</span>
</div>
<div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-xl items-center">

<div className="flex flex-col items-center justify-center order-2 md:order-1">
<div className="relative w-full max-w-sm aspect-square bg-surface-container rounded-full flex items-center justify-center float-anim">

<div className="absolute inset-0 border-[1.5px] border-outline-variant rounded-full scale-110 opacity-40"></div>
<div className="absolute inset-0 border-[1.5px] border-dashed border-primary scale-125 opacity-20"></div>
<div className="z-10 bg-white p-lg rounded-xl shadow-lg border border-outline-variant flex flex-col items-center gap-md">
<div className="w-16 h-16 bg-error-container/20 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-error text-4xl" data-weight="fill">lock</span>
</div>
<div className="space-y-xs w-full">
<div className="h-2 w-3/4 bg-surface-container rounded mx-auto"></div>
<div className="h-2 w-1/2 bg-surface-container rounded mx-auto"></div>
</div>
</div>

<div className="absolute -top-4 right-0 glass-panel px-md py-sm rounded-lg flex items-center gap-xs shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">shield</span>
<span className="font-label-md text-label-md text-on-surface">RBAC Verified</span>
</div>
<div className="absolute bottom-4 -left-8 glass-panel px-md py-sm rounded-lg flex items-center gap-xs shadow-sm">
<span className="material-symbols-outlined text-error text-sm">priority_high</span>
<span className="font-label-md text-label-md text-error">403 Restricted</span>
</div>
</div>
</div>

<div className="space-y-lg order-1 md:order-2 text-center md:text-left">
<div className="space-y-md">
<div className="inline-flex items-center gap-sm px-md py-xs bg-surface-container-high rounded-full border border-outline-variant">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Access Blocked</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">
                        Insufficient Permissions
                    </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                        Your current role does not have access to this module. Please contact your system administrator to update your credentials.
                    </p>
</div>

<div className="bg-surface p-md rounded-lg border border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">person</span>
</div>
<div>
<p className="font-label-md text-label-md text-secondary uppercase">Current Role</p>
<p className="font-title-lg text-title-lg text-on-surface">Viewer</p>
</div>
</div>
<div className="hidden sm:flex flex-col items-end">
<p className="font-label-md text-label-md text-outline">Tenant ID</p>
<p className="font-code-sm text-code-sm text-secondary">AMDX-9920-PRD</p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-md pt-md">
<button className="bg-primary-container text-white px-lg py-md rounded font-bold hover:bg-[#0B7DFF] transition-all duration-150 flex items-center justify-center gap-sm group active:scale-95">
                        Request Access
                        <span className="material-symbols-outlined text-md group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
<button className="bg-transparent border border-outline-variant text-on-surface px-lg py-md rounded font-semibold hover:bg-surface-container-low transition-all duration-150 flex items-center justify-center gap-sm active:scale-95" >
<span className="material-symbols-outlined text-md">dashboard</span>
                        Back to Dashboard
                    </button>
</div>

<div className="flex items-center gap-sm text-outline pt-xl">
<span className="material-symbols-outlined text-sm">help</span>
<span className="font-body-md text-body-md">Need immediate help? <a className="text-primary hover:underline font-semibold" href="#">Contact Enterprise Support</a></span>
</div>
</div>
</div>
</main>



    </div>
  );
};

export default AccessDenied;
