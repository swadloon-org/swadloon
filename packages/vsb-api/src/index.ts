import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import { json } from 'body-parser';
import express, { Router, urlencoded } from 'express';
import path from 'path';
import { Env, ENV } from '../types/dot-env';
import { postPatient } from './controller/post-patient.controller';

/**
 * Env variables
 */
export const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '../../.env'),
  packageName: '@newrade/vsb-api',
});
logEnvVariables({ packageName: '@newrade/vsb-api', env });

/**
 * Init
 */
const port = env.APP_PORT ? Number(env.APP_PORT) : 3000;
const server = express();

/**
 * Middlewares
 */
server.use(json());
server.use(urlencoded({ extended: true }));

/**
 * Routes
 */
const router = Router();
server.use('/api', router);
router.route('/register').post(postPatient);

const httpServer = server.listen(port);

console.log('listening on port: ' + port);

/**
 * Shutdown
 */
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
