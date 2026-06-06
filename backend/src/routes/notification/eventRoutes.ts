import { Router } from 'express';
import { EventController } from '../../controllers/notification/eventController';
import { authGuard } from '../../middleware/auth.middleware';

const router = Router();

router.use(authGuard);

router.get('/', EventController.queryEvents);

export default router;
