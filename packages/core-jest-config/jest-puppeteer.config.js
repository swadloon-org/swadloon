// @ts-check

/// <reference types="@jest/types" />

/** @typedef {import('ts-jest').InitialOptionsTsJest} */
export const config = {
  globalSetup: 'jest-environment-puppeteer/setup',
  globalTeardown: 'jest-environment-puppeteer/teardown',
  testEnvironment: 'jest-environment-puppeteer',
  setupFilesAfterEnv: ['expect-puppeteer'],
};

export default config;
