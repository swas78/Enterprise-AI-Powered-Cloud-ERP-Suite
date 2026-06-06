import { BaseRepository } from '../baseRepository';
import { Project, IProject } from '../../models/project/Project';

export class ProjectRepository extends BaseRepository<IProject> {
  constructor() {
    super(Project);
  }
}

export const projectRepository = new ProjectRepository();
export default projectRepository;
