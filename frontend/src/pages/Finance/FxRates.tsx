import React from 'react';


const FxRates: React.FC = () => {


  return (
    <div className="w-full">
      
<div className="flex justify-between items-center">
<h3 className="font-title-lg text-title-lg">Recent Order History</h3>
<button className="text-primary font-label-md text-label-md flex items-center gap-xs">
                        View Full Audit Log
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="overflow-hidden border border-outline-variant rounded-xl bg-surface-container-lowest">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-low sticky top-0 border-b border-outline-variant">
<tr>
<th className="px-md py-3 text-label-md font-label-md text-secondary uppercase">Order ID</th>
<th className="px-md py-3 text-label-md font-label-md text-secondary uppercase">Pair</th>
<th className="px-md py-3 text-label-md font-label-md text-secondary uppercase">Type</th>
<th className="px-md py-3 text-label-md font-label-md text-secondary uppercase">Execution Rate</th>
<th className="px-md py-3 text-label-md font-label-md text-secondary uppercase">Status</th>
<th className="px-md py-3 text-label-md font-label-md text-secondary uppercase text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
<tr className="hover:bg-surface-container-low transition-colors duration-150">
<td className="px-md py-4 font-mono text-xs">#FX-82910</td>
<td className="px-md py-4 font-bold">EUR/USD</td>
<td className="px-md py-4">Spot Market</td>
<td className="px-md py-4">1.0922</td>
<td className="px-md py-4">
<span className="px-2 py-1 rounded bg-emerald-50 text-[#16A34A] text-[10px] font-bold uppercase tracking-wider">Completed</span>
</td>
<td className="px-md py-4 text-right font-semibold">€ 250,000.00</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors duration-150">
<td className="px-md py-4 font-mono text-xs">#FX-82911</td>
<td className="px-md py-4 font-bold">USD/JPY</td>
<td className="px-md py-4">Limit Order</td>
<td className="px-md py-4">148.50</td>
<td className="px-md py-4">
<span className="px-2 py-1 rounded bg-amber-50 text-[#F59E0B] text-[10px] font-bold uppercase tracking-wider flex items-center w-fit gap-1">
<span className="material-symbols-outlined text-[12px] animate-spin">sync</span>
                                        Retrying
                                    </span>
</td>
<td className="px-md py-4 text-right font-semibold">$ 1,200,000.00</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors duration-150">
<td className="px-md py-4 font-mono text-xs">#FX-82912</td>
<td className="px-md py-4 font-bold">GBP/USD</td>
<td className="px-md py-4">Spot Market</td>
<td className="px-md py-4">1.2738</td>
<td className="px-md py-4">
<span className="px-2 py-1 rounded bg-slate-100 text-[#475569] text-[10px] font-bold uppercase tracking-wider">In Review</span>
</td>
<td className="px-md py-4 text-right font-semibold">£ 85,000.00</td>
</tr>
</tbody>
</table>
</div>

    </div>
  );
};

export default FxRates;
