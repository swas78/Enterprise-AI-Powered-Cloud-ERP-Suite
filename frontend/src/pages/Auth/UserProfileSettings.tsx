import React from 'react';


const UserProfileSettings: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-lg h-[48px] z-50 sticky top-0">
<div className="flex items-center gap-md">
<span className="font-headline-md text-headline-md font-bold text-primary">AMDOX</span>
<div className="hidden md:flex items-center ml-xl bg-surface-container-low px-md py-xs rounded-lg border border-outline-variant">
<span className="material-symbols-outlined text-outline text-lg" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md w-64 px-sm" placeholder="Global Search (CMD+K)" type="text"/>
</div>
</div>
<div className="flex items-center gap-md">
<button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-xs rounded transition-colors" data-icon="cloud_done">cloud_done</button>
<button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-xs rounded transition-colors" data-icon="help">help</button>
<button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-xs rounded transition-colors" data-icon="notifications">notifications</button>
<div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant">
<img alt="User profile" className="w-full h-full object-cover" data-alt="A professional headshot of a middle-aged male manager named Jordan Walker, looking directly into the camera with a confident and friendly expression. He has short, styled hair and is wearing a crisp white button-down shirt. The background is a soft-focus corporate office with bright, cool-white lighting and minimalist furniture, adhering to a high-end enterprise aesthetic with electric blue accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7ScPtWJkiHztMQTM5nbs5ZbFyCgU4omaX9xnZDZdWEQ4GbLWu2CN2wjxJM8jZQsrsgQ3GOMXhbWmV-c8g13W6erUopTQEyYR0RzfP4y85d2a5IyVdS-cTHB4L_l9zParO8uUrO4EiRYfRoOIY1tNAFww3xE9jMXjv6YKBMC79Xwa8_w4uxm8u7ovhfTouOp-DVohSKxpkHKZPvOngZyMneju5Gc-3TV379P3dVvZFLZWrmUzSsL4FfHRINz6EjejNSrxb6QAC25M"/>
</div>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="hidden md:flex flex-col h-full bg-surface-container-lowest border-r border-outline-variant w-[256px] sticky top-0 py-md">
<div className="px-md mb-xl">
<div className="flex items-center gap-sm mb-xs">
<div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="corporate_fare" style={{fontVariationSettings: "'FILL' 1"}}>corporate_fare</span>
</div>
<div>
<div className="font-title-lg text-title-lg text-on-surface truncate leading-tight">Global Corp</div>
<div className="font-label-md text-label-md text-outline truncate">Enterprise Tier</div>
</div>
</div>
<button className="w-full mt-md bg-primary-container hover:bg-primary text-white py-sm px-md rounded font-label-md transition-colors flex items-center justify-center gap-xs">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                    New Workflow
                </button>
</div>
<nav className="flex-1 space-y-xs px-sm">
<a className="flex items-center gap-md px-md py-sm text-secondary hover:bg-surface-container-high rounded transition-all duration-150" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-secondary hover:bg-surface-container-high rounded transition-all duration-150" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-md text-label-md">Finance</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-secondary hover:bg-surface-container-high rounded transition-all duration-150" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span className="font-label-md text-label-md">Human Resources</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-secondary hover:bg-surface-container-high rounded transition-all duration-150" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span className="font-label-md text-label-md">Supply Chain</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-secondary hover:bg-surface-container-high rounded transition-all duration-150" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-label-md text-label-md">Intelligence</span>
</a>

<a className="flex items-center gap-md px-md py-sm bg-primary-fixed text-on-primary-fixed border-r-4 border-primary font-semibold rounded transition-all duration-150" href="#">
<span className="material-symbols-outlined" data-icon="settings" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</nav>
<div className="px-sm pt-md border-t border-outline-variant mt-auto">
<a className="flex items-center gap-md px-md py-sm text-secondary hover:bg-surface-container-high rounded transition-all duration-150" href="#">
<span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
<span className="font-label-md text-label-md">Support</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-secondary hover:bg-surface-container-high rounded transition-all duration-150" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-label-md text-label-md">Sign Out</span>
</a>
</div>
</aside>

<main className="flex-1 overflow-y-auto custom-scrollbar bg-background p-lg lg:p-3xl">
<div className="max-w-4xl mx-auto">

<section className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2xl gap-lg">
<div className="flex items-center gap-lg">
<div className="relative group">
<div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-surface shadow-sm ring-1 ring-outline-variant">
<img alt="Jordan Walker" className="w-full h-full object-cover" data-alt="A close-up high-resolution professional portrait of Jordan Walker, a senior manager in a technology firm. He has a clean-shaven face, light eyes, and an approachable smile. The setting is a minimalist, modern office environment with bright, neutral lighting that emphasizes professional clarity. The visual language is corporate modern with a restricted palette of cool whites and subtle electric blue glows in the distance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQWjde4IxW-V8_Ky_jb3_SFmzfJetyej5FZ0kalHyud_oXR-r35eHY3BypxbD4sCwF3k2TdEzgaWMOPnTncVX0WNQrUcbem585I8hSbBnA5X0mTlNS8iTTLAP4-G8M4wym2TaPFtfi7u1Ws1RUuODYONa2xr_FnClxPQD4pIiNWaV1zml9fsMefF7v89k-jNM8DiwOItyC9uLuVi5zp8-W7BnUflnlNH5stb-hFhVHnvhXeGmcRBLUDC0RZJ_djTLy1kXY0caVF-c"/>
</div>
<button className="absolute bottom-1 right-1 bg-primary text-white p-xs rounded-full shadow-md hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
</button>
</div>
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Jordan Walker</h1>
<p className="font-body-lg text-body-lg text-outline">Senior Manager • AMDOX Enterprise</p>
<div className="flex items-center gap-sm mt-sm">
<span className="bg-success/10 text-[#16A34A] px-sm py-xs rounded font-label-md flex items-center gap-xs" style={{backgroundColor: "rgba(22, 163, 74, 0.1)"}}>
<span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
                                    Active Tenant: Global Corp
                                </span>
</div>
</div>
</div>
<div className="flex gap-md">
<button className="border border-outline-variant text-on-surface font-label-md py-sm px-xl rounded hover:bg-surface-container transition-colors">View Public Profile</button>
</div>
</section>

<div className="border-b border-outline-variant mb-xl flex gap-xl relative">
<button className="pb-md font-label-md text-label-md text-primary border-b-2 border-primary relative">
                        Profile
                    </button>
<button className="pb-md font-label-md text-label-md text-secondary hover:text-on-surface transition-colors">
                        Security
                    </button>
<button className="pb-md font-label-md text-label-md text-secondary hover:text-on-surface transition-colors">
                        Preferences
                    </button>
<button className="pb-md font-label-md text-label-md text-secondary hover:text-on-surface transition-colors">
                        Integrations
                    </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-lg p-xl">
<h2 className="font-title-lg text-title-lg text-on-surface mb-xl">Basic Information</h2>
<form className="space-y-xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="space-y-xs">
<label className="font-label-md text-label-md text-outline">Full Name</label>
<input className="w-full bg-white border border-outline-variant rounded px-md py-sm focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all font-body-md" type="text" value="Jordan Walker"/>
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-outline">Display Name</label>
<input className="w-full bg-white border border-outline-variant rounded px-md py-sm focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all font-body-md" type="text" value="Jordan W."/>
</div>
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-outline">Email Address</label>
<div className="flex gap-sm">
<input className="flex-1 bg-white border border-outline-variant rounded px-md py-sm focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all font-body-md" type="email" value="j.walker@globalcorp.com"/>
<span className="bg-primary-fixed text-on-primary-fixed px-md py-sm rounded font-label-md flex items-center">Verified</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="space-y-xs">
<label className="font-label-md text-label-md text-outline">Timezone</label>
<select className="w-full bg-white border border-outline-variant rounded px-md py-sm focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all font-body-md appearance-none">
<option>(GMT-05:00) Eastern Time</option>
<option>(GMT-08:00) Pacific Time</option>
<option>(GMT+00:00) London</option>
<option>(GMT+01:00) Berlin</option>
</select>
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-outline">Preferred Language</label>
<select className="w-full bg-white border border-outline-variant rounded px-md py-sm focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all font-body-md appearance-none">
<option>English (United States)</option>
<option>German</option>
<option>Spanish</option>
<option>French</option>
</select>
</div>
</div>
<div className="pt-xl flex justify-end gap-md">
<button className="px-xl py-sm font-label-md text-on-surface border border-outline-variant rounded hover:bg-surface-container transition-colors" type="button">Discard Changes</button>
<button className="px-xl py-sm font-label-md text-white bg-primary-container hover:bg-primary rounded transition-all active:scale-95" type="submit">Save Changes</button>
</div>
</form>
</div>

<div className="md:col-span-4 space-y-gutter">
<div className="bg-surface-container-low border border-outline-variant rounded-lg p-lg">
<h3 className="font-label-md text-label-md text-outline mb-md uppercase tracking-wider">Account Details</h3>
<div className="space-y-md">
<div className="flex justify-between">
<span className="text-body-md text-secondary">Joined Date</span>
<span className="text-body-md font-semibold text-on-surface">Jan 12, 2022</span>
</div>
<div className="flex justify-between">
<span className="text-body-md text-secondary">Last Login</span>
<span className="text-body-md font-semibold text-on-surface">2 hours ago</span>
</div>
<div className="flex justify-between">
<span className="text-body-md text-secondary">Access Level</span>
<span className="text-body-md font-semibold text-primary">Full Access</span>
</div>
</div>
</div>
<div className="bg-surface-container-low border border-outline-variant rounded-lg p-lg">
<h3 className="font-label-md text-label-md text-outline mb-md uppercase tracking-wider">Storage Usage</h3>
<div className="w-full h-1.5 bg-outline-variant rounded-full overflow-hidden mb-sm">
<div className="h-full bg-primary-container" style={{width: "68%"}}></div>
</div>
<p className="text-body-md text-secondary">6.8 GB of 10 GB used (68%)</p>
<button className="mt-md text-primary font-label-md hover:underline">Upgrade Plan</button>
</div>
<div className="bg-error-container/20 border border-error/20 rounded-lg p-lg">
<h3 className="font-label-md text-label-md text-error mb-md uppercase tracking-wider">Danger Zone</h3>
<p className="text-body-md text-on-surface-variant mb-md leading-snug">Deleting your account will remove all historical data and revoke access from all tenants.</p>
<button className="text-error font-label-md border border-error/40 px-md py-sm rounded w-full hover:bg-error/10 transition-colors">Deactivate Account</button>
</div>
</div>
</div>
</div>
</main>
</div>

<nav className="md:hidden flex justify-around items-center bg-surface border-t border-outline-variant h-[56px] fixed bottom-0 left-0 right-0 z-50">
<button className="flex flex-col items-center gap-xs text-secondary">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="text-[10px] font-semibold">Dashboard</span>
</button>
<button className="flex flex-col items-center gap-xs text-secondary">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="text-[10px] font-semibold">AI Insight</span>
</button>
<button className="flex flex-col items-center gap-xs text-primary">
<span className="material-symbols-outlined" data-icon="settings" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
<span className="text-[10px] font-semibold">Settings</span>
</button>
<button className="flex flex-col items-center gap-xs text-secondary">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="text-[10px] font-semibold">Profile</span>
</button>
</nav>


    </div>
  );
};

export default UserProfileSettings;
