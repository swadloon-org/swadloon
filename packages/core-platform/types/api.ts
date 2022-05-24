import { APIResponseBody } from '@newrade/core-common';
import {
  NextApiHandler,
  NextApiHandlerError,
  NextApiHandlerPromise,
  NextApiHandlerVoid,
  NextApiRequest,
  NextApiResponse,
} from 'next';

export enum API_HTTP_METHOD {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

export type ApiResponse<Payload> = NextApiResponse<APIResponseBody<Payload>>;
export type ApiRequest<Payload> = NextApiRequest<APIResponseBody<Payload>>;

export type ApiMiddleware<Payload = undefined> = NextApiHandlerPromise<APIResponseBody<Payload>>;
export type ApiMiddlewareSync<Payload = undefined> = NextApiHandlerVoid<APIResponseBody<Payload>>;

export type ApiHandler<Payload> = NextApiHandler<APIResponseBody<Payload>>;
export type ApiErrorHandler<Payload> = NextApiHandlerError<APIResponseBody<Payload>>;

/**
 * A controller defines handlers for each method
 */
export type APIController = {
  [API_HTTP_METHOD.GET]?: ApiHandler<any>;
  [API_HTTP_METHOD.PUT]?: ApiHandler<any>;
  [API_HTTP_METHOD.POST]?: ApiHandler<any>;
  [API_HTTP_METHOD.DELETE]?: ApiHandler<any>;
};
