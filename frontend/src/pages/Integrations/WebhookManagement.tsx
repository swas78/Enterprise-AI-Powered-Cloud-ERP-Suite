import React from 'react';


const WebhookManagement: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 bg-surface border-b border-outline-variant sticky top-0">
<div className="flex items-center gap-md">
<span className="font-headline-md font-bold text-primary">AMDOX</span>
<div className="hidden md:flex items-center gap-xs ml-xl">
<span className="text-on-surface-variant font-medium">Developer</span>
<span className="material-symbols-outlined text-outline-variant" style={{fontSize: "16px"}}>chevron_right</span>
<span className="text-primary font-bold border-b-2 border-primary">Webhooks</span>
</div>
</div>
<div className="flex items-center gap-md">
<div className="flex items-center gap-sm">
<button className="material-symbols-outlined text-primary hover:bg-surface-container-low p-1 rounded transition-colors" data-icon="notifications">notifications</button>
<button className="material-symbols-outlined text-primary hover:bg-surface-container-low p-1 rounded transition-colors" data-icon="help">help</button>
<button className="material-symbols-outlined text-primary hover:bg-surface-container-low p-1 rounded transition-colors" data-icon="cloud_done">cloud_done</button>
</div>
<div className="h-8 w-8 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant">
<img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjmxMlmImzODO0bgpA-qQImHwKY2S7Llj3ayevNZgE4eyM9Q6CPlyjlwLDSFFNsO3zgT2qFaQ5_5K3PkxQm-ewuit2gly8wh7rH_Td7tyeVZDkaST8hwqPPF3fM8tmE_vZyuaCa1ry-Tnk9syLY4ykq40mgjyI64c_t7aTeL-MMNtpNVXQsOuO3kueJ1nHyveLKJluzVZFweYRfu8hBLQ6DqT8Pmd1n6lwrJBY6UP2CNrTAnvWlAqc6eXRIHdsOeqOnjNGv71rPtA"/>
</div>
</div>
</header>

<div className="p-lg space-y-lg max-w-[1440px] mx-auto w-full">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Webhook Subscriptions</h2>
<p className="text-on-surface-variant mt-1 max-w-2xl">Manage your endpoint subscriptions to receive real-time notifications from AMDOX. Ensure your endpoints are secured with HMAC verification.</p>
</div>
<button className="bg-[#1B9CFF] hover:bg-[#0B7DFF] text-white px-lg py-2 rounded-lg font-semibold flex items-center gap-sm transition-colors shadow-sm active:scale-95" >
<span className="material-symbols-outlined">add</span>
<span>Create Webhook</span>
</button>
</div>

<div className="bento-card p-md rounded-xl flex gap-md items-start bg-primary-fixed/10 border-primary/20">
<div className="bg-primary/10 p-2 rounded-lg text-primary">
<span className="material-symbols-outlined">verified_user</span>
</div>
<div className="flex-1">
<h3 className="font-title-lg text-on-surface text-primary">Security Recommendation</h3>
<p className="text-on-surface-variant mt-1">To ensure security, verify that requests originate from AMDOX using the <span className="font-mono text-primary bg-primary-fixed/30 px-1 rounded">X-AMDOX-Signature</span> HMAC-SHA256 header. Never share your secret keys in public repositories.</p>
</div>
</div>

<div className="bento-card rounded-xl overflow-hidden flex flex-col">
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Endpoint URL</th>
<th className="px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Event Types</th>
<th className="px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
<th className="px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Last Triggered</th>
<th className="px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="font-semibold text-primary truncate max-w-[300px]">https://api.erp-integrator.com/v1/hooks/amdox</span>
<span className="text-xs text-on-surface-variant">Created Oct 12, 2023</span>
</div>
</td>
<td className="px-lg py-md">
<div className="flex flex-wrap gap-xs">
<span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded text-[11px] font-mono border border-outline-variant">invoice.created</span>
<span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded text-[11px] font-mono border border-outline-variant">payment.failed</span>
</div>
</td>
<td className="px-lg py-md">
<span className="inline-flex items-center gap-xs px-2 py-1 rounded bg-[#16A34A]/10 text-[#16A34A] text-[12px] font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
                                            Active
                                        </span>
</td>
<td className="px-lg py-md text-on-surface-variant">
                                        2 minutes ago
                                    </td>
<td className="px-lg py-md text-right">
<div className="flex items-center justify-end gap-sm">
<button className="p-1 text-on-surface-variant hover:text-primary transition-colors" title="Edit"><span className="material-symbols-outlined">edit</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary transition-colors" title="Rotate Secret"><span className="material-symbols-outlined">key</span></button>
<button className="p-1 text-on-surface-variant hover:text-error transition-colors" title="Disable"><span className="material-symbols-outlined">block</span></button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="font-semibold text-primary truncate max-w-[300px]">https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXX</span>
<span className="text-xs text-on-surface-variant">Created Sep 28, 2023</span>
</div>
</td>
<td className="px-lg py-md">
<div className="flex flex-wrap gap-xs">
<span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded text-[11px] font-mono border border-outline-variant">employee.onboarded</span>
</div>
</td>
<td className="px-lg py-md">
<span className="inline-flex items-center gap-xs px-2 py-1 rounded bg-[#16A34A]/10 text-[#16A34A] text-[12px] font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
                                            Active
                                        </span>
</td>
<td className="px-lg py-md text-on-surface-variant">
                                        5 hours ago
                                    </td>
<td className="px-lg py-md text-right">
<div className="flex items-center justify-end gap-sm">
<button className="p-1 text-on-surface-variant hover:text-primary transition-colors" title="Edit"><span className="material-symbols-outlined">edit</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary transition-colors" title="Rotate Secret"><span className="material-symbols-outlined">key</span></button>
<button className="p-1 text-on-surface-variant hover:text-error transition-colors" title="Disable"><span className="material-symbols-outlined">block</span></button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="px-lg py-md">
<div className="flex flex-col">
<span className="font-semibold text-primary truncate max-w-[300px]">https://staging-analytics.corp.net/ingest</span>
<span className="text-xs text-on-surface-variant">Created Aug 05, 2023</span>
</div>
</td>
<td className="px-lg py-md">
<div className="flex flex-wrap gap-xs">
<span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded text-[11px] font-mono border border-outline-variant">all_events</span>
</div>
</td>
<td className="px-lg py-md">
<span className="inline-flex items-center gap-xs px-2 py-1 rounded bg-surface-variant text-on-surface-variant text-[12px] font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                                            Inactive
                                        </span>
</td>
<td className="px-lg py-md text-on-surface-variant">
                                        Never
                                    </td>
<td className="px-lg py-md text-right">
<div className="flex items-center justify-end gap-sm">
<button className="p-1 text-on-surface-variant hover:text-primary transition-colors" title="Edit"><span className="material-symbols-outlined">edit</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary transition-colors" title="Rotate Secret"><span className="material-symbols-outlined">key</span></button>
<button className="p-1 text-[#16A34A] hover:bg-[#16A34A]/10 transition-colors" title="Enable"><span className="material-symbols-outlined">play_circle</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-lg py-sm border-t border-outline-variant bg-surface-container-low flex justify-between items-center">
<span className="text-xs text-on-surface-variant">Showing 3 of 12 subscriptions</span>
<div className="flex items-center gap-xs">
<button className="p-1 hover:bg-surface-variant rounded disabled:opacity-30" disabled={true}><span className="material-symbols-outlined">chevron_left</span></button>
<button className="w-6 h-6 flex items-center justify-center bg-primary text-white text-xs rounded">1</button>
<button className="w-6 h-6 flex items-center justify-center hover:bg-surface-variant text-xs rounded">2</button>
<button className="p-1 hover:bg-surface-variant rounded"><span className="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
<div className="bento-card p-lg rounded-xl flex items-center gap-lg">
<div className="p-3 bg-secondary-container rounded-full text-secondary">
<span className="material-symbols-outlined">monitoring</span>
</div>
<div>
<p className="text-label-md text-on-surface-variant">Delivery Rate (24h)</p>
<p className="text-headline-md text-on-surface">99.82%</p>
</div>
</div>
<div className="bento-card p-lg rounded-xl flex items-center gap-lg">
<div className="p-3 bg-secondary-container rounded-full text-secondary">
<span className="material-symbols-outlined">bolt</span>
</div>
<div>
<p className="text-label-md text-on-surface-variant">Avg. Response Time</p>
<p className="text-headline-md text-on-surface">142ms</p>
</div>
</div>
<div className="bento-card p-lg rounded-xl flex items-center gap-lg">
<div className="p-3 bg-secondary-container rounded-full text-secondary">
<span className="material-symbols-outlined">error_outline</span>
</div>
<div>
<p className="text-label-md text-on-surface-variant">Failed Retries</p>
<p className="text-headline-md text-on-surface">14</p>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default WebhookManagement;
