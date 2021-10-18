import { json } from 'body-parser';
import { Router } from 'express';
import { getPictureById } from '../controllers/vehicleImages';

const router = Router();
router.use(json());

router.get('/:vehicleId/:imageId', getPictureById);

export default router;