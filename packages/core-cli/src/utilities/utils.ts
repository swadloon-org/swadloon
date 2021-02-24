import * as dotenv from 'dotenv';
import * as path from 'path';
import { ENV } from '../types/dot-env';

export function loadDotEnv() {
  // add env variables from .env file
  dotenv.config({
    path: path.resolve(__dirname, '../../.env'),
  });

  return process.env as ENV;
}

export const dotEnvProcess: ENV = process.env as ENV;
