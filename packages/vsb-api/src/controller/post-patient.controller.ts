import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { PatientAPIRequestBody, PatientAPIResponseBody, PatientValidation } from '@newrade/vsb-common';
import { RequestHandler } from 'express';
import { ValidationError } from 'yup';
import { fetchCliniko } from '../services/cliniko.service';

export const postPatient: RequestHandler<any, PatientAPIResponseBody, PatientAPIRequestBody> = async (req, res) => {
  try {
    // console.log(req.language);
    // console.log(req.languages);
    // console.log(req.i18n.t('hello'));

    const validation = PatientValidation.validateSync(req.body.payload.patient, {
      abortEarly: false,
      strict: true,
    });

    const result = await fetchCliniko({ method: 'POST', route: 'patients', payload: req.body.payload.patient });

    return res.status(200).send({ api: 'vsb-api', errors: [result as AppError], payload: { errors: [] } });
  } catch (error) {
    const yupError = error as ValidationError;

    const appError = new AppError({
      name: ERROR_TYPE.DTO_VALIDATION_ERROR,
      message: 'Invalid dto',
    });
    console.log(res.end);

    res.status(400).send({ api: 'vsb-api', errors: [appError], payload: { errors: yupError.inner } });
  }
};
