/// <reference types="@newrade/core-types/src/jest-options" />

import { baseJestConfig } from './src/jest.base.config';

const config: jest.InitialOptions = {
  ...baseJestConfig,
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
};

export default config;
