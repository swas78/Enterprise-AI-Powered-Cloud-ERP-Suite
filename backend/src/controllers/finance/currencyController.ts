import { Request, Response, NextFunction } from 'express';
import { CurrencyService } from '../../services/finance/currencyService';

export class CurrencyController {
  
  // Get active exchange rates
  public static async getRates(req: Request, res: Response, next: NextFunction) {
    try {
      const rates = CurrencyService.getActiveRates();
      return res.status(200).json({
        status: 'success',
        data: rates,
      });
    } catch (error) {
      next(error);
    }
  }

  // Convert amount between currencies
  public static async convert(req: Request, res: Response, next: NextFunction) {
    try {
      const { amount, from, to } = req.body;
      if (amount === undefined || !from || !to) {
        return res.status(400).json({
          status: 'error',
          message: 'Missing conversion params: amount, from, to',
        });
      }

      const converted = CurrencyService.convertAmount(Number(amount), from, to);
      return res.status(200).json({
        status: 'success',
        data: {
          originalAmount: amount,
          from,
          to,
          convertedAmount: converted,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Force trigger sync exchange rates
  public static async syncRates(req: Request, res: Response, next: NextFunction) {
    try {
      await CurrencyService.syncExchangeRates();
      return res.status(200).json({
        status: 'success',
        message: 'Exchange rates synchronized successfully.',
      });
    } catch (error) {
      next(error);
    }
  }
}

export default CurrencyController;
