import { AppError, ERROR_TYPE } from '@newrade/core-common';
import {
  getPatientClinikoModel,
  PatientAPIRequestBody,
  PatientAPIResponseBody,
  PatientClinikoModel,
  PatientValidation,
} from '@newrade/vsb-common';
import { RequestHandler } from 'express';
import fetch from 'node-fetch';
import { ValidationError } from 'yup';
import { env } from '../../types/dot-env';
import { fetchCliniko } from '../services/cliniko.service';

const getClinikoStatus: RequestHandler<any, any, any> = async (req, res) => {
  try {
    const response = await fetch(`https://api.` + `${env.API_VSB_SHARD_ID}.cliniko.com/v1/services/`, {
      method: 'GET',
      headers: {
        authorization: 'Basic ' + Buffer.from(env.API_VSB_KEY_CLINIKO + ':').toString('base64'),
        'user-agent': `${env.API_VSB_VENDOR_NAME} (${env.API_VSB_VENDOR_EMAIL})`,
        accept: 'application/json',
        'content-type': 'application/json',
      },
    });

    if (response.status == 200) {
      return res.status(200).send({
        api: 'vsb-api',
        errors: [{ name: ERROR_TYPE.SUCCESSFUL_REQUEST, message: 'Current status is 200' }],
      });
    } else {
      throw new AppError({ name: ERROR_TYPE.EXTERNAL_SERVER_ERROR, message: `Current status is ${response.status}` });
    }
  } catch (error) {
    res.status(400).send({ api: 'vsb-api', errors: [error] });
  }
};

const getPatients: RequestHandler<any, any, any> = async (req, res) => {
  try {
    const routes = 'patients';
    const paramsSearch = 'created_at';
    const filterParams = `?sort=${paramsSearch}:desc`;
    const response = await fetch(`https://api.` + `${env.API_VSB_SHARD_ID}.cliniko.com/v1/${routes}${filterParams}`, {
      method: 'GET',
      headers: {
        authorization: 'Basic ' + Buffer.from(env.API_VSB_KEY_CLINIKO + ':').toString('base64'),
        'user-agent': `${env.API_VSB_VENDOR_NAME} (${env.API_VSB_VENDOR_EMAIL})`,
        accept: 'application/json',
        'content-type': 'application/json',
      },
    });
    const result = await response.json();

    return res.status(200).send({ api: 'vsb-api', payload: [{ ...result }] });
  } catch (error) {
    res.status(400).send({ api: 'vsb-api', errors: [error] });
  }
};

const postPatient: RequestHandler<any, PatientAPIResponseBody, PatientAPIRequestBody> = async (req, res) => {
  try {
    PatientValidation.validateSync(req.body.payload.patient, {
      abortEarly: false,
      strict: true,
    });

    const result = await fetchCliniko<PatientClinikoModel>({
      method: 'POST',
      route: 'patients',
      payload: getPatientClinikoModel(req.body.payload.patient) as any,
    });

    return res.status(200).send({ api: 'vsb-api', errors: [result as AppError], payload: { validationErrors: [] } });
  } catch (error) {
    console.log(error);

    const yupError = error as ValidationError;

    const appError = new AppError({
      name: ERROR_TYPE.DTO_VALIDATION_ERROR,
      message: 'Invalid dto',
    });

    res.status(400).send({ api: 'vsb-api', errors: [appError], payload: { validationErrors: yupError.inner } });
  }
};

export const ClinikoController: { [key: string]: RequestHandler } = {
  getClinikoStatus,
  getPatients,
  postPatient,
};
