import React from 'react';
import { ResponsiveContainer, BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface BarChartProps {
  data: any[];
  xKey: string;
  yKey: string;
  title?: string;
}

export const BarChart: React.FC<BarChartProps> = ({ data, xKey, yKey, title }) => {
  return (
    <div className="w-full h-64 bg-slate-900/30 p-4 rounded-xl border border-[var(--glass-border)]">
      {title && <h4 className="text-xs font-bold text-white mb-2">{title}</h4>}
      <ResponsiveContainer width="100%" height="100%">
        <ReBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey={xKey} stroke="#94a3b8" fontSize={10} />
          <YAxis stroke="#94a3b8" fontSize={10} />
          <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#fff' }} />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <Bar dataKey={yKey} fill="#06b6d4" />
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
