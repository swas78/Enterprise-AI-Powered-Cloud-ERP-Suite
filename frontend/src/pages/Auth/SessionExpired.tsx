import React from 'react';


const SessionExpired: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="fixed top-0 left-0 w-full px-lg h-[48px] flex items-center z-50">
<div className="font-headline-md text-headline-md font-bold text-primary">AMDOX</div>
</header>

<main className="relative z-10 w-full max-w-md px-md">

<div className="re-auth-card bg-surface-container-lowest rounded-lg p-xl flex flex-col items-center transition-all duration-300" style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px", border: "1px solid rgb(229, 231, 235)"}}>

<div className="mb-lg flex flex-col items-center text-center">
<div className="w-12 h-12 bg-primary-container/10 text-primary rounded-full flex items-center justify-center mb-md">
<span className="material-symbols-outlined text-headline-md">lock_clock</span>
</div>
<h1 className="font-headline-md text-headline-md mb-xs" style={{color: "#111827"}}>Session expired</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-[280px]">
                    For your security, your session has timed out. Please enter your password to continue.
                </p>
</div>

<div className="w-full flex items-center p-md bg-surface rounded-lg border border-outline-variant mb-xl">
<div className="relative">
<img alt="User Profile" className="w-12 h-12 rounded-full object-cover" data-alt="A professional headshot of a mid-30s executive man with short dark hair and a confident expression. He is wearing a minimalist, high-tech charcoal blazer in a bright, clean office environment with cool-white tones. The lighting is soft and corporate, perfectly matching a precise minimalism UI aesthetic with electric blue accents in the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ21zfaTvN19HsDb6wkKe8ROLXRJqYpcmLwyDOL-B8Fefs586Lg9BumJ1fw_ANlmHHscrexOy71IzCwRUEGVMnDp2AWS7WT3oyvqU3Ckqp6tJlbMKhFAcNLJsgeMieErBb721Gk46SOAuXivYjXGTtlX5nzG2j3E6IsVrpJwWF2gzfC6gbcEpwZVfS-_rIU-yva4P8jUdJ-a2Uy7EMp5hC4kNNbFhSU_sno_hHm-DloWw9RWa6qx1IRCbZdCH3z3wCspwFoXGY-Ek" />
<div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary-fixed border-2 border-surface rounded-full"></div>
</div>
<div className="ml-md">
<div className="font-title-lg text-title-lg" style={{color: "#111827"}}>Alex Chen</div>
<div className="font-body-md text-body-md text-on-surface-variant">alex.chen@globalcorp.com</div>
</div>
</div>

<form action="#" className="w-full space-y-lg" method="POST" >
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="password">Password</label>
<div className="relative group">
<input className="w-full h-10 px-md bg-white border border-outline-variant rounded transition-all duration-150 focus:border-primary focus:ring-0 focus:outline-none placeholder:text-outline-variant" id="password" name="password" placeholder="••••••••" required={true} type="password" />
<div className="absolute inset-y-0 right-0 pr-md flex items-center pointer-events-none text-outline group-focus-within:text-primary">
<span className="material-symbols-outlined">key</span>
</div>
</div>
</div>
<div className="flex flex-col space-y-md pt-xs">
<button className="w-full h-10 text-white font-title-lg text-body-lg rounded flex items-center justify-center transition-all duration-150 hover:bg-[#0B7DFF] active:scale-[0.98] hover:opacity-90" type="submit" style={{backgroundColor: "#1B9CFF"}}>
                        Resume Session
                    </button>
<button className="w-full h-10 text-primary font-title-lg text-body-lg flex items-center justify-center hover:bg-primary/5 rounded transition-colors duration-150" type="button">
                        Sign out and use another account
                    </button>
</div>
</form>
</div>

<footer className="mt-xl flex justify-center space-x-xl text-on-surface-variant"><a className="font-label-md text-label-md hover:text-primary transition-colors" href="#">Help Center</a><a className="font-label-md text-label-md hover:text-primary transition-colors" href="#">Security Policy</a><div className="flex items-center font-label-md text-label-md text-on-surface-variant/80"><span className="material-symbols-outlined text-[14px] mr-xs" style={{fontVariationSettings: "'FILL' 1"}}>lock</span>Secure Session</div></footer>
</main>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0061a4" stroke-width="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>




    </div>
  );
};

export default SessionExpired;
