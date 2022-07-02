import { ApiMiddlewareSync } from '@/types/api';
import { log } from '@/utilities/log.utilities';
import { lower } from 'case';

export const loggerMiddleware: ApiMiddlewareSync = (req, res) => {
  if (req.method) {
    log(`${lower(req.method)} ${req.url}`);
  }
};
