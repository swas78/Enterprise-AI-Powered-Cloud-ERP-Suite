import { projectRepository } from '../../repositories/project/projectRepository';
import { taskRepository } from '../../repositories/project/taskRepository';
import logger from '../../utils/logger';

export class ProjectService {
  
  // Recursively checks task dependencies to detect cycles (DFS Cycle Detection)
  public static async checkDependencyCycle(
    taskId: string,
    proposedDependencies: string[],
    visited = new Set<string>(),
    stack = new Set<string>()
  ): Promise<boolean> {
    // If proposed task is already in the current traversal stack, a cycle is detected
    if (stack.has(taskId)) return true;
    if (visited.has(taskId)) return false;

    visited.add(taskId);
    stack.add(taskId);

    // If validating proposed dependencies directly, evaluate them
    const depsToQuery = proposedDependencies.length > 0 ? proposedDependencies : [];
    
    // Otherwise, load stored task dependencies from DB
    if (proposedDependencies.length === 0) {
      const task = await taskRepository.findById(taskId);
      if (task) {
        task.dependencies.forEach(d => depsToQuery.push(d.toString()));
      }
    }

    for (const depId of depsToQuery) {
      const cycleDetected = await this.checkDependencyCycle(depId, [], visited, stack);
      if (cycleDetected) return true;
    }

    stack.delete(taskId);
    return false;
  }

  // Create or update task dependencies with strict DAG validation
  public static async updateTaskDependencies(
    tenantId: string,
    taskId: string,
    dependencies: string[]
  ) {
    logger.info(`📋 Validating DAG task dependencies for Task: ${taskId} | Tenant: ${tenantId}`);

    // Cycle detection check
    const isCyclic = await this.checkDependencyCycle(taskId, dependencies);
    if (isCyclic) {
      throw new Error('DAG Validation Mismatch: Cyclical dependency detected. A task cannot depend on its own descendents.');
    }

    // Save dependencies
    const task = await taskRepository.update(
      { _id: taskId, tenantId },
      { $set: { dependencies } },
      { new: true }
    );

    logger.info(`📋 Successfully mapped DAG dependencies for Task: ${task?.name}`);
    return task;
  }

  // Compile resource allocation details & highlight overallocated FTEs (Heatmap metadata)
  public static async getResourceHeatmap(tenantId: string) {
    logger.info(`📊 Compiling resource utilization heatmap data | Tenant: ${tenantId}`);

    // Fetch all active tasks that are not 'Done'
    const activeTasks = await taskRepository.find({
      tenantId,
      status: { $in: ['To Do', 'In Progress', 'Blocked'] },
      assignedTo: { $ne: null },
    }, null, { populate: 'assignedTo' });

    // Compile active tasks count per employee
    const allocationMap = new Map<string, { employeeName: string; taskCount: number; status: string }>();

    activeTasks.forEach((task) => {
      const emp = task.assignedTo as any;
      if (!emp) return;

      const empId = emp._id.toString();
      const current = allocationMap.get(empId) || {
        employeeName: emp.name,
        taskCount: 0,
        status: 'Optimal',
      };

      current.taskCount += 1;
      
      // If employee is assigned to more than 2 concurrent active tasks, flag as overallocated (heatmap critical zone)
      if (current.taskCount > 2) {
        current.status = 'Overallocated';
      }

      allocationMap.set(empId, current);
    });

    const heatmap = Array.from(allocationMap.entries()).map(([employeeId, data]) => ({
      employeeId,
      ...data,
    }));

    return heatmap;
  }

  // Check budget spending margins and return variance metrics
  public static async getProjectBudgetVariance(tenantId: string, projectId: string) {
    const project = await projectRepository.findOne({ _id: projectId, tenantId });
    if (!project) {
      throw new Error('Project record not found.');
    }

    const variance = project.budget - project.spent;
    const usagePercentage = (project.spent / project.budget) * 100;
    
    // Alarms trigger if expenditure exceeds 110% of allocations
    const alarmActive = project.spent > project.budget * 1.10;

    if (alarmActive) {
      logger.warn(`🚨 Project Budget Alarm: "${project.name}" has exceeded initial budget by ${usagePercentage.toFixed(2)}%!`);
    }

    return {
      projectName: project.name,
      budget: project.budget,
      spent: project.spent,
      variance,
      usagePercentage: Number(usagePercentage.toFixed(2)),
      alarmActive,
    };
  }
}
export default ProjectService;
