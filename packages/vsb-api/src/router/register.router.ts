import { Router } from 'express';
import { createPatientCliniko } from '../controller/create-patient';
import validationHandler from '../middleware/validation-handler';

// const fakeController = (req: Request, res: Response) => {
//   res.send({ message: 'ok' });
// };

const router = Router();

/**
 * api/register
 */

router.route('/').get(validationHandler, createPatientCliniko);

export default router;
