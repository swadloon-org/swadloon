import { API_RESPONSE_STATUS, AppError, ERROR_TYPE } from '@newrade/core-common';
import {
  getPatientClinikoModel,
  PatientAPIRequestBody,
  PatientAPIResponseBody,
  PatientClinikoModel,
  PatientClinikoValidation,
} from '@newrade/vsb-common';
import debug from 'debug';
import { RequestHandler } from 'express';
import fetch from 'node-fetch';
import { ValidationError } from 'yup';
import { env } from '../server';
import { ClinikoAPIResponseError } from './cliniko.constants';

const log = debug('newrade:vsb-api:cliniko');
const logWarn = log.extend('warn');
const logError = log.extend('error');

/**
 * Messages
 */
const systemError = `Une erreur s'est produite dans nos système, notre équipe technique s'occupe de l'incident, si l'erreur persiste, veuillez nous contacter.`;
const validationError = `Veuillez vérifier tout les champs du formulaire et soumettre à nouveau.`;

/**
 * Simple call to cliniko to make sure we can react their API.
 */
const getClinikoStatus: RequestHandler<any, PatientAPIResponseBody, any> = async (req, res) => {
  try {
    log(`request for service status`);
    const result = await fetchCliniko<{}>({
      method: 'GET',
      route: 'services',
    });

    if (result.status === API_RESPONSE_STATUS.SUCCESS) {
      return res.status(200).send(result);
    }

    return res.status(400).send(result);
  } catch (error) {
    logError(`request failed for service status`);
    return res
      .status(500)
      .send({ api: 'vsb-api', status: API_RESPONSE_STATUS.ERROR, message: systemError, errors: [error], payload: {} });
  }
};

/**
 * Retrieve patients list. This requires authentication.
 */
// const getPatients: RequestHandler<any, any, any> = async (req, res) => {
//   try {
//     const route = 'patients';
//     const paramsSearch = 'created_at';
//     const filterParams = `?sort=${paramsSearch}:desc`;

//     const response = await fetchCliniko<{}>({
//       method: 'GET',
//       route: `${route}${filterParams}`,
//       payload: {},
//     });

//     return res.status(200).send(response);
//   } catch (error) {
//     res.status(400).send({ api: 'vsb-api', errors: [error] });
//   }
// };

/**
 * Create a new patient from our form.
 */
const postPatient: RequestHandler<any, PatientAPIResponseBody, PatientAPIRequestBody> = async (req, res) => {
  try {
    log(`request to create a patient`);

    const payload = req.body?.payload?.patient;

    if (!req.body?.payload?.patient) {
      logError(`missing payload`);

      res.status(400).send({
        api: 'vsb-api',
        status: API_RESPONSE_STATUS.ERROR,
        message: validationError,
        errors: [{ name: ERROR_TYPE.DTO_VALIDATION_ERROR, message: 'Empty payload' }],
        payload: {},
      });
      return;
    }

    const clinikoPatient = getPatientClinikoModel(payload);

    PatientClinikoValidation.validateSync(clinikoPatient, {
      abortEarly: false,
    });

    log(`validation passed, sending request to cliniko`);

    const result = await fetchCliniko<PatientClinikoModel>({
      method: 'POST',
      route: 'patients',
      payload: clinikoPatient,
    });

    log(`patient successfully created`);

    return res.status(200).send(result);
  } catch (error) {
    logError(`request failed`);
    const yupError = error as ValidationError;

    // handle error thrown from yup
    if (yupError.inner) {
      logError(`request did not pass yup validation`);

      const appError = new AppError({
        name: ERROR_TYPE.DTO_VALIDATION_ERROR,
        message: 'Invalid dto',
      });
      res.status(400).send({
        api: 'vsb-api',
        status: API_RESPONSE_STATUS.ERROR,
        message: validationError,
        errors: [appError],
        payload: { yupValidationErrors: yupError.inner },
      });
      return;
    }

    logError(`request failed to an unhandled error`);
    res.status(500).send({
      api: 'vsb-api',
      status: API_RESPONSE_STATUS.ERROR,
      message: validationError,
      errors: [{ name: ERROR_TYPE.UNHANDLED_ERROR, message: error.message }],
      payload: { yupValidationErrors: yupError.inner },
    });
  }
};

const logCliniko = debug('newrade:vsb-api:cliniko-api');
const logClinikoWarn = logCliniko.extend('warn');
const logClinikoError = logCliniko.extend('error');

/**
 * Wrapper for Cliniko's API.
 * Its job is to send request to Cliniko and return the response in a known format.
 * @see https://github.com/redguava/cliniko-api
 */
export async function fetchCliniko<Payload extends object>({
  method,
  version = 'v1',
  route,
  payload,
}: {
  method: 'GET' | 'PUT' | 'POST';
  version?: string;
  route: string;
  payload?: Payload;
}): Promise<PatientAPIResponseBody> {
  try {
    logCliniko(`sending request to ${route}`);

    const request = await fetch(`https://api.` + `${env.API_VSB_SHARD_ID}.cliniko.com/${version}/${route}/`, {
      method,
      headers: {
        authorization: 'Basic ' + Buffer.from(env.API_VSB_KEY_CLINIKO + ':').toString('base64'),
        'user-agent': `${env.API_VSB_VENDOR_NAME} (${env.API_VSB_VENDOR_EMAIL})`,
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: payload ? JSON.stringify(payload) : undefined,
    });

    logCliniko(`processing cliniko response with status ${request.status}`);

    const clinikoResponse: ClinikoAPIResponseError = await request.json();

    let response: PatientAPIResponseBody;

    switch (request.status) {
      case 200:
      case 201: {
        response = {
          api: 'cliniko',
          status: API_RESPONSE_STATUS.SUCCESS,
          message: `Votre demande a bien été reçue ! Merci !`,
          errors: [],
          payload: {},
        };
        break;
      }

      case 401: {
        logClinikoError(`unable to connect to cliniko ${request.status}`);
        response = {
          api: 'cliniko',
          status: API_RESPONSE_STATUS.ERROR,
          message: systemError,
          errors: [{ name: ERROR_TYPE.HTTP_UNAUTHORIZED_401, message: 'Unable to connect to cliniko' }],
          payload: {},
        };
        break;
      }

      case 404: {
        response = {
          api: 'cliniko',
          status: API_RESPONSE_STATUS.ERROR,
          message: systemError,
          errors: [{ name: ERROR_TYPE.HTTP_NOT_FOUND_404, message: 'Not Found' }],
          payload: {},
        };
        break;
      }

      case 422: {
        response = {
          api: 'cliniko',
          status: API_RESPONSE_STATUS.ERROR,
          message: systemError,
          errors: [
            {
              name: ERROR_TYPE.UNPROCESSABLE_ENTITY,
              message: 'Unprocessable Entity',
              value: clinikoResponse,
            },
          ],
          payload: {},
        };
        break;
      }

      case 429: {
        response = {
          api: 'cliniko',
          status: API_RESPONSE_STATUS.ERROR,
          message: systemError,
          errors: [{ name: ERROR_TYPE.RATE_LIMITING_ERROR, message: 'Rate limit' }],
          payload: {},
        };
        break;
      }

      case 500: {
        response = {
          api: 'cliniko',
          status: API_RESPONSE_STATUS.ERROR,
          message: systemError,
          errors: [
            {
              name: ERROR_TYPE.INTERNAL_SERVER_ERROR,
              message: 'Internal Server Error',
              value: clinikoResponse,
            },
          ],
          payload: {},
        };
        break;
      }

      default: {
        response = {
          api: 'cliniko',
          status: API_RESPONSE_STATUS.ERROR,
          message: systemError,
          errors: [
            {
              name: ERROR_TYPE.INTERNAL_SERVER_ERROR,
              message: 'Unabled to process cliniko response',
              value: clinikoResponse,
            },
          ],
          payload: {},
        };
        break;
      }
    }

    if (response.status === API_RESPONSE_STATUS.SUCCESS) {
      logCliniko(`request was successful ${request.status}`);
      return response;
    }

    logClinikoError(`${response.status} ${request.status}`);
    return response;
  } catch (error) {
    logClinikoError(`unhandled error ${error.name} ${error.message}`);
    return {
      api: 'cliniko',
      status: API_RESPONSE_STATUS.ERROR,
      message: systemError,
      errors: [
        {
          name: error.name,
          message: error.message,
        },
      ],
      payload: {},
    };
  }
}

export const ClinikoController: { [key: string]: RequestHandler } = {
  getClinikoStatus,
  // getPatients,
  postPatient,
};
