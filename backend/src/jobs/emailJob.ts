import { Queue, Worker, Job } from 'bullmq';
import { redisClient } from '../config/redis';
import logger from '../utils/logger';

const QUEUE_NAME = 'email-dispatch';

// Create BullMQ Queue for emails
export const emailQueue = new Queue(QUEUE_NAME, {
  connection: redisClient as any,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 2000,
    },
  },
});

// Configure BullMQ Email Worker
export const startEmailWorker = () => {
  const worker = new Worker(
    QUEUE_NAME,
    async (job: Job) => {
      const { to, subject, body } = job.data;
      logger.info(`✉️ BullMQ Email worker dispatching email to: ${to} | Job ID: ${job.id}`);
      
      // Simulate SMTP/SES sending latency
      await new Promise(resolve => setTimeout(resolve, 800));

      logger.info(`✉️ Email successfully dispatched to [${to}]. Subject: "${subject}"`);
    },
    {
      connection: redisClient as any,
    }
  );

  worker.on('failed', (job, err) => {
    logger.error(`❌ Email Job ${job?.id} failed to send: ${err.message}`);
  });

  logger.info('🚀 BullMQ Email Worker started and listening for mail tasks.');
};
export default startEmailWorker;
