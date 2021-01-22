import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { PatientAPIRequestBody, PatientAPIResponseBody, PatientValidation } from '@newrade/vsb-common';
import { RequestHandler } from 'express';
import { ValidationError } from 'yup';

export const postPatient: RequestHandler<any, PatientAPIResponseBody, PatientAPIRequestBody> = async (req, res) => {
  try {
    console.log(req.language);
    console.log(req.languages);
    console.log(req.i18n.t('hello'));

    const validation = PatientValidation.validateSync(req.body.payload.patient, { abortEarly: false });
    return res.status(200).send({ api: 'vsb-api', errors: [], payload: { errors: [] } });

    // if (!result.success) {
    //   return res.status(400).send(result);
    // }

    // const clinikoResult = await fetch('https://api.' + env.API_VSB_SHARD_ID + '.cliniko.com/v1/patients/', {
    //   method: 'POST',
    //   headers: {
    //     authorization: 'Basic ' + Buffer.from(env.API_VSB_KEY + ':').toString('base64'),
    //     'user-agent': `${env.API_VSB_VENDOR_NAME} (${env.API_VSB_VENDOR_EMAIL})`,
    //     accept: 'application/json',
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(req.body.patient),
    // });

    // if (clinikoResult.status === 200) {
    //   return res.status(201).send({ message: 'hey' });
    // } else {
    //   return res.status(400).send(clinikoResult);
    // }
  } catch (error) {
    const yupError = error as ValidationError;
    const appError = new AppError({
      name: ERROR_TYPE.DTO_VALIDATION_ERROR,
      message: 'Invalid dto',
    });

    res.status(400).send({ api: 'vsb-api', errors: [appError], payload: { errors: yupError.inner } });
  }
};
