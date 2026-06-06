import { BaseRepository } from '../baseRepository';
import { ChartOfAccounts, IChartOfAccounts } from '../../models/finance/ChartOfAccounts';

export class ChartOfAccountsRepository extends BaseRepository<IChartOfAccounts> {
  constructor() {
    super(ChartOfAccounts);
  }
}

export const chartOfAccountsRepository = new ChartOfAccountsRepository();
export default chartOfAccountsRepository;
