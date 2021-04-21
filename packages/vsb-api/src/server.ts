import { DEPLOY_ENV } from '@newrade/core-common';
import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import {
  API_BASE_PATH,
  API_HEALTH_CHECK,
  API_LIST_PATIENTS_ROUTE,
  API_REGISTER_PATIENT_ROUTE,
  API_STATUS_CLINIKO,
  API_TRANSLATION_ROUTE,
} from '@newrade/vsb-common';
import cors from 'cors';
import debug from 'debug';
import express, { Router, urlencoded } from 'express';
import rateLimit from 'express-rate-limit';
import i18nextMiddleware from 'i18next-http-middleware';
import morgan from 'morgan';
import path from 'path';
import { getPatients } from './controllers/cliniko-patients.controller';
import { Env, ENV } from '../types/dot-env';
import { postPatient } from './controllers/cliniko-post-patient.controller';
import { getClinikoStatus } from './controllers/cliniko-status';
import { HealthCheckController } from './controllers/health-check.controller';
import { getTranslation } from './controllers/translation.controller';
import { loggerMiddleware } from './middleware/logger.middleware';
import { recaptchaMiddleware } from './middleware/recaptcha.middleware';
import { i18nService, initI18nService } from './services/i18n.service';

/**
 * Load env variables
 */
export const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '../../.env'),
  dotEnvRootPath: path.resolve(__dirname, '../../../../.env'),
  packageName: '@newrade/vsb-api',
});
logEnvVariables({ packageName: '@newrade/vsb-api', env });

/**
 * Logging setup
 */
const log = debug('newrade:vsb-api');

/**
 * Init
 */
const port = env.APP_PORT ? Number(env.APP_PORT) : 3000;
const server = express();

/**
 * General express configuration
 */
server.disable('x-powered-by');

/**
 * Middlewares
 */
const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 30,
  statusCode: 429,
});
server.use(apiLimiter);
server.use(cors());
server.use(express.json());
server.use(loggerMiddleware);
server.use(morgan('common'));
server.use(urlencoded({ extended: true }));

/**
 * i18n Localization service
 * @see https://github.com/i18next/i18next-http-middleware
 */
initI18nService();
server.use(API_BASE_PATH, i18nextMiddleware.handle(i18nService));

/**
 * Routes
 */
const publicRoutes = Router();
const protectedRoutes = Router();

/**
 * System
 */
publicRoutes.route(API_HEALTH_CHECK).get(HealthCheckController.getHealthCheck);

/**
 * Cliniko
 */
protectedRoutes.use((req, res, next) => {
  console.log(req.url);
  next();
});
publicRoutes.route(API_STATUS_CLINIKO).get(getClinikoStatus);
protectedRoutes.route(API_REGISTER_PATIENT_ROUTE).post(recaptchaMiddleware, postPatient);
protectedRoutes.route(API_LIST_PATIENTS_ROUTE).get(getPatients);

/**
 * Translation
 */
publicRoutes.route(API_TRANSLATION_ROUTE).get(getTranslation);

/**
 * Startup
 */
server.use(protectedRoutes);
server.use(publicRoutes);

/**
 * For local setup only
 */
if (env.APP_ENV === DEPLOY_ENV.LOCAL) {
  const httpServer = server.listen(port);
  log('listening on port ' + port);

  /**
   * Shutdown
   */
  process.on('SIGINT', function () {
    httpServer.close(function () {
      log('finished all requests and shutting down');
    });
  });
  process.on('SIGTERM', function () {
    httpServer.close(function () {
      log('finished all requests and shutting down');
    });
  });
}

module.exports = server;
