import { CommonEnv, loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import * as t from 'io-ts';
import path from 'path';

/**
 * Local, typed representation of the .env file.
 */
const Env = t.intersection([
  CommonEnv,
  t.partial({
    /**
     * Figma
     */
    FIGMA_TOKEN: t.string,
    FIGMA_FILE: t.string,
  }),
]);

export type ENV = t.TypeOf<typeof Env>;

export const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '../../.env'),
  dotEnvRootPath: path.resolve(__dirname, '../../../../.env'),
  packageName: '@newrade/core-cli',
});
logEnvVariables({ packageName: '@newrade/core-cli', env });
