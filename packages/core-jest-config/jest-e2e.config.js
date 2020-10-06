const { puppeteerPreset } = require('@newrade/core-jest-config');

const jestConfig = require('./jest.config.js');

/** @type {jest.InitialOptions} */
module.exports = {
  ...puppeteerPreset,
  ...jestConfig,
  testMatch: ['**/(src|test)/**/?(*.)+(suite).ts?(x)'],
};
