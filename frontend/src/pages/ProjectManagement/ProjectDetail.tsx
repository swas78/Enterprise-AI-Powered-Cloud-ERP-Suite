import React from 'react';


const ProjectDetail: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] bg-surface border-b border-outline-variant z-40 sticky top-0">
<div className="flex items-center gap-md flex-1">
<div className="relative w-64 group">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
<input className="w-full h-8 pl-9 pr-md bg-surface-container-low border border-outline-variant rounded-full text-body-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" placeholder="Search project (CMD+K)" type="text"/>
</div>
</div>
<div className="flex items-center gap-lg">
<div className="flex items-center gap-sm">
<button className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150">
<span className="material-symbols-outlined" data-icon="cloud_done">cloud_done</span>
</button>
</div>
<div className="w-px h-6 bg-outline-variant"></div>
<div className="flex items-center gap-sm cursor-pointer hover:bg-surface-container-low p-xs rounded-full transition-colors">
<img className="w-8 h-8 rounded-full object-cover" data-alt="Close-up professional portrait of a tech executive in a minimalist studio setting, clean lighting, soft blue background, representing corporate leadership and precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOeEApJskIaVfwyLo045fvzi6nZAp6dNJa_aCmaMCn85qcaucbBFiIxZ8VLlpWzDv9wuV33UFVHdgRmrKctO0YV78wJiQ6dmHz3pC-ni11VOBU9k7z2oC5uIyqMUGTZ05ypU2vpIoPHPeqUritzA8AbZOkUXXxZAwmIyUHq2RUJozcl3eo7Yz__x9FJ9l_WmuITlY8uPZER4JBGxv3Twv6qRrcen-wNe1DMfACvdils7i48t3et-IPkSD5ry4EDnnh6WRAmGyfXwo"/>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-lg">

<div className="mb-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-lg">
<div>
<nav className="flex items-center gap-xs text-outline font-label-md text-label-md mb-xs">
<span>Projects</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Infrastructure</span>
</nav>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Cloud Infrastructure Migration</h1>
<div className="flex items-center gap-md mt-sm">
<span className="px-sm py-xs bg-primary-container text-on-primary-container rounded font-label-md text-label-md flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px]">sync</span>
                                    In Progress
                                </span>
<div className="flex -space-x-2">
<img className="w-7 h-7 rounded-full border-2 border-white object-cover" data-alt="Headshot of a project manager in a bright, modern office with soft daylight. The aesthetic is clean and corporate, featuring cool tones and sharp focus, reflecting professional excellence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPzZMbK48tlBg_QHa8iQ2GdfhHC9Ixai2HcyRHhlnJN0fKSgyMFDVaOF-mKM0tUmDbrPZK__VbQ59Tm7EJ5T-P4aaL25FVz7zxnY7HPYU9IWBCz6ur-6BOgdst7JTOWmqqVTvnNk6eA2g3Kol8j5SVlIzCL8x4IJg8sCY0mGrewTonmlT-N3N5Jk6pzvWAl4ynFpCIH840--vAfPtfa2sOxDKTzFfa_ecv1rzXrvPUsFtUONlQ7WEGaIUFZUUIBNPdWUceY5LWN8M"/>
<img className="w-7 h-7 rounded-full border-2 border-white object-cover" data-alt="Portrait of a female software engineer with a minimalist artistic feel, soft ambient lighting, high-key white background, and professional executive aura." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzSUSv7LTuwtDrhuiWN0swbUWZ31rZY9iWIgMKAoELF4y8o8J5FCEeRD_tnVAtZwQhmcW2R5AscqZfJTfMExcrRcTlSvqYl65rughKiWAs5YBxdAJD2s_bIJ6FeX-fJZpAVg_ncBbfvIWT42N8jHlAvE4lJGbu4Egm0nL_2xXvGFBvZwznalRbTapOsyda9TPGszVY3ZHLXiM-Laijifx3hg--SLiphx2agD4T_TvkYrFG5yziof_Fdh9NsrafHhIHT57iL1MaOWU"/>
<div className="w-7 h-7 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-on-surface-variant">+4</div>
</div>
<span className="text-on-surface-variant font-label-md text-label-md">Due Oct 24, 2024</span>
</div>
</div>
<div className="flex items-center gap-sm">
<button className="h-10 px-md border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors rounded-lg flex items-center gap-sm">
<span className="material-symbols-outlined">share</span>
<span className="font-label-md text-label-md">Share</span>
</button>
<button className="h-10 px-md bg-primary text-on-primary hover:bg-[#00497d] transition-colors rounded-lg flex items-center gap-sm">
<span className="material-symbols-outlined">edit</span>
<span className="font-label-md text-label-md">Manage Project</span>
</button>
</div>
</div>

<div className="flex border-b border-outline-variant gap-xl">
<button className="px-xs py-sm text-primary font-bold border-b-2 border-primary flex items-center gap-sm">
<span className="material-symbols-outlined text-[20px]">grid_view</span>
                            Overview
                        </button>
<button className="px-xs py-sm text-on-surface-variant font-medium hover:text-primary transition-colors flex items-center gap-sm">
<span className="material-symbols-outlined text-[20px]">list_alt</span>
                            Tasks
                        </button>
<button className="px-xs py-sm text-on-surface-variant font-medium hover:text-primary transition-colors flex items-center gap-sm">
<span className="material-symbols-outlined text-[20px]">flag</span>
                            Milestones
                        </button>
<button className="px-xs py-sm text-on-surface-variant font-medium hover:text-primary transition-colors flex items-center gap-sm">
<span className="material-symbols-outlined text-[20px]">account_tree</span>
                            Dependencies
                        </button>
</div>
</div>

<div className="grid grid-cols-12 gap-lg h-full">

<div className="col-span-12 lg:col-span-9 flex flex-col min-h-0">
<div className="flex items-center justify-between mb-md">
<h3 className="font-title-lg text-title-lg text-on-surface">Execution Board</h3>
<div className="flex gap-sm">
<div className="flex bg-surface-container-low rounded-lg p-1 border border-outline-variant">
<button className="px-sm py-1 bg-white shadow-sm rounded-md text-primary">
<span className="material-symbols-outlined text-[18px]">view_column</span>
</button>
<button className="px-sm py-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">view_list</span>
</button>
</div>
<button className="h-8 px-sm border border-outline-variant rounded-lg flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
<span className="font-label-md text-label-md">Filter</span>
</button>
</div>
</div>
<div className="flex-1 overflow-x-auto scrollbar-hide">
<div className="flex gap-lg pb-md">

<div className="kanban-column flex flex-col">
<div className="flex items-center justify-between mb-md px-xs">
<div className="flex items-center gap-sm">
<span className="w-2 h-2 rounded-full bg-outline"></span>
<span className="font-label-md text-label-md uppercase tracking-wider text-outline">To Do</span>
<span className="text-xs bg-surface-container-high px-1.5 py-0.5 rounded text-outline font-bold">4</span>
</div>
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined">add</span>
</button>
</div>
<div className="space-y-md">

<div className="p-md bg-white border border-outline-variant rounded-xl hover:border-primary-container transition-all cursor-grab active:cursor-grabbing group">
<div className="flex justify-between items-start mb-sm">
<span className="px-sm py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded uppercase tracking-tighter">Security</span>
<button className="text-outline opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</div>
<h4 className="font-title-lg text-[15px] mb-base">Audit IAM Policies</h4>
<p className="text-on-surface-variant text-body-md mb-md line-clamp-2">Review all existing AWS IAM roles and policies for principle of least privilege.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-xs text-outline">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span className="text-xs">Oct 28</span>
</div>
<img className="w-6 h-6 rounded-full object-cover" data-alt="Portrait of a senior developer in a bright studio, focus on professional expression, clean minimalist white space, lighting evokes high-tech precision and cloud-native culture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9hUl9mudK7T_60mcwU7p-dqfE_IVNy0GugG0TQext1CuZH5JPtNccZ68zlsSWC5mRlml2xl4YmziMViX4iIMKrdMkMhm8NtLwaW3fXfQnyAruyiTWMKZmeIRBeBBWkDddjZm7YDQRS5wAgsXbpKiZ1CcMyW5MZNwEkWkCuiM0cvMCqYE80F4BGmvkE268kUS4th5cyvYcD01ZQeZv_F3biuxSpl0G0XbrAIi5Ay6mx9f4bFFIyLSJJwo64EbVuUKFhR-W5XhqAOo"/>
</div>
</div>

<div className="p-md bg-white border border-outline-variant rounded-xl hover:border-primary-container transition-all cursor-grab group">
<div className="flex justify-between items-start mb-sm">
<span className="px-sm py-0.5 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold rounded uppercase tracking-tighter">DevOps</span>
</div>
<h4 className="font-title-lg text-[15px] mb-base">Terraform Workspace Setup</h4>
<p className="text-on-surface-variant text-body-md mb-md line-clamp-2">Initialize new production workspaces and state locking in S3.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-xs text-outline">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span className="text-xs">Oct 30</span>
</div>
<img className="w-6 h-6 rounded-full object-cover" data-alt="Close up of a technical lead in a high-tech corporate setting, bright and efficient lighting, minimal distractions, emphasizing a modern corporate ERP and AI design aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnGpR5lKJKnOT_L0qKBHLuKq6jggT3idxpZzWHGX4AGUs9esnM4HdPKX8IcczeEQ-CIxxYesqmji7zt9SolZtqbayfunZ1HNOrkyyYrEa4eF0uwBBZ64VjvpMXf8Wwbthbp5DDQrot3aJgg8-9URZz7T84s4Kp2Yj2iuHlLNewEks92G8WJt-5ig6YXFpOF5BOC4eFmQmn-LGnJj7lhhUskDjxZBWPzUBlBaKkLJnVeX4jKaLbYsldxZ-TLSzZIyQ7ZFcPlXqQ_SY"/>
</div>
</div>
</div>
</div>

<div className="kanban-column flex flex-col">
<div className="flex items-center justify-between mb-md px-xs">
<div className="flex items-center gap-sm">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="font-label-md text-label-md uppercase tracking-wider text-primary">In Progress</span>
<span className="text-xs bg-primary-fixed px-1.5 py-0.5 rounded text-primary font-bold">2</span>
</div>
</div>
<div className="space-y-md">

<div className="p-md bg-white border-2 border-primary rounded-xl shadow-lg shadow-primary/5 transition-all cursor-grab">
<div className="flex justify-between items-start mb-sm">
<span className="px-sm py-0.5 bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold rounded uppercase tracking-tighter">Database</span>
<span className="text-primary animate-pulse"><span className="material-symbols-outlined text-[18px]">sync</span></span>
</div>
<h4 className="font-title-lg text-[15px] mb-base">RDS to Aurora Migration</h4>
<p className="text-on-surface-variant text-body-md mb-md">Active cutover of staging databases to Aurora Global Cluster.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-xs text-primary font-semibold">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span className="text-xs">65% Done</span>
</div>
<div className="flex -space-x-1">
<img className="w-6 h-6 rounded-full border border-white object-cover" data-alt="Professional profile of a database specialist in a minimalist, light-filled office. The photo uses cool white and electric blue tones to match a surgical, efficient design language." src="https://lh3.googleusercontent.com/aida-public/AB6AXuClIrieE-xt4p9M-A7GHgxEwM3uX_hANHBGnek-i0B3ZV7Cp1YnUdSuZ03V5AXTpXWn3YJ7M_lq6m41YuFuOBFdhlYmTTorLQsJa23_ECgvqgIo1jX4df4z317XAyuSLLha34Do9rUygUu_gfV_19StCznBetO_cHV_3vL68UMUdtOjzonm0yAOcRGf0XTlwChodh_zeLRrGJpKy6e--c14FJe5y81MDYnmRjtqu7nZnNpJf9bUGUKXG-GuzaBkfMUGJkK-FNmqs4E"/>
<img className="w-6 h-6 rounded-full border border-white object-cover" data-alt="Tech leader portrait with modern surgical lighting, clean white background, emphasizing extreme clarity and control within a professional enterprise environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP6ITiKtv_Y5-bo3PegoXJTfTdGzKECGJ449x3byPSXwO8aok8_GZfrd9hoJbvt5srqVjmpp8fa1o0c1GQrjg-hq62PiyIr3RYk6T8fxv6jKOHdx4W5zX50Pmwxag50LnSbJDn9G4jK1OSEt8gGTULwYQu71tXobu4JgxouF1Jazxit-KK7umJ2COmr3RpLI8rUHa9oQVNiZ_-m7_NSqhXuMGFoQyszLzYnM4JsLTt7c8QB0JW2_fUy2eWpMastxiYpOn0O9S4dWg"/>
</div>
</div>
</div>
</div>
</div>

<div className="kanban-column flex flex-col">
<div className="flex items-center justify-between mb-md px-xs">
<div className="flex items-center gap-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Review/QA</span>
<span className="text-xs bg-surface-container-high px-1.5 py-0.5 rounded text-outline font-bold">1</span>
</div>
</div>
<div className="space-y-md">
<div className="p-md bg-white border border-outline-variant rounded-xl hover:border-primary-container transition-all cursor-grab group">
<div className="flex justify-between items-start mb-sm">
<span className="px-sm py-0.5 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded uppercase tracking-tighter">Network</span>
</div>
<h4 className="font-title-lg text-[15px] mb-base">VPN Tunnel Validation</h4>
<div className="flex items-center justify-between">
<div className="flex items-center gap-xs text-tertiary">
<span className="material-symbols-outlined text-[16px]">chat_bubble</span>
<span className="text-xs">3 Comments</span>
</div>
<img className="w-6 h-6 rounded-full object-cover" data-alt="Portrait of a network engineer against a clean, technical background with geometric blue accents. Lighting is crisp and bright, matching a minimalist and efficient corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-ZLArhGYhdcRFZ_HNLJl-3u7ICO0KZ8WuCwWMhUqjdl5iL8mrVibiOblXKDe_qUFl56unqJ_Df6Tgs_vJZZwq2qKzJK-Dq6G8Po-R5fm5QyLXvDHC9Z4MfPxTcj1EYZ2xfZEN3ZIhVqRoZDezqw-yzqPgPrATYpJMwljVxcKHOUZjYIr7vSBi941ZIwgMslBMn6YMl6N37Y_JBnxv94gjjpB_jiabbGxdmEBCpzBYjKC1d5WFLJ_ZN7IaxisUjYg9lejQd_nUIoQ"/>
</div>
</div>
</div>
</div>

<div className="kanban-column flex flex-col">
<div className="flex items-center justify-between mb-md px-xs">
<div className="flex items-center gap-sm">
<span className="w-2 h-2 rounded-full bg-on-tertiary-fixed-variant"></span>
<span className="font-label-md text-label-md uppercase tracking-wider text-tertiary">Completed</span>
<span className="text-xs bg-green-50 px-1.5 py-0.5 rounded text-green-700 font-bold">12</span>
</div>
</div>
<div className="space-y-md opacity-60">
<div className="p-md bg-surface-container-low border border-outline-variant rounded-xl">
<h4 className="font-title-lg text-[15px] mb-base line-through text-outline">VPC Architecture Design</h4>
<div className="flex items-center justify-between">
<span className="text-[10px] text-green-600 font-bold uppercase">Oct 12</span>
<span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<aside className="col-span-12 lg:col-span-3 space-y-lg">

<div className="p-lg bg-white border border-outline-variant rounded-xl">
<h3 className="font-title-lg text-title-lg text-on-surface mb-md">Key Milestones</h3>
<div className="space-y-lg relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-container-high">
<div className="relative pl-lg">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary ring-4 ring-white">
<span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>flag</span>
</div>
<div>
<p className="font-label-md text-label-md text-primary mb-xs">Next: Oct 18</p>
<h4 className="font-body-lg font-bold text-on-surface mb-xs">Staging Env Readiness</h4>
<p className="text-body-md text-on-surface-variant">Validation of all dev workloads in the new cloud substrate.</p>
</div>
</div>
<div className="relative pl-lg">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center text-outline ring-4 ring-white">
<span className="material-symbols-outlined text-[14px]">flag</span>
</div>
<div>
<p className="font-label-md text-label-md text-outline mb-xs">Nov 04</p>
<h4 className="font-body-lg font-bold text-on-surface mb-xs">Production Migration</h4>
<p className="text-body-md text-on-surface-variant">Scheduled window for enterprise-wide cutover.</p>
</div>
</div>
</div>
</div>

<div className="p-lg bg-white border border-outline-variant rounded-xl">
<div className="flex items-center justify-between mb-md">
<h3 className="font-title-lg text-title-lg text-on-surface">Dependencies</h3>
<span className="material-symbols-outlined text-error text-[20px]">warning</span>
</div>
<div className="space-y-sm">
<div className="p-sm bg-error-container/20 border border-error/10 rounded-lg flex gap-md">
<div className="flex-1">
<h4 className="font-label-md text-label-md text-error mb-xs">External Blocker</h4>
<p className="text-body-md text-on-error-container font-semibold">Vendor API Key Approval</p>
<p className="text-[12px] text-on-error-container/70">Awaiting security sign-off from Third-Party provider.</p>
</div>
</div>
<div className="p-sm bg-surface-container-low border border-outline-variant rounded-lg flex gap-md">
<div className="flex-1">
<h4 className="font-label-md text-label-md text-on-surface-variant mb-xs">Internal</h4>
<p className="text-body-md text-on-surface font-semibold">Legacy Data Cleanup</p>
<p className="text-[12px] text-on-surface-variant">Needs to finish before RDS migration.</p>
</div>
</div>
</div>
</div>

<div className="p-lg bg-white border border-outline-variant rounded-xl">
<h3 className="font-title-lg text-title-lg text-on-surface mb-md">Capacity</h3>
<div className="space-y-md">
<div>
<div className="flex justify-between text-body-md mb-xs">
<span className="text-on-surface">Compute Utilization</span>
<span className="font-bold">78%</span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{width: "78%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-body-md mb-xs">
<span className="text-on-surface">Team Bandwidth</span>
<span className="font-bold">92%</span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-error" style={{width: "92%"}}></div>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>

    </div>
  );
};

export default ProjectDetail;
