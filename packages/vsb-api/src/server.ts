import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import cors from 'cors';
import express, { Router, urlencoded } from 'express';
import rateLimit from 'express-rate-limit';
import { Server } from 'http';
import i18nextMiddleware from 'i18next-http-middleware';
import morgan from 'morgan';
import path from 'path';
import { Env, ENV } from '../types/dot-env.js';
import {
  API_BASE_PATH,
  API_REGISTER_PATIENT_ROUTE,
  API_STATUS_CLINIKO,
  API_TRANSLATION_ROUTE,
} from './constants/api-routes.constants';
import { postPatient } from './controller/post-patient.controller';
import { statusCliniko } from './controller/status-cliniko.controller';
import { getTranslation } from './controller/translation.controller';
import { recaptchaMiddleware } from './middleware/recaptcha.middleware';
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
server.use(cors());
server.use(express.json());
server.use(morgan('common'));
server.use(urlencoded({ extended: true }));

/**
 * Rate Limiter
 */
const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 10,
  statusCode: 429,
});
server.use(API_BASE_PATH, apiLimiter);

/**
 * Routes
 */
const router = Router();
server.use(router);
router.route(API_STATUS_CLINIKO).get(statusCliniko);
router.route(API_REGISTER_PATIENT_ROUTE).post(recaptchaMiddleware, postPatient);
router.route(API_TRANSLATION_ROUTE).get(getTranslation);
// router.route(API_LIST_PATIENTS_ROUTE).get(getListPatients);

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
