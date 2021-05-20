import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { RequestHandler } from 'express';
import nodemailer from 'nodemailer';
import { env } from '../server-express';

export const emailController: RequestHandler<any, any, any> = async (req, res) => {
  try {
    /**
     * Instantiate the SMTP server
     */
    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: env.API_CONTACT_GMAIL_USER,
        pass: env.API_CONTACT_GMAIL_PASS,
      },
    });

    const mailOpts = {
      from: 'Your sender info here',
      to: env.API_CONTACT_GMAIL_USER,
      subject: 'New message from contact form at tylerkrys.ca',
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`,
    };

    smtpTrans.sendMail(mailOpts, (error, response) => {
      if (error) {
        throw new AppError({ name: ERROR_TYPE.EXTERNAL_SERVER_ERROR, message: `Message not send` });
      } else {
        return res.status(200).send({ api: 'vsb-api', payload: [{ ...response }] });
      }
    });
  } catch (error) {
    res.status(400).send({ api: 'vsb-api', errors: [error] });
  }
};
