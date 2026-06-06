import React from 'react';


const OrgChart: React.FC = () => {


  return (
    <div className="w-full">
      

<header className="flex justify-between items-center w-full px-lg h-[48px] z-50 bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-md">
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">AMDOX</span>
<div className="h-6 w-px bg-outline-variant mx-sm"></div>
<h1 className="font-title-lg text-title-lg text-on-surface">Interactive Org Chart</h1>
</div>
<div className="flex-1 max-w-md mx-xl relative group">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-xl pr-sm py-xs bg-surface-container border border-outline-variant rounded-lg text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Search employees (CMD+K)" type="text" />
<div className="absolute right-sm top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1 border border-outline-variant bg-surface px-1.5 py-0.5 rounded shadow-sm opacity-50">
<span className="text-[10px] font-bold">⌘</span>
<span className="text-[10px] font-bold">K</span>
</div>
</div>
<div className="flex items-center gap-md">
<button className="material-symbols-outlined text-primary hover:bg-surface-container-low p-sm rounded-full transition-colors">notifications</button>
<button className="material-symbols-outlined text-primary hover:bg-surface-container-low p-sm rounded-full transition-colors">help</button>
<button className="material-symbols-outlined text-primary hover:bg-surface-container-low p-sm rounded-full transition-colors">cloud_done</button>
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden border border-outline-variant">
<img alt="User profile" className="w-full h-full object-cover" data-alt="A professional corporate portrait of a female executive in her early 40s, with short dark hair, wearing a navy blue blazer and a light blue blouse. She has a warm, confident expression, set against a blurred minimalist office background with bright, cool lighting consistent with a modern enterprise environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj52Dwdm3qBHxsz_FfrJADEy9Ayb51q4F6chkfjnwwwRcED8ygOvblvvjL5zXg_hKU4ac2_3UYSkzOuOz0xe1Km1Ne2I6k6uRt0k2uDFmoW67QdH4mh5hd8o4CNj3pSqbYcKQRW67Uf122X-HZrPt_pXXWMwt14PAfW_rc3GE8NOA2vy9rL_RIf7sMvGX3bgoXlKKhKA_3GIaxFPsXZJ6joN0bjgBWRsnxs40Kgikc6BCqII_1tFYEaMCkNx8a43B5rq5StIdya6g" />
</div>
</div>
</header>

<div className="absolute top-20 right-8 z-40 flex flex-col gap-sm">
<div className="glass-panel p-xs rounded-xl flex flex-col gap-xs shadow-lg">
<button className="p-sm hover:bg-surface-container-high rounded-lg text-primary transition-colors" id="zoom-in" title="Zoom In">
<span className="material-symbols-outlined">add</span>
</button>
<button className="p-sm hover:bg-surface-container-high rounded-lg text-primary transition-colors" id="zoom-out" title="Zoom Out">
<span className="material-symbols-outlined">remove</span>
</button>
<div className="h-px bg-outline-variant mx-sm"></div>
<button className="p-sm hover:bg-surface-container-high rounded-lg text-primary transition-colors" id="center-view" title="Center Chart">
<span className="material-symbols-outlined">center_focus_strong</span>
</button>
</div>
<div className="glass-panel p-xs rounded-xl flex flex-col gap-xs shadow-lg">
<button className="p-sm hover:bg-surface-container-high rounded-lg text-primary transition-colors" id="toggle-view" title="Toggle View Mode">
<span className="material-symbols-outlined" id="view-icon">grid_view</span>
</button>
</div>
</div>

<div className="px-xl py-sm bg-surface-container-lowest border-b border-outline-variant flex justify-between items-center z-20">
<div className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md">
<span>Global Corp</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span>Engineering</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-primary font-bold">Systems Architecture</span>
</div>
<div className="flex gap-md items-center">
<div className="flex items-center gap-sm">
<span className="text-on-surface-variant font-label-md">Total Count:</span>
<span className="font-bold text-primary">124</span>
</div>
<button className="flex items-center gap-xs px-md py-xs border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-sm">filter_alt</span>
<span className="font-label-md">Filters</span>
</button>
</div>
</div>

<div className="flex-1 overflow-hidden relative" id="canvas-container">
<div className="absolute inset-0 origin-top-left" id="org-canvas" style={{width: "5000px", height: "5000px", transform: "translate(100px, 100px) scale(1)"}}>
<svg className="absolute inset-0 pointer-events-none" id="svg-connectors" style={{width: "100%", height: "100%"}}></svg>

<div className="absolute left-[500px] top-[100px] employee-card-container" data-id="1">
<div className="employee-card bg-surface border border-outline-variant rounded-xl p-md shadow-sm flex items-center gap-md w-[280px]">
<div className="employee-avatar w-12 h-12 rounded-full border-2 border-primary-container p-0.5 shrink-0 overflow-hidden">
<img className="w-full h-full object-cover rounded-full" data-alt="A studio portrait of a high-ranking male CEO in his late 50s. He has salt-and-pepper hair, wearing a charcoal grey tailored suit and a crisp white shirt without a tie. His expression is visionary and calm, lit by a soft key light that emphasizes the professional and high-status aesthetic of AMDOX's corporate leadership." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9hF8O_84irTaRKBWt31jCvrzo22IM4lBNgtx7mT9sQ689kzvTazWu2yJDq3jIz8V7jjAjKtr4Uuz-jGKLPqF9PXzbXsKifrpdscEqT-wEH_wakH5Z0hzt6JFq6CQBpgpB-8qze1Px7i6Ou6bL3U9zviBMIr3LT9I7rJJHIhYhW4QYqqtAsEtKeupdV0B1e5iHP3l6UmEnwRAtgJejQJDqR90UeqAOoDXrwYzldGwqC-ezuzBls8xx7_7MxcDGUeIuE5GHnsjx-yg" />
</div>
<div className="employee-details overflow-hidden">
<p className="font-title-lg text-title-lg truncate leading-none">Sarah Chen</p>
<p className="font-label-md text-label-md text-primary mt-1">Chief Executive Officer</p>
<div className="flex gap-1 mt-2">
<span className="px-2 py-0.5 bg-surface-container rounded text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Leadership</span>
</div>
</div>
</div>
</div>

<div className="absolute left-[200px] top-[250px] employee-card-container" data-id="2" data-parent="1">
<div className="employee-card bg-surface border border-outline-variant rounded-xl p-md shadow-sm flex items-center gap-md w-[280px]">
<div className="employee-avatar w-12 h-12 rounded-full border-2 border-outline-variant p-0.5 shrink-0 overflow-hidden">
<img className="w-full h-full object-cover rounded-full" data-alt="Close up professional headshot of a female technologist in her late 30s. She has a modern glasses and a friendly, intelligent look. Wearing a sleek black tech-focused zip-up, her look is modern and efficient. The lighting is bright and clean, reflecting a high-performance engineering environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIWHAVmpApVIqgMaYA0Ro5ZzCKvITdNb6dLHOTRUegpI1Ul3FcwKkPvkntHp2L3QRkFsWuInyNNbGwwIW8-oBMWGbtezK2LLDZXxM2ntldUswBKe4k9zpX3IRsO66Mzv2bnbtIflwwAFqIZiSixHcZOtuGEf4dVIoq5cuF6hbfRNIwYygtmcz8ZAYmzLjf6JVBtuiwbq_S99uEdUyW5p1qT-G8Y_ytTIeQKnKzn-AoR1_IgADMFLmw5Tg8uOI4ZHf-WIYmyQmSR20" />
</div>
<div className="employee-details overflow-hidden">
<p className="font-title-lg text-title-lg truncate leading-none">Marcus Thorne</p>
<p className="font-label-md text-label-md text-primary mt-1">Chief Technology Officer</p>
</div>
</div>
</div>
<div className="absolute left-[800px] top-[250px] employee-card-container" data-id="3" data-parent="1">
<div className="employee-card bg-surface border border-outline-variant rounded-xl p-md shadow-sm flex items-center gap-md w-[280px]">
<div className="employee-avatar w-12 h-12 rounded-full border-2 border-outline-variant p-0.5 shrink-0 overflow-hidden">
<img className="w-full h-full object-cover rounded-full" data-alt="Portrait of an experienced male executive in his early 50s. He is wearing a light grey business suit with a subtle pattern. His demeanor is organized and professional. The background is a clean, minimalist blue-toned office space, aligning with the AMDOX corporate branding and precision minimalism style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ6MMiRv27jSJGXyCJtedqHsdt6BKGyLkr2uU2y-M8aNOQp67Dd5xrTW1MToTQ1DVfsJduQiVMSsQE_AsM5C3o3KFDWjsAgawkZ6jwFDR1uzHNvV9RmU-w1z7nhgF2S8xYRkfB7YdyBt0jWzFjCyBNo9bJti97DWs9-etK_QdzgOFB7K7nLvCPflhHegZv9gJHAQ0xqE31vLGqcyYw24sdfLKSIpflkU-AfUytaYJSeigUuHXbm-KFwg7LUALxAxArf4kk9oNCmVk" />
</div>
<div className="employee-details overflow-hidden">
<p className="font-title-lg text-title-lg truncate leading-none">Elena Rodriguez</p>
<p className="font-label-md text-label-md text-primary mt-1">Chief Operating Officer</p>
</div>
</div>
</div>

<div className="absolute left-[50px] top-[400px] employee-card-container" data-id="4" data-parent="2">
<div className="employee-card bg-surface border border-outline-variant rounded-xl p-md shadow-sm flex items-center gap-md w-[280px]">
<div className="employee-avatar w-12 h-12 rounded-full border-2 border-outline-variant p-0.5 shrink-0 overflow-hidden">
<img className="w-full h-full object-cover rounded-full" data-alt="A portrait of a young, ambitious female software engineer. She is wearing a modern casual office outfit, with a navy blue t-shirt and light blue denim jacket. Her expression is focused and energetic. The style is tech-forward and clean, with soft natural light coming from a nearby window in a high-tech office." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX5f-x1dyDu0jTEuqn9yqCAolgy9axeQri1dakks9Xy1BI8QRQRxaTGiS-WTP0RqE54SHWIqaMT3RPQlBBC54zAwAlATqPXWiAlnQQgIFe0lietA5JWIwIIdGNgta1Rx7XYJSvBkBIOKmArsmlqPG-BbyupEUybgVFNjBoOfC0gWDWZCST55vPKkhwIsO_rpUg1VegHDCbGX5dglrGUOGKeAf2aGppBkmjdUbg4hohhFPjV633Z43tp3Uo3YyMF-WXpiXY_a7ZEWA" />
</div>
<div className="employee-details overflow-hidden">
<p className="font-title-lg text-title-lg truncate leading-none">David Park</p>
<p className="font-label-md text-label-md text-primary mt-1">VP of Engineering</p>
</div>
</div>
</div>
<div className="absolute left-[350px] top-[400px] employee-card-container" data-id="5" data-parent="2">
<div className="employee-card bg-surface border border-outline-variant rounded-xl p-md shadow-sm flex items-center gap-md w-[280px]">
<div className="employee-avatar w-12 h-12 rounded-full border-2 border-outline-variant p-0.5 shrink-0 overflow-hidden">
<img className="w-full h-full object-cover rounded-full" data-alt="A professional headshot of a male data scientist with glasses. He is wearing a white dress shirt and looking thoughtfully at the camera. The aesthetic is clean and surgical, with a restricted color palette of white and blue, reflecting a precise and data-driven corporate culture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx9dFYaY8ocf93PY18OaC6eEyyavDET3yfOEgyqIiiqmVJGHMG1NLI5GWv-1BbJC6ESv7eMHHLOU6gQ2gQsIm9XrjxCgGgn2V_A9EsFKocbYWBLg4Vs3194sMoDN0VOsGEUNzaYr4MslSVKKrZsvsuuTyseEhgbM48pqmYU9lkNKs-xHJCim-U6Ag9E7KRp3kS26FVe9Tv7OfA2NXIYrBpxJPkzud0g3HjlOvXaMx71ryncaAsoS3Eh8sGD0VJlU48IFDPiYTK9Ew" />
</div>
<div className="employee-details overflow-hidden">
<p className="font-title-lg text-title-lg truncate leading-none">Julian Vane</p>
<p className="font-label-md text-label-md text-primary mt-1">Director of Product</p>
</div>
</div>
</div>
<div className="absolute left-[700px] top-[400px] employee-card-container" data-id="6" data-parent="3">
<div className="employee-card bg-surface border border-outline-variant rounded-xl p-md shadow-sm flex items-center gap-md w-[280px]">
<div className="employee-avatar w-12 h-12 rounded-full border-2 border-outline-variant p-0.5 shrink-0 overflow-hidden">
<img className="w-full h-full object-cover rounded-full" data-alt="Headshot of a professional human resources director, a woman in her 40s with a warm and approachable expression. She's wearing a cream-colored silk blouse. The lighting is bright and even, reinforcing the light-filled and corporate modern aesthetic of the AMDOX environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCipsQaI13o_DvQsbIEFwwI6f4JMWsvNAZ70PMOWdHwLGBsOYAnJSyvjLLoCEv-cAeL30CGtqylRTsZiXEa-r7zGaQ-Lol_cbuwRTAOzB07uqqmKm2nmnV4Kui7CS2AyAFmffKuR5U3tvd77nPGK_dZ0G7khuH4kq--Mg6Zdt8HNeoOiiM0czs9EaYbhnDLFJfK_CYi4VyGZSP6fipwryOOv5oMzm0L5fsv1ULt6-mKrUW-85laJKteN2TmLe2Ob5VA8c_rYmfshHw" />
</div>
<div className="employee-details overflow-hidden">
<p className="font-title-lg text-title-lg truncate leading-none">Aisha Malik</p>
<p className="font-label-md text-label-md text-primary mt-1">Director of HR</p>
</div>
</div>
</div>
<div className="absolute left-[950px] top-[400px] employee-card-container" data-id="7" data-parent="3">
<div className="employee-card bg-surface border border-outline-variant rounded-xl p-md shadow-sm flex items-center gap-md w-[280px]">
<div className="employee-avatar w-12 h-12 rounded-full border-2 border-outline-variant p-0.5 shrink-0 overflow-hidden">
<img className="w-full h-full object-cover rounded-full" data-alt="Portrait of a supply chain manager, a male in his early 40s. He is wearing a light blue polo shirt and has a focused, efficient demeanor. The setting is a clean, modern logistics office with technical motifs, reflecting the precision minimalism and absolute control themes of the design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoRCcmrOL7u5eBlqO4VqRTfsnOXTsx8E1lIivJNxU562lFs5wwwg4-PYAhvLNQxKLNPVFLYZF7fl34ILLO3btYdC0LygEeCsdARFF_u9CuA1XhY2WPbBqNAZ9xTVN0PK62fSoeSffOaXBrcdZ2XVd_NWZeRpW4kZqCxxhb3F1Qb8_fGZhGTPOyoqKbwmIWqqK_lpLI9MZhOD2kjxJF8UAGz7UQduIjHgUWIjXfE52s4izQPiq5QHtPojLs50LbiRIU6wic45x1NmQ" />
</div>
<div className="employee-details overflow-hidden">
<p className="font-title-lg text-title-lg truncate leading-none">Liam Foster</p>
<p className="font-label-md text-label-md text-primary mt-1">Director of Supply Chain</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-8 z-40">
<div className="glass-panel p-md rounded-xl shadow-lg border border-outline-variant w-40 h-24 relative overflow-hidden flex flex-col items-center justify-center">
<div className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">Canvas Map</div>
<div className="w-full h-full bg-surface-container rounded-lg border border-outline-variant/50 relative">
<div className="absolute border-2 border-primary bg-primary/5 pointer-events-none" id="mini-viewport" style={{width: "30%", height: "30%", top: "20%", left: "20%"}}></div>
</div>
</div>
</div>

<footer className="h-8 bg-surface-container-lowest border-t border-outline-variant px-md flex items-center justify-between z-50">
<div className="flex items-center gap-md">
<div className="flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-success bg-opacity-20 animate-pulse border border-[#16A34A]"></span>
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">System Synced</span>
</div>
<span className="text-[10px] text-outline">|</span>
<span className="text-[10px] font-label-md text-on-surface-variant">Last Update: 2m ago</span>
</div>
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">cloud_done</span>
<span className="text-[10px] font-label-md text-on-surface-variant">Version 4.2.0-stable</span>
</div>
</footer>

    </div>
  );
};

export default OrgChart;
