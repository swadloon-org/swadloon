import { Request, Response } from 'express';
import fetch from 'node-fetch';
import { env } from '../index';

export const createPatientCliniko = async (req: Request, res: Response) => {
  console.log('sending');
  const createPatient = await req.body.patient;
  try {
    await fetch('https://api.' + env.API_VSB_SHARD_ID + '.cliniko.com/v1/patients/', {
      method: 'POST',
      headers: {
        authorization: 'Basic ' + Buffer.from(env.API_VSB_KEY + ':').toString('base64'),
        'user-agent': `${env.API_VSB_VENDOR_NAME} (${env.API_VSB_VENDOR_EMAIL})`,
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ ...createPatient }),
    }).then((res) => console.log(res));

    res.status(201).send({ message: 'Data is valid' });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
