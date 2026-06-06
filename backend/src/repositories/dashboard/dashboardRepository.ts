import { BaseRepository } from '../baseRepository';
import { Dashboard, IDashboard } from '../../models/dashboard/Dashboard';

export class DashboardRepository extends BaseRepository<IDashboard> {
  constructor() {
    super(Dashboard);
  }
}

export const dashboardRepository = new DashboardRepository();
export default dashboardRepository;
