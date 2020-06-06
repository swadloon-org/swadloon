const { baseJestConfig } = require('core-jest-config');

/** @type {jest.InitialOptions} */
module.exports = {
  ...baseJestConfig,
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts']
};
