import { lower } from 'case';
import debug from 'debug';
import { NextFunction, Request, RequestHandler, Response } from 'express';

const log = debug('newrade:vsb-api');
const logError = log.extend('error');

export const loggerMiddleware: RequestHandler<any, any, any> = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    log(`${lower(req.method)} ${req.url}`);
    next();
  } catch (error) {
    logError(`${error.message}`);
  }
};
