/// <reference types="@newrade/core-types/src/jest-options" />

// the esm import does not work, using require instead
const { pathsToModuleNameMapper } = require('ts-jest/utils');

import { compilerOptions } from './tsconfig.json';
import { baseJestConfig } from '@newrade/core-jest-config';

const config: jest.InitialOptions = {
  ...baseJestConfig,
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/src/prisma/prisma-mock.ts', '<rootDir>/test/jest-setup.ts'],
  moduleNameMapper: {
    ...baseJestConfig.moduleNameMapper,
    ...(pathsToModuleNameMapper(compilerOptions.paths) as { [key: string]: string }),
  },
};

export default config;
