/// <reference types="../types/core-types" />

/**
 * https://github.com/testing-library/jest-dom#installation
 */
import { TEST_ENV } from '@newrade/core-common';
import { loadDotEnv } from '@newrade/core-utils';
import '@testing-library/jest-dom';
import path from 'path';
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

process.env = {
  ...process.env,
  TEST_ENV: TEST_ENV.LOCAL,
} as ENV;
