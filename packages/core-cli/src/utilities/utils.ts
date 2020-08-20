import * as dotenv from 'dotenv';
import { ENV } from './dot-env';
import * as path from 'path';

export function loadDotEnv() {
  // add env variables from .env file
  dotenv.config({
    path: path.resolve(__dirname, '../../.env'),
  });

  return process.env as ENV;
}

export const dotEnvProcess: ENV = process.env as ENV;
