// const { compilerOptions } = require('../../../tsconfig.json');

import { includedLibToCompile } from './included-libs';

export const baseJestConfig: jest.InitialOptions = {
  modulePaths: ['../../<rootDir>/node_modules', '<rootDir>/node_modules'],
  rootDir: '.',
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    '\\.(mjs|js|jsx)$': '../core-jest-config/transforms/babel-transform.js',
    '\\.(ttf|eot|woff2?|svg|jpe?g|png|gif|ico)$': '../core-jest-config/transforms/file-transform.js',
    '\\.(mdx?)$': '../core-jest-config/transforms/mdx-transform.js',
  },
  transformIgnorePatterns: [`node_modules/(?!(${includedLibToCompile.join('|')})/)`],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@newrade/(.*)$': '<rootDir>/../$1/lib',
    // ...pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
  },
  testRegex: '.+\\.test\\.tsx?',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '(\\.js\\.map)$',
    '.snap',
    '<rootDir>/package.json',
  ],
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '(\\.js\\.map)$',
    '.snap',
    '<rootDir>/package.json',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node', 'mjs'],
  reporters: ['default', 'jest-junit'],
  coverageDirectory: '<rootDir>/_reports/',
  roots: ['<rootDir>/src', '<rootDir>/test'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
      // see https://huafu.github.io/ts-jest/user/config/diagnostics
      diagnostics: {
        ignoreCodes: [2322],
      },
    },
  },
};
