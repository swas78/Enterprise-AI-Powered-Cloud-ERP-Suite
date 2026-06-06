import React from 'react';


const LeaveManagement: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 bg-surface border-b border-outline-variant">
<div className="flex items-center gap-xl">
<span className="font-headline-md text-headline-md font-bold text-primary">AMDOX</span>
<div className="relative group">
<span className="absolute left-sm top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-[20px]">search</span>
<input className="bg-surface-container-low border-none rounded-full h-8 pl-10 pr-lg text-body-md w-64 focus:ring-1 focus:ring-primary" placeholder="Search resources..." type="text" />
</div>
</div>
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-1 rounded transition-colors">notifications</span>
<span className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-1 rounded transition-colors">help</span>
<span className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-1 rounded transition-colors">cloud_done</span>
<div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a female executive with a confident expression, set against a blurred modern office background. The lighting is soft and natural, emphasizing a clean, corporate aesthetic with high-key whites and subtle blue undertones to match the tech-centric environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHyxbIJUMi5wUUo7aUNEXa8FSWT15dnVkhv0hUul2BrN88MDYwErIllhTC_2yGyKCq4x8cl1J7zaLkT2tEFi_aV4y8QDvm5lLRAn97WA6kYe_08szpvFSSVSc-5v9_wRTcFRQBxNpnbG380XRR-R-tt7atrpFO57pf2uVHYy4rODBr-2TN9f_-sLJ-OOOkTwxUh-lZMJe-w2PQ6g41oIdGh5MmrmMoImTub53DiCsGQoM80NHNIr8BGZch-pHoJQ5hqbzV9StNsCc" />
</div>
</div>
</header>

<div className="p-lg lg:p-xl space-y-xl max-w-7xl mx-auto w-full">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Leave Management</h1>
<p className="font-body-md text-outline">Manage your time off requests and team availability.</p>
</div>
<button className="flex items-center gap-sm bg-primary text-white px-lg py-md rounded-xl font-label-md hover:bg-on-primary-fixed-variant transition-all shadow-sm active:scale-95" >
<span className="material-symbols-outlined">add</span>
                        Apply for Leave
                    </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-lg">

<div className="glass-card p-lg rounded-xl flex flex-col justify-between min-h-[160px] bento-hover">
<div className="flex justify-between items-start">
<div>
<p className="font-label-md text-outline">Annual Leave</p>
<h3 className="font-display-lg text-display-lg text-primary">18</h3>
</div>
<span className="material-symbols-outlined text-primary-container bg-primary-fixed p-sm rounded-full">calendar_month</span>
</div>
<div className="mt-md">
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-3/4"></div>
</div>
<p className="font-code-sm text-outline mt-xs">6 days pending approval</p>
</div>
</div>

<div className="glass-card p-lg rounded-xl flex flex-col justify-between min-h-[160px] bento-hover">
<div className="flex justify-between items-start">
<div>
<p className="font-label-md text-outline">Sick Leave</p>
<h3 className="font-display-lg text-display-lg text-on-surface">12</h3>
</div>
<span className="material-symbols-outlined text-secondary bg-secondary-container p-sm rounded-full">medical_services</span>
</div>
<div className="mt-md">
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-1/4"></div>
</div>
<p className="font-code-sm text-outline mt-xs">Full balance available</p>
</div>
</div>

<div className="glass-card p-lg rounded-xl flex flex-col justify-between min-h-[160px] bento-hover">
<div className="flex justify-between items-start">
<div>
<p className="font-label-md text-outline">Personal Leave</p>
<h3 className="font-display-lg text-display-lg text-on-surface">04</h3>
</div>
<span className="material-symbols-outlined text-tertiary-container bg-tertiary-fixed p-sm rounded-full">person</span>
</div>
<div className="mt-md">
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full w-1/2"></div>
</div>
<p className="font-code-sm text-outline mt-xs">Next accrual: Oct 1st</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">

<div className="lg:col-span-2 space-y-md">
<div className="flex items-center justify-between">
<h2 className="font-title-lg text-title-lg text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">rule</span>
                                Pending Approvals
                            </h2>
<button className="text-primary font-label-md hover:underline">View All</button>
</div>
<div className="glass-card rounded-xl overflow-hidden border-none">
<div className="overflow-x-auto scrollbar-hide">
<table className="w-full text-left">
<thead className="bg-surface-container-lowest border-b border-outline-variant sticky top-0">
<tr>
<th className="px-lg py-md font-label-md text-outline">Employee</th>
<th className="px-lg py-md font-label-md text-outline">Type</th>
<th className="px-lg py-md font-label-md text-outline">Dates</th>
<th className="px-lg py-md font-label-md text-outline">Status</th>
<th className="px-lg py-md font-label-md text-outline text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant bg-white">
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-primary-fixed-dim overflow-hidden flex-shrink-0">
<img alt="Employee" className="w-full h-full object-cover" data-alt="A close-up professional portrait of a male software engineer with a focused expression. He is wearing a minimalist navy blue sweater, and the background is a modern, light-filled workspace with sharp architectural lines. The color palette is cool and high-contrast, fitting a modern tech company dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANFfo9DrN9xhmBY-b3PlG3hCiykjM7vq1VTfJORwH5NvP1knTNoMbWr-_JfUakErQmeED-Z8kALFbxHbNp0qA8ePf80E5ckGVtNsjs9s4VLQJENkc1ax2xO2gkvHosiDuZcCI3uGy-zUT8CTgAAYGAHEkdSqHsiQ_6yVDujvWkRUnMl0lBrJbdrdbnShuYXTpMXlV1GDGurIKIL13JksudPUwLO8X3XJVxL4r-V5cWGZw2T3a_VSFen5FTLIGjf7GGi6qB3X0l-ag" />
</div>
<div>
<p className="font-label-md text-on-surface">Mark J. Thompson</p>
<p className="font-code-sm text-outline">Engineering</p>
</div>
</div>
</td>
<td className="px-lg py-md text-body-md">Annual Leave</td>
<td className="px-lg py-md text-body-md">Oct 12 - Oct 15</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-xs rounded-full bg-amber-100 text-amber-700 font-label-md text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-xs"></span>
                                                    PENDING
                                                </span>
</td>
<td className="px-lg py-md text-right space-x-sm">
<button className="material-symbols-outlined text-primary bg-primary-fixed/30 hover:bg-primary-fixed p-1.5 rounded transition-all">check</button>
<button className="material-symbols-outlined text-error bg-error-container/20 hover:bg-error-container p-1.5 rounded transition-all">close</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed-dim overflow-hidden flex-shrink-0">
<img alt="Employee" className="w-full h-full object-cover" data-alt="A portrait of a female creative lead with a warm but professional expression. She is in a bright, modern studio environment with a shallow depth of field. The lighting is crisp and airy, dominated by neutral whites and subtle cool tones to reinforce a sense of precision and clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT7A6BL0c4MxWkfkuMoMVRNK9aRrvu8p-Q46DdajqDnWxQ2IrWCjzjhcqYMs1HICW-CpDaLLepRTFghYZnPe6KDuGRbjjeTAK6vzMxqPW0Px9uF2CkJ3RAqARZuOHb_FC06PLdC41Xxe-7UCLluXxFat9uCWpbnQojHdR9wtCe8mFfH1df3ypqZNTMx1Mehp-20KLNM6O5gIN8NiIsawiETnViuwAiLKg2FMPASCD0a1fFAyKnFJTxouFuOwwFIrkUGb-fGkdQi4E" />
</div>
<div>
<p className="font-label-md text-on-surface">Sarah Lin</p>
<p className="font-code-sm text-outline">Product Design</p>
</div>
</div>
</td>
<td className="px-lg py-md text-body-md">Personal Day</td>
<td className="px-lg py-md text-body-md">Sep 28 - Sep 28</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-xs rounded-full bg-amber-100 text-amber-700 font-label-md text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-xs"></span>
                                                    PENDING
                                                </span>
</td>
<td className="px-lg py-md text-right space-x-sm">
<button className="material-symbols-outlined text-primary bg-primary-fixed/30 hover:bg-primary-fixed p-1.5 rounded transition-all">check</button>
<button className="material-symbols-outlined text-error bg-error-container/20 hover:bg-error-container p-1.5 rounded transition-all">close</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-secondary-fixed-dim overflow-hidden flex-shrink-0">
<img alt="Employee" className="w-full h-full object-cover" data-alt="A professional headshot of a male operations manager in a sleek, minimalist tech office setting. He is wearing a light gray dress shirt, and the background features clean geometric lines and soft white daylight. The overall tone is corporate, modern, and light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPK7q7r8UJfH33zcXtg44D75T1L9NsqBgCTqTzBTjIC7WEMJbWFuq3DMtpPScjcE8ffYb869WkwzO2SJMVWUqOLxsZHA2oMR2lj3TjSwrwIRQmYmC7eYHuw54zHap6XUF1SOcLcQZidyHVQ3OS0Vb-gQ2heovQph6aJgbxXa5z4DB9SG0YonJ3yn_PHBOiQAcF7iRAgNHDsNCemM31Im9a9halARZ3-UXRAGKbJS8SxC2UT1dZMcDUqTeVIT0fOPkhgjol3JS5z0E" />
</div>
<div>
<p className="font-label-md text-on-surface">David Chen</p>
<p className="font-code-sm text-outline">Supply Chain</p>
</div>
</div>
</td>
<td className="px-lg py-md text-body-md">Sick Leave</td>
<td className="px-lg py-md text-body-md">Sep 25 - Sep 26</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-sm py-xs rounded-full bg-emerald-100 text-emerald-700 font-label-md text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-xs"></span>
                                                    APPROVED
                                                </span>
</td>
<td className="px-lg py-md text-right">
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="space-y-md">
<div className="flex items-center justify-between">
<h2 className="font-title-lg text-title-lg text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">event_note</span>
                                Team Activity
                            </h2>
</div>
<div className="glass-card rounded-xl p-md">
<div className="flex items-center justify-between mb-md">
<h3 className="font-label-md">September 2023</h3>
<div className="flex gap-xs">
<button className="material-symbols-outlined text-[18px] p-1 border rounded hover:bg-surface-container transition-colors">chevron_left</button>
<button className="material-symbols-outlined text-[18px] p-1 border rounded hover:bg-surface-container transition-colors">chevron_right</button>
</div>
</div>

<div className="grid grid-cols-7 gap-xs text-center mb-md">
<div className="text-[10px] font-label-md text-outline">M</div>
<div className="text-[10px] font-label-md text-outline">T</div>
<div className="text-[10px] font-label-md text-outline">W</div>
<div className="text-[10px] font-label-md text-outline">T</div>
<div className="text-[10px] font-label-md text-outline">F</div>
<div className="text-[10px] font-label-md text-outline">S</div>
<div className="text-[10px] font-label-md text-outline">S</div>

<div className="p-xs text-code-sm text-outline">28</div>
<div className="p-xs text-code-sm text-outline">29</div>
<div className="p-xs text-code-sm text-outline">30</div>
<div className="p-xs text-code-sm text-outline">31</div>
<div className="p-xs text-code-sm hover:bg-surface-container-high rounded cursor-pointer relative">
                                    1 <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
</div>
<div className="p-xs text-code-sm hover:bg-surface-container-high rounded cursor-pointer">2</div>
<div className="p-xs text-code-sm hover:bg-surface-container-high rounded cursor-pointer">3</div>
<div className="p-xs text-code-sm bg-primary text-white rounded cursor-pointer">4</div>
<div className="p-xs text-code-sm hover:bg-surface-container-high rounded cursor-pointer">5</div>
<div className="p-xs text-code-sm hover:bg-surface-container-high rounded cursor-pointer relative">
                                    6 <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full"></div>
</div>
<div className="p-xs text-code-sm hover:bg-surface-container-high rounded cursor-pointer">7</div>
<div className="p-xs text-code-sm hover:bg-surface-container-high rounded cursor-pointer">8</div>
<div className="p-xs text-code-sm hover:bg-surface-container-high rounded cursor-pointer">9</div>
<div className="p-xs text-code-sm hover:bg-surface-container-high rounded cursor-pointer">10</div>
</div>
<div className="space-y-sm">
<p className="font-label-md text-outline border-b border-outline-variant pb-xs">Out Today</p>
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-primary ring-2 ring-white"></div>
<div className="flex-1">
<p className="font-code-sm text-on-surface">James Wilson</p>
<p className="font-[8px] text-outline text-[10px]">Medical • Returning tomorrow</p>
</div>
</div>
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-secondary ring-2 ring-white"></div>
<div className="flex-1">
<p className="font-code-sm text-on-surface">Aria Vane</p>
<p className="font-[8px] text-outline text-[10px]">Holiday • Returning Oct 02</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default LeaveManagement;
