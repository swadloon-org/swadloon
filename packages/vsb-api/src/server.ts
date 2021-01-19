import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import express, { Router, urlencoded } from 'express';
import { Server } from 'http';
import i18nextMiddleware from 'i18next-http-middleware';
import morgan from 'morgan';
import path from 'path';
import { Env, ENV } from '../types/dot-env.js';
import { API_REGISTER_ROUTE, API_TRANSLATION_ROUTE } from './constants/api-routes.constants';
import { postPatient } from './controller/post-patient.controller';
import { getTranslation } from './controller/translation.controller.js';
import { i18nService, initI18nService } from './services/i18n.service';

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
let httpServer: Server;

/**
 * i18n Localization service
 * @see  see https://github.com/i18next/i18next-http-middleware
 */
initI18nService();
server.use(i18nextMiddleware.handle(i18nService));

/**
 * General express configuration
 */
server.disable('x-powered-by');

/**
 * Middlewares
 */
server.use(express.json());
server.use(morgan('common'));
server.use(urlencoded({ extended: true }));

/**
 * Routes
 */
const router = Router();
server.use(router);
router.route(API_REGISTER_ROUTE).post(postPatient);
router.route(API_TRANSLATION_ROUTE).get(getTranslation);

httpServer = server.listen(port);

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
