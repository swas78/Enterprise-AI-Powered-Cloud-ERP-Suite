import { BaseRepository } from '../../repositories/baseRepository';
import { Task, ITask } from '../../models/project/Task';
import { CreateTaskDTO, UpdateTaskDTO } from '../../types/project';

const taskRepo = new BaseRepository<ITask>(Task);

export class TaskService {
  static async getTasksByProject(projectId: string, tenantId: string): Promise<ITask[]> {
    return taskRepo.find({ projectId, tenantId });
  }

  static async getTaskById(id: string, tenantId: string): Promise<ITask | null> {
    return taskRepo.findOne({ _id: id, tenantId });
  }

  static async createTask(dto: CreateTaskDTO): Promise<ITask> {
    return taskRepo.create({ ...dto, status: 'todo' });
  }

  static async updateTask(id: string, tenantId: string, dto: UpdateTaskDTO): Promise<ITask | null> {
    const update: any = { $set: dto };
    if (dto.status === 'done' && !dto.completedAt) {
      update.$set.completedAt = new Date();
    }
    return taskRepo.update({ _id: id, tenantId }, update);
  }

  static async deleteTask(id: string, tenantId: string): Promise<boolean> {
    const result = await taskRepo.delete({ _id: id, tenantId });
    return result.deletedCount > 0;
  }

  static async getTasksByAssignee(assigneeId: string, tenantId: string): Promise<ITask[]> {
    return taskRepo.find({ assigneeId, tenantId });
  }

  static async getOverdueTasks(tenantId: string): Promise<ITask[]> {
    return taskRepo.find({
      tenantId,
      dueDate: { $lt: new Date() },
      status: { $nin: ['done'] },
    });
  }

  static async getTaskSummaryForProject(projectId: string, tenantId: string) {
    const tasks = await this.getTasksByProject(projectId, tenantId);
    const summary = tasks.reduce(
      (acc, task) => {
        acc[task.status] = (acc[task.status] ?? 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );
    return { projectId, total: tasks.length, byStatus: summary };
  }
}

export default TaskService;
