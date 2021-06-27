// @ts-check
// tslint:disable:readonly-array
const puppeteerPreset = require('@newrade/core-jest-config/puppeteer-jest.base.config').puppeteerPreset;
const baseJestConfig = require('@newrade/core-jest-config/jest.base.config').baseJestConfig;

/** @type {jest.InitialOptions} */
module.exports = {
  ...puppeteerPreset,
  ...baseJestConfig,
  roots: ['<rootDir>/src', '<rootDir>/test'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.jest.json',
    },
  },
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
};
