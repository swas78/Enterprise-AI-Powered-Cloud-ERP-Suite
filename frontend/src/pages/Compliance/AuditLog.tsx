import React from 'react';


const AuditLog: React.FC = () => {


  return (
    <div className="w-full">
      
<div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-md">
<div className="flex flex-col gap-xs">
<label className="font-label-md text-secondary">User</label>
<select className="form-select w-full border-outline-variant rounded-lg text-body-md py-sm px-md focus:border-primary focus:ring-0">
<option>All Users</option>
<option>alex.chen@globalcorp.com</option>
<option>sarah.smith@globalcorp.com</option>
<option>admin_root</option>
</select>
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-secondary">Action</label>
<select className="form-select w-full border-outline-variant rounded-lg text-body-md py-sm px-md focus:border-primary focus:ring-0">
<option>All Actions</option>
<option>CREATE</option>
<option>UPDATE</option>
<option>DELETE</option>
<option>LOGIN_SUCCESS</option>
</select>
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-secondary">Module</label>
<select className="form-select w-full border-outline-variant rounded-lg text-body-md py-sm px-md focus:border-primary focus:ring-0">
<option>All Modules</option>
<option>Inventory</option>
<option>Finance</option>
<option>HR_Core</option>
<option>Auth_Service</option>
</select>
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-secondary">Date Range</label>
<div className="relative">
<input className="w-full border-outline-variant rounded-lg text-body-md py-sm pl-md pr-xl focus:border-primary focus:ring-0" type="text" value="Last 24 Hours"/>
<span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline" data-icon="calendar_month">calendar_month</span>
</div>
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-secondary">IP Address</label>
<input className="w-full border-outline-variant rounded-lg text-body-md py-sm px-md focus:border-primary focus:ring-0" placeholder="192.168.x.x" type="text"/>
</div>
</div>
<div className="flex gap-sm">
<button className="px-lg py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-all active:scale-95">Apply Filters</button>
<button className="p-sm text-primary border border-primary rounded-lg hover:bg-surface-container-low transition-all"><span className="material-symbols-outlined" data-icon="refresh">refresh</span></button>
</div>

    </div>
  );
};

export default AuditLog;
