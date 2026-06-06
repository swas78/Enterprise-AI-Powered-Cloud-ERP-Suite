import React from 'react';


const AuditTrail: React.FC = () => {


  return (
    <div className="w-full">
      

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
<div>
<h2 className="font-headline-lg text-on-surface">Payroll Audit Trail</h2>
<p className="font-body-md text-on-surface-variant">Secure, immutable ledger of all financial adjustments and salary modifications.</p>
</div>
<div className="flex gap-sm">
<button className="bg-surface border border-outline px-md py-sm rounded-lg font-label-md flex items-center gap-sm hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
                            Export CSV
                        </button>
<button className="bg-primary text-on-primary px-md py-sm rounded-lg font-label-md flex items-center gap-sm hover:bg-opacity-90 transition-colors">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
                            Verify Integrity
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-md">
<div className="md:col-span-1 bg-surface-container-lowest border border-outline-variant p-md rounded-xl">
<label className="font-label-md text-secondary block mb-xs">Date Range</label>
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-on-surface-variant">calendar_today</span>
<span className="font-body-md">Oct 01 - Oct 31, 2023</span>
<span className="material-symbols-outlined text-secondary ml-auto cursor-pointer">expand_more</span>
</div>
</div>
<div className="md:col-span-1 bg-surface-container-lowest border border-outline-variant p-md rounded-xl">
<label className="font-label-md text-secondary block mb-xs">Initiated By</label>
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-on-surface-variant">person</span>
<span className="font-body-md">All Users</span>
<span className="material-symbols-outlined text-secondary ml-auto cursor-pointer">expand_more</span>
</div>
</div>
<div className="md:col-span-1 bg-surface-container-lowest border border-outline-variant p-md rounded-xl">
<label className="font-label-md text-secondary block mb-xs">Module</label>
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-on-surface-variant">category</span>
<span className="font-body-md">Core Payroll</span>
<span className="material-symbols-outlined text-secondary ml-auto cursor-pointer">expand_more</span>
</div>
</div>
<div className="md:col-span-1 bg-surface-container-lowest border border-outline-variant p-md rounded-xl">
<label className="font-label-md text-secondary block mb-xs">Action Type</label>
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-on-surface-variant">filter_list</span>
<span className="font-body-md">Salary Adjustments</span>
<span className="material-symbols-outlined text-secondary ml-auto cursor-pointer">expand_more</span>
</div>
</div>
</div>

<div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col overflow-hidden shadow-sm">
<div className="audit-scroll overflow-auto flex-1">
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead className="sticky top-0 bg-surface-bright z-10">
<tr>
<th className="px-lg py-md font-label-md text-secondary border-b border-outline-variant">Timestamp</th>
<th className="px-lg py-md font-label-md text-secondary border-b border-outline-variant">User</th>
<th className="px-lg py-md font-label-md text-secondary border-b border-outline-variant">Action</th>
<th className="px-lg py-md font-label-md text-secondary border-b border-outline-variant">Module</th>
<th className="px-lg py-md font-label-md text-secondary border-b border-outline-variant">Impacted Employee</th>
<th className="px-lg py-md font-label-md text-secondary border-b border-outline-variant text-right">Details</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="font-body-md text-on-surface">Oct 24, 2023</span>
<span className="font-code-sm text-secondary">14:22:15 UTC</span>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[16px] text-secondary">person</span>
</div>
<span className="font-body-md">sarah.j@corp.com</span>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="font-body-md font-medium text-on-surface">Base Salary Adjusted</span>
</div>
</td>
<td className="px-lg py-md">
<span className="bg-surface-container px-sm py-xs rounded font-label-md text-secondary">Compensation</span>
</td>
<td className="px-lg py-md font-body-md">Marcus Holloway</td>
<td className="px-lg py-md text-right">
<button className="text-primary hover:underline font-label-md">View JSON</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="font-body-md text-on-surface">Oct 24, 2023</span>
<span className="font-code-sm text-secondary">11:05:42 UTC</span>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[16px] text-secondary">smart_toy</span>
</div>
<span className="font-body-md">System Automator</span>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-surface-variant"></span>
<span className="font-body-md font-medium text-on-surface">Tax Bracket Updated</span>
</div>
</td>
<td className="px-lg py-md">
<span className="bg-surface-container px-sm py-xs rounded font-label-md text-secondary">Compliance</span>
</td>
<td className="px-lg py-md font-body-md">Global (All US Employees)</td>
<td className="px-lg py-md text-right">
<button className="text-primary hover:underline font-label-md">View JSON</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="font-body-md text-on-surface">Oct 23, 2023</span>
<span className="font-code-sm text-secondary">16:45:00 UTC</span>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[16px] text-secondary">person</span>
</div>
<span className="font-body-md">david.chen@corp.com</span>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span className="font-body-md font-medium text-on-surface">Bonus Payment Revoked</span>
</div>
</td>
<td className="px-lg py-md">
<span className="bg-surface-container px-sm py-xs rounded font-label-md text-secondary">One-time Payments</span>
</td>
<td className="px-lg py-md font-body-md">Elena Rodriguez</td>
<td className="px-lg py-md text-right">
<button className="text-primary hover:underline font-label-md">View JSON</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="font-body-md text-on-surface">Oct 23, 2023</span>
<span className="font-code-sm text-secondary">09:12:33 UTC</span>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[16px] text-secondary">person</span>
</div>
<span className="font-body-md">sarah.j@corp.com</span>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-body-md font-medium text-on-surface">New Payroll Batch Started</span>
</div>
</td>
<td className="px-lg py-md">
<span className="bg-surface-container px-sm py-xs rounded font-label-md text-secondary">Operations</span>
</td>
<td className="px-lg py-md font-body-md">System-wide</td>
<td className="px-lg py-md text-right">
<button className="text-primary hover:underline font-label-md">View JSON</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="font-body-md text-on-surface">Oct 22, 2023</span>
<span className="font-code-sm text-secondary">15:00:10 UTC</span>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
</div>
<span className="font-body-md">Security_Audit_Bot</span>
</div>
</td>
<td className="px-lg py-md">
<div className="flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-surface-variant"></span>
<span className="font-body-md font-medium text-on-surface">Bank Details Verified</span>
</div>
</td>
<td className="px-lg py-md">
<span className="bg-surface-container px-sm py-xs rounded font-label-md text-secondary">Security</span>
</td>
<td className="px-lg py-md font-body-md">Jameson Smith</td>
<td className="px-lg py-md text-right">
<button className="text-primary hover:underline font-label-md">View JSON</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-lg py-sm bg-surface-bright flex items-center justify-between border-t border-outline-variant">
<div className="flex items-center gap-md">
<span className="font-body-md text-secondary">Results per page</span>
<div className="flex items-center bg-surface-container-lowest border border-outline-variant px-sm py-xs rounded">
<span className="font-body-md mr-sm">25</span>
<span className="material-symbols-outlined text-[18px]">expand_more</span>
</div>
</div>
<div className="flex items-center gap-lg">
<span className="font-body-md text-secondary">Page 1 of 42</span>
<div className="flex gap-xs">
<button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-low disabled:opacity-30" disabled={true}>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-low">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>

<div className="bg-primary-container bg-opacity-10 border border-primary-container border-opacity-30 p-lg rounded-xl flex items-center gap-lg">
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shadow-inner">
<span className="material-symbols-outlined text-[28px]">verified_user</span>
</div>
<div className="flex-1">
<h4 className="font-title-lg text-on-primary-container">Blockchain-Verified Ledger</h4>
<p className="font-body-md text-on-primary-container text-opacity-80">This audit trail is backed by a cryptographically signed immutable log. Any tampering with these records will immediately invalidate the verification pulse above.</p>
</div>
<div className="flex flex-col items-end">
<span className="font-label-md text-on-primary-container bg-primary-container bg-opacity-20 px-sm py-xs rounded-full border border-primary">Status: Synced</span>
<p className="font-code-sm text-secondary mt-xs">Hash: 0x82f...a12c</p>
</div>
</div>

    </div>
  );
};

export default AuditTrail;
