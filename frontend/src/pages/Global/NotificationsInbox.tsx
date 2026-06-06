import React from 'react';


const NotificationsInbox: React.FC = () => {


  return (
    <div className="w-full">
      

<div className="h-16 px-lg flex items-center justify-between border-b border-outline-variant bg-surface">
<div className="flex items-center gap-lg">
<h1 className="font-headline-md text-headline-md text-on-surface">Notifications</h1>
<div className="flex bg-surface-container rounded-lg p-1 text-[13px]">
<button className="px-md py-1 bg-white shadow-sm rounded-md font-semibold text-primary">All</button>
<button className="px-md py-1 text-on-surface-variant hover:text-on-surface">Unread</button>
<button className="px-md py-1 text-on-surface-variant hover:text-on-surface">Mentions</button>
<button className="px-md py-1 text-on-surface-variant hover:text-on-surface">System</button>
</div>
</div>
<div className="flex items-center gap-md">
<button className="flex items-center gap-xs text-primary font-semibold text-label-md hover:underline">
<span className="material-symbols-outlined text-[18px]" data-icon="done_all">done_all</span>
                        Mark all as read
                    </button>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-[400px] border-r border-outline-variant overflow-y-auto custom-scrollbar flex flex-col bg-surface-bright">

<div className="p-lg border-b border-outline-variant cursor-pointer active-notification hover:bg-surface-container-low transition-colors duration-150">
<div className="flex justify-between items-start mb-1">
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary">Finance</span>
<span className="text-[11px] text-on-surface-variant">2m ago</span>
</div>
<h3 className="font-title-lg text-body-md text-on-surface mb-1">Invoice INV-2024-001 Pending</h3>
<p className="text-body-md text-on-surface-variant line-clamp-2 leading-relaxed">The Q3 infrastructure invoice from AWS is awaiting your final approval before routing to accounting.</p>
</div>

<div className="p-lg border-b border-outline-variant cursor-pointer hover:bg-surface-container-low transition-colors duration-150 group">
<div className="flex justify-between items-start mb-1">
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-tertiary-fixed text-on-tertiary-fixed-variant">System</span>
<span className="text-[11px] text-on-surface-variant">1h ago</span>
</div>
<h3 className="font-semibold text-body-md text-on-surface mb-1">Backup Complete</h3>
<p className="text-body-md text-on-surface-variant line-clamp-2 leading-relaxed">Weekly production database backup successfully synced to regional cloud storage in us-east-1.</p>
</div>

<div className="p-lg border-b border-outline-variant cursor-pointer hover:bg-surface-container-low transition-colors duration-150">
<div className="flex justify-between items-start mb-1">
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-secondary-container text-on-secondary-container">HR</span>
<span className="text-[11px] text-on-surface-variant">4h ago</span>
</div>
<h3 className="font-semibold text-body-md text-on-surface mb-1">New Policy Update</h3>
<p className="text-body-md text-on-surface-variant line-clamp-2 leading-relaxed">Please review the updated remote work guidelines for the 2024 fiscal year. Sign-off required by Friday.</p>
</div>

<div className="p-lg border-b border-outline-variant cursor-pointer hover:bg-surface-container-low transition-colors duration-150">
<div className="flex justify-between items-start mb-1">
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary">Finance</span>
<span className="text-[11px] text-on-surface-variant">Yesterday</span>
</div>
<h3 className="font-semibold text-body-md text-on-surface mb-1">Payment Received</h3>
<p className="text-body-md text-on-surface-variant line-clamp-2 leading-relaxed">Wire transfer from Nexus Corp ($42,000.00) has been cleared and applied to outstanding balances.</p>
</div>
<div className="p-lg border-b border-outline-variant cursor-pointer hover:bg-surface-container-low transition-colors duration-150">
<div className="flex justify-between items-start mb-1">
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-tertiary-fixed text-on-tertiary-fixed-variant">System</span>
<span className="text-[11px] text-on-surface-variant">Oct 12</span>
</div>
<h3 className="font-semibold text-body-md text-on-surface mb-1">Login Alert</h3>
<p className="text-body-md text-on-surface-variant line-clamp-2 leading-relaxed">A new login was detected from a Chrome browser on a Linux device in Berlin, Germany.</p>
</div>
</div>

<div className="flex-1 bg-white overflow-y-auto custom-scrollbar flex flex-col">
<div className="p-2xl max-w-4xl mx-auto w-full">

<div className="flex items-center justify-between mb-xl pb-md border-b border-outline-variant">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
</div>
<div>
<h2 className="font-title-lg text-title-lg text-on-surface">Invoice Pending Approval</h2>
<p className="text-body-md text-on-surface-variant">Finance Department • AMDOX-FIN-982</p>
</div>
</div>
<div className="flex items-center gap-sm">
<button className="p-sm text-on-surface-variant hover:bg-surface-container rounded-full transition-all" title="Archive">
<span className="material-symbols-outlined" data-icon="archive">archive</span>
</button>
<button className="p-sm text-error hover:bg-error-container/20 rounded-full transition-all" title="Delete">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
<button className="p-sm text-on-surface-variant hover:bg-surface-container rounded-full transition-all" title="More">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>

<div className="space-y-lg">
<div className="flex items-center gap-sm text-on-surface-variant text-body-md">
<span className="material-symbols-outlined text-[18px]" data-icon="schedule">schedule</span>
<span>Sent Today at 10:42 AM</span>
</div>
<div className="prose max-w-none">
<p className="text-body-lg text-on-surface leading-loose">
                                    Hello, <br/><br/>
                                    This is an automated reminder that <strong>Invoice INV-2024-001</strong> from <strong>Amazon Web Services</strong> is currently awaiting your review and approval. 
                                    The total amount is <strong>$12,450.00</strong>, which falls within the standard quarterly projected budget but requires executive sign-off due to the new ERP compliance protocols.
                                </p>
<div className="bg-surface-container p-lg rounded-xl my-xl border border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-lg">
<div className="p-md bg-white rounded border border-outline-variant">
<span className="material-symbols-outlined text-primary" data-icon="description">description</span>
</div>
<div>
<p className="font-semibold text-on-surface">AWS_Q3_Infrastructure.pdf</p>
<p className="text-label-md text-on-surface-variant">2.4 MB • Generated Oct 14, 2024</p>
</div>
</div>
<button className="px-md py-sm border border-outline text-on-surface-variant rounded font-semibold hover:bg-white transition-all">Download</button>
</div>
<p className="text-body-lg text-on-surface leading-loose">
                                    Please verify that all line items correspond with the scaling of our production instances in the Northern Virginia region. If you have questions regarding the data egress fees, please contact the DevOps lead.
                                </p>
</div>

<div className="pt-xl flex flex-wrap gap-md">
<button className="bg-primary text-white px-2xl py-md rounded-lg font-bold flex items-center gap-md hover:bg-opacity-90 shadow-lg shadow-primary/20 transition-all">
                                    View Full Invoice
                                    <span className="material-symbols-outlined text-[18px]" data-icon="open_in_new">open_in_new</span>
</button>
<button className="bg-white border-2 border-primary text-primary px-2xl py-md rounded-lg font-bold hover:bg-primary-container/10 transition-all">
                                    Approve Immediately
                                </button>
</div>
<div className="mt-3xl pt-xl border-t border-outline-variant">
<h4 className="text-label-md font-bold text-on-surface-variant uppercase mb-md">Related Records</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
<a className="p-md border border-outline-variant rounded-lg hover:border-primary group transition-all" href="#">
<p className="text-xs text-on-surface-variant mb-1 uppercase font-bold">Project</p>
<div className="flex justify-between items-center">
<span className="font-semibold text-on-surface group-hover:text-primary">Cloud Infrastructure 2024</span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary" data-icon="chevron_right">chevron_right</span>
</div>
</a>
<a className="p-md border border-outline-variant rounded-lg hover:border-primary group transition-all" href="#">
<p className="text-xs text-on-surface-variant mb-1 uppercase font-bold">Cost Center</p>
<div className="flex justify-between items-center">
<span className="font-semibold text-on-surface group-hover:text-primary">Engineering-DEVOPS-102</span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary" data-icon="chevron_right">chevron_right</span>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default NotificationsInbox;
