import React from 'react';


const EmployeeProfile: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] sticky top-0 bg-surface z-50 border-b border-outline-variant">
<div className="flex items-center gap-md">
<button className="md:hidden p-xs">
<span className="material-symbols-outlined">menu</span>
</button>
<div className="flex items-center gap-2 bg-surface-container-low px-md py-1 rounded-full border border-outline-variant">
<span className="material-symbols-outlined text-outline" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md w-64 placeholder:text-on-surface-variant" placeholder="Search employee, records (CMD+K)" type="text"/>
</div>
</div>
<div className="flex items-center gap-lg">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="help">help</span>
<span className="material-symbols-outlined text-primary cursor-pointer" data-icon="cloud_done">cloud_done</span>
<img alt="User profile" className="w-8 h-8 rounded-full border border-outline" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJU2JKf0Qlp-ABqcNvZY_AGfXjrjjMB3lflQsMVYgx1pBgHIQyGhY9CKWHqP-pXGOibIcDe3uy1r36KFn3e6IfUClkiuJWtCUL9zoDiLXCsk083DIR_gIrLYP3nqYfKvNtww3ba847YNL5UVo4LoKMi-u1_5nE9hbTYCmlLeB-vxwlKuKcRfj6K5NDduB0uQPPLr7KHdwIlrSYNnDPE01wItRJBvX34dkmCEfuh4sSKnXJuPF30evFDDQbHiFhfA9sG6LhPM_dnlw"/>
</div>
</header>

<div className="px-xl py-lg bg-white border-b border-outline-variant">
<div className="flex items-center gap-2 text-on-surface-variant mb-2">
<span className="font-label-md">HR Management</span>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span className="font-label-md">Employee Directory</span>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span className="font-label-md text-primary">Marcus Holloway</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Employee Profile</h1>
</div>
<div className="flex-1 p-xl">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-xl">

<div className="w-full lg:w-[320px] shrink-0 space-y-lg">
<div className="bg-white border border-outline-variant p-xl flex flex-col items-center text-center">
<div className="relative mb-lg">
<img className="w-32 h-32 rounded-full object-cover border-4 border-primary-fixed" data-alt="A professional studio portrait of a male executive in his mid-30s. He has a warm, confident expression and is wearing a crisp white dress shirt and a navy blue blazer. The background is a clean, minimalist studio gray that complements the light-mode UI. High-key lighting creates soft highlights and clear definition, embodying the professional and high-stakes corporate DNA of AMDOX." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdcGZUD8gJIe88a1OUj7623UgB52W87XF66eYU1C2y1_zVW9EJ1M3eqarG0Hj8ygaRSLKOj3rivUV36bDmdmVlbpjo0q6Cmg9vh28FYIxUtmoq66FD5upORCpT0tsI0Iov88hPzwUgDwgRZqyNPQLTWGdj65KNBrgDahzCDSpULXJCG5OKSEV1Qs2FM2YE1M-EfCO59Ggta7tr-0FdGPimIskkgb3UqVnstbS9gQf4V8S8gQOgAF4BsgdmFltj4raLhRp2Sgzuszc"/>
<span className="absolute bottom-1 right-1 bg-[#16A34A] border-4 border-white w-6 h-6 rounded-full" title="Active"></span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface mb-xs">Marcus Holloway</h2>
<p className="font-body-md text-on-surface-variant mb-md">Senior Solutions Architect</p>
<div className="flex flex-wrap justify-center gap-2 mb-xl">
<span className="px-3 py-1 bg-green-50 text-[#16A34A] text-[10px] font-bold uppercase tracking-wider rounded border border-[#16A34A]/20">Active</span>
<span className="px-3 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase tracking-wider rounded border border-outline-variant">Full-time</span>
</div>
<div className="w-full space-y-2">
<button className="w-full py-2 bg-primary text-white font-label-md rounded-lg hover:bg-[#0B7DFF] transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">edit</span>
                                    Edit Profile
                                </button>
<button className="w-full py-2 bg-white border border-primary text-primary font-label-md rounded-lg hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">download</span>
                                    Download Payslip
                                </button>
</div>
</div>
<div className="bg-white border border-outline-variant p-lg space-y-md">
<h3 className="font-label-md text-secondary uppercase tracking-widest border-b border-outline-variant pb-2">Quick Stats</h3>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant font-body-md">Tenure</span>
<span className="text-on-surface font-semibold">4.2 Years</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant font-body-md">Remaining PTO</span>
<span className="text-on-surface font-semibold text-primary">12 Days</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant font-body-md">Utilization</span>
<span className="text-on-surface font-semibold">94%</span>
</div>
</div>
</div>

<div className="flex-1 flex flex-col space-y-lg">

<div className="flex gap-xl border-b border-outline-variant overflow-x-auto no-scrollbar">
<button className="pb-md px-2 font-label-md border-b-2 border-primary text-primary transition-all" id="tab-personal" >Personal Information</button>
<button className="pb-md px-2 font-label-md border-b-2 border-transparent text-on-surface-variant hover:text-primary transition-all" id="tab-job" >Job Details</button>
<button className="pb-md px-2 font-label-md border-b-2 border-transparent text-on-surface-variant hover:text-primary transition-all" id="tab-documents" >Documents</button>
<button className="pb-md px-2 font-label-md border-b-2 border-transparent text-on-surface-variant hover:text-primary transition-all" id="tab-payroll" >Payroll Settings</button>
</div>

<div className="tab-content block space-y-lg animate-in fade-in slide-in-from-bottom-2 duration-300" id="content-personal">

<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">

<div className="bg-white border border-outline-variant p-lg">
<div className="flex items-center gap-md mb-lg">
<div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-primary">person</span>
</div>
<h4 className="font-title-lg text-on-surface">Bio &amp; Contact</h4>
</div>
<dl className="space-y-md">
<div>
<dt className="text-on-surface-variant font-label-md text-[11px] uppercase tracking-wider">Email Address</dt>
<dd className="text-on-surface font-body-md">marcus.h@amdox.corp</dd>
</div>
<div>
<dt className="text-on-surface-variant font-label-md text-[11px] uppercase tracking-wider">Phone</dt>
<dd className="text-on-surface font-body-md">+1 (555) 942-0129</dd>
</div>
<div>
<dt className="text-on-surface-variant font-label-md text-[11px] uppercase tracking-wider">Emergency Contact</dt>
<dd className="text-on-surface font-body-md">Sarah Holloway (Spouse) - +1 (555) 942-0130</dd>
</div>
</dl>
</div>

<div className="bg-white border border-outline-variant p-lg">
<div className="flex items-center gap-md mb-lg">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">gavel</span>
</div>
<h4 className="font-title-lg text-on-surface">Identification</h4>
</div>
<dl className="space-y-md">
<div>
<dt className="text-on-surface-variant font-label-md text-[11px] uppercase tracking-wider">Employee ID</dt>
<dd className="text-on-surface font-body-md font-mono">AX-99201-MH</dd>
</div>
<div>
<dt className="text-on-surface-variant font-label-md text-[11px] uppercase tracking-wider">Tax Residency</dt>
<dd className="text-on-surface font-body-md">United States (California)</dd>
</div>
<div>
<dt className="text-on-surface-variant font-label-md text-[11px] uppercase tracking-wider">Visa Status</dt>
<dd className="text-on-surface font-body-md">U.S. Citizen</dd>
</div>
</dl>
</div>

<div className="bg-white border border-outline-variant p-lg md:col-span-2">
<div className="flex items-center gap-md mb-lg">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">home</span>
</div>
<h4 className="font-title-lg text-on-surface">Home Address</h4>
</div>
<div className="flex flex-col md:flex-row gap-lg items-start">
<p className="text-on-surface font-body-md leading-relaxed flex-1">
                                            2140 Mission St, Apt 4C<br/>
                                            San Francisco, CA 94110<br/>
                                            United States
                                        </p>
<div className="w-full md:w-64 h-32 bg-surface-container border border-outline-variant rounded-lg relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center opacity-50 grayscale">
<span className="material-symbols-outlined text-4xl">map</span>
</div>

<div className="absolute inset-0 bg-blue-100/20"></div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden space-y-lg animate-in fade-in duration-300" id="content-job">
<div className="bg-white border border-outline-variant">
<div className="p-lg border-b border-outline-variant bg-surface-container-lowest">
<h4 className="font-title-lg text-on-surface">Employment Information</h4>
</div>
<div className="p-xl grid grid-cols-1 md:grid-cols-3 gap-xl">
<div>
<dt className="text-on-surface-variant font-label-md uppercase tracking-wider mb-1">Current Role</dt>
<dd className="text-on-surface font-title-lg text-primary">Senior Solutions Architect</dd>
<p className="text-on-surface-variant text-body-md">L7 Individual Contributor</p>
</div>
<div>
<dt className="text-on-surface-variant font-label-md uppercase tracking-wider mb-1">Reporting Manager</dt>
<dd className="flex items-center gap-2">
<img className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkrjw28MmZnpRojbsOJDIqgXVaEsliJLYwodD_XTaGxEDqPxfRpFt6THTHYFjI1BVMLvH4qm9w5kKoU5xwNjkkWzl03sHvmy3aNVurJuCAHbC5vbPBAUv3nN5SVBDY2zbMczGxNprUTWPTSaQvkx1R7kA0cLvcRXItQdsosIaImA0OLyg91AZZlcLe4P6tPrcHyIRHuTAlE3M-9pRlRkyhNMFvD8fOAHgqhoU5IdeFt17_dK03Hd405m7Phh-meU3wzpWVSDGHKho"/>
<span className="text-on-surface font-body-lg font-semibold">Elena Solovyova</span>
</dd>
<p className="text-on-surface-variant text-body-md pl-10">Director of Engineering</p>
</div>
<div>
<dt className="text-on-surface-variant font-label-md uppercase tracking-wider mb-1">Department</dt>
<dd className="text-on-surface font-body-lg">Product &amp; Cloud Infrastructure</dd>
<p className="text-on-surface-variant text-body-md">Cloud Strategy [C-STRAT]</p>
</div>
</div>
<div className="px-xl py-lg bg-surface-container-low border-t border-outline-variant flex justify-between">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-secondary">calendar_month</span>
<span className="text-on-surface-variant text-body-md">Hire Date: <span className="text-on-surface font-semibold">Jan 12, 2020</span></span>
</div>
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-secondary">location_on</span>
<span className="text-on-surface-variant text-body-md">Work Location: <span className="text-on-surface font-semibold">San Francisco HQ</span></span>
</div>
</div>
</div>
</div>

<div className="tab-content hidden space-y-md animate-in fade-in duration-300" id="content-documents">
<div className="bg-white border border-outline-variant rounded">
<table className="w-full text-left">
<thead className="bg-surface-container-lowest border-b border-outline-variant">
<tr>
<th className="px-lg py-md font-label-md text-secondary uppercase tracking-widest">Document Name</th>
<th className="px-lg py-md font-label-md text-secondary uppercase tracking-widest">Type</th>
<th className="px-lg py-md font-label-md text-secondary uppercase tracking-widest text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md flex items-center gap-md">
<span className="material-symbols-outlined text-red-500">picture_as_pdf</span>
<span className="font-body-md text-on-surface">Employment_Contract_2020.pdf</span>
</td>
<td className="px-lg py-md text-on-surface-variant font-body-md">Legal</td>
<td className="px-lg py-md text-right">
<button className="text-primary hover:underline font-label-md">Download</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md flex items-center gap-md">
<span className="material-symbols-outlined text-primary">description</span>
<span className="font-body-md text-on-surface">Q3_Performance_Review.docx</span>
</td>
<td className="px-lg py-md text-on-surface-variant font-body-md">Reviews</td>
<td className="px-lg py-md text-right">
<button className="text-primary hover:underline font-label-md">Download</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="tab-content hidden space-y-lg animate-in fade-in duration-300" id="content-payroll">
<div className="bg-white border border-outline-variant p-xl">
<h4 className="font-title-lg text-on-surface mb-lg">Payment Method</h4>
<div className="flex items-center justify-between p-lg bg-surface-container-low border border-outline-variant rounded-lg">
<div className="flex items-center gap-xl">
<div className="w-14 h-10 bg-on-surface flex items-center justify-center rounded text-white text-[10px] font-bold">VISA</div>
<div>
<p className="text-on-surface font-semibold">Direct Deposit •••• 4281</p>
<p className="text-on-surface-variant text-body-md">CHASE BANK - Primary Salary Account</p>
</div>
</div>
<button className="px-md py-1 border border-primary text-primary font-label-md rounded hover:bg-white">Update</button>
</div>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default EmployeeProfile;
