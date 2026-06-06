import { Queue, Worker, Job } from 'bullmq';
import { redisClient } from '../config/redis';
import { MLServiceClient } from '../services/external/mlService';
import logger from '../utils/logger';

const QUEUE_NAME = 'forecasting-tasks';

export const forecastingQueue = new Queue(QUEUE_NAME, {
  connection: redisClient as any,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 5000,
    },
  },
});

export const startForecastingWorker = () => {
  const worker = new Worker(
    QUEUE_NAME,
    async (job: Job) => {
      const { tenantId, sku, history, horizonDays } = job.data;
      logger.info(`🔮 Forecasting Worker processing SKU: ${sku} | Tenant: ${tenantId} | Job: ${job.id}`);
      
      // Perform forecasting retraining/prediction task in background
      const forecast = await MLServiceClient.getForecast(sku, history, horizonDays || 90);
      logger.info(`💚 Forecasting background job complete for SKU: ${sku} | Target length: ${forecast.length}`);
      
      // Save or update forecasting model checkpoints in Redis or db (optional for telemetry)
      await redisClient.setex(`forecast:bg-run:${tenantId}:${sku}`, 3600 * 24, JSON.stringify(forecast));
    },
    {
      connection: redisClient as any,
      concurrency: 2,
    }
  );

  worker.on('failed', (job, err) => {
    logger.error(`❌ Forecasting Job ${job?.id} failed: ${err.message}`);
  });

  logger.info('🚀 BullMQ Forecasting Worker started and listening.');
};

export default startForecastingWorker;
