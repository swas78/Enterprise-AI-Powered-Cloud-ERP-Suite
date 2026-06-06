import jwt from 'jsonwebtoken';
import { userRepository } from '../repositories/userRepository';
import { tenantRepository } from '../repositories/tenantRepository';
import redisClient from '../config/redis';
import { UserRole } from '../types';
import { IUser } from '../models/User';
import emailService from './emailService';
import crypto from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-jwt-key-replace-in-production';
const ACCESS_EXPIRATION = (process.env.JWT_ACCESS_EXPIRATION || '15m') as any;
const REFRESH_EXPIRATION = (process.env.JWT_REFRESH_EXPIRATION || '7d') as any;

export class AuthService {
  
  // Sign Access and Refresh JWTs
  private static generateTokens(user: IUser) {
    const payload = {
      userId: user._id,
      email: user.email,
      role: user.role,
      tenantId: user.tenantId.toString(),
    };

    const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: ACCESS_EXPIRATION });
    const refreshToken = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: REFRESH_EXPIRATION });

    return { accessToken, refreshToken };
  }

  // Register new tenant user
  public static async register(data: {
    email: string;
    password?: string;
    name: string;
    role: UserRole;
    tenantName: string;
  }) {
    // 1. Establish tenant first (or find existing)
    let tenant = await tenantRepository.findOne({ name: data.tenantName });
    if (!tenant) {
      tenant = await tenantRepository.create({ name: data.tenantName });
    }

    // 2. Prevent duplicate user
    const existingUser = await userRepository.findOne({ email: data.email });
    if (existingUser) {
      throw new Error('Email address already registered.');
    }

    // 3. Construct user document
    const user = await userRepository.create({
      email: data.email,
      password: data.password,
      name: data.name,
      role: data.role,
      tenantId: tenant._id,
    });

    const tokens = this.generateTokens(user);
    return {
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
        tenantId: user.tenantId,
        tenantName: tenant?.name || '',
      },
      ...tokens,
    };
  }

  // Authenticate user login credentials
  public static async login(credentials: { email: string; password?: string }, isSso = false) {
    const user = await userRepository.findOne({ email: credentials.email }, '+password');
    if (!user) {
      throw new Error('Invalid email or password credentials.');
    }

    if (!isSso) {
      const isMatch = await user.comparePassword(credentials.password || '');
      if (!isMatch) {
        throw new Error('Invalid email or password credentials.');
      }
    }

    const tenant = await tenantRepository.findById(user.tenantId.toString());
    if (!tenant || tenant.status === 'suspended') {
      throw new Error('Tenant organization is suspended or missing.');
    }

    const tokens = this.generateTokens(user);
    return {
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
        tenantId: user.tenantId,
        tenantName: tenant?.name || '',
      },
      ...tokens,
    };
  }

  public static async verifyOtp(mfaToken: string, code: string) {
    const rawData = await redisClient.get(`otp:${mfaToken}`);
    if (!rawData) {
      throw new Error('OTP has expired or is invalid.');
    }

    const { userId, otp } = JSON.parse(rawData);
    if (otp !== code) {
      throw new Error('Invalid verification code.');
    }

    // OTP used, delete it
    await redisClient.del(`otp:${mfaToken}`);

    const user = await userRepository.findById(userId);
    if (!user) throw new Error('User not found.');

    const tenant = await tenantRepository.findById(user.tenantId.toString());
    
    const tokens = this.generateTokens(user);
    return {
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
        tenantId: user.tenantId,
        tenantName: tenant?.name || '',
      },
      ...tokens,
    };
  }

  // Handle refresh token rotation
  public static async refresh(token: string) {
    try {
      // 1. Check if token is blacklisted in Redis
      const isBlacklisted = await redisClient.get(`blacklist:${token}`);
      if (isBlacklisted) {
        throw new Error('Refresh token has been invalidated.');
      }

      // 2. Decode the refresh token
      const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
      const user = await userRepository.findById(decoded.userId);
      if (!user) {
        throw new Error('User account not found.');
      }

      // 3. Blacklist the old refresh token (so it cannot be re-used)
      // Standard rotation pattern keeps sessions highly secure
      await redisClient.setex(`blacklist:${token}`, 7 * 24 * 60 * 60, 'true'); // Expire in 7 days

      // 4. Issue new rotated tokens
      return this.generateTokens(user);
    } catch (error: any) {
      throw new Error('Session expired or invalid refresh token.');
    }
  }

  // Logout current session by blacklisting active token
  public static async logout(accessToken: string, refreshToken?: string) {
    // Expire active tokens immediately by blacklisting them in Redis
    if (accessToken) {
      await redisClient.setex(`blacklist:${accessToken}`, 15 * 60, 'true'); // Expire in 15 mins (match access TTL)
    }
    if (refreshToken) {
      await redisClient.setex(`blacklist:${refreshToken}`, 7 * 24 * 60 * 60, 'true'); // Expire in 7 days
    }
    return true;
  }
}
