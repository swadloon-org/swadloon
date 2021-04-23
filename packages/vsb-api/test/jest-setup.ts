/// <reference types="../types/core-types" />

/**
 * https://github.com/testing-library/jest-dom#installation
 */
import '@testing-library/jest-dom';
import path from 'path';
import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import { Env, ENV } from '../types/dot-env';

/**
 * Set ENV variables
 */
export const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '../.env'),
  dotEnvRootPath: path.resolve(__dirname, '../../../.env'),
  packageName: '@newrade/vsb-api',
});
logEnvVariables({ packageName: '@newrade/vsb-api', env });
