import { RequestHandler } from 'express';
import fetch from 'node-fetch';
import { env } from '../server';

export const getListPatients: RequestHandler<any, any, any> = async (req, res) => {
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
