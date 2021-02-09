import { AppError, ERROR_TYPE } from '@newrade/core-common/';
import fetch from 'node-fetch';
import { env } from '../../types/dot-env';

// Todo erreur from cliniko
type clinikoResponse = {
  errors: object;
  message: string;
};

export async function fetchCliniko<Payload extends object>({
  method,
  route,
  payload,
}: {
  method: 'POST';
  route: 'patients';
  payload: Payload;
}) {
  const response = await fetch(`https://api.` + `${env.API_VSB_SHARD_ID}.cliniko.com/v1/${route}/`, {
    method,
    headers: {
      authorization: 'Basic ' + Buffer.from(env.API_VSB_KEY_CLINIKO + ':').toString('base64'),
      'user-agent': `${env.API_VSB_VENDOR_NAME} (${env.API_VSB_VENDOR_EMAIL})`,
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const errorsCliniko: clinikoResponse = await response.json();

  switch (response.status) {
    case 201: {
      return { name: ERROR_TYPE.SUCCESSFUL_REQUEST, message: 'Data send' } as AppError;
    }
    case 401: {
      return { name: ERROR_TYPE.HTTP_UNAUTHORIZED_401, message: 'Unable to conntect to cliniko' } as AppError;
    }
    case 404: {
      return { name: ERROR_TYPE.HTTP_NOT_FOUND_404, message: 'Not Found' } as AppError;
    }
    case 422: {
      return {
        name: ERROR_TYPE.UNPROCESSABLE_ENTITY,
        message: 'Unprocessable Entity',
        value: errorsCliniko,
      } as AppError;
    }
    case 429: {
      return { name: ERROR_TYPE.RATE_LIMITING_ERROR, message: 'Rate limit' } as AppError;
    }
    case 500: {
      return {
        name: ERROR_TYPE.INTERNAL_SERVER_ERROR,
        message: 'Internal Server Error',
        value: errorsCliniko,
      } as AppError;
    }
    default: {
      return response;
    }
  }
}

/**
 * Return in 422 new format error to the payload error
 */
