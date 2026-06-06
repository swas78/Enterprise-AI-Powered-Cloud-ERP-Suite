import { Router } from 'express';
import { OrganisationController } from '../../controllers/hr/organisationController';
import { authGuard } from '../../middleware/auth.middleware';

const router = Router();

// Secure all organisation endpoints
router.use(authGuard);

// Org chart reporting lines endpoint
router.get('/org-chart', OrganisationController.getOrgChart);

export default router;
