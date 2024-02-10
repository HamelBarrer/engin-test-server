import { Router } from 'express';
import {
  createEventLog,
  getEventLog,
  getEventLogs,
  getSpots,
  updateEventLog,
} from '../../controllers/eventLog.controller';

const router = Router();

router.get('/spots', getSpots);
router.get('/:eventLogId', getEventLog);
router.get('/', getEventLogs);
router.post('/', createEventLog);
router.put('/:eventLogId', updateEventLog);

export default router;
