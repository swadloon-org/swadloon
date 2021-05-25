// /// <reference types="../types/core-types" />

/**
 * https://github.com/testing-library/jest-dom#installation
 */
import { TEST_ENV } from '@newrade/core-common';
import { ENV } from '../types/dot-env';

jest.mock('@actions/github');
jest.mock('@actions/core');

process.env = {
  ...process.env,
  TEST_ENV: TEST_ENV.LOCAL,
} as ENV;
