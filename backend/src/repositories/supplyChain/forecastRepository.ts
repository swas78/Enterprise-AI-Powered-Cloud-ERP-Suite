import { BaseRepository } from '../baseRepository';
import { Forecast, IForecast } from '../../models/supplyChain/Forecast';

class ForecastRepository extends BaseRepository<IForecast> {
  constructor() {
    super(Forecast);
  }

  async findByItem(itemId: string, tenantId: string): Promise<IForecast[]> {
    return this.find({ itemId, tenantId }, undefined, { sort: { period: -1 } });
  }

  async findByPeriod(tenantId: string, period: string): Promise<IForecast[]> {
    return this.find({ tenantId, period });
  }

  async findLatestForItem(itemId: string, tenantId: string): Promise<IForecast | null> {
    return this.findOne({ itemId, tenantId }, undefined, { sort: { generatedAt: -1 } });
  }

  async findByItemAndPeriod(itemId: string, period: string, tenantId: string): Promise<IForecast | null> {
    return this.findOne({ itemId, period, tenantId });
  }

  async findByTenant(tenantId: string, limit = 100): Promise<IForecast[]> {
    return this.find({ tenantId }, undefined, { limit, sort: { generatedAt: -1 } });
  }

  async upsertForecast(
    itemId: string,
    period: string,
    tenantId: string,
    data: Partial<IForecast>
  ): Promise<IForecast | null> {
    return this.update(
      { itemId, period, tenantId },
      { $set: data },
      { new: true, upsert: true }
    );
  }
}

export const forecastRepository = new ForecastRepository();
export default forecastRepository;
