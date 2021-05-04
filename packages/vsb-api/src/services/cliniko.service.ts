import { APIResponseBody, API_RESPONSE_STATUS, ERROR_TYPE } from '@newrade/core-common';
import fetch from 'node-fetch';
import { env } from '../server-express';
import { ClinikoAPIResponseError } from '../controllers/cliniko.constants';
import { systemError } from '../controllers/cliniko-post-patient.controller';
import debug from 'debug';

const logCliniko = debug('newrade:vsb-api:cliniko-api');
const logClinikoWarn = logCliniko.extend('warn');
const logClinikoError = logCliniko.extend('error');

/**
 * Wrapper for Cliniko's API.
 * Its job is to send request to Cliniko and return the response in a **known** format.
 * @see https://github.com/redguava/cliniko-api
 */
export async function fetchCliniko<Payload extends object, ResponsePayload extends object>({
  method,
  version = 'v1',
  route,
  params,
  payload,
}: {
  method: 'GET' | 'PUT' | 'POST';
  version?: string;
  route: string;
  params?: string;
  payload?: Payload;
}): Promise<APIResponseBody<ResponsePayload>> {
  try {
    logCliniko(`sending request to ${route}`);

    const request = await fetch(
      `https://api.` + `${env.API_VSB_SHARD_ID}.cliniko.com/${version}/${route}/?${params || ''}`,
      {
        method,
        headers: {
          authorization: 'Basic ' + Buffer.from(env.API_VSB_KEY_CLINIKO + ':').toString('base64'),
          'user-agent': `${env.API_VSB_VENDOR_NAME} (${env.API_VSB_VENDOR_EMAIL})`,
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: payload ? JSON.stringify(payload) : undefined,
      }
    );

    logCliniko(`processing ${request.url} cliniko response with status ${request.status}`);

    const clinikoResponse: ClinikoAPIResponseError = await request.json();

    let response: APIResponseBody<ResponsePayload>;

    switch (request.status) {
      case 200:
      case 201: {
        response = {
          api: 'cliniko',
          status: API_RESPONSE_STATUS.SUCCESS,
          message: `Votre demande a bien été reçue ! Merci !`,
          errors: [],
          payload: clinikoResponse as ResponsePayload,
        };
        break;
      }

      case 401: {
        logClinikoError(`unable to connect to cliniko ${request.status}`);
        response = {
          api: 'cliniko',
          status: API_RESPONSE_STATUS.ERROR,
          message: systemError,
          errors: [
            { name: ERROR_TYPE.HTTP_UNAUTHORIZED_401, message: 'Unable to connect to cliniko' },
          ],
          payload: {} as ResponsePayload,
        };
        break;
      }

      case 404: {
        response = {
          api: 'cliniko',
          status: API_RESPONSE_STATUS.ERROR,
          message: systemError,
          errors: [{ name: ERROR_TYPE.HTTP_NOT_FOUND_404, message: 'Not Found' }],
          payload: {} as ResponsePayload,
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
          payload: {} as ResponsePayload,
        };
        break;
      }

      case 429: {
        response = {
          api: 'cliniko',
          status: API_RESPONSE_STATUS.ERROR,
          message: systemError,
          errors: [{ name: ERROR_TYPE.RATE_LIMITING_ERROR, message: 'Rate limit' }],
          payload: {} as ResponsePayload,
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
          payload: {} as ResponsePayload,
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
          payload: {} as ResponsePayload,
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
      payload: {} as ResponsePayload,
    };
  }
}
