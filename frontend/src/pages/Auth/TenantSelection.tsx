import React from 'react';


const TenantSelection: React.FC = () => {


  return (
    <div className="w-full">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.03]"><div className="absolute top-0 right-0 w-[800px] h-[800px] transform translate-x-1/3 -translate-y-1/3"><svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M0 0L100 100M100 0L0 100" stroke="currentColor" stroke-width="1"></path></svg></div><div className="absolute bottom-0 left-0 w-[600px] h-[600px] transform -translate-x-1/4 translate-y-1/4"><svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M0 0L100 100M100 0L0 100" stroke="currentColor" stroke-width="0.5"></path></svg></div></div>

<header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-lg h-[48px] z-50">
<div className="flex items-center gap-md">
<span className="font-headline-md text-headline-md font-bold text-primary tracking-tighter" style={{opacity: "0"}}>AMDOX</span>
<div className="h-4 w-[1px] bg-outline-variant mx-xs"></div>
<span className="font-label-md text-label-md text-on-surface-variant tracking-widest">ENTERPRISE GATEWAY</span>
</div>
<div className="flex items-center gap-md">
<button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-xs rounded transition-standard">notifications</button>
<button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-xs rounded transition-standard">help</button>
<div className="flex items-center gap-sm ml-md">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-xs overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="A clean, high-resolution profile headshot of a professional executive in a business setting. The lighting is bright and even, reflecting a corporate modern aesthetic with soft blue and white background tones. The overall mood is trustworthy, competent, and minimalist, matching a premium enterprise software interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZrzAC8J3Q8fAJZ-r7zFKY3KqiYraVMHtYgb_9cCqFHKw1xiL-d3x74SvdLaeypMg4TrJDw0T2nPiA84thu6jvyRWlI6kpp9UjyMkYCnIWNLWYyjN6sv8rd2NE0uMfJyqa3CdhgunQWhlZs8mGyNW2eQb7gdeLU6m7V4w41DxvTShvuz2p-QVrKuj3QWtHl8Fupqxjzh41vVTIpi9B0fkLTdFl_jVd1mcx70pwRlNMKRoSjlUru-AUNeFba1LmBrmq_6Hu-s6OuL8" />
</div>
</div>
</div>
</header>

<main className="flex-grow flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop py-2xl relative z-10">

<div className="text-center mb-xl max-w-2xl">
<h1 className="font-display-lg text-display-lg text-on-surface mb-md">Welcome back, Jordan</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Select a tenant workspace to continue. Your session is secured with enterprise-grade encryption.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg w-full max-auto max-w-[1200px]">

<div className="tenant-card relative group cursor-pointer bg-surface border border-outline-variant rounded-lg p-lg transition-standard hover:border-primary hover:shadow-lg flex flex-col gap-md overflow-hidden bg-white" >
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded bg-surface-container-low flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-primary text-3xl">domain</span>
</div>
<span className="px-md py-xs rounded-full bg-primary-container/10 text-primary-container font-label-md text-label-md border border-primary-container/20" style={{backgroundColor: "rgba(27, 156, 255, 0.1)", color: "rgb(27, 156, 255)", borderColor: "rgba(27, 156, 255, 0.2)"}}>Admin</span>
</div>
<div className="mt-md">
<h3 className="font-headline-md text-headline-md text-on-surface">Global Corp - North America</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Primary region handling logistics and supply chain workflows.</p>
</div>
<div className="mt-auto pt-md flex items-center justify-between border-t border-outline-variant/30">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white bg-surface-dim"></div>
<div className="w-6 h-6 rounded-full border-2 border-white bg-outline-variant"></div>
<div className="w-6 h-6 rounded-full border-2 border-white bg-primary-fixed-dim"></div>
</div>
<button className="flex items-center gap-xs text-primary font-label-md hover:underline" style={{color: "rgb(27, 156, 255)"}}>Enter <span className="material-symbols-outlined text-sm">arrow_forward</span></button><span className="text-label-md font-label-md text-on-surface-variant">Last synced: 2m ago</span>
</div>

<div className="absolute inset-0 bg-primary/5 opacity-0 select-overlay transition-standard pointer-events-none flex items-center justify-center">
<span className="bg-primary text-white px-lg py-sm rounded-full font-label-md" style={{backgroundColor: "#1B9CFF"}}>Enter Workspace</span>
</div>
</div>

<div className="tenant-card relative group cursor-pointer bg-surface border border-outline-variant rounded-lg p-lg transition-standard hover:border-primary hover:shadow-lg flex flex-col gap-md overflow-hidden bg-white" >
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded bg-surface-container-low flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-tertiary text-3xl">public</span>
</div>
<span className="px-md py-xs rounded-full bg-surface-container-high text-secondary font-label-md text-label-md border border-outline-variant">Manager</span>
</div>
<div className="mt-md">
<h3 className="font-headline-md text-headline-md text-on-surface">Global Corp - EMEA</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">European division focused on human resources and local compliance.</p>
</div>
<div className="mt-auto pt-md flex items-center justify-between border-t border-outline-variant/30">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white bg-secondary"></div>
<div className="w-6 h-6 rounded-full border-2 border-white bg-tertiary-fixed"></div>
</div>
<button className="flex items-center gap-xs text-primary font-label-md hover:underline" style={{color: "rgb(27, 156, 255)"}}>Enter <span className="material-symbols-outlined text-sm">arrow_forward</span></button><span className="text-label-md font-label-md text-on-surface-variant">Last synced: 1h ago</span>
</div>
<div className="absolute inset-0 bg-primary/5 opacity-0 select-overlay transition-standard pointer-events-none flex items-center justify-center">
<span className="bg-primary text-white px-lg py-sm rounded-full font-label-md" style={{backgroundColor: "#1B9CFF"}}>Enter Workspace</span>
</div>
</div>

<div className="tenant-card relative group cursor-pointer bg-surface border border-outline-variant rounded-lg p-lg transition-standard hover:border-primary hover:shadow-lg flex flex-col gap-md overflow-hidden bg-white" >
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded bg-surface-container-low flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-secondary text-3xl">science</span>
</div>
<span className="px-md py-xs rounded-full bg-surface-container-high text-secondary font-label-md text-label-md border border-outline-variant">Manager</span>
</div>
<div className="mt-md">
<h3 className="font-headline-md text-headline-md text-on-surface">AMDOX - R&amp;D Lab</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Experimental sandbox environment for testing new intelligence modules.</p>
</div>
<div className="mt-auto pt-md flex items-center justify-between border-t border-outline-variant/30">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white bg-primary" style={{backgroundColor: "rgb(27, 156, 255)"}}></div>
</div>
<button className="flex items-center gap-xs text-primary font-label-md hover:underline" style={{color: "rgb(27, 156, 255)"}}>Enter <span className="material-symbols-outlined text-sm">arrow_forward</span></button><span className="text-label-md font-label-md text-on-surface-variant">Last synced: 1d ago</span>
</div>
<div className="absolute inset-0 bg-primary/5 opacity-0 select-overlay transition-standard pointer-events-none flex items-center justify-center">
<span className="bg-primary text-white px-lg py-sm rounded-full font-label-md" style={{backgroundColor: "#1B9CFF"}}>Enter Workspace</span>
</div>
</div>

<div className="border-2 border-dashed border-outline-variant rounded-lg p-lg flex flex-col items-center justify-center text-center gap-sm group hover:border-primary hover:bg-surface-container-low cursor-pointer transition-standard">
<div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-standard">
<span className="material-symbols-outlined">add</span>
</div>
<div>
<p className="font-title-lg text-title-lg text-on-surface">Request Access</p>
<p className="font-body-md text-body-md text-on-surface-variant">Join another enterprise tenant</p>
</div>
</div>
</div>

<div className="mt-3xl flex flex-col items-center gap-md">
<button className="bg-white border border-outline-variant text-on-surface px-xl py-md rounded font-label-md flex items-center gap-sm hover:bg-surface-container-low transition-standard">
<span className="material-symbols-outlined">logout</span>
                Sign out of AMDOX
            </button>
<div className="flex gap-lg">
<a className="text-label-md font-label-md text-on-surface-variant hover:text-primary" href="#">System Status</a>
<a className="text-label-md font-label-md text-on-surface-variant hover:text-primary" href="#">Security Policy</a>
<a className="text-label-md font-label-md text-on-surface-variant hover:text-primary" href="#">Global Support</a>
</div>
</div>
</main>

<footer className="h-[32px] bg-surface flex items-center justify-between px-lg border-t border-outline-variant">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px] text-green-600">cloud_done</span>
<span className="font-code-sm text-code-sm text-on-surface-variant uppercase">Identity Synced</span>
</div>
<div className="font-code-sm text-code-sm text-on-surface-variant">
            Encrypted Session: v2.4.12
        </div>
</footer>




    </div>
  );
};

export default TenantSelection;
