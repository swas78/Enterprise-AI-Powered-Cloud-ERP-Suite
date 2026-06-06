import React, { useState, useRef } from 'react';
import { Task } from '../../types/project';

interface GanttChartProps {
  tasks: Task[];
}

export const GanttChart: React.FC<GanttChartProps> = ({ tasks }) => {
  const [criticalPathActive, setCriticalPathActive] = useState(false);
  const [timeView, setTimeView] = useState<'day' | 'week' | 'month' | 'quarter'>('day');

  const taskScrollRef = useRef<HTMLDivElement>(null);
  const timelineScrollRef = useRef<HTMLDivElement>(null);

  const handleTaskScroll = () => {
    if (taskScrollRef.current && timelineScrollRef.current) {
      timelineScrollRef.current.scrollTop = taskScrollRef.current.scrollTop;
    }
  };

  const handleTimelineScroll = () => {
    if (taskScrollRef.current && timelineScrollRef.current) {
      taskScrollRef.current.scrollTop = timelineScrollRef.current.scrollTop;
    }
  };

  const rowH = 40;  // Row height matching task list rows
  const dates = ['Oct 24', 'Oct 25', 'Oct 26', 'Oct 27', 'Oct 28', 'Oct 29', 'Oct 30', 'Oct 31', 'Nov 01', 'Nov 02', 'Nov 03', 'Nov 04'];

  const getBarColorClass = (status: string, isCritical: boolean) => {
    if (criticalPathActive && isCritical) return 'bg-[#ffdad6] border-2 border-[#ba1a1a] text-[#ba1a1a]';
    switch (status) {
      case 'Done': return 'bg-green-100 border border-green-300 text-green-700';
      case 'In Progress': return 'bg-blue-100 border border-blue-300 text-blue-700';
      case 'Blocked': return 'bg-red-100 border border-red-300 text-red-700';
      default: return 'bg-slate-100 border border-slate-300 text-slate-700';
    }
  };

  const getProgressColorClass = (status: string, isCritical: boolean) => {
    if (criticalPathActive && isCritical) return 'bg-[#ba1a1a]';
    switch (status) {
      case 'Done': return 'bg-[#16a34a]';
      case 'In Progress': return 'bg-[#1b9cff]';
      case 'Blocked': return 'bg-[#ba1a1a]';
      default: return 'bg-[#5d5f5f]';
    }
  };

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col h-[500px]" id="ganttContainer">
      {/* Project Control Bar */}
      <div className="bg-surface px-lg py-sm flex items-center justify-between border-b border-outline-variant select-none">
        <div className="flex items-center gap-lg">
          <h3 className="font-display text-[18px] font-bold text-on-surface">Alpha Phoenix Deployment</h3>
          <div className="flex bg-surface-container rounded p-0.5 border border-outline-variant">
            {(['day', 'week', 'month', 'quarter'] as const).map(view => (
              <button
                key={view}
                onClick={() => setTimeView(view)}
                className={`px-md py-xs text-label-md capitalize rounded transition-colors ${
                  timeView === view
                    ? 'bg-white text-primary font-bold shadow-sm'
                    : 'text-outline hover:text-on-surface'
                }`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-md">
          <label className="flex items-center gap-sm cursor-pointer group">
            <span className="text-label-md text-on-surface-variant font-medium">Critical Path</span>
            <div className="relative">
              <input
                className="sr-only peer"
                id="criticalToggle"
                type="checkbox"
                checked={criticalPathActive}
                onChange={(e) => setCriticalPathActive(e.target.checked)}
              />
              <div className="w-10 h-5 bg-surface-container-highest rounded-full peer-checked:bg-error transition-colors"></div>
              <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
            </div>
          </label>
          <div className="h-6 w-px bg-outline-variant"></div>
          <button className="flex items-center gap-xs px-md py-sm bg-primary text-white text-label-md font-bold rounded hover:bg-primary-fixed-dim transition-colors">
            <span className="material-symbols-outlined text-[18px] text-white">share</span>
            Share View
          </button>
        </div>
      </div>

      {/* Gantt Application Shell */}
      <div className="flex-1 flex overflow-hidden bg-white">
        {/* Left Task Pane */}
        <div className="w-80 flex flex-col border-r border-outline-variant shrink-0 select-none">
          <div className="h-10 border-b border-outline-variant bg-surface flex items-center px-md sticky top-0 z-10">
            <span className="text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Task Description</span>
          </div>
          <div 
            ref={taskScrollRef}
            onScroll={handleTaskScroll}
            className="flex-grow overflow-y-auto custom-scrollbar divide-y divide-outline-variant/30"
          >
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div key={task._id} className="h-10 flex items-center px-md hover:bg-surface-container-low group">
                  <span className="material-symbols-outlined text-[18px] text-outline-variant group-hover:text-primary transition-colors cursor-grab">drag_indicator</span>
                  <span className="ml-sm text-body-md truncate font-medium text-on-surface">{task.name}</span>
                </div>
              ))
            ) : (
              <div className="p-md text-center text-xs text-outline italic">No tasks created.</div>
            )}
          </div>
        </div>

        {/* Right Timeline Pane */}
        <div 
          ref={timelineScrollRef}
          onScroll={handleTimelineScroll}
          className="flex-1 overflow-x-auto overflow-y-auto custom-scrollbar relative bg-surface-bright"
        >
          <div className="min-w-[2000px] h-full flex flex-col">
            {/* Timeline Header */}
            <div className="h-10 border-b border-outline-variant bg-surface flex items-center sticky top-0 z-20">
              <div className="flex">
                {dates.map((date, idx) => (
                  <div 
                    key={idx} 
                    className="w-40 px-sm border-r border-outline-variant/30 text-label-md text-on-surface-variant font-semibold flex-shrink-0"
                  >
                    {date}
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Body Grid */}
            <div 
              className="flex-1 relative overflow-y-hidden"
              style={{
                backgroundImage: 'linear-gradient(to right, #E2E8F0 1px, transparent 1px)',
                backgroundSize: '160px 100%'
              }}
            >
              {/* Dependency SVG lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                {tasks.map((task, idx) => {
                  if (idx > 0 && tasks[idx - 1]) {
                    const prevStart = tasks[idx - 1].startDay || 1;
                    const prevDur = tasks[idx - 1].durationDays || 3;
                    const curStart = task.startDay || 1;
                    
                    const x1 = ((prevStart - 1) * 40) + (prevDur * 40);
                    const y1 = (idx - 1) * rowH + 20;
                    const x2 = (curStart - 1) * 40;
                    const y2 = idx * rowH + 20;

                    // Draw connecting curves if coordinates are sane
                    return (
                      <path
                        key={task._id}
                        d={`M ${x1} ${y1} L ${(x1 + x2)/2} ${y1} L ${(x1 + x2)/2} ${y2} L ${x2} ${y2}`}
                        className={`fill-none stroke-2 ${
                          criticalPathActive && (task.status === 'Blocked' || task.status === 'In Progress')
                            ? 'stroke-[#ba1a1a]'
                            : 'stroke-[#e2e8f0]'
                        }`}
                        strokeWidth="1.5"
                      />
                    );
                  }
                  return null;
                })}
              </svg>

              {/* Task timelines bar rows */}
              <div className="divide-y divide-outline-variant/10">
                {tasks.map((task) => {
                  const startDay = task.startDay || 1;
                  const durationDays = task.durationDays || 3;
                  const barX = (startDay - 1) * 40;
                  const barW = durationDays * 40;
                  const isCritical = task.status === 'Blocked' || task.status === 'In Progress';

                  return (
                    <div key={task._id} className="h-10 flex items-center relative">
                      <div 
                        className={`absolute h-6 rounded shadow-sm flex items-center px-sm transition-transform hover:scale-[1.02] cursor-pointer ${getBarColorClass(task.status, isCritical)}`}
                        style={{ left: `${barX}px`, width: `${barW}px` }}
                      >
                        <div className={`h-1.5 rounded-full mr-2 w-2/3 ${getProgressColorClass(task.status, isCritical)}`}></div>
                        <span className="text-[10px] font-bold uppercase truncate">{task.status}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Current Time Marker */}
              <div className="absolute top-0 bottom-0 left-[240px] w-0.5 bg-primary/40 z-30 pointer-events-none">
                <div className="w-3 h-3 bg-primary rounded-full -ml-[5px] -mt-[5px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      <footer className="h-12 bg-surface-container-low border-t border-outline-variant flex items-center justify-between px-lg select-none">
        <div className="flex items-center gap-xl">
          <div className="flex items-center gap-xs">
            <span className="text-label-md text-outline">Total Tasks:</span>
            <span className="text-label-md font-bold text-on-surface">{tasks.length}</span>
          </div>
          <div className="flex items-center gap-xs">
            <span className="text-label-md text-outline">Duration:</span>
            <span className="text-label-md font-bold text-on-surface">180 Days</span>
          </div>
          <div className="flex items-center gap-xs">
            <span className="text-label-md text-outline">Resource Load:</span>
            <div className="w-24 h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '65%' }}></div>
            </div>
            <span className="text-label-md font-bold text-on-surface">65%</span>
          </div>
        </div>
        <div className="flex items-center gap-md">
          <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-xs">
            <span className="material-symbols-outlined text-[18px]">zoom_in</span>
            <span className="text-label-md">Zoom</span>
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-xs">
            <span className="material-symbols-outlined text-[18px]">filter_alt</span>
            <span className="text-label-md">Filter</span>
          </button>
          <div className="h-6 w-px bg-outline-variant"></div>
          <span className="text-label-md text-outline italic">Last modified: Just now</span>
        </div>
      </footer>
    </div>
  );
};

export default GanttChart;
