const jestConfig = require('./jest.config.js');

/** @type {jest.InitialOptions} */
module.exports = {
  ...jestConfig,
  testMatch: ['**/(src|test)/**/?(*.)+(suite).ts?(x)'],
};
