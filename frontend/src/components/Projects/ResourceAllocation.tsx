import React from 'react';
import { Employee } from '../../types/hr';
import { Task } from '../../types/project';

interface ResourceAllocationProps {
  employees: Employee[];
  tasks: Task[];
}

export const ResourceAllocation: React.FC<ResourceAllocationProps> = ({ 
  employees, 
  tasks 
}) => {
  const getSimulatedHeatmap = () => {
    const map: Record<string, { employeeName: string; taskCount: number; status: 'Optimal' | 'Overallocated' }> = {};
    
    // Default mock employees if list is empty
    const activeEmployees = employees.length > 0 ? employees : [
      { _id: '1', name: 'Sarah Jenkins' },
      { _id: '2', name: 'Michael Chen' },
      { _id: '3', name: 'Sophia Rodriguez' }
    ] as any[];

    activeEmployees.forEach(emp => {
      map[emp._id] = { employeeName: emp.name, taskCount: 0, status: 'Optimal' };
    });
    
    tasks.forEach(task => {
      if (task.assignedTo && task.status !== 'Done') {
        const empId = typeof task.assignedTo === 'object' ? task.assignedTo._id : task.assignedTo;
        if (map[empId]) {
          map[empId].taskCount += 1;
          if (map[empId].taskCount > 2) {
            map[empId].status = 'Overallocated';
          }
        }
      }
    });

    return Object.keys(map).map(id => ({ employeeId: id, ...map[id] }));
  };

  const heatmapData = getSimulatedHeatmap();

  return (
    <div className="glass-panel p-5 space-y-4">
      <h3 className="text-md font-bold text-white">Workforce Heatmap (Overallocation Check)</h3>
      <div className="space-y-2">
        {heatmapData.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center text-xs p-2.5 bg-slate-900/40 border border-[var(--glass-border)] rounded-lg">
            <span className="font-semibold text-white">{item.employeeName}</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-white">{item.taskCount} tasks</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                item.status === 'Optimal' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
              }`}>{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceAllocation;
