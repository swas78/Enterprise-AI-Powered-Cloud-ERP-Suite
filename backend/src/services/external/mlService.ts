import axios from 'axios';
import logger from '../../utils/logger';

const ML_SERVICE_URL = process.env.ML_SERVICE_URL || 'http://localhost:8000';

export class MLServiceClient {
  
  // Checks if the Python microservice is reachable
  public static async checkHealth(): Promise<boolean> {
    try {
      const res = await axios.get(`${ML_SERVICE_URL}/health`, { timeout: 3000 });
      return res.status === 200 && res.data.status === 'UP';
    } catch (error: any) {
      logger.warn(`⚠️ ML microservice is unreachable at: ${ML_SERVICE_URL}. Error: ${error.message}`);
      return false;
    }
  }

  // Requests Python model training
  public static async trainModel(sku: string, history: { date: string; quantity: number }[]): Promise<boolean> {
    try {
      const res = await axios.post(`${ML_SERVICE_URL}/train`, { sku, history });
      return res.status === 200 && res.data.status === 'success';
    } catch (error: any) {
      logger.error(`❌ ML train API failed for SKU ${sku}: ${error.message}`);
      return false;
    }
  }

  // Fetches forecast projections from Python service
  public static async getForecast(
    sku: string,
    history: { date: string; quantity: number }[],
    horizonDays: number = 90
  ) {
    try {
      const res = await axios.post(`${ML_SERVICE_URL}/predict`, {
        sku,
        history,
        horizon_days: horizonDays,
      });

      if (res.status === 200 && res.data.status === 'success') {
        return res.data.predictions;
      }
      throw new Error('API returned unsuccessful status.');
    } catch (error: any) {
      logger.error(`❌ ML predict API failed for SKU ${sku}: ${error.message}`);
      throw error;
    }
  }
}
export default MLServiceClient;
