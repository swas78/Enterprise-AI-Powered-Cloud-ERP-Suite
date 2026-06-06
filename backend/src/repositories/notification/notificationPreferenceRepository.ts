import { BaseRepository } from '../baseRepository';
import { NotificationPreference, INotificationPreference } from '../../models/notification/NotificationPreference';

export class NotificationPreferenceRepository extends BaseRepository<INotificationPreference> {
  constructor() {
    super(NotificationPreference);
  }
}

export const notificationPreferenceRepository = new NotificationPreferenceRepository();
export default notificationPreferenceRepository;
