import { BaseRepository } from './baseRepository';
import { User, IUser } from '../models/User';

export class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(User);
  }
}

export const userRepository = new UserRepository();
export default userRepository;
