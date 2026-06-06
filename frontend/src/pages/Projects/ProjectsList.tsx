import React, { useState, useEffect } from 'react';
import ProjectList from '../../components/Projects/ProjectList';
import ProjectForm from '../../components/Projects/ProjectForm';
import GanttChart from '../../components/Projects/GanttChart';
import BudgetTracker from '../../components/Projects/BudgetTracker';
import ResourceAllocation from '../../components/Projects/ResourceAllocation';
import projectService from '../../services/projectService';
import hrService from '../../services/hrService';
import { Project, Task } from '../../types/project';
import { Employee } from '../../types/hr';

const TaskForm: React.FC<{
  projectId: string;
  employees: Employee[];
  onTaskCreated: (task: Task) => void;
}> = ({ projectId, employees, onTaskCreated }) => {
  const [taskName, setTaskName] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState<'To Do' | 'In Progress' | 'Blocked' | 'Done'>('To Do');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskName) return;
    setLoading(true);
    try {
      const newTask = await projectService.createTask({
        projectId,
        name: taskName,
        assignedTo: assignedTo || null,
        status
      });
      onTaskCreated(newTask);
      setTaskName('');
      setAssignedTo('');
      setStatus('To Do');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-4 flex flex-col md:flex-row gap-4 items-end bg-slate-900/40 border border-[var(--glass-border)] rounded-lg">
      <div className="flex-1 w-full">
        <label className="block text-xs font-bold text-slate-400 mb-1">Task Name</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
          placeholder="Deploy staging server"
          className="w-full p-2 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-xs text-white"
        />
      </div>
      <div className="w-full md:w-48">
        <label className="block text-xs font-bold text-slate-400 mb-1">Assignee</label>
        <select
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          className="w-full p-2 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-xs text-white"
        >
          <option value="">Unassigned</option>
          {employees.map(emp => (
            <option key={emp._id} value={emp._id}>{emp.name}</option>
          ))}
        </select>
      </div>
      <div className="w-full md:w-36">
        <label className="block text-xs font-bold text-slate-400 mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as any)}
          className="w-full p-2 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-xs text-white"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Blocked">Blocked</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold w-full md:w-auto h-9"
      >
        {loading ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  );
};

export const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  
  const [activeTab, setActiveTab] = useState<'overview' | 'gantt' | 'resources'>('overview');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const initData = async () => {
      try {
        const [projList, empList] = await Promise.all([
          projectService.getProjects(),
          hrService.getEmployees().catch(() => [])
        ]);
        setProjects(projList);
        setEmployees(empList);
        if (projList.length > 0) {
          setSelectedProjectId(projList[0]._id);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to initialize project management data');
      } finally {
        setLoading(false);
      }
    };
    initData();
  }, []);

  useEffect(() => {
    if (selectedProjectId) {
      const loadTasks = async () => {
        try {
          const projectTasks = await projectService.getProjectTasks(selectedProjectId);
          setTasks(projectTasks);
        } catch (err: any) {
          setError(err.message || 'Failed to load project tasks');
        }
      };
      loadTasks();
    } else {
      setTasks([]);
    }
  }, [selectedProjectId]);

  const handleCreateProject = async (name: string, budget: number) => {
    try {
      const newProj = await projectService.createProject({
        name,
        budget,
        spent: 0,
        startDate: new Date()
      });
      setProjects(prev => [...prev, newProj]);
      setSelectedProjectId(newProj._id);
    } catch (err: any) {
      setError(err.message || 'Failed to create project');
    }
  };

  const handleTaskCreated = (newTask: Task) => {
    setTasks(prev => [...prev, newTask]);
  };

  const activeProject = projects.find(p => p._id === selectedProjectId) || null;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] animate-pulse">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
        <p className="text-slate-400 font-medium">Loading project management systems...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="pb-4 border-b border-[var(--glass-border)]">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Project Portfolio Management</h1>
        <p className="text-[var(--text-secondary)] mt-1 font-medium">Strategic enterprise-wide execution, Gantt timelines, and resource overallocation check.</p>
      </header>

      {error && (
        <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold rounded-xl flex items-center gap-3">
          <span className="material-symbols-outlined">error</span>
          <p>{error}</p>
        </div>
      )}

      {/* Sub Tabs */}
      <div className="flex gap-2 border-b border-[var(--glass-border)] pb-2 overflow-x-auto">
        {[
          { id: 'overview', label: 'Project Register' },
          { id: 'gantt', label: 'Gantt Timeline' },
          { id: 'resources', label: 'Resource Heatmap' }
        ].map(sub => (
          <button
            key={sub.id}
            onClick={() => setActiveTab(sub.id as any)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
              activeTab === sub.id
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                : 'text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            {sub.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <ProjectList
                projects={projects}
                selectedProjectId={selectedProjectId}
                onSelectProject={setSelectedProjectId}
              />
              <ProjectForm onCreateProject={handleCreateProject} />
            </div>
            <div className="lg:col-span-2 space-y-6">
              {activeProject ? (
                <>
                  <div className="glass-panel p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white">{activeProject.name}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{activeProject.description || 'No description provided.'}</p>
                    <div className="grid grid-cols-3 gap-4 text-xs">
                      <div>
                        <p className="text-[var(--text-muted)]">Budget</p>
                        <p className="text-lg font-bold text-white font-mono">${activeProject.budget.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-[var(--text-muted)]">Actual Spent</p>
                        <p className="text-lg font-bold text-white font-mono">${activeProject.spent.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-[var(--text-muted)]">Start Date</p>
                        <p className="text-lg font-bold text-white font-mono">{new Date(activeProject.startDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                  <BudgetTracker activeProject={activeProject} />
                </>
              ) : (
                <div className="glass-panel p-6 text-center text-slate-400">
                  Select a project or create a new one to view details.
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'gantt' && (
          <div className="space-y-6">
            {activeProject ? (
              <>
                <TaskForm 
                  projectId={selectedProjectId}
                  employees={employees}
                  onTaskCreated={handleTaskCreated}
                />
                <GanttChart tasks={tasks} />
              </>
            ) : (
              <div className="glass-panel p-6 text-center text-slate-400">
                Select a project or create a new one to view Gantt charts.
              </div>
            )}
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="space-y-6">
            <ResourceAllocation employees={employees} tasks={tasks} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsList;
