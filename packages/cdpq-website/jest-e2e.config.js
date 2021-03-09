const jestConfig = require('./jest.config.js');
const { puppeteerPreset } = require('../core-jest-config/lib');

/** @type {jest.InitialOptions} */
module.exports = {
  ...jestConfig,
  ...puppeteerPreset,
  testRegex: '.+\\.suite\\.tsx?',
};
