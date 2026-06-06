import axios from 'axios';
import logger from '../../utils/logger';

export class CurrencyApiService {
  /**
   * Fetch current exchange rates for a base currency from an external API
   */
  static async getExchangeRates(baseCurrency: string = 'USD'): Promise<Record<string, number>> {
    logger.info(`💱 CurrencyApiService: Fetching rates for Base: ${baseCurrency}`);
    try {
      // Free/fallback rates in case we don't have internet or API key
      const fallbackRates: Record<string, Record<string, number>> = {
        USD: { USD: 1.0, EUR: 0.92, GBP: 0.78, INR: 83.5, CAD: 1.36 },
        EUR: { USD: 1.09, EUR: 1.0, GBP: 0.85, INR: 90.8, CAD: 1.48 },
        GBP: { USD: 1.28, EUR: 1.18, GBP: 1.0, INR: 107.0, CAD: 1.74 },
        INR: { USD: 0.012, EUR: 0.011, GBP: 0.0093, INR: 1.0, CAD: 0.016 },
      };

      const apiKey = process.env.CURRENCY_API_KEY;
      if (!apiKey) {
        logger.warn('CURRENCY_API_KEY is not defined. Using fallback rates.');
        return fallbackRates[baseCurrency] || fallbackRates['USD'];
      }

      const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`, {
        timeout: 5000,
      });

      if (response.data && response.data.conversion_rates) {
        return response.data.conversion_rates;
      }

      logger.warn('Unable to parse conversion rates from API response. Using fallback.');
      return fallbackRates[baseCurrency] || fallbackRates['USD'];
    } catch (error) {
      logger.error('Failed to retrieve exchange rates from external API. Falling back to local data.', error);
      // Fallback
      return { USD: 1.0, EUR: 0.92, GBP: 0.78, INR: 83.5 };
    }
  }
}

export default CurrencyApiService;
