import { Queue, Worker, Job } from 'bullmq';
import crypto from 'crypto';
import { redisClient } from '../config/redis';
import logger from '../utils/logger';

const QUEUE_NAME = 'webhook-dispatcher';

// Create BullMQ Queue for Webhook Retries & Dispatch
export const webhookQueue = new Queue(QUEUE_NAME, {
  connection: redisClient as any,
  defaultJobOptions: {
    attempts: 5, // Retry up to 5 times on network failure
    backoff: {
      type: 'exponential',
      delay: 5000, // 5s, 10s, 20s, 40s, 80s
    },
  },
});

// Configure and start Webhook Worker
export const startWebhookWorker = () => {
  const worker = new Worker(
    QUEUE_NAME,
    async (job: Job) => {
      const { tenantId, url, secret, eventName, payload } = job.data;
      logger.info(`🔗 Webhook Worker processing job: ${job.id} | Target URL: ${url} | Event: ${eventName}`);

      const bodyContent = JSON.stringify(payload);
      
      // Calculate HMAC SHA-256 signature using the secret key
      const signature = crypto
        .createHmac('sha256', secret)
        .update(bodyContent)
        .digest('hex');

      try {
        // Dispatch signed HTTP POST request using global Node fetch
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Hub-Signature-256': `sha256=${signature}`,
            'X-Tenant-ID': tenantId,
            'X-Event-Type': eventName,
          },
          body: bodyContent,
        });

        if (!response.ok) {
          throw new Error(`HTTP status code error: ${response.status} ${response.statusText}`);
        }

        logger.info(`💚 Webhook dispatched successfully | Target: ${url} | Status: ${response.status}`);
      } catch (err: any) {
        logger.error(`❌ Webhook dispatch failed to URL ${url}: ${err.message}`);
        // Rethrow error to trigger BullMQ retry mechanics
        throw err;
      }
    },
    {
      connection: redisClient as any,
      concurrency: 5, // Concurrent dispatches
    }
  );

  worker.on('failed', (job, err) => {
    logger.error(`❌ Webhook dispatch Job ${job?.id} failed permanently: ${err.message}`);
  });

  logger.info('🚀 BullMQ Webhook Dispatcher Worker started and listening.');
};

export default startWebhookWorker;
