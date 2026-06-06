import { Response, NextFunction } from 'express';
import { TenantRequest } from '../types';
import { userRepository } from '../repositories/userRepository';

export class UserController {
  
  // Get all users under the active tenant
  public static async getUsers(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const users = await userRepository.find({ tenantId });
      return res.status(200).json({
        status: 'success',
        data: users,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get currently logged-in user profile
  public static async getProfile(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(401).json({ status: 'error', message: 'Unauthorized. User session not found.' });
      }

      const user = await userRepository.findById(userId);
      if (!user) {
        return res.status(404).json({ status: 'error', message: 'User not found.' });
      }

      return res.status(200).json({
        status: 'success',
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update a user profile
  public static async updateProfile(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const userId = req.params.id || req.user?.userId;

      if (!tenantId || !userId) {
        return res.status(400).json({ status: 'error', message: 'Tenant or user context is missing.' });
      }

      const { name, email } = req.body;
      const updates: any = {};
      if (name) updates.name = name;
      if (email) updates.email = email;

      const updatedUser = await userRepository.update({ _id: userId, tenantId }, { $set: updates });
      if (!updatedUser) {
        return res.status(404).json({ status: 'error', message: 'User not found or access denied.' });
      }

      return res.status(200).json({
        status: 'success',
        message: 'Profile updated successfully.',
        data: updatedUser,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
