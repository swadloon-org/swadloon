import { APIResponseBody, API_RESPONSE_STATUS, ERROR_TYPE } from '@newrade/core-common';
import { NextApiHandlerError, NextApiResponse } from 'next';
import { logError } from '@/utilities/log.utilities';

export type UnhandledErrorPayload = APIResponseBody<{}>;

/**
 * Error handler
 *
 * Note: this is similar to ExpressJS, but Next have no dedicated ErrorHandler
 *
 * @see https://expressjs.com/en/guide/error-handling.html
 */
export const errorMiddleware: NextApiHandlerError<UnhandledErrorPayload> = (
  req,
  res: NextApiResponse<APIResponseBody<{}>>,
  error: any
) => {
  logError(`unhandled error`);
  return res.status(500).send({
    api: 'platform',
    status: API_RESPONSE_STATUS.ERROR,
    message: `An error occured`,
    errors: [{ name: ERROR_TYPE.UNHANDLED_ERROR, message: error.message || '' }],
    payload: {},
  });
};
