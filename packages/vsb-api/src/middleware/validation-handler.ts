import { NextFunction, Request, Response } from 'express';
import * as t from 'io-ts';
import PatientModel from '../models/patient.model';

export const validationHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    type PatientModel = t.TypeOf<typeof PatientModel>;

    const patientValidation = PatientModel.decode(await req.body.patient);

    console.log(patientValidation);

    if (patientValidation._tag === 'Left') {
      return res.status(401).send({ message: 'error' });
    }

    if (patientValidation._tag === 'Right') {
      console.log('everything is okay');
      next();
    }
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

export default validationHandler;
