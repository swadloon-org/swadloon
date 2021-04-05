import { loadDotEnv, logEnvVariables, CommonEnv } from '@newrade/core-utils';
import * as t from 'io-ts';
import path from 'path';

/**
 * Local, typed representation of the .env file.
 */
const Env = t.intersection([CommonEnv, t.type({})]);

type ENV = t.TypeOf<typeof Env>;

export const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '../.env'),
  dotEnvRootPath: path.resolve(__dirname, '../../../.env'),
  packageName: '@newrade/vsb-api',
});
logEnvVariables({ packageName: '@newrade/core-github-actions', env });
