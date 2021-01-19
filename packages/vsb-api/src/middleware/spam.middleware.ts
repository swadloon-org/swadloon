import { NextFunction, Request, Response } from 'express';

export const spamMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // reveive request
    // do some validation to make sure it's spam
    // rate limiting
    // ip 1234 did send more than 10 requests in the last 10 seconds return 429 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
    /**
     *  HTTP/1.1 429 Too Many Requests
        Content-Type: text/html
        Retry-After: 3600
     */
  } catch (e) {}
};
