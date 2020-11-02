import * as dotenv from 'dotenv';
import path from 'path';
import { COMMON_ENV } from './common-env';

/**
 * Utility function to load the .env files in the monorepository. By default it
 * loads the package's .env file (e.g. in packages/<package-name>/.env) and the parent .env file
 * (<root>/.env) which contains variables for the whole repository.
 */
export function loadDotEnv<ENV extends COMMON_ENV>(dotEnvPath: string): ENV {
  dotenv.config({
    path: dotEnvPath,
  });

  dotenv.config({
    path: path.resolve(__dirname, '..', '..', '.env'),
  });

  return process.env as ENV;
}
