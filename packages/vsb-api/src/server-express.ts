import { DEPLOY_ENV } from '@newrade/core-common';
import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import {
  API_BASE_PATH,
  API_GET_EMAIL_TEMPLATE,
  API_HEALTH_CHECK,
  API_LIST_PATIENTS_ROUTE,
  API_REGISTER_PATIENT_ROUTE,
  API_SEND_EMAIL,
  API_STATUS_CLINIKO,
  API_TRANSLATION_ROUTE,
} from '@newrade/vsb-common';
import cors from 'cors';
import debug from 'debug';
import express, { urlencoded } from 'express';
import rateLimit from 'express-rate-limit';
import i18nextMiddleware from 'i18next-http-middleware';
import morgan from 'morgan';
import path from 'path';
import { Env, ENV } from '../types/dot-env';
import { getPatients } from './controllers/cliniko-patients.controller';
import { postPatient } from './controllers/cliniko-post-patient.controller';
import { getClinikoStatus } from './controllers/cliniko-status';
import { getEmail, getEmailTemplate } from './controllers/email.controller';
import { HealthCheckController } from './controllers/health-check.controller';
import { getTranslation } from './controllers/translation.controller';
import { auth0JwtMiddleware, authErrorMiddleware } from './middleware/authentication.middleware';
import { errorMiddleware } from './middleware/error.middleware';
import { loggerMiddleware } from './middleware/logger.middleware';
import { recaptchaMiddleware } from './middleware/recaptcha.middleware';
import { graphqlServer } from './server-graphql';
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
const expressServer = express();

/**
 * General express configuration
 */
expressServer.disable('x-powered-by');

/**
 * Middlewares
 */
const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 300,
  statusCode: 429,
});
expressServer.use(rateLimiter);
expressServer.use(cors());
expressServer.use(express.json());
expressServer.use(loggerMiddleware);
expressServer.use(morgan('common'));
expressServer.use(urlencoded({ extended: true }));

/**
 * GraphQL Server
 */
expressServer.use('/graphql', graphqlServer);

/**
 * i18n Localization service
 * @see https://github.com/i18next/i18next-http-middleware
 */
initI18nService();
expressServer.use(API_BASE_PATH, i18nextMiddleware.handle(i18nService));

/**
 * System routes
 */
expressServer.get(API_HEALTH_CHECK, HealthCheckController.getHealthCheck);

/**
 * Cliniko routes
 */
expressServer.get(API_STATUS_CLINIKO, getClinikoStatus);
expressServer.post(API_REGISTER_PATIENT_ROUTE, recaptchaMiddleware, postPatient);
expressServer.get(API_LIST_PATIENTS_ROUTE, auth0JwtMiddleware, getPatients);

/**
 * STMP (only for testing locally)
 */
if (env.APP_ENV === DEPLOY_ENV.LOCAL) {
  expressServer.get(API_SEND_EMAIL, getEmail);
  expressServer.get(API_GET_EMAIL_TEMPLATE, getEmailTemplate);
}

/**
 * Translation
 */
expressServer.route(API_TRANSLATION_ROUTE).get(getTranslation);

/**
 * Error Handling
 */
expressServer.use(authErrorMiddleware);
expressServer.use(errorMiddleware);

/**
 * For local setup only
 */
if (env.APP_ENV === DEPLOY_ENV.LOCAL && !env.TEST_ENV) {
  const httpServer = expressServer.listen(port);
  log('listening on port ' + port);
  log(`graphql server ready at /graphql`);

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

module.exports = expressServer;
