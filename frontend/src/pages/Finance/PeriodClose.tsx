import React from 'react';


const PeriodClose: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 bg-surface border-b border-outline-variant sticky top-0">
<div className="flex items-center gap-xl">
<span className="font-headline-md text-headline-md font-bold text-primary">AMDOX</span>
<div className="relative hidden md:block">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="pl-[36px] pr-md py-xs bg-surface-container-low border-none rounded-lg text-body-md w-[320px] focus:ring-1 focus:ring-primary transition-all" placeholder="Search accounts (CMD+K)" type="text" />
</div>
</div>
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors" data-icon="cloud_done">cloud_done</span>
<span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors" data-icon="help">help</span>
<div className="relative">
<span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors" data-icon="notifications">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
</div>
<div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden border border-outline-variant">
<img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVlDa-4_fiYl39FmBvOXbU3tDOcke740cKhVq6w169_klE3lKwGRIAkEmTg1dfD8Z0xmawSgmTuW498p3dxqMTDb_y0XrEoZr_D5ZhFoqTHe9m5VpemwUO7FEDlT8kKTTwbENZxsP4PdX0yRcfOlkFo8xvbKjg8ESk38uvPmWEG475b4cr1YMh_406TevPs4rcNEjxtrDAPczOM2DHfwRAnGAwY0rexJL30iUEHMaL05bQe1yNapHJrELzSDyqjYR_ZAmuY5_fzWs" />
</div>
</div>
</header>

<div className="p-lg md:p-margin-desktop max-w-[1400px] w-full mx-auto space-y-lg">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-lg">
<div>
<nav className="flex items-center gap-xs text-secondary opacity-60 mb-xs">
<span className="font-label-md text-label-md">Finance</span>
<span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
<span className="font-label-md text-label-md">Period Management</span>
</nav>
<h2 className="font-headline-lg text-headline-lg text-on-background">Q4 FY2023 - December</h2>
<p className="text-secondary font-body-lg text-body-lg mt-xs">Finalizing the fiscal year reporting and reconciliation cycle.</p>
</div>
<div className="flex items-center gap-md">
<div className="flex flex-col items-end">
<span className="font-label-md text-label-md text-secondary uppercase tracking-widest">Status</span>
<div className="flex items-center gap-sm">
<span className="w-2 h-2 rounded-full bg-warning-orange animate-pulse" style={{backgroundColor: "#F59E0B"}}></span>
<span className="font-title-lg text-title-lg text-[#F59E0B]">OPEN</span>
</div>
</div>
<button className="bg-primary text-on-primary h-[48px] px-xl rounded-lg font-title-lg hover:bg-[#0b7dff] transition-all flex items-center gap-md shadow-lg shadow-primary/10 active:scale-95" id="lockAction">
<span className="material-symbols-outlined" data-icon="lock">lock</span>
                        Lock Period
                    </button>
</div>
</div>

<div className="grid grid-cols-12 gap-lg">

<div className="col-span-12 lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-xl p-xl">
<div className="flex justify-between items-center mb-xl">
<h3 className="font-title-lg text-title-lg text-on-background">Closing Checklist</h3>
<div className="flex items-center gap-sm">
<span className="text-secondary font-body-md text-body-md">75% Complete</span>
<div className="w-32 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-primary transition-all duration-700"></div>
</div>
</div>
</div>
<div className="space-y-lg">

<div className="relative flex gap-xl step-connector">
<div className="z-10 bg-success-green/10 text-[#16A34A] w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{backgroundColor: "rgba(22, 163, 74, 0.1)"}}>
<span className="material-symbols-outlined text-[16px]" data-icon="check_circle" data-weight="fill">check_circle</span>
</div>
<div className="pb-base">
<p className="font-title-lg text-title-lg">Intercompany Eliminations</p>
<p className="text-secondary text-body-md mt-xs">Verification of cross-entity transactions and consolidation entries.</p>
<div className="mt-sm flex items-center gap-md">
<span className="bg-[#F1F5F9] text-[#475569] px-sm py-xs rounded font-label-md text-label-md">Completed Dec 28</span>
<span className="text-secondary opacity-60 text-body-md flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]" data-icon="person">person</span>
                                        Sarah Jenkins
                                    </span>
</div>
</div>
</div>

<div className="relative flex gap-xl step-connector">
<div className="z-10 bg-success-green/10 text-[#16A34A] w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{backgroundColor: "rgba(22, 163, 74, 0.1)"}}>
<span className="material-symbols-outlined text-[16px]" data-icon="check_circle" data-weight="fill">check_circle</span>
</div>
<div className="pb-base">
<p className="font-title-lg text-title-lg">Asset Depreciation</p>
<p className="text-secondary text-body-md mt-xs">Calculation and posting of fixed asset depreciation schedules.</p>
<div className="mt-sm flex items-center gap-md">
<span className="bg-[#F1F5F9] text-[#475569] px-sm py-xs rounded font-label-md text-label-md">Completed Dec 29</span>
<span className="text-secondary opacity-60 text-body-md flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]" data-icon="auto_awesome">auto_awesome</span>
                                        Automated System
                                    </span>
</div>
</div>
</div>

<div className="relative flex gap-xl step-connector">
<div className="z-10 bg-primary-container text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[16px] animate-spin" data-icon="sync">sync</span>
</div>
<div className="pb-base">
<p className="font-title-lg text-title-lg text-primary">Tax Reconciliation</p>
<p className="text-secondary text-body-md mt-xs">Final audit of VAT/GST reports and deferred tax adjustments.</p>
<div className="mt-md p-md bg-surface-container-low rounded-lg border border-primary/20 flex items-center justify-between">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-outline-variant">
<img alt="Audit" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3ro6PbswgDUjckcAAB1Qcyb2Uh3r-FO8R-Cqur19WmdzrMOsUzkrJXryG4_wC5CN-hc-JtyfHaEMtMMVLuJXr74NaBfB5avLXyfMWEXqWbdZ64p8jxvnTJZZtAf63jk6b1ZZ678gdmcJiY2bqwiugRHPzIYfDTkG4jllsQQudSr7YsNGGW-6rYDecEX5nrgHh3dK7sMLnsqa5TIkuFmVd8CZK5_KvuN9zeHo_gQ-axG5Ja50rY1MiM5KV91Ja7UanG-ubKVSmLQI" />
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Assigned to: Marc Henderson</p>
<p className="text-xs text-secondary">In Review - 12 discrepancies pending</p>
</div>
</div>
<button className="text-primary font-label-md text-label-md hover:underline">View Logs</button>
</div>
</div>
</div>

<div className="relative flex gap-xl step-connector">
<div className="z-10 bg-outline-variant text-outline w-6 h-6 rounded-full flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[16px]" data-icon="schedule">schedule</span>
</div>
<div className="pb-base">
<p className="font-title-lg text-title-lg opacity-50">Trial Balance Verification</p>
<p className="text-secondary text-body-md mt-xs opacity-50">Final check of debit/credit equilibrium across all ledgers.</p>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 space-y-lg">

<div className="grid grid-cols-2 gap-md">
<div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl">
<p className="font-label-md text-label-md text-secondary uppercase mb-sm">Unposted JVs</p>
<div className="flex items-end justify-between">
<p className="font-display-lg text-display-lg text-on-background leading-none">14</p>
<span className="bg-error/10 text-error px-xs py-[2px] rounded text-[10px] font-bold">URGENT</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl">
<p className="font-label-md text-label-md text-secondary uppercase mb-sm">Balance Drift</p>
<div className="flex items-end justify-between">
<p className="font-display-lg text-display-lg text-on-background leading-none">0.02%</p>
<span className="bg-success-green/10 text-[#16A34A] px-xs py-[2px] rounded text-[10px] font-bold">HEALTHY</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col h-[480px]">
<div className="p-lg border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
<h3 className="font-title-lg text-title-lg">Activity Audit Log</h3>
<button className="material-symbols-outlined text-outline hover:text-primary transition-colors" data-icon="filter_list">filter_list</button>
</div>
<div className="flex-grow overflow-y-auto p-lg space-y-lg">

<div className="flex gap-md group">
<div className="shrink-0 mt-xs">
<div className="w-8 h-8 rounded-full bg-primary-fixed-dim border border-primary flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[18px]" data-icon="lock">lock</span>
</div>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<p className="font-label-md text-label-md text-on-background">November Period Locked</p>
<span className="text-[10px] text-secondary">Nov 30, 23:59</span>
</div>
<p className="text-xs text-secondary mt-xs">Final authorization by Chief Controller (ID: FC-992)</p>
<div className="mt-xs flex items-center gap-xs text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
<span className="material-symbols-outlined text-[12px]" data-icon="verified_user">verified_user</span>
                                        View Certificate
                                    </div>
</div>
</div>

<div className="flex gap-md group">
<div className="shrink-0 mt-xs">
<div className="w-8 h-8 rounded-full bg-secondary-container border border-outline-variant flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-[18px]" data-icon="lock_open">lock_open</span>
</div>
</div>
<div className="flex-grow border-b border-outline-variant pb-md">
<div className="flex justify-between items-start">
<p className="font-label-md text-label-md text-on-background">October Period Reopened</p>
<span className="text-[10px] text-secondary">Nov 12, 14:20</span>
</div>
<p className="text-xs text-secondary mt-xs">Reason: Post-close tax adjustment required by external audit.</p>
<p className="text-[10px] text-secondary italic mt-xs">Action by: Robert D'Angelo (Audit Partner)</p>
</div>
</div>

<div className="flex gap-md group">
<div className="shrink-0 mt-xs">
<div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-[18px]" data-icon="history">history</span>
</div>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<p className="font-label-md text-label-md text-on-background">Snapshot Created</p>
<span className="text-[10px] text-secondary">Dec 15, 09:00</span>
</div>
<p className="text-xs text-secondary mt-xs">Mid-period system backup and ledger synchronization.</p>
</div>
</div>

<div className="flex gap-md group opacity-60">
<div className="shrink-0 mt-xs">
<div className="w-8 h-8 rounded-full bg-primary-fixed-dim border border-primary flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[18px]" data-icon="lock">lock</span>
</div>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<p className="font-label-md text-label-md text-on-background">September Period Locked</p>
<span className="text-[10px] text-secondary">Sep 30, 23:59</span>
</div>
</div>
</div>
</div>
<div className="p-md bg-surface-container-low border-t border-outline-variant text-center">
<button className="text-primary font-label-md text-label-md hover:underline">Download Full Audit Trail (PDF)</button>
</div>
</div>

<div className="bg-primary/5 border border-primary/20 p-lg rounded-xl flex gap-md items-start">
<span className="material-symbols-outlined text-primary" data-icon="info">info</span>
<div>
<p className="font-label-md text-label-md text-primary uppercase">Governance Note</p>
<p className="text-xs text-on-surface-variant mt-xs leading-relaxed">Locking a period is an irreversible action for standard accounting roles. Only users with the <strong>Global Controller</strong> role can reopen a locked period.</p>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-xl overflow-hidden relative">
<div className="relative z-10 flex flex-col md:flex-row gap-xl items-center">
<div className="md:w-2/3">
<h3 className="font-headline-md text-headline-md text-on-background mb-md">Forecast Integration</h3>
<p className="text-body-lg text-secondary mb-lg max-w-2xl">This period's data will automatically feed into the Q1 2024 forecasting model once locked. Ensure all accruals are finalized before submission.</p>
<div className="flex gap-md">
<button className="border border-outline-variant px-lg py-md rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors">Run Pre-lock Analysis</button>
<button className="border border-outline-variant px-lg py-md rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors">Export Draft Ledger</button>
</div>
</div>
<div className="md:w-1/3 flex justify-center">
<div className="relative w-48 h-48">

<div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl"></div>
<img className="w-full h-full object-contain relative z-10" data-alt="A minimalist digital illustration of a connected network of nodes representing financial data flows. The nodes are glowing soft blue against a clean white background with subtle grey geometric lines. The aesthetic is extremely clean, corporate, and modern, reflecting high-end enterprise resource planning software." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHZeui1k_Ks8DOf6CNGkImHsq4Ozq2mZtz33n3ditpjC4gTngPeOTaX2rn7FNieFuK-tiTazX-BZ62Ojf5Gg2lPeSWUdg9qwHskNmxqfcQRlsGGOYo_xAVbGGeV2Ch9hVoemrtzZ0XpFkUUO3oDs3t7GG5r5yQx8U2xB8YNJNQhpOauH4NGCM-ltUN1OXtDfftomzqrhzxiCIepaZ8j2N35wrCZoalr8CjmO1wMLZasIGJDBjGp8doxmje2K5yjqGKiLeqJFZU2QU" />
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default PeriodClose;
