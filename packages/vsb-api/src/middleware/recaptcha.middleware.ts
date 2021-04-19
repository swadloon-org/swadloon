import { API_RESPONSE_STATUS, ERROR_TYPE } from '@newrade/core-common';
import { CreatePatientAPIResponseBody } from '@newrade/vsb-common';
import debug from 'debug';
import { RequestHandler } from 'express';
import fetch from 'node-fetch';
import { env } from '../server';

const log = debug('newrade:vsb-api:recaptcha');
const logError = log.extend('error');

export interface RecaptchaResponse {
  success?: boolean;
  errors?: Array<string>;
}

export const recaptchaMiddleware: RequestHandler<any, CreatePatientAPIResponseBody, any> = async (req, res, next) => {
  try {
    const secret_key = env.API_VSB_SECRET_KEY_RECAPTCHA;

    log(`incoming request for ${req ? req.url : ''}`);

    if (!req?.body?.payload?.recaptcha?.token) {
      logError(`invalid token`);

      return res.status(400).send({
        api: 'vsb-api',
        status: API_RESPONSE_STATUS.ERROR,
        message: `Le recaptcha est manquant, veuillez vérifier que la case est bien cochée`,
        errors: [{ name: ERROR_TYPE.DTO_VALIDATION_ERROR, message: 'Missing recaptcha token' }],
        payload: {},
      });
    }

    log(`token is set, verifying with google`);

    const token = req.body.payload.recaptcha.token;
    const urlApiRecaptcha = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

    const response = await fetch(urlApiRecaptcha, {
      method: 'POST',
    });

    const recaptchaResponse: RecaptchaResponse = await response.json();

    if (recaptchaResponse.success === true) {
      log(`token validation succcessful`);
      next();
    } else {
      log(`token validation succcessful`);

      res.status(400).send({
        api: 'vsb-api',
        status: API_RESPONSE_STATUS.ERROR,
        message: `Une erreur s'est produite durant la validation du recaptcha.`,
        errors: [{ name: ERROR_TYPE.UNHANDLED_ERROR, message: recaptchaResponse.errors?.join(', ') || '' }],
        payload: {},
      });
    }
  } catch (error) {
    res.status(500).send({
      api: 'vsb-api',
      status: API_RESPONSE_STATUS.ERROR,
      message: `Une erreur s'est produite durant la validation du recaptcha.`,
      errors: [{ name: ERROR_TYPE.UNHANDLED_ERROR, message: error.message }],
      payload: {},
    });
  }
};
