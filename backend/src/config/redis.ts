import Redis from 'ioredis';
import dotenv from 'dotenv';
import logger from '../utils/logger';

dotenv.config();

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

// Initialize the Redis client
export const redisClient = new Redis(REDIS_URL, {
  maxRetriesPerRequest: null, // Essential for BullMQ integration
});

redisClient.on('connect', () => {
  logger.info('Redis connected successfully.');
});

redisClient.on('error', (err) => {
  logger.error('Redis connection error:', err);
});

export default redisClient;
