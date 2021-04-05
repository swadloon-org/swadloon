import { VercelRequest, VercelResponse } from '@vercel/node';

import debug from 'debug';

const log = debug('newrade').extend('vsb-api').extend('health-check');

export default (request: VercelRequest, response: VercelResponse) => {
  const { name = 'World' } = request.query;
  log(`received health check from ip:${request.headers.origin}`);
  response.status(200).send(`Hello ${name}!`);
};
