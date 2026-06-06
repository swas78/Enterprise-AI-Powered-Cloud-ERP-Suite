import { BaseRepository } from '../baseRepository';
import { Integration, IIntegration } from '../../models/settings/Integration';

export class IntegrationRepository extends BaseRepository<IIntegration> {
  constructor() {
    super(Integration);
  }
}

export const integrationRepository = new IntegrationRepository();
export default integrationRepository;
