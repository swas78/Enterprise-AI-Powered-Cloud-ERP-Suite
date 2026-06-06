import React from 'react';


const MfaVerification: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 bg-surface border-b border-outline-variant fixed top-0">
<div className="font-headline-md text-headline-md font-bold text-primary">AMDOX</div>
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-standard" data-icon="help">help</span>
</div>
</header>
<main className="flex-grow flex items-center justify-center px-margin-mobile md:px-margin-desktop py-2xl mt-[48px]">
<div className="w-full max-w-[440px]">

<div className="bg-surface-container-lowest border border-outline-variant p-xl shadow-sm rounded-lg">

<div className="flex flex-col items-center mb-xl">
<div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center rounded-full mb-md">
<span className="material-symbols-outlined text-primary text-[28px]" data-icon="shield_person">shield_person</span>
</div>
<h1 className="font-headline-md text-headline-md text-on-surface mb-xs">Identity Verification</h1>
<p className="font-body-md text-body-md text-on-surface-variant text-center">
                        We've sent a 6-digit verification code to<br/>
<span className="font-semibold text-on-surface">m***@globalcorp.com</span>
</p>
</div>

<form className="space-y-xl" id="otp-form">
<div className="flex justify-between gap-sm" id="otp-container">
<input autoFocus={true} className="otp-input w-full aspect-square text-center font-headline-md text-headline-md border border-outline-variant rounded bg-white focus:border-primary focus:outline-none transition-standard" maxLength={1} type="text"/>
<input className="otp-input w-full aspect-square text-center font-headline-md text-headline-md border border-outline-variant rounded bg-white focus:border-primary focus:outline-none transition-standard" maxLength={1} type="text"/>
<input className="otp-input w-full aspect-square text-center font-headline-md text-headline-md border border-outline-variant rounded bg-white focus:border-primary focus:outline-none transition-standard" maxLength={1} type="text"/>
<div className="flex items-center text-outline-variant">
<span className="h-px w-2 bg-current"></span>
</div>
<input className="otp-input w-full aspect-square text-center font-headline-md text-headline-md border border-outline-variant rounded bg-white focus:border-primary focus:outline-none transition-standard" maxLength={1} type="text"/>
<input className="otp-input w-full aspect-square text-center font-headline-md text-headline-md border border-outline-variant rounded bg-white focus:border-primary focus:outline-none transition-standard" maxLength={1} type="text"/>
<input className="otp-input w-full aspect-square text-center font-headline-md text-headline-md border border-outline-variant rounded bg-white focus:border-primary focus:outline-none transition-standard" maxLength={1} type="text"/>
</div>
<button className="w-full h-[40px] bg-primary-container text-white font-semibold rounded hover:bg-[#0B7DFF] active:scale-95 transition-standard" type="submit">
                        Verify Code
                    </button>
</form>

<div className="mt-xl flex flex-col items-center gap-md">
<div className="flex items-center gap-xs font-body-md text-on-surface-variant">
<span>Didn't receive the code?</span>
<button className="text-primary font-semibold hover:underline transition-standard">Resend code</button>
</div>
<div className="w-full border-t border-outline-variant pt-md">
<a className="flex items-center justify-center gap-xs text-secondary font-medium hover:text-on-surface transition-standard" href="#">
<span className="material-symbols-outlined text-[18px]" data-icon="arrow_back">arrow_back</span>
<span>Back to login</span>
</a>
</div>
</div>
</div>

<div className="mt-lg flex items-start gap-md p-md bg-surface-container-low rounded">
<span className="material-symbols-outlined text-primary text-[20px] mt-xs" data-icon="info">info</span>
<p className="font-body-sm text-on-surface-variant text-[12px] leading-relaxed">
                    By confirming this code, you are authorizing access to Global Corp Enterprise Tier resources. AMDOX MFA ensures your session is encrypted and compliant with SOC2 data sovereignty requirements.
                </p>
</div>
</div>
</main>

<footer className="p-lg flex justify-center items-center gap-xl text-outline font-label-md">
<span className="flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px]" data-icon="cloud_done">cloud_done</span>
            Enterprise Cloud Secured
        </span>
<span className="text-outline-variant">|</span>
<span>© 2024 AMDOX Corp.</span>
</footer>


    </div>
  );
};

export default MfaVerification;
