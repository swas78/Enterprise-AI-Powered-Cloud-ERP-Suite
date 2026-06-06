import React from 'react';


const VendorDirectory: React.FC = () => {


  return (
    <div className="w-full">
      
<div className="flex items-center justify-between mb-md">
<h3 className="font-title-lg text-title-lg text-on-surface flex items-center gap-xs">
<span className="material-symbols-outlined text-primary-container">account_balance</span>
                        Bank &amp; Compliance
                    </h3>
<button className="text-primary font-label-md text-label-md hover:underline">Edit Info</button>
</div>
<div className="grid grid-cols-2 gap-gutter bg-surface p-md rounded-lg border border-outline-variant">
<div>
<div className="text-code-sm text-secondary uppercase tracking-tighter mb-xs">Bank Name</div>
<div className="text-body-md font-semibold text-on-surface">Chase Manhattan Enterprise</div>
</div>
<div>
<div className="text-code-sm text-secondary uppercase tracking-tighter mb-xs">Account Number</div>
<div className="text-body-md font-semibold text-on-surface">•••• •••• 9921</div>
</div>
<div>
<div className="text-code-sm text-secondary uppercase tracking-tighter mb-xs">SWIFT/BIC</div>
<div className="text-body-md font-semibold text-on-surface">CHASUS33XX</div>
</div>
<div>
<div className="text-code-sm text-secondary uppercase tracking-tighter mb-xs">VAT ID</div>
<div className="text-body-md font-semibold text-on-surface">GB-9283-11-2</div>
</div>
</div>

    </div>
  );
};

export default VendorDirectory;
