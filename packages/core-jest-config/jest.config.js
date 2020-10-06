const { baseJestConfig } = require('./lib');

/** @type {jest.InitialOptions} */
module.exports = {
  ...baseJestConfig,
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
};
