import React from 'react';


const NotificationPreferences: React.FC = () => {


  return (
    <div className="w-full">
      
<div className="lg:col-span-4 bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="p-lg text-left font-label-md text-label-md text-outline uppercase tracking-wider min-w-[200px]">Event Type</th>
<th className="p-lg text-center font-label-md text-label-md text-outline uppercase tracking-wider">In-App</th>
<th className="p-lg text-center font-label-md text-label-md text-outline uppercase tracking-wider">Email</th>
<th className="p-lg text-center font-label-md text-label-md text-outline uppercase tracking-wider">SMS</th>
<th className="p-lg text-center font-label-md text-label-md text-outline uppercase tracking-wider">Webhook</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="p-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
</div>
<div>
<p className="font-title-lg text-title-lg text-on-surface">Finance</p>
<p className="font-body-md text-body-md text-outline">Invoices, payments, and audits</p>
</div>
</div>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
</tr>

<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="p-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
</div>
<div>
<p className="font-title-lg text-title-lg text-on-surface">Human Resources</p>
<p className="font-body-md text-body-md text-outline">Payroll and employee updates</p>
</div>
</div>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
</tr>

<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="p-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
</div>
<div>
<p className="font-title-lg text-title-lg text-on-surface">Supply Chain</p>
<p className="font-body-md text-body-md text-outline">Inventory levels and logistics</p>
</div>
</div>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
</tr>

<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="p-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-primary flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
</div>
<div>
<p className="font-title-lg text-title-lg text-on-surface">AI Alerts</p>
<p className="font-body-md text-body-md text-outline">Anomalies and predictive insights</p>
</div>
</div>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
<td className="p-lg text-center">
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only toggle-switch" type="checkbox" />
<div className="w-11 h-6 bg-secondary-container rounded-full toggle-slider transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:border-gray-300 before:border before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
</label>
</td>
</tr>
</tbody>
</table>
</div>
</div>

    </div>
  );
};

export default NotificationPreferences;
