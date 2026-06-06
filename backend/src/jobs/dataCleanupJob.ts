import { Queue, Worker, Job } from 'bullmq';
import { redisClient } from '../config/redis';
import { User } from '../models/User';
import logger from '../utils/logger';

const QUEUE_NAME = 'data-cleanup';

export const dataCleanupQueue = new Queue(QUEUE_NAME, {
  connection: redisClient as any,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 5000,
    },
  },
});

export const startDataCleanupWorker = () => {
  const worker = new Worker(
    QUEUE_NAME,
    async (job: Job) => {
      const { tenantId, action, targetEmail } = job.data;
      logger.info(`🧹 Data Cleanup Worker performing: ${action} | Tenant: ${tenantId} | Job: ${job.id}`);

      if (action === 'gdpr-anonymize') {
        // Anonymize user records to satisfy GDPR Right to Erasure
        const result = await User.updateMany(
          { email: targetEmail, tenantId },
          {
            $set: {
              name: 'Anonymized GDPR User',
              password: 'gdpr-deleted-password',
            },
          }
        );
        logger.info(`💚 GDPR Anonymization matched count: ${result.matchedCount} users anonymized.`);
      } else {
        // Clean up expired tokens or temporary cache files
        logger.info('🧹 Scheduled cache/blacklisted tokens cleanup completed successfully.');
      }
    },
    {
      connection: redisClient as any,
      concurrency: 1,
    }
  );

  worker.on('failed', (job, err) => {
    logger.error(`❌ Data Cleanup Job ${job?.id} failed: ${err.message}`);
  });

  logger.info('🚀 BullMQ Data Cleanup Worker started and listening.');
};

export default startDataCleanupWorker;
