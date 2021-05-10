import {
  APIRequestBody,
  APIResponseBody,
  API_RESPONSE_STATUS,
  ERROR_TYPE,
} from '@newrade/core-common';
import debug from 'debug';
import { ErrorRequestHandler } from 'express';
import jwt, { UnauthorizedError } from 'express-jwt';
import jwksRsa from 'jwks-rsa';

const log = debug('newrade:vsb-api:auth0');
const logWarn = log.extend('warn');
const logError = log.extend('error');

/**
 * Auth0 Middleware
 *
 * @see https://github.com/auth0/express-jwt
 */
// Authorization middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
export const auth0JwtMiddleware = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://vsb.us.auth0.com/.well-known/jwks.json',
  }),
  requestProperty: 'req.auth', // access JWT with req.auth
  audience: 'https://api.vasectomie-pierre-boucher.ca/',
  issuer: 'https://vsb.us.auth0.com/',
  algorithms: ['RS256'],
});

export const authErrorMiddleware: ErrorRequestHandler<
  any,
  APIResponseBody<any>,
  APIRequestBody<any>
> = function authErrorMiddleware(error, req, res, next) {
  const reqJwt: APIRequestBody<any> & { auth: object } = req as any;

  if ((error && error.name === UnauthorizedError.name) || !reqJwt?.auth) {
    logError(`unauthorized request error`);
    res.status(401).send({
      api: 'vsb-api',
      status: API_RESPONSE_STATUS.ERROR,
      message: `Vous devez être authentifié pour accéder à cette ressource`,
      errors: [{ name: ERROR_TYPE.HTTP_UNAUTHORIZED_401, message: error.message || '' }],
      payload: {},
    });
    return;
  }
  next(error);
};
