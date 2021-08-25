/// <reference types="@newrade/core-types/src/jest-options" />

import { puppeteerPreset } from '@newrade/core-jest-config';
import jestConfig from './jest.config.js';

const config: jest.InitialOptions = {
  ...puppeteerPreset,
  ...jestConfig,
  testMatch: ['**/(src|test)/**/?(*.)+(suite).ts?(x)'],
};

export default config;
