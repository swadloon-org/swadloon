import { NextFunction, Request, Response } from 'express';
import { fold } from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/function';
import { Patient } from '../models/patient.model';

export const validationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const patientValidation = Patient.decode(await req.body.patient);

    console.log(patientValidation);

    type APIResponse = {
      api: string;
      route: string;
      status: string;
      statusCode: number;
      message: string;
      validations: FieldValidation[];
    };

    type FieldValidation = { prop: string; displayMessage: string; status: 'info' | 'valid' | 'warning' | 'error' };

    const onError = () => {
      const response: APIResponse = {
        api: 'vsb-api',
        route: req.url, // /api/v1/patient
        status: '',
        statusCode: 401,
        message: 'Certains champs sont manquants',
        validations: [
          {
            prop: 'patient.first_name',
            displayMessage: 'Champ requis',
            status: 'error',
          },
        ],
      };

      return res.status(401).send(response);
    };

    const onSuccess = () => {
      console.log('everything is okay');
      next();
    };

    pipe(patientValidation, fold(onError, onSuccess as any));
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

export default validationMiddleware;
