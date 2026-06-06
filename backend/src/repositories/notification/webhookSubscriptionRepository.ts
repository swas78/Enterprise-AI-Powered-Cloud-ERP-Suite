import { BaseRepository } from '../baseRepository';
import { WebhookSubscription, IWebhookSubscription } from '../../models/notification/WebhookSubscription';

export class WebhookSubscriptionRepository extends BaseRepository<IWebhookSubscription> {
  constructor() {
    super(WebhookSubscription);
  }
}

export const webhookSubscriptionRepository = new WebhookSubscriptionRepository();
export default webhookSubscriptionRepository;
