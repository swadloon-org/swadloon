import { Router } from 'express';
import { createPatientCliniko } from '../controller/create-patient';
import validationMiddleware from '../middleware/validation.middleware';

// const fakeController = (req: Request, res: Response) => {
//   res.send({ message: 'ok' });
// };

const router = Router();

/**
 * api/register
 */

router.route('/').get(validationMiddleware, createPatientCliniko);

export default router;
