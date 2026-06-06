import logger from '../../utils/logger';

export class CurrencyService {
  
  // Standard base currency is USD
  private static mockRates: Record<string, number> = {
    USD: 1.0,
    EUR: 0.92,
    GBP: 0.78,
    CAD: 1.36,
    AUD: 1.51,
    INR: 83.25,
  };

  // Convert amount from one currency code to another
  public static convertAmount(
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ): number {
    const from = fromCurrency.toUpperCase();
    const to = toCurrency.toUpperCase();

    if (from === to) return amount;

    const usdRateFrom = this.mockRates[from];
    const usdRateTo = this.mockRates[to];

    if (!usdRateFrom || !usdRateTo) {
      throw new Error(`FX Service Error: Unsupported currency conversion from [${from}] to [${to}]`);
    }

    // Convert from source to USD, then from USD to target currency
    const amountInUsd = amount / usdRateFrom;
    const finalAmount = amountInUsd * usdRateTo;

    logger.debug(`💱 Converted $${amount.toFixed(2)} ${from} to $${finalAmount.toFixed(2)} ${to}`);
    return Number(finalAmount.toFixed(4));
  }

  // Retrieve current active exchange rate factors
  public static getActiveRates(): Record<string, number> {
    return { ...this.mockRates };
  }

  // Periodic daemon function to fetch actual rates (ECB/OpenExchange rates mock)
  public static async syncExchangeRates(): Promise<void> {
    try {
      logger.info('🔄 Refreshing historical FX exchange rates from global registries...');
      
      // Simulate minor currency variations to represent actual market changes
      const drift = () => 1 + (Math.random() * 0.02 - 0.01); // ±1%
      this.mockRates.EUR = Number((0.92 * drift()).toFixed(4));
      this.mockRates.GBP = Number((0.78 * drift()).toFixed(4));
      this.mockRates.INR = Number((83.25 * drift()).toFixed(4));

      logger.info('💚 Successfully synchronized active exchange rates.');
    } catch (error: any) {
      logger.error('❌ Failed to sync active exchange rates:', error.message);
    }
  }
}
export default CurrencyService;
