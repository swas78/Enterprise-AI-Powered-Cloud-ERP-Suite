import { apiFetch } from './api';
import { Project, Task } from '../types/project';

export const projectService = {
  getProjects: async (): Promise<Project[]> => {
    const res = await apiFetch('/api/v1/projects');
    if (!res.ok) throw new Error('Failed to fetch projects');
    const json = await res.json();
    return json.data;
  },

  createProject: async (project: Partial<Project>): Promise<Project> => {
    const res = await apiFetch('/api/v1/projects', {
      method: 'POST',
      body: JSON.stringify(project),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to create project');
    return json.data;
  },

  getProjectTasks: async (projectId: string): Promise<Task[]> => {
    const res = await apiFetch(`/api/v1/projects/${projectId}/tasks`);
    if (!res.ok) throw new Error('Failed to fetch tasks');
    const json = await res.json();
    return json.data;
  },

  createTask: async (task: { projectId: string; name: string; assignedTo?: string | null; status?: string }): Promise<Task> => {
    const res = await apiFetch('/api/v1/projects/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to create task');
    return json.data;
  },

  getProjectVariance: async (projectId: string): Promise<{ spent: number; alarmActive: boolean }> => {
    const res = await apiFetch(`/api/v1/projects/${projectId}/variance`);
    if (!res.ok) throw new Error('Failed to fetch project variance');
    const json = await res.json();
    return json.data;
  },

  updateDependencies: async (taskId: string, dependencies: string[]): Promise<any> => {
    const res = await apiFetch(`/api/v1/projects/tasks/${taskId}/dependencies`, {
      method: 'POST',
      body: JSON.stringify({ dependencies }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to update dependencies');
    return json;
  },
};

export default projectService;
