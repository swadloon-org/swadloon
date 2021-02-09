import cors from 'cors';
import express, { Router, urlencoded } from 'express';
import rateLimit from 'express-rate-limit';
import i18nextMiddleware from 'i18next-http-middleware';
import morgan from 'morgan';
import { env } from '../types/dot-env';
import {
  API_BASE_PATH,
  API_REGISTER_PATIENT_ROUTE,
  API_STATUS_CLINIKO,
  API_TRANSLATION_ROUTE,
} from './constants/api-routes.constants';
import { ClinikoController } from './controller/cliniko.controller';
import { getTranslation } from './controller/translation.controller';
import { recaptchaMiddleware } from './middleware/recaptcha.middleware';
import { i18nService, initI18nService } from './services/i18n.service';

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
  max: 10,
  statusCode: 429,
});
server.use(apiLimiter);
server.use(cors());
server.use(express.json());
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
router.route('/api/server').get((req, res) => {
  res.send('yes');
});
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

const serverless = require('serverless-http');

module.exports.handler = serverless(server);
