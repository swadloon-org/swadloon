import { API_RESPONSE_STATUS } from '@newrade/core-common';
import debug from 'debug';
import { RequestHandler } from 'express';
import { env } from '../server';

const log = debug('newrade:vsb-api:health-check');
const logWarn = log.extend('warn');
const logError = log.extend('error');

/**
 * Messages
 */
const systemError = `Une erreur s'est produite dans nos système.`;

/**
 * Health check to make sure the api is online and deployed
 */
const getHealthCheck: RequestHandler<any, any, any> = async (req, res) => {
  try {
    log(`request for health check`);
    log(`received health check from ip:${req.headers.origin}`);
    res.status(200).send(`hello ${req.headers.origin} on ${env.APP_ENV}!`);
  } catch (error) {
    logError(`request failed for service status`);
    return res
      .status(500)
      .send({ api: 'vsb-api', status: API_RESPONSE_STATUS.ERROR, message: systemError, errors: [error], payload: {} });
  }
};

export const HealthCheckController: { [key: string]: RequestHandler } = {
  getHealthCheck,
};
