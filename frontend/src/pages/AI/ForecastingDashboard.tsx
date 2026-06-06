import React from 'react';


const ForecastingDashboard: React.FC = () => {


  return (
    <div className="w-full">
      

<div className="flex flex-col md:flex-row md:items-end justify-between gap-lg">
<div>
<div className="flex items-center gap-sm mb-xs">
<span className="flex h-2 w-2 rounded-full bg-[#16A34A]"></span>
<span className="font-label-md text-secondary">Model Status: Live</span>
<span className="text-outline mx-xs">•</span>
<span className="font-label-md text-outline">Last updated: Today, 04:12 AM</span>
</div>
<h2 className="font-headline-lg text-headline-lg">Demand Forecasting Dashboard</h2>
</div>
<div className="flex items-center gap-md">
<div className="flex flex-col gap-xs">
<label className="font-label-md text-secondary">Select SKU / Category</label>
<select className="bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm font-body-md focus:border-primary focus:ring-1 focus:ring-primary w-64 appearance-none cursor-pointer">
<option>SKU-99281: Ultra Processor X1</option>
<option>SKU-99282: Ultra Processor X2</option>
<option>SKU-10293: Cloud Storage Module</option>
</select>
</div>
<button className="bg-surface-container-lowest border border-outline-variant p-sm rounded-lg hover:bg-surface-container-low transition-colors mt-auto">
<span className="material-symbols-outlined text-secondary">filter_list</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
<div className="bg-white p-lg border border-outline-variant rounded-xl flex flex-col gap-sm">
<span className="text-secondary font-label-md uppercase tracking-wider">MAPE Accuracy</span>
<div className="flex items-baseline gap-sm">
<span className="font-headline-md text-headline-md text-primary">3.2%</span>
<span className="text-[#16A34A] font-label-md flex items-center">
<span className="material-symbols-outlined text-[16px]">arrow_downward</span> 0.4%
                        </span>
</div>
<div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
<div className="bg-[#16A34A] h-full" style={{width: "96.8%"}}></div>
</div>
</div>
<div className="bg-white p-lg border border-outline-variant rounded-xl flex flex-col gap-sm">
<span className="text-secondary font-label-md uppercase tracking-wider">Forecast Bias</span>
<div className="flex items-baseline gap-sm">
<span className="font-headline-md text-headline-md text-primary">+1.1%</span>
<span className="text-[#F59E0B] font-label-md">Optimistic</span>
</div>
<div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
<div className="bg-[#F59E0B] h-full" style={{width: "15%"}}></div>
</div>
</div>
<div className="bg-white p-lg border border-outline-variant rounded-xl flex flex-col gap-sm">
<span className="text-secondary font-label-md uppercase tracking-wider">Next Retrain</span>
<div className="flex items-baseline gap-sm">
<span className="font-headline-md text-headline-md text-primary">02:14:10</span>
<span className="text-outline font-label-md">Scheduled</span>
</div>
<div className="flex items-center gap-xs text-[#1B9CFF]">
<span className="material-symbols-outlined text-[16px] animate-spin">sync</span>
<span className="font-label-md">Retraining Logic Active</span>
</div>
</div>
<div className="bg-white p-lg border border-outline-variant rounded-xl flex flex-col gap-sm">
<span className="text-secondary font-label-md uppercase tracking-wider">Confidence Level</span>
<div className="flex items-baseline gap-sm">
<span className="font-headline-md text-headline-md text-primary">95%</span>
<span className="text-outline font-label-md">Standard</span>
</div>
<div className="flex items-center gap-xs text-[#16A34A]">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="font-label-md">High Statistical Power</span>
</div>
</div>
</div>

<div className="bg-white border border-outline-variant rounded-xl overflow-hidden">
<div className="p-lg border-b border-outline-variant flex justify-between items-center">
<div>
<h3 className="font-title-lg text-title-lg">Historical Demand vs. AI Projection</h3>
<p className="text-secondary font-body-md">Daily units processed with 95% Bayesian Confidence Band</p>
</div>
<div className="flex gap-md">
<div className="flex items-center gap-sm">
<span className="w-3 h-3 rounded-sm border-2 border-dashed border-secondary opacity-50"></span>
<span className="font-label-md text-secondary">Historical</span>
</div>
<div className="flex items-center gap-sm">
<span className="w-3 h-3 rounded-sm bg-[#1B9CFF]"></span>
<span className="font-label-md text-secondary">AI Forecast</span>
</div>
<div className="flex items-center gap-sm">
<span className="w-3 h-6 rounded-sm bg-[#1B9CFF] opacity-10"></span>
<span className="font-label-md text-secondary">Confidence Band</span>
</div>
</div>
</div>
<div className="p-lg chart-container">

<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 400">

<line className="grid-line" x1="0" x2="1000" y1="360" y2="360"></line>
<line className="grid-line" x1="0" x2="1000" y1="280" y2="280"></line>
<line className="grid-line" x1="0" x2="1000" y1="200" y2="200"></line>
<line className="grid-line" x1="0" x2="1000" y1="120" y2="120"></line>
<line className="grid-line" x1="0" x2="1000" y1="40" y2="40"></line>

<line className="hover-indicator" x1="450" x2="450" y1="0" y2="380"></line>
<text className="font-label-md fill-secondary" style={{fontSize: "10px"}} x="455" y="20">FORECAST START</text>

<path className="forecast-band" d="M 450 180 L 500 160 L 550 170 L 600 140 L 650 130 L 700 150 L 750 120 L 800 110 L 850 130 L 900 120 L 950 100 L 1000 110 
                                 L 1000 180 L 950 170 L 900 190 L 850 200 L 800 180 L 750 190 L 700 220 L 650 200 L 600 210 L 550 240 L 500 230 L 450 250 Z"></path>

<polyline className="historical-line" points="0,280 50,300 100,260 150,240 200,250 250,210 300,190 350,220 400,200 450,215"></polyline>

<polyline className="forecast-line" points="450,215 500,195 550,205 600,175 650,165 700,185 750,155 800,145 850,165 900,155 950,135 1000,145"></polyline>

<circle cx="750" cy="155" fill="#1B9CFF" r="6"></circle>
<circle cx="750" cy="155" fill="#1B9CFF" opacity="0.2" r="10">
<animate attributeName="r" dur="2s" from="6" repeatCount="indefinite" to="12"></animate>
<animate attributeName="opacity" dur="2s" from="0.3" repeatCount="indefinite" to="0"></animate>
</circle>
</svg>

<div className="absolute top-[135px] left-[760px] bg-white p-md border border-outline shadow-lg rounded-lg z-10 pointer-events-none">
<p className="font-label-md text-secondary">Sept 24, 2024</p>
<p className="font-title-lg text-on-surface">1,482 Units</p>
<p className="text-[10px] text-[#1B9CFF] font-bold">± 124 (95% CI)</p>
</div>
</div>

<div className="bg-surface-container-low px-lg py-sm flex justify-between items-center text-secondary font-label-md">
<div className="flex gap-xl">
<span>JUN 2024</span>
<span>JUL 2024</span>
<span>AUG 2024</span>
<span className="text-primary font-bold">SEPT 2024 (FCST)</span>
<span>OCT 2024 (FCST)</span>
<span>NOV 2024 (FCST)</span>
</div>
<div className="flex items-center gap-md">
<button className="hover:text-primary transition-colors">1D</button>
<button className="hover:text-primary transition-colors">1W</button>
<button className="text-primary font-bold border-b-2 border-primary">1M</button>
<button className="hover:text-primary transition-colors">1Q</button>
<button className="hover:text-primary transition-colors">YTD</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">

<div className="lg:col-span-1 bg-white border border-outline-variant rounded-xl p-lg">
<div className="flex items-center justify-between mb-lg">
<h4 className="font-title-lg">Model Orchestration</h4>
<span className="material-symbols-outlined text-outline">info</span>
</div>
<div className="space-y-md">
<div className="flex items-center gap-md p-md bg-surface-container-lowest border border-outline-variant rounded-lg">
<div className="w-10 h-10 flex items-center justify-center rounded bg-primary-fixed">
<span className="material-symbols-outlined text-primary">schedule</span>
</div>
<div>
<p className="font-label-md text-on-surface">Next Retrain Window</p>
<p className="text-body-md text-secondary">Today @ 06:26 PM UTC</p>
</div>
</div>
<div className="flex items-center gap-md p-md bg-surface-container-lowest border border-outline-variant rounded-lg">
<div className="w-10 h-10 flex items-center justify-center rounded bg-secondary-container">
<span className="material-symbols-outlined text-secondary">history</span>
</div>
<div>
<p className="font-label-md text-on-surface">Last Training Run</p>
<p className="text-body-md text-secondary">Success • 4.2h elapsed</p>
</div>
</div>
<button className="w-full mt-md py-md border-2 border-dashed border-outline-variant rounded-xl text-secondary font-label-md hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-md">
<span className="material-symbols-outlined">restart_alt</span>
                            Manual Override Retrain
                        </button>
</div>
</div>

<div className="lg:col-span-2 bg-white border border-outline-variant rounded-xl overflow-hidden relative">
<div className="p-lg">
<div className="flex items-center gap-md mb-lg">
<div className="bg-primary-container p-2 rounded">
<span className="material-symbols-outlined text-white">auto_awesome</span>
</div>
<h4 className="font-title-lg">AI Generated Insights</h4>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="p-md bg-surface-container-low rounded-lg border-l-4 border-primary">
<h5 className="font-label-md text-primary uppercase mb-xs">Promotion Impact</h5>
<p className="text-body-md text-on-surface">Projected 12% lift in Week 42 due to seasonal discount alignment observed in regional historical clusters.</p>
</div>
<div className="p-md bg-surface-container-low rounded-lg border-l-4 border-[#16A34A]">
<h5 className="font-label-md text-[#16A34A] uppercase mb-xs">Inventory Health</h5>
<p className="text-body-md text-on-surface">Stock levels are sufficient to meet the 95th percentile forecast upper bound for the next 14 days.</p>
</div>
</div>
<div className="mt-xl flex items-center justify-between p-lg bg-surface-dim rounded-xl">
<div className="flex gap-md items-center">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-primary">data_exploration</span>
</div>
<div>
<p className="font-label-md text-on-surface font-bold">Deep Sensitivity Analysis</p>
<p className="text-body-md text-secondary">Explore how external factors like weather impact this SKU.</p>
</div>
</div>
<button className="px-lg py-sm bg-primary text-white font-label-md rounded hover:bg-[#0B7DFF] transition-colors">
                                View Full Report
                            </button>
</div>
</div>

<div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
<span className="material-symbols-outlined text-[200px] text-primary">trending_up</span>
</div>
</div>
</div>

    </div>
  );
};

export default ForecastingDashboard;
