import { json } from 'body-parser';
import { Router } from 'express';
import { getVehicleById, getVehiclesHandler} from '../controllers/vehicles';

const router = Router();
router.use(json());

router.get('/', getVehiclesHandler);
router.get('/:id', getVehicleById);
export default router;