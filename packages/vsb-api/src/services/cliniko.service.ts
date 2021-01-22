import fetch from 'node-fetch';
import { env } from '../server';

export async function fetchCliniko({ method, route, payload }: { method: 'POST'; route: 'patients'; payload: object }) {
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

  switch (response.status) {
    case 200: {
      return response;
    }
    default: {
      return response;
    }
  }
}
