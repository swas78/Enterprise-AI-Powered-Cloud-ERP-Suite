import React from 'react';

interface HeatmapChartProps {
  data: { label: string; value: number; intensity: number }[];
  title?: string;
}

export const HeatmapChart: React.FC<HeatmapChartProps> = ({ data, title }) => {
  return (
    <div className="w-full bg-slate-900/30 p-4 rounded-xl border border-[var(--glass-border)] space-y-3">
      {title && <h4 className="text-xs font-bold text-white">{title}</h4>}
      <div className="grid grid-cols-5 gap-2">
        {data.map((item, idx) => {
          const bgOpacity = Math.min(Math.max(item.intensity, 0.1), 1);
          return (
            <div 
              key={idx} 
              style={{ backgroundColor: `rgba(99, 102, 241, ${bgOpacity})` }}
              className="p-3 rounded-lg text-center font-mono text-[10px] text-white flex flex-col justify-between h-16 border border-indigo-500/20"
            >
              <span className="truncate">{item.label}</span>
              <span className="font-bold">{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeatmapChart;
