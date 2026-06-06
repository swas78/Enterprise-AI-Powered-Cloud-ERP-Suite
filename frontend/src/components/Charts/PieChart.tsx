import React from 'react';
import { ResponsiveContainer, PieChart as RePieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface PieChartProps {
  data: { name: string; value: number }[];
  title?: string;
}

const COLORS = ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];

export const PieChart: React.FC<PieChartProps> = ({ data, title }) => {
  return (
    <div className="w-full h-64 bg-slate-900/30 p-4 rounded-xl border border-[var(--glass-border)]">
      {title && <h4 className="text-xs font-bold text-white mb-2">{title}</h4>}
      <ResponsiveContainer width="100%" height="100%">
        <RePieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#fff' }} />
          <Legend wrapperStyle={{ fontSize: 10 }} />
        </RePieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
