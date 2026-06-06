import { userRepository } from '../repositories/userRepository';
import { IUser } from '../models/User';
import { UserRole } from '../types';

export class UserService {
  /** Get all users for a tenant */
  static async getUsersByTenant(tenantId: string): Promise<IUser[]> {
    return userRepository.find({ tenantId });
  }

  /** Get a user by ID (tenant-scoped) */
  static async getUserById(userId: string, tenantId: string): Promise<IUser | null> {
    return userRepository.findOne({ _id: userId, tenantId });
  }

  /** Get a user by email */
  static async getUserByEmail(email: string): Promise<IUser | null> {
    return userRepository.findOne({ email });
  }

  /** Update user profile fields */
  static async updateUser(
    userId: string,
    tenantId: string,
    data: { name?: string; email?: string }
  ): Promise<IUser | null> {
    return userRepository.update({ _id: userId, tenantId }, { $set: data });
  }

  /** Change user role */
  static async changeRole(userId: string, tenantId: string, role: UserRole): Promise<IUser | null> {
    return userRepository.update({ _id: userId, tenantId }, { $set: { role } });
  }

  /** Deactivate a user (soft delete via status or simply remove) */
  static async deactivateUser(userId: string, tenantId: string): Promise<boolean> {
    const result = await userRepository.delete({ _id: userId, tenantId });
    return result.deletedCount > 0;
  }

  /** Count users in a tenant */
  static async countUsers(tenantId: string): Promise<number> {
    return userRepository.countDocuments({ tenantId });
  }

  /** Search users by name or email */
  static async searchUsers(tenantId: string, query: string): Promise<IUser[]> {
    return userRepository.find({
      tenantId,
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } },
      ],
    });
  }
}

export default UserService;
