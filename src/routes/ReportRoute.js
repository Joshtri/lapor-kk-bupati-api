import express from 'express';
import ReportController from '../controllers/ReportController.js';

const router = express.Router();

router.post('report/', ReportController.create);
router.get('report/', ReportController.getAll);
router.get('report/:id', ReportController.getById);
router.put('report/:id', ReportController.update);


router.delete('report/:id', ReportController.delete);
router.patch('report/:id/status', ReportController.updateStatus);
router.get('report/priority/:priority', ReportController.getByPriority);

export default router;
