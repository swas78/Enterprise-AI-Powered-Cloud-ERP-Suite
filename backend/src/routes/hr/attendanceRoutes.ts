import { Router } from 'express';
import { AttendanceController } from '../../controllers/hr/attendanceController';
import { authGuard } from '../../middleware/auth.middleware';

const router = Router();

// Secure all attendance endpoints
router.use(authGuard);

// Clock punch endpoints
router.get('/', AttendanceController.getAttendance);
router.post('/clock-in', AttendanceController.clockIn);
router.post('/clock-out', AttendanceController.clockOut);

export default router;
