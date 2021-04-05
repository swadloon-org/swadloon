import { DEPLOY_ENV } from '@newrade/core-common';
import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import {
  API_BASE_PATH,
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
import { Env, ENV } from '../types/dot-env';
import { ClinikoController } from './controller/cliniko.controller';
import { getTranslation } from './controller/translation.controller';
import { loggerMiddleware } from './middleware/logger.middleware';
import { recaptchaMiddleware } from './middleware/recaptcha.middleware';
import { i18nService, initI18nService } from './services/i18n.service';

/**
 * Load env variable
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
const router = Router();
/**
 * Cliniko
 */
router.route(API_STATUS_CLINIKO).get(ClinikoController.getClinikoStatus);
router.route(API_REGISTER_PATIENT_ROUTE).post(recaptchaMiddleware, ClinikoController.postPatient);
// TODO: enable router.route(API_LIST_PATIENTS_ROUTE).get(getListPatients);
/**
 * Translation
 */
router.route(API_TRANSLATION_ROUTE).get(getTranslation);

/**
 * Startup
 */
server.use(router);

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

const serverless = require('serverless-http');

module.exports.handler = serverless(server);
