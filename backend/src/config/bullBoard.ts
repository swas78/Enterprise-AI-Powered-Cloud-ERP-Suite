import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { ExpressAdapter } from '@bull-board/express';
import { payrollQueue } from '../jobs/payrollJob';
import { emailQueue } from '../jobs/emailJob';
import { webhookQueue } from '../jobs/webhookJob';
import { forecastingQueue } from '../jobs/forecastingJob';
import { reportGenerationQueue } from '../jobs/reportGenerationJob';
import { dataCleanupQueue } from '../jobs/dataCleanupJob';
import { currencyUpdateQueue } from '../jobs/currencyUpdateJob';
import { notificationQueue } from '../jobs/notificationJob';

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/api/v1/admin/queues');

createBullBoard({
  queues: [
    new BullMQAdapter(payrollQueue),
    new BullMQAdapter(emailQueue),
    new BullMQAdapter(webhookQueue),
    new BullMQAdapter(forecastingQueue),
    new BullMQAdapter(reportGenerationQueue),
    new BullMQAdapter(dataCleanupQueue),
    new BullMQAdapter(currencyUpdateQueue),
    new BullMQAdapter(notificationQueue),
  ],
  serverAdapter: serverAdapter,
});

export const bullBoardRouter = serverAdapter.getRouter();
export default bullBoardRouter;
