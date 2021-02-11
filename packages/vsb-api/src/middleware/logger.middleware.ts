import { PatientAPIResponseBody } from '@newrade/vsb-common';
import debug from 'debug';
import { NextFunction, Request, RequestHandler, Response } from 'express';

const log = debug('newrade:vsb-api');

export const loggerMiddleware: RequestHandler<any, PatientAPIResponseBody, any> = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    log('receiving status request');
    next();
  } catch (error) {}
};
