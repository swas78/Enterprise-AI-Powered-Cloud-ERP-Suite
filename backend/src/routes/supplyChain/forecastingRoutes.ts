import { Router } from 'express';
import { ForecastingController } from '../../controllers/supplyChain/forecastingController';
import { authGuard } from '../../middleware/auth.middleware';

const router = Router();

// Secure all forecasting endpoints
router.use(authGuard);

router.get('/:sku', ForecastingController.getForecast);

export default router;
