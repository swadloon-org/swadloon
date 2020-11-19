const { baseJestConfig } = require('../core-jest-config/lib');

/** @type {jest.InitialOptions} */
module.exports = {
  ...baseJestConfig,
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
};
