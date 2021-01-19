import { RequestHandler } from 'express';
import fetch from 'node-fetch';
import { env } from '../index';
import { runReport } from '../io-ts/reporter';
import { Patient, PatientModel } from '../models/patient.model';

type APIResponse = {
  api: string;
  route: string;
  status: string;
  statusCode: number;
  message: string;
  validations: FieldValidation[];
};

type FieldValidation = { prop: string; displayMessage: string; status: 'info' | 'valid' | 'warning' | 'error' };

const response: APIResponse = {
  api: 'vsb-api',
  route: 'req.url', // /api/v1/patient
  status: '',
  statusCode: 401,
  message: 'Certains champs sont manquants',
  validations: [
    {
      prop: 'patient.first_name',
      displayMessage: 'Champ requis',
      status: 'error',
    },
  ],
};

export const postPatient: RequestHandler<any, any /** ???? what */, { patient: PatientModel }> = async (req, res) => {
  try {
    const validation = Patient.decode(req.body.patient);
    const result = runReport(validation);

    if (!result.success) {
      return res.status(400).send(result);
    }

    const clinikoResult = await fetch('https://api.' + env.API_VSB_SHARD_ID + '.cliniko.com/v1/patients/', {
      method: 'POST',
      headers: {
        authorization: 'Basic ' + Buffer.from(env.API_VSB_KEY + ':').toString('base64'),
        'user-agent': `${env.API_VSB_VENDOR_NAME} (${env.API_VSB_VENDOR_EMAIL})`,
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(req.body.patient),
    });

    if (clinikoResult.status === 200) {
      return res.status(201).send({ message: 'Data is valid' });
    } else {
      return res.status(400).send(clinikoResult);
    }
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
