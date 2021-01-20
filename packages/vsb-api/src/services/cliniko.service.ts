import { AppError, ERROR_TYPE } from '@newrade/core-common/';
import fetch from 'node-fetch';
import { env } from '../server';

export async function fetchCliniko({ method, route, payload }: { method: 'POST'; route: 'patients'; payload: object }) {
  console.log('test');
  const response = await fetch(`https://api.` + `${env.API_VSB_SHARD_ID}.cliniko.com/v1/${route}/`, {
    method,
    headers: {
      authorization: 'Basic ' + Buffer.from(env.API_VSB_KEY + ':').toString('base64'),
      'user-agent': `${env.API_VSB_VENDOR_NAME} (${env.API_VSB_VENDOR_EMAIL})`,
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  console.log(response);
  switch (response.status) {
    case 201: {
      return { name: ERROR_TYPE.SUCCESS_REQUEST, message: 'Data send' } as AppError;
    }
    case 401: {
      return { name: ERROR_TYPE.HTTP_UNAUTHORIZED_401, message: 'Unauthorized' } as AppError;
    }
    case 404: {
      return { name: ERROR_TYPE.HTTP_NOT_FOUND_404, message: 'Not Found' } as AppError;
    }
    case 422: {
      return { name: ERROR_TYPE.UNPROCESSABLE_ENTITY, message: 'Unprocessable Entity' } as AppError;
    }
    case 429: {
      return { name: ERROR_TYPE.RATE_LIMITING_ERROR, message: 'Rate limit' } as AppError;
    }
    default: {
      return response;
    }
  }
}
