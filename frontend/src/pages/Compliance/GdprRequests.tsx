import React from 'react';


const GdprRequests: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] sticky top-0 z-50 bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-lg">
<div className="relative group">
<span className="absolute inset-y-0 left-3 flex items-center text-outline group-focus-within:text-primary">
<span className="material-symbols-outlined !text-[18px]">search</span>
</span>
<input className="bg-surface-container-low border-none rounded-lg pl-10 pr-md py-xs w-64 md:w-80 text-body-md focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/50 transition-all" placeholder="Search by Subject Email (CMD+K)" type="text"/>
</div>
</div>
<div className="flex items-center gap-md">
<div className="flex items-center gap-xs">
<button className="p-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
<span className="material-symbols-outlined !text-[20px]">notifications</span>
</button>
<button className="p-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
<span className="material-symbols-outlined !text-[20px]">help</span>
</button>
<button className="p-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant relative">
<span className="material-symbols-outlined !text-[20px]">cloud_done</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full"></span>
</button>
</div>
<div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant">
<img alt="User profile" className="w-full h-full object-cover" data-alt="A professional headshot of a corporate executive in a light-colored suit against a bright, minimalist studio background. The lighting is soft and high-key, reflecting a modern, enterprise-ready aesthetic with cool white and blue undertones. The expression is confident and clear, aligning with the product's values of precision and control." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0gEVoPm0BVStMGF6Lq-cZpwge72Gg_eku7KxIeQrUgyq2EBrQ7FeJEbhFxhNMl74nPM4vE2whQP8xszrvjbSj_PcdslZa2-9H0wgySUso3stmHfeRBhKaK30cCv7HARgjFtah8Irb2sEFSMoV2r4J8kIodshVRBuqaNyp-h7Y8ZHAIvM8ttQCaAE8YmDAd07tPjU4oBwcKjuyoC9Gcm_6xgwtU4H3p58Xa2ra16jB4LCqt8SFdouAenTl3lS_cTjclarIfF8YynY"/>
</div>
</div>
</header>
<div className="p-lg md:p-xl max-w-7xl mx-auto w-full">

<div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-lg">
<div>
<nav className="flex items-center gap-xs text-secondary font-label-md mb-xs">
<span>Audit &amp; Compliance</span>
<span className="material-symbols-outlined !text-[12px]">chevron_right</span>
<span className="text-primary">GDPR Data Subject Requests</span>
</nav>
<h2 className="font-headline-lg text-headline-lg text-[#141b2b]">Data Subject Requests</h2>
<p className="text-secondary max-w-2xl mt-base">Manage and track Export and Deletion requests from data subjects. Ensure compliance with regulatory timelines and maintain an immutable audit trail.</p>
</div>
<div className="flex gap-sm">
<button className="flex items-center gap-sm px-lg py-md bg-white border border-outline-variant rounded-lg text-on-surface hover:bg-surface-container-low transition-all">
<span className="material-symbols-outlined !text-[20px]">download</span>
<span className="font-label-md">Export Audit Log</span>
</button>
<button className="flex items-center gap-sm px-lg py-md bg-primary text-white rounded-lg hover:bg-[#0B7DFF] transition-all shadow-sm">
<span className="material-symbols-outlined !text-[20px]">add</span>
<span className="font-label-md">New Manual Request</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-lg mb-xl">
<div className="glass-card p-lg rounded-xl flex flex-col gap-sm">
<div className="flex items-center justify-between">
<span className="text-secondary font-label-md">Active Pending</span>
<span className="material-symbols-outlined text-secondary opacity-50">pending</span>
</div>
<div className="flex items-baseline gap-sm">
<span className="text-3xl font-bold text-[#141b2b]">12</span>
<span className="text-error font-label-md flex items-center text-[10px]">
<span className="material-symbols-outlined !text-[14px]">priority_high</span>
                                2 Urgent
                            </span>
</div>
</div>
<div className="glass-card p-lg rounded-xl flex flex-col gap-sm">
<div className="flex items-center justify-between">
<span className="text-secondary font-label-md">Processing</span>
<span className="material-symbols-outlined text-primary">sync</span>
</div>
<div className="flex items-baseline gap-sm">
<span className="text-3xl font-bold text-[#141b2b]">24</span>
<span className="text-secondary font-label-md text-[10px]">Avg 4.2h</span>
</div>
</div>
<div className="glass-card p-lg rounded-xl flex flex-col gap-sm">
<div className="flex items-center justify-between">
<span className="text-secondary font-label-md">Success Rate</span>
<span className="material-symbols-outlined text-green-600">check_circle</span>
</div>
<div className="flex items-baseline gap-sm">
<span className="text-3xl font-bold text-[#141b2b]">99.2%</span>
<span className="text-green-600 font-label-md text-[10px]">↑ 0.4%</span>
</div>
</div>
<div className="glass-card p-lg rounded-xl border-primary/20 bg-primary/5 flex flex-col gap-sm">
<div className="flex items-center justify-between">
<span className="text-primary font-label-md">Compliance Clock</span>
<span className="material-symbols-outlined text-primary">schedule</span>
</div>
<div className="flex items-baseline gap-sm">
<span className="text-3xl font-bold text-primary">22d</span>
<span className="text-primary font-label-md text-[10px]">Next Deadline</span>
</div>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden">
<div className="p-lg border-b border-outline-variant flex items-center justify-between bg-white/50">
<div className="flex gap-md">
<button className="px-md py-sm bg-primary/10 text-primary rounded font-label-md border border-primary/20">All Requests</button>
<button className="px-md py-sm text-secondary hover:bg-surface-container-high rounded font-label-md">Export Only</button>
<button className="px-md py-sm text-secondary hover:bg-surface-container-high rounded font-label-md">Delete Only</button>
</div>
<div className="flex items-center gap-sm">
<span className="text-secondary font-label-md">Filter:</span>
<select className="text-body-md border-outline-variant rounded-lg bg-surface py-xs pl-md pr-xl focus:ring-primary/20">
<option>Last 30 Days</option>
<option>Last 90 Days</option>
<option>This Year</option>
</select>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-[#F7FAFF] border-b border-outline-variant sticky top-0">
<tr>
<th className="px-lg py-md font-label-md text-secondary uppercase tracking-wider w-12">
<input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
</th>
<th className="px-lg py-md font-label-md text-secondary uppercase tracking-wider">Subject Email</th>
<th className="px-lg py-md font-label-md text-secondary uppercase tracking-wider">Type</th>
<th className="px-lg py-md font-label-md text-secondary uppercase tracking-wider">Request Date</th>
<th className="px-lg py-md font-label-md text-secondary uppercase tracking-wider">Status</th>
<th className="px-lg py-md font-label-md text-secondary uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant bg-white">

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md"><input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/></td>
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="text-[#141b2b] font-medium">marcus.v@enterprisecorp.com</span>
<span className="text-[10px] text-secondary font-mono">UUID: 8821-XA-99</span>
</div>
</td>
<td className="px-lg py-md">
<span className="flex items-center gap-xs font-label-md text-[#475569]">
<span className="material-symbols-outlined !text-[16px]">download</span>
                                            Export
                                        </span>
</td>
<td className="px-lg py-md text-secondary font-label-md">Oct 24, 2023 14:22</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-xs rounded-full text-[11px] font-bold bg-green-100 text-[#16A34A]">
<span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full mr-2"></span>
                                            COMPLETED
                                        </span>
</td>
<td className="px-lg py-md text-right">
<button className="p-2 hover:bg-surface-container-high rounded-full text-secondary transition-all">
<span className="material-symbols-outlined !text-[20px]">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md"><input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/></td>
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="text-[#141b2b] font-medium">sarah.j_92@global.net</span>
<span className="text-[10px] text-secondary font-mono">UUID: 1045-BK-12</span>
</div>
</td>
<td className="px-lg py-md">
<span className="flex items-center gap-xs font-label-md text-[#475569]">
<span className="material-symbols-outlined !text-[16px]">delete_forever</span>
                                            Delete
                                        </span>
</td>
<td className="px-lg py-md text-secondary font-label-md">Oct 25, 2023 09:15</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-xs rounded-full text-[11px] font-bold bg-blue-50 text-primary">
<span className="material-symbols-outlined animate-spin !text-[12px] mr-2">sync</span>
                                            IN PROGRESS
                                        </span>
</td>
<td className="px-lg py-md text-right">
<button className="p-2 hover:bg-surface-container-high rounded-full text-secondary transition-all">
<span className="material-symbols-outlined !text-[20px]">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md"><input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/></td>
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="text-[#141b2b] font-medium">dev.null@proton.me</span>
<span className="text-[10px] text-secondary font-mono">UUID: 9901-TR-00</span>
</div>
</td>
<td className="px-lg py-md">
<span className="flex items-center gap-xs font-label-md text-[#475569]">
<span className="material-symbols-outlined !text-[16px]">download</span>
                                            Export
                                        </span>
</td>
<td className="px-lg py-md text-secondary font-label-md">Oct 25, 2023 11:40</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-xs rounded-full text-[11px] font-bold bg-red-50 text-[#DC2626]">
<span className="material-symbols-outlined !text-[12px] mr-2">error</span>
                                            FAILED
                                        </span>
</td>
<td className="px-lg py-md text-right">
<button className="px-md py-sm bg-red-50 text-[#DC2626] rounded border border-red-100 font-label-md text-[10px] hover:bg-red-100 transition-colors mr-2">RETRY</button>
<button className="p-2 hover:bg-surface-container-high rounded-full text-secondary transition-all">
<span className="material-symbols-outlined !text-[20px]">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md"><input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/></td>
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="text-[#141b2b] font-medium">albert.whittaker@outlook.com</span>
<span className="text-[10px] text-secondary font-mono">UUID: 4412-ZZ-88</span>
</div>
</td>
<td className="px-lg py-md">
<span className="flex items-center gap-xs font-label-md text-[#475569]">
<span className="material-symbols-outlined !text-[16px]">delete_forever</span>
                                            Delete
                                        </span>
</td>
<td className="px-lg py-md text-secondary font-label-md">Oct 26, 2023 08:02</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-xs rounded-full text-[11px] font-bold bg-[#F1F5F9] text-[#475569]">
<span className="w-1.5 h-1.5 bg-[#475569] rounded-full mr-2"></span>
                                            PENDING
                                        </span>
</td>
<td className="px-lg py-md text-right">
<button className="p-2 hover:bg-surface-container-high rounded-full text-secondary transition-all">
<span className="material-symbols-outlined !text-[20px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-lg bg-[#F7FAFF] border-t border-outline-variant flex items-center justify-between">
<span className="text-secondary font-label-md">Showing 4 of 248 requests</span>
<div className="flex items-center gap-md">
<div className="flex items-center gap-xs">
<span className="text-secondary font-label-md">Rows per page:</span>
<select className="bg-transparent border-none text-body-md font-medium focus:ring-0 cursor-pointer">
<option>10</option>
<option>25</option>
<option>50</option>
</select>
</div>
<div className="flex items-center gap-xs">
<button className="p-2 rounded hover:bg-surface-container-high text-secondary disabled:opacity-30" disabled={true}>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<span className="text-body-md font-medium text-[#141b2b]">1 of 25</span>
<button className="p-2 rounded hover:bg-surface-container-high text-secondary">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>

<div className="mt-xl grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-lg flex gap-lg items-start">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary">info</span>
</div>
<div>
<h4 className="font-title-lg text-[#141b2b] mb-xs">Regulatory Awareness</h4>
<p className="text-secondary text-body-md">GDPR Article 15 requires fulfillment of data requests within 30 days. High-risk requests are flagged automatically by AMDOX Intelligence.</p>
</div>
</div>
<div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-lg flex gap-lg items-start">
<div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-amber-600">verified_user</span>
</div>
<div>
<h4 className="font-title-lg text-[#141b2b] mb-xs">Identity Verification</h4>
<p className="text-secondary text-body-md">All current requests have passed Level 2 identity verification via the AMDOX Identity Bridge. Manual verification is required for flagged subjects.</p>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default GdprRequests;
