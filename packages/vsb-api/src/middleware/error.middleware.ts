import {
  APIRequestBody,
  APIResponseBody,
  API_RESPONSE_STATUS,
  ERROR_TYPE,
} from '@newrade/core-common';
import debug from 'debug';
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

const log = debug('newrade:vsb-api:error');
const logWarn = log.extend('warn');
const logError = log.extend('error');

/**
 * @see https://expressjs.com/en/guide/error-handling.html
 */
export const errorMiddleware: ErrorRequestHandler<
  any,
  APIResponseBody<any>,
  APIRequestBody<any>
> = function authErrorMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
  logError(`unhandled error`);
  res.status(500).send({
    api: 'vsb-api',
    status: API_RESPONSE_STATUS.ERROR,
    message: `Une erreur est survenu, notre équipe a été averti`,
    errors: [{ name: ERROR_TYPE.UNHANDLED_ERROR, message: error.message || '' }],
    payload: {},
  });
};
