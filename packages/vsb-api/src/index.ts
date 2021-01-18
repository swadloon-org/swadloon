import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import { json } from 'body-parser';
import express, { urlencoded } from 'express';
import path from 'path';
import registerRouter from './router/register.router';
import { Env, ENV } from './types/dot-env';

export const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '../.env'),
  packageName: '@newrade/vsb-api',
});
logEnvVariables({ packageName: '@newrade/vsb-api', env });

const port = env.APP_PORT ? Number(env.APP_PORT) : 3000;

const server = express();
server.use(json());
server.use(urlencoded({ extended: true }));

server.use('/api/register', registerRouter);

const httpServer = server.listen(port);
console.log('listening on port: ' + port);

process.on('SIGINT', function () {
  httpServer.close(function () {
    console.log('Finished all requestsss');
  });
});
process.on('SIGTERM', function () {
  httpServer.close(function () {
    console.log('Finished all requests');
  });
});
