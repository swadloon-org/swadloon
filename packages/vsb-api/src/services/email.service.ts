import { AppError, ERROR_TYPE } from '@newrade/core-common';
import debug from 'debug';
import nodemailer, { SendMailOptions } from 'nodemailer';
import { env } from '../server-express';

const log = debug('newrade:vsb-api:email-service');
const logWarn = log.extend('warn');
const logError = log.extend('error');

type EmailResult = {
  accepted: string[];
  rejected: string[];
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: { from?: string; to?: string[] };
  messageId: string;
};
type Options = SendMailOptions;

export async function sendEmail(
  options: Options,
  auth: {
    user: string;
    pass: string;
  }
) {
  try {
    if (!options.from || !options.to) {
      logError(`missing options`);
      throw new AppError({
        name: ERROR_TYPE.STMP_ERROR,
        message: `missing options`,
      });
    }

    log(`sending email to ${options.to}`);

    if (!auth.pass || !auth.user) {
      logError(`auth credentials are required`);
      throw new AppError({
        name: ERROR_TYPE.STMP_ERROR,
        message: `auth credentials are required`,
      });
    }

    /**
     * Instantiate the SMTP server
     * @see https://nodemailer.com/smtp/well-known/
     * @see https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365#option-1-recommended-authenticate-your-device-or-application-directly-with-a-microsoft-365-or-office-365-mailbox-and-send-mail-using-smtp-auth-client-submission
     */
    const smtpTrans = nodemailer.createTransport({
      service: 'Outlook365',
      auth: auth,
    });

    const result: EmailResult = await smtpTrans.sendMail(options);

    log(`sending email successful: ${result.accepted}`);
  } catch (error) {
    logError(`sending email failed: ${error.message}`);
    throw new AppError({
      name: ERROR_TYPE.STMP_ERROR,
      message: error.message,
    });
  }
}
