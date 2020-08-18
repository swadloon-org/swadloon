import * as dotenv from 'dotenv';
import { DotEnv } from './dot-env';

export function loadDotEnv() {
  dotenv.config(); // add env variables from .env
}

export const dotEnvProcess: DotEnv = process.env as DotEnv;
