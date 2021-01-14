import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import express, { Request, Response } from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { Patient } from './models/patient.model';
import { Env, ENV } from './types/dot-env';

const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '../.env'),
  packageName: '@newrade/vsb-api',
});
logEnvVariables({ packageName: '@newrade/vsb-api', env });

const port = env.APP_PORT ? Number(env.APP_PORT) : 3000;

const server = express();

const testPatient: Partial<Patient> = {
  accepted_email_marketing: false,
  accepted_privacy_policy: true,
  accepted_sms_marketing: false,
  address_1: '12312321',
  country: 'Canada',
  date_of_birth: '1999-09-09',
  email: 'fake@newrade.ca',
  first_name: 'Lorem',
  gender_identity: 'Man',
  invoice_email: null,
  last_name: 'Ipsum',
  medicare_reference_number: null,
  patient_phone_numbers: [{ number: '4444444444', phone_type: 'Mobile' }],
  receives_confirmation_emails: true,
  reminder_type: 'SMS & Email',
  sex: 'Male',
  state: '',
  title: 'Mr',
};

server.get('/', (req: Request, res: Response) => {
  console.log(req);
  res.send('<form action="/register" method="post"><input type="submit"></form>');
});

server.post('/register', (req: Request, res: Response) => {
  fetch('https://api.' + env.SHARD_ID + '.cliniko.com/v1/patients/', {
    method: 'POST',
    headers: {
      authorization: 'Basic ' + Buffer.from(env.API_KEY + ':').toString('base64'),
      'user-agent': `${env.APP_VENDOR_NAME} (${env.APP_VENDOR_EMAIL})`,
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({ ...testPatient }),
  })
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
});

const httpServer = server.listen(port);
console.log('listening on port: ' + port);

process.on('SIGINT', function () {
  httpServer.close(function () {
    console.log('Finished all requestsss');
  });
});
process.on('SIGTERM', function () {
  httpServer.close(function () {
    console.log('Finished all requests');
  });
});
