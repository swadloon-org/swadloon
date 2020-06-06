// @ts-check
// tslint:disable:readonly-array

/** @type {jest.InitialOptions} */
module.exports.baseJestConfig = {
  modulePaths: ['../../<rootDir>/node_modules', '<rootDir>/node_modules'],
  rootDir: '.',
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    '\\.(mjs|js|jsx)$': '../core-jest-config/transforms/babel-transform.js',
    '\\.(ttf|eot|woff2?|svg|jpe?g|png|gif|ico)$': '../core-jest-config/transforms/file-transform.js',
    '\\.(mdx?)$': '../core-jest-config/transforms/mdx-transform.js'
  },
  transformIgnorePatterns: ['node_modules/(?!(idlize)/)'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },
  testRegex: '.+\\.test\\.tsx?',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '(\\.js\\.map)$', '<rootDir>/package.json'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '(\\.js\\.map)$', '<rootDir>/package.json'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node', 'mjs'],
  reporters: ['default', 'jest-junit'],
  coverageDirectory: '<rootDir>/_reports/'
};
