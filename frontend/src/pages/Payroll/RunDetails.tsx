import React from 'react';


const RunDetails: React.FC = () => {


  return (
    <div className="w-full">
      
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
<div className="p-md border-b border-outline-variant flex items-center justify-between bg-surface-container-low">
<h3 className="font-title-lg text-title-lg">Employee Breakdown</h3>
<div className="flex items-center gap-sm">
<div className="relative">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[18px]" data-icon="filter_list">filter_list</span>
<input className="bg-surface border border-outline-variant rounded py-xs pl-xl pr-md text-body-md focus:ring-1 focus:ring-primary outline-none" placeholder="Filter employees..." type="text" />
</div>
<button className="p-xs hover:bg-surface-container-high rounded transition-colors text-secondary">
<span className="material-symbols-outlined" data-icon="download">download</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-bright text-secondary font-label-md text-label-md sticky top-0 border-b border-outline-variant">
<tr>
<th className="px-lg py-md font-semibold">EMPLOYEE</th>
<th className="px-lg py-md font-semibold">DEPT</th>
<th className="px-lg py-md font-semibold">GROSS</th>
<th className="px-lg py-md font-semibold">TAXES</th>
<th className="px-lg py-md font-semibold">NET</th>
<th className="px-lg py-md font-semibold">STATUS</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/50">
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 bg-surface-container-high rounded-full overflow-hidden">
<img alt="Sarah" className="w-full h-full object-cover" data-alt="Portrait of a female professional with a confident smile, wearing a modern navy blazer against a minimalist light blue background. High-key lighting highlights her features, evoking a sense of corporate leadership and efficiency within a sleek enterprise UI context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVfV5YmMl0Ra5Bab6XaQj8Ge8cf6CPLIcFkYznrxp_LGNrKzxpCo2FZMV9qxK8FYy2ct-fGORs9t5vr3aLoMv6fbV34RDuao3ej008CRnmjesYCCLFUh42qmS6ytyJ626LqSUTxJYetqcj-87H1WZhzPNBjqryNmNFVOss9Q0xChtTAuCN_IomjUOZWGtAxn3FQVFGW7UBPrasJGrCcWBY5cPiBAo6rdAoT9fI0VwIAzNEVR6KDscKYZrVdYo7w3cONWKhflKOyyw" />
</div>
<div>
<p className="font-semibold">Sarah Jenkins</p>
<p className="text-xs text-secondary">EMP-9021</p>
</div>
</div>
</td>
<td className="px-lg py-md text-secondary">Engineering</td>
<td className="px-lg py-md">$12,500.00</td>
<td className="px-lg py-md">$3,125.00</td>
<td className="px-lg py-md font-semibold text-primary">$9,375.00</td>
<td className="px-lg py-md">
<span className="px-sm py-[2px] bg-green-100 text-green-700 rounded-full text-[11px] font-bold">READY</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 bg-surface-container-high rounded-full overflow-hidden">
<img alt="David" className="w-full h-full object-cover" data-alt="Professional headshot of a diverse male manager in a modern office setting. He is wearing a crisp white shirt, and the background features soft bokeh of a high-end corporate lounge. The lighting is natural and sophisticated, emphasizing a clean and professional aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMe1UjX4_IEFXI1tyjBypwtMZR3-N5H4nGgx_166IVXo6FkVdKcV9_-2ibnnnD8Os5coLq3a0NfS5CCKLiR1qbQaPsmwfBnwcEoVAM6HpnITbA0lNM8b_1J1a8ucU5CF05DmVmtx5pT-ntYWeB94Sjmq8YpfQvpdXtJ9ybbVUNmHksZTxxAO8M_hRXnVs6KV4mf5N4Fqscd31i3q7-WFrjt6WlOpQXN7TFCZ_eRL2Cmqa8KUIaPhd1_tsHe1K64RK0Pgw5W6-w5xk" />
</div>
<div>
<p className="font-semibold">David Chen</p>
<p className="text-xs text-secondary">EMP-8842</p>
</div>
</div>
</td>
<td className="px-lg py-md text-secondary">Operations</td>
<td className="px-lg py-md">$10,200.00</td>
<td className="px-lg py-md">$2,550.00</td>
<td className="px-lg py-md font-semibold text-primary">$7,650.00</td>
<td className="px-lg py-md">
<span className="px-sm py-[2px] bg-error-container text-error rounded-full text-[11px] font-bold uppercase">FLAGGED</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 bg-surface-container-high rounded-full overflow-hidden">
<img alt="Elena" className="w-full h-full object-cover" data-alt="Professional corporate headshot of a business woman looking directly at the camera with a slight smile. The background is a blurred office environment with cool tones and minimal furniture. The lighting is balanced, creating a high-quality visual consistent with enterprise-level financial dashboards." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0_Vnu1T19uWqzeOugZRqyxzQU5VjcKZdclibhWpAQXC5ljkryKUE83cmAgj1H5zC2Wa0buVwPqZZQVSiH7v2QFUTYD08YS9YtKDxjNn2hFH5BLeqd10854VWsYElTgCxhtc4sWKkJx1A_hDZ-HnNXw-pPFgYh6CRkEb_CcZFsQiWpkUA1Cmr8sjM2jEZwPMKg7OgOtbYAUxbNHN6gR7eyYSrfFa1_YOaG0-OeeH50Tg8mrHFmRWor9f1aY59IGwWrBmlw1Z3ADAs" />
</div>
<div>
<p className="font-semibold">Elena Rodriguez</p>
<p className="text-xs text-secondary">EMP-7731</p>
</div>
</div>
</td>
<td className="px-lg py-md text-secondary">Sales</td>
<td className="px-lg py-md">$15,800.00</td>
<td className="px-lg py-md">$4,266.00</td>
<td className="px-lg py-md font-semibold text-primary">$11,534.00</td>
<td className="px-lg py-md">
<span className="px-sm py-[2px] bg-green-100 text-green-700 rounded-full text-[11px] font-bold">READY</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 bg-surface-container-high rounded-full overflow-hidden">
<img alt="Marcus" className="w-full h-full object-cover" data-alt="Modern professional portrait of a man in a minimalist grey t-shirt against a clean white wall. The lighting is soft and directional, highlighting facial details with clarity. The overall look is modern, approachable, and high-fidelity, perfect for a high-end SaaS platform employee list." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg34UNtJv4XIrb3mQfYR0-qUzujy-k59KZKVo90sWtKEMWdTcJyQWi9lP6Xf4ImZwsrz3kpAIR2KP0Qq2NCN8NZ-oPMq2SBZOpYNO4mAHtuBmzNSdPY_Z3vjrlTLgWBQLPH8EQ3cwxUUWbDT5mk9oJa4nhN5utdK5TXwPMoD0E-D0lRtB6k5TFQbZHgWMv0bYlEFmjPNVaAXB7ghl0Rutpc4Y1zurn0EBu5EVgeY_3XZSbt4WeR-bR3QrTWBms1wZUfSrNCnYlfas" />
</div>
<div>
<p className="font-semibold">Marcus Thorne</p>
<p className="text-xs text-secondary">EMP-4421</p>
</div>
</div>
</td>
<td className="px-lg py-md text-secondary">Marketing</td>
<td className="px-lg py-md">$9,100.00</td>
<td className="px-lg py-md">$2,275.00</td>
<td className="px-lg py-md font-semibold text-primary">$6,825.00</td>
<td className="px-lg py-md">
<span className="px-sm py-[2px] bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold uppercase">REVIEW</span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-md border-t border-outline-variant bg-surface-container-low flex justify-between items-center">
<span className="text-body-md text-secondary">Showing 1-10 of 412 employees</span>
<div className="flex gap-xs">
<button className="p-xs border border-outline-variant rounded hover:bg-surface-container-high disabled:opacity-50" disabled={true}>
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button className="px-sm py-xs border border-primary bg-primary text-white rounded text-body-md">1</button>
<button className="px-sm py-xs border border-outline-variant rounded hover:bg-surface-container-high text-body-md">2</button>
<button className="px-sm py-xs border border-outline-variant rounded hover:bg-surface-container-high text-body-md">3</button>
<button className="p-xs border border-outline-variant rounded hover:bg-surface-container-high">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>

    </div>
  );
};

export default RunDetails;
