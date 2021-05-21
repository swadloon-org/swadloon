import { APIRequestBody, APIResponseBody, API_RESPONSE_STATUS } from '@newrade/core-common';
import debug from 'debug';
import { RequestHandler } from 'express';
import { env } from '../server-express';
import { renderTemplateEmail, sendEmail } from '../services/email.service';

const log = debug('newrade:vsb-api:email');
const logWarn = log.extend('warn');
const logError = log.extend('error');

/**
 * Send a test email
 */
export const getEmail: RequestHandler<any, APIResponseBody<any>, APIRequestBody<any>> = async (
  req,
  res
) => {
  try {
    log(`request to send a test email`);

    await sendEmail(
      {
        from: env.API_VSB_STMP_USER,
        to: 'philippe.leger@newrade.ca',
        subject: 'Message automatique de VSB',
        text: `Ceci est un message automatique`,
      },
      {
        user: env.API_VSB_STMP_USER,
        pass: env.API_VSB_STMP_PASSWORD,
      }
    );

    return res.status(200).send({
      api: 'vsb-api',
      status: API_RESPONSE_STATUS.SUCCESS,
      message: 'Envoie du email de test réussi',
      errors: [],
    });
  } catch (error) {
    return res.status(500).send({
      api: 'vsb-api',
      status: API_RESPONSE_STATUS.ERROR,
      message: 'Envoie du email de test a échoué',
      errors: [error],
    });
  }
};

/**
 * Render an html template
 */
export const getEmailTemplate: RequestHandler<
  any,
  APIResponseBody<string> | string,
  APIRequestBody<any>
> = (req, res) => {
  try {
    const renderedTemplate = renderTemplateEmail({
      data: { name: 'Nouveau patient', email: 'person@email.com' },
    });
    return res.header('Content-Type', 'text/html').status(200).send(renderedTemplate);
  } catch (error) {
    return res.status(500).send({
      api: 'vsb-api',
      status: API_RESPONSE_STATUS.ERROR,
      message: 'Erreur',
      errors: [error],
    });
  }
};
