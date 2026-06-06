import { Router } from 'express';
import { ApController } from '../../controllers/finance/apController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';
import { validateSchema } from '../../middleware/validation.middleware';
import { apInvoiceSchema } from '../../validators/finance.validator';

const router = Router();

// Secure all Accounts Payable endpoints
router.use(authGuard);

// Get all invoices
router.get('/invoices', ApController.getInvoices);

// Enforce that only Manager and above can register AP invoices and launch payment runs
router.post('/invoice', roleGuard(['SuperAdmin', 'TenantAdmin', 'Manager']), validateSchema(apInvoiceSchema), ApController.processInvoice);
router.post('/pay', roleGuard(['SuperAdmin', 'TenantAdmin', 'Manager']), ApController.runPayments);

export default router;
