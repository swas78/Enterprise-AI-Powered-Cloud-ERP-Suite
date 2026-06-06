import { BaseRepository } from '../baseRepository';
import { Settings, ISettings } from '../../models/settings/Settings';

export class SettingsRepository extends BaseRepository<ISettings> {
  constructor() {
    super(Settings);
  }
}

export const settingsRepository = new SettingsRepository();
export default settingsRepository;
