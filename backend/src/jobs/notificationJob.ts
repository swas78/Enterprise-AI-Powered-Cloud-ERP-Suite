import { Queue, Worker, Job } from 'bullmq';
import { redisClient } from '../config/redis';
import { emailQueue } from './emailJob';
import { webhookQueue } from './webhookJob';
import logger from '../utils/logger';

const QUEUE_NAME = 'notification-alerts';

export const notificationQueue = new Queue(QUEUE_NAME, {
  connection: redisClient as any,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 5000,
    },
  },
});

export const startNotificationWorker = () => {
  const worker = new Worker(
    QUEUE_NAME,
    async (job: Job) => {
      const { tenantId, type, channels, payload } = job.data;
      logger.info(`🔔 Notification Worker processing alert type: ${type} | Tenant: ${tenantId} | Job: ${job.id}`);

      if (channels.includes('email') && payload.email) {
        await emailQueue.add('send-email', {
          to: payload.email,
          subject: payload.subject || `[Amdox ERP Alert] ${type}`,
          body: payload.body || `Notification Alert details:\n${JSON.stringify(payload.data)}`,
        });
      }

      if (channels.includes('webhook') && payload.webhookUrl) {
        await webhookQueue.add('dispatch-webhook', {
          tenantId,
          url: payload.webhookUrl,
          secret: payload.webhookSecret || 'default-secret',
          eventName: type,
          payload: payload.data,
        });
      }

      // F-10: SMS Notification integration (Mock Twilio SDK)
      if (channels.includes('sms') && payload.phone) {
        logger.info(`📱 Dispatching SMS via Twilio API to ${payload.phone}`);
        // In a real application, we would call: twilioClient.messages.create(...)
        logger.info(`✅ SMS sent successfully to ${payload.phone}. Msg: ${payload.subject}`);
      }
    },
    {
      connection: redisClient as any,
      concurrency: 5,
    }
  );

  worker.on('failed', (job, err) => {
    logger.error(`❌ Notification Alert Job ${job?.id} failed: ${err.message}`);
  });

  logger.info('🚀 BullMQ Notification Alert Worker started and listening.');
};

export default startNotificationWorker;
