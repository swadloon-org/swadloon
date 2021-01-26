import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { PatientAPIResponseBody } from '@newrade/vsb-common';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import fetch from 'node-fetch';
import { env } from '../server';

export interface recaptchaResponse {
  success?: boolean;
  errors?: Array<string>;
}

export const recaptchaMiddleware: RequestHandler<any, PatientAPIResponseBody, any> = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const secret_key = env.API_VSB_SECRET_KEY_RECAPTCHAT;
    const token = req.body.payload.recaptcha.token;
    const urlApiRecaptcha = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

    const response = await fetch(urlApiRecaptcha, {
      method: 'POST',
    });

    const errorsRecaptcha: recaptchaResponse = await response.json();

    console.log(response.status);

    if (errorsRecaptcha.success === true) {
      next();
    } else {
      throw new AppError({ name: ERROR_TYPE.AUTH_ERROR, message: 'Invalid Recaptcha', value: errorsRecaptcha });
    }
  } catch (error) {
    res.status(400).send({ api: 'vsb-api', errors: [error], payload: { validationErrors: [] } });
  }
};
