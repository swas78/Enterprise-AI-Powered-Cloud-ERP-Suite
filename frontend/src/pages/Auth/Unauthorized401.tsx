import React from 'react';


const Unauthorized401: React.FC = () => {


  return (
    <div className="w-full">
      

<div className="absolute inset-0 z-0 pointer-events-none opacity-30">
<div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full blur-[120px] bg-primary-container/10"></div>
<div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full blur-[100px] bg-secondary-container/10"></div>
</div>

<main className="relative z-10 w-full max-w-lg px-margin-mobile md:px-margin-desktop text-center">

<div className="mb-2xl">
<h1 className="font-headline-md text-headline-md font-bold text-primary tracking-tight">AMDOX</h1>
</div>

<div className="relative inline-flex items-center justify-center mb-xl">

<div className="absolute w-32 h-32 bg-surface-container rounded-full animate-pulse opacity-40"></div>

<div className="relative flex items-center justify-center w-24 h-24 bg-white border border-outline-variant rounded-full shadow-sm">
<span className="material-symbols-outlined text-[48px] text-on-surface-variant" data-icon="lock_person">lock_person</span>
</div>

<div className="absolute bottom-0 right-0 bg-error-container text-on-error-container w-10 h-10 rounded-full flex items-center justify-center border-4 border-background">
<span className="material-symbols-outlined text-[20px]" data-icon="priority_high">priority_high</span>
</div>
</div>

<div className="space-y-md mb-2xl">
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">Access Restricted</h2>
<div className="flex items-center justify-center gap-2 mb-sm">
<span className="font-code-sm text-code-sm px-2 py-0.5 bg-surface-container-high text-on-surface-variant rounded-lg border border-outline-variant uppercase">Error 401</span>
<span className="h-1 w-1 bg-outline rounded-full"></span>
<span className="font-label-md text-label-md text-secondary">Unauthorized</span>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                The resource you are trying to access requires valid authentication. Please sign in with your enterprise credentials to proceed.
            </p>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-md">

<button className="w-full sm:w-auto min-w-[160px] h-[40px] px-lg bg-primary text-on-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 transition-standard hover:bg-[#0B7DFF] active:scale-95 glow-hover">
<span className="material-symbols-outlined text-[18px]" data-icon="login">login</span>
                Sign In
            </button>

<button className="w-full sm:w-auto min-w-[160px] h-[40px] px-lg bg-transparent border border-outline-variant text-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 transition-standard hover:bg-surface-container-low active:scale-95">
<span className="material-symbols-outlined text-[18px]" data-icon="home">home</span>
                Return to Home
            </button>
</div>

<div className="mt-3xl pt-lg border-t border-outline-variant/30">
<div className="flex flex-col items-center gap-2">
<p className="font-label-md text-label-md text-outline uppercase tracking-widest">Global Corp Cloud Infrastructure</p>
<div className="flex items-center gap-4">
<a className="text-secondary hover:text-primary transition-colors duration-150 font-label-md" href="#">Contact Support</a>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<a className="text-secondary hover:text-primary transition-colors duration-150 font-label-md" href="#">System Status</a>
</div>
</div>
</div>
</main>



    </div>
  );
};

export default Unauthorized401;
