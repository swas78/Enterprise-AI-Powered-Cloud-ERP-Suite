import { BaseRepository } from '../baseRepository';
import { Permission, IPermission } from '../../models/Permission';

export class PermissionRepository extends BaseRepository<IPermission> {
  constructor() {
    super(Permission);
  }
}

export const permissionRepository = new PermissionRepository();
export default permissionRepository;
