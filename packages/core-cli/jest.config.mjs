// @ts-check

/// <reference types="@jest/types" />

import { baseJestNodeConfig } from '@newrade/core-jest-config';

/** @type {import('ts-jest').InitialOptionsTsJest} */
const config = {
  ...baseJestNodeConfig,
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
};

export default config;
