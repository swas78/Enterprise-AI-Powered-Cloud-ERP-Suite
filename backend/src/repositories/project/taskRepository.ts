import { BaseRepository } from '../baseRepository';
import { Task, ITask } from '../../models/project/Task';

export class TaskRepository extends BaseRepository<ITask> {
  constructor() {
    super(Task);
  }
}

export const taskRepository = new TaskRepository();
export default taskRepository;
