import { Queue, Worker, Job } from 'bullmq';
import { redisClient } from '../config/redis';
import { CurrencyService } from '../services/finance/currencyService';
import logger from '../utils/logger';

const QUEUE_NAME = 'currency-update';

export const currencyUpdateQueue = new Queue(QUEUE_NAME, {
  connection: redisClient as any,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 5000,
    },
  },
});

export const startCurrencyUpdateWorker = () => {
  const worker = new Worker(
    QUEUE_NAME,
    async (job: Job) => {
      logger.info(`💱 Currency Update Worker triggering exchange rates sync | Job: ${job.id}`);
      await CurrencyService.syncExchangeRates();
      logger.info('💚 Currency exchange rates synchronization job complete.');
    },
    {
      connection: redisClient as any,
      concurrency: 1,
    }
  );

  worker.on('failed', (job, err) => {
    logger.error(`❌ Currency Update Job ${job?.id} failed: ${err.message}`);
  });

  logger.info('🚀 BullMQ Currency Update Worker started and listening.');
};

export default startCurrencyUpdateWorker;
