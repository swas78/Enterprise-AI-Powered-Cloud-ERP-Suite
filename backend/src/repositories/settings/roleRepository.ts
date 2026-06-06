import { BaseRepository } from '../baseRepository';
import { Role, IRole } from '../../models/Role';

export class RoleRepository extends BaseRepository<IRole> {
  constructor() {
    super(Role);
  }
}

export const roleRepository = new RoleRepository();
export default roleRepository;
