import React from 'react';


const InventoryCatalog: React.FC = () => {


  return (
    <div className="w-full">
      

<div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
<div>
<nav className="flex items-center gap-2 mb-2">
<span className="font-label-md text-label-md text-outline">Supply Chain</span>
<span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
<span className="font-label-md text-label-md text-primary">Inventory Catalog</span>
</nav>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Inventory Items</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Manage and monitor global stock levels, track item movement, and optimize procurement workflows across all enterprise nodes.</p>
</div>
<div className="flex gap-sm">
<button className="bg-surface border border-outline-variant text-primary px-lg py-sm font-label-md text-label-md rounded flex items-center hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined mr-xs text-[18px]">file_download</span>
                            Export CSV
                        </button>
<button className="bg-primary text-white px-lg py-sm font-label-md text-label-md rounded flex items-center hover:bg-[#0B7DFF] transition-colors shadow-sm">
<span className="material-symbols-outlined mr-xs text-[18px]">add_box</span>
                            Add Item
                        </button>
</div>
</div>

<div className="bg-white border border-outline-variant rounded-xl p-md mb-lg flex flex-wrap items-center gap-lg">
<div className="flex items-center gap-sm min-w-[200px]">
<span className="font-label-md text-label-md text-on-surface-variant">Category:</span>
<select className="bg-surface-container-low border border-outline-variant rounded px-sm py-1 font-body-md text-body-md focus:ring-primary focus:border-primary">
<option>All Categories</option>
<option>Electronics</option>
<option>Raw Materials</option>
<option>Industrial Parts</option>
<option>Packaging</option>
</select>
</div>
<div className="flex items-center gap-sm min-w-[200px]">
<span className="font-label-md text-label-md text-on-surface-variant">Status:</span>
<select className="bg-surface-container-low border border-outline-variant rounded px-sm py-1 font-body-md text-body-md focus:ring-primary focus:border-primary">
<option>All Statuses</option>
<option>In Stock</option>
<option>Low Stock</option>
<option>Out of Stock</option>
</select>
</div>
<div className="flex items-center gap-sm ml-auto">
<span className="font-label-md text-label-md text-on-surface-variant">Sort by:</span>
<button className="text-on-surface hover:text-primary flex items-center gap-1 font-label-md text-label-md">
                            Recent First
                            <span className="material-symbols-outlined text-[16px]">expand_more</span>
</button>
</div>
</div>

<div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-background border-b border-outline-variant">
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider w-[100px]">Thumb</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider min-w-[120px]">Item Code</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider min-w-[250px]">Description</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider min-w-[150px]">Category</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider">UoM</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider">Stock</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider">Status</th>
<th className="px-lg py-md font-label-md text-label-md text-secondary uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="data-row">
<td className="px-lg py-md">
<div className="w-12 h-12 rounded border border-outline-variant bg-surface-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A professional studio product photograph of a high-precision industrial microchip components resting on a pristine white surface. The lighting is bright and technical, reflecting a modern minimalist enterprise aesthetic. Subtle blue highlights accent the metallic traces of the processor, evoking a sense of high-technology and cloud-native efficiency." src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgcng9IjgiIGZpbGw9IiNlOGVhZWQiLz48cGF0aCBkPSJNMTcwIDEzMCBsMzAgNDAgbDIwLTE1IGw0MCA1NSBIMTQweiIgZmlsbD0iI2JkYzFjNiIvPjxjaXJjbGUgY3g9IjI1MCIgY3k9IjEyMCIgcj0iMTgiIGZpbGw9IiNiZGMxYzYiLz48L3N2Zz4=" />
</div>
</td>
<td className="px-lg py-md font-code-sm text-code-sm text-primary">ELC-2049-XT</td>
<td className="px-lg py-md">
<div className="font-title-lg text-on-surface">High-Performance Neural Processor</div>
<div className="text-on-surface-variant text-xs">Gen 4, 12nm architecture, precision thermal sync.</div>
</td>
<td className="px-lg py-md font-body-md">Electronics</td>
<td className="px-lg py-md font-body-md">UNIT</td>
<td className="px-lg py-md font-title-lg text-on-surface">1,240</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-[#16A34A]/10 text-[#16A34A] uppercase tracking-wider">In Stock</span>
</td>
<td className="px-lg py-md text-right">
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">more_vert</button>
</td>
</tr>

<tr className="data-row">
<td className="px-lg py-md">
<div className="w-12 h-12 rounded border border-outline-variant bg-surface-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close-up macro photography of raw industrial carbon fiber rolls in a well-lit futuristic factory environment. The texture of the weave is crisp and detailed, presented with a cool-white and electric-blue color palette. The composition is clean and geometric, emphasizing absolute control and clarity in resource management." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx5L-w3uvTdvxFrKAptk0U6PoT8DdKA0J-xccjATfC2_2k8ADvR4dgEvCvFfNVOc5ZjEgszi0dQyMG8HtmMoARHhGHTX8jchMMfrvJf8A2FvpsTwELUPZoPEV_lDhFg56dRwDtPunVQNfQBiEFpw-7m5bkwBfUPuhG6j17EdCakgLU3H_F5KIevBfy5kCZVh6NHCYjMV1CE0wX5QJbynF09Wxp6e6Zerz6aslJlKcHle3g8bByC-B4D_J6qox0aixhP5jireGHsrE" />
</div>
</td>
<td className="px-lg py-md font-code-sm text-code-sm text-primary">MAT-CF-900</td>
<td className="px-lg py-md">
<div className="font-title-lg text-on-surface">Carbon Fiber Reinforcement Roll</div>
<div className="text-on-surface-variant text-xs">High tensile strength, 50m spool, aerospace grade.</div>
</td>
<td className="px-lg py-md font-body-md">Raw Materials</td>
<td className="px-lg py-md font-body-md">ROLL</td>
<td className="px-lg py-md font-title-lg text-on-surface">12</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-[#F59E0B]/10 text-[#F59E0B] uppercase tracking-wider">Low Stock</span>
</td>
<td className="px-lg py-md text-right">
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">more_vert</button>
</td>
</tr>

<tr className="data-row">
<td className="px-lg py-md">
<div className="w-12 h-12 rounded border border-outline-variant bg-surface-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A specialized industrial motor assembly isolated on a soft gray background with surgical lighting. The design highlights the geometric intersections and precise engineering of the device. The color scheme features clean whites and grays with functional electric blue highlights, embodying the corporate modern DNA of the product." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIWAPUaAo947m-pAg0qSpLFRcItawN55pVdJPU7rVIrmbm6jhcsH_U6oZp-aL2UKf_Xuso5V_qez-_UKYO0bqSfIJm7Z0d27gTi5SkwHo3sNC0uQ6MTV5p7MCAQTw3oxq1npT6mOG7bOXwWS6K9TZHjwlLZBqc41r9gyVfmWqWs1iRWHHn7A9Ri1lWftc46tX0nGjNDNfLRIw00ZuLSLQq-KuFKPaxUxe8gme6I_MsvaYSl3UFSQIFDTqg59EVsmoE-PW2Ihj8BPQ" />
</div>
</td>
<td className="px-lg py-md font-code-sm text-code-sm text-primary">PRT-MTR-X1</td>
<td className="px-lg py-md">
<div className="font-title-lg text-on-surface">Servo Drive Motor Module</div>
<div className="text-on-surface-variant text-xs">Brushless, 400W, integrated optical encoder.</div>
</td>
<td className="px-lg py-md font-body-md">Industrial Parts</td>
<td className="px-lg py-md font-body-md">UNIT</td>
<td className="px-lg py-md font-title-lg text-error">0</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-error/10 text-error uppercase tracking-wider">Out of Stock</span>
</td>
<td className="px-lg py-md text-right">
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">more_vert</button>
</td>
</tr>

<tr className="data-row">
<td className="px-lg py-md">
<div className="w-12 h-12 rounded border border-outline-variant bg-surface-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Modern geometric packaging boxes stacked in a minimalist white warehouse space. The lighting is surgical and bright, casting soft, diffused shadows. The scene uses a restricted color palette of white and cool grays with subtle primary blue accents on the tape, representing professional efficiency and data management." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOVkOks8bP2NLLbf1RNVvZFT7aNIa3eSRdXXlJRcGuTOFnzyYr_X8h9aFLzN6hvSj6FWTl4UqYggU-yKcitZbeD-U3lXkyG-2SrsiqjYYmKdYbNItaBqTbH6q-RW0B8QX7Diyrlmu0f_I16py-_khMfXuT_5-wl5k7YbOLUFFVUqCV9rqC3BBnztVnY91skIbO_0vBpVxseq5Z0D91Q_tIWbqEG_UJOwj6xWhqxOQE2iIeBqa0binx45W-LpG2AW9A9BVUcbLl-iI" />
</div>
</td>
<td className="px-lg py-md font-code-sm text-code-sm text-primary">PKG-BX-SML</td>
<td className="px-lg py-md">
<div className="font-title-lg text-on-surface">Biodegradable Cargo Container (S)</div>
<div className="text-on-surface-variant text-xs">Reinforced paper fiber, moisture resistant coating.</div>
</td>
<td className="px-lg py-md font-body-md">Packaging</td>
<td className="px-lg py-md font-body-md">PACK-25</td>
<td className="px-lg py-md font-title-lg text-on-surface">4,500</td>
<td className="px-lg py-md">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-[#16A34A]/10 text-[#16A34A] uppercase tracking-wider">In Stock</span>
</td>
<td className="px-lg py-md text-right">
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">more_vert</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-surface-container-lowest border-t border-outline-variant px-lg py-md flex items-center justify-between">
<div className="flex items-center gap-md">
<span className="text-on-surface-variant font-label-md text-label-md">Items per page:</span>
<select className="bg-surface-container-low border border-outline-variant rounded px-sm py-1 font-body-md text-body-md">
<option>10</option>
<option>25</option>
<option>50</option>
</select>
</div>
<div className="flex items-center gap-lg">
<span className="text-on-surface-variant font-label-md text-label-md">Page 1 of 42</span>
<div className="flex gap-xs">
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-secondary hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[20px]">first_page</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-secondary hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white transition-colors">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-secondary hover:bg-surface-container-low transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-secondary hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-secondary hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[20px]">last_page</span>
</button>
</div>
</div>
</div>
</div>

<div className="mt-2xl bento-grid">
<div className="col-span-12 lg:col-span-8 bg-white border border-outline-variant rounded-xl p-lg relative overflow-hidden group">
<div className="flex items-start justify-between mb-lg relative z-10">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Stock Threshold Heatmap</h3>
<p className="text-on-surface-variant text-sm">Real-time intensity map of stock depletion rates by region.</p>
</div>
<span className="material-symbols-outlined text-primary text-[32px]">analytics</span>
</div>
<div className="h-48 w-full bg-surface-container rounded-lg flex items-center justify-center relative z-10 border border-dashed border-outline-variant">

<div className="flex items-end gap-1 h-32">
<div className="w-6 bg-primary h-[80%] rounded-t opacity-20"></div>
<div className="w-6 bg-primary h-[40%] rounded-t opacity-40"></div>
<div className="w-6 bg-primary h-[60%] rounded-t opacity-60"></div>
<div className="w-6 bg-primary h-[90%] rounded-t opacity-80"></div>
<div className="w-6 bg-primary h-[100%] rounded-t opacity-100"></div>
<div className="w-6 bg-primary h-[30%] rounded-t opacity-50"></div>
<div className="w-6 bg-primary h-[70%] rounded-t opacity-90"></div>
<div className="w-6 bg-primary h-[20%] rounded-t opacity-30"></div>
<div className="w-6 bg-primary h-[50%] rounded-t opacity-70"></div>
</div>
</div>

<div className="absolute bottom-0 right-0 opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity">
<span className="material-symbols-outlined text-[240px]">grid_4x4</span>
</div>
</div>
<div className="col-span-12 lg:col-span-4 bg-[#0061a4] rounded-xl p-lg text-white flex flex-col shadow-lg relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md mb-xs">Procurement AI</h3>
<p className="text-primary-fixed opacity-90 text-sm mb-xl">Based on current trends, we recommend reordering 240 units of Carbon Fiber Spools.</p>
<div className="space-y-md">
<div className="bg-white/10 backdrop-blur-sm p-md rounded border border-white/20">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-bold uppercase tracking-wider">Urgency Level</span>
<span className="text-xs bg-error text-white px-2 py-0.5 rounded">Critical</span>
</div>
<div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
<div className="bg-error w-[92%] h-full"></div>
</div>
</div>
<button className="w-full bg-white text-primary py-sm font-label-md text-label-md rounded-lg hover:bg-surface-container-low transition-colors mt-lg">
                                    Auto-Generate PO
                                </button>
</div>
</div>
<div className="absolute -right-12 -bottom-12 opacity-10">
<span className="material-symbols-outlined text-[200px]">auto_awesome</span>
</div>
</div>
</div>

    </div>
  );
};

export default InventoryCatalog;
