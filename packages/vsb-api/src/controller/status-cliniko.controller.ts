import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { RequestHandler } from 'express';
import fetch from 'node-fetch';
import { env } from '../server';

export const statusCliniko: RequestHandler<any, any, any> = async (req, res) => {
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

    // return res.status(200).send({ api: 'vsb-api', errors: [result as AppError], payload: { validationErrors: [] } });
  } catch (error) {
    res.status(400).send({ api: 'vsb-api', errors: [error] });
  }
};
