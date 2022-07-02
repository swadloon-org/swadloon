// @ts-check

/// <reference types="@jest/types" />

// the esm import does not work, using require instead
const { pathsToModuleNameMapper } = require('ts-jest/utils');

import { compilerOptions } from './tsconfig.json';
import { baseJestConfig } from '@newrade/core-jest-config';

/** @typedef {import('ts-jest').InitialOptionsTsJest} */
const config = {
  ...baseJestConfig,
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/src/prisma/prisma-mock.ts', '<rootDir>/test/jest-setup.ts'],
  moduleNameMapper: {
    ...baseJestConfig.moduleNameMapper,
    ...(pathsToModuleNameMapper(compilerOptions.paths)),
  },
};

export default config;
