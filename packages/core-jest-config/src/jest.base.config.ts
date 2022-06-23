import { fileURLToPath } from 'url';

import type { Config } from '@jest/types';
import fs from 'node:fs';
import path from 'node:path';

import { includedLibToCompile } from './included-libs.js';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const swcConfig = JSON.parse(fs.readFileSync(`${dirname}/../../../.swcrc`, 'utf-8'));

/**
 *
 * Base Jest configuration
 *
 */
export const baseJestConfig: Config.InitialOptions = {
  preset: 'ts-jest/presets/js-with-ts',
  modulePaths: ['../../<rootDir>/node_modules', '<rootDir>/node_modules', '<rootDir>'],
  rootDir: '.',
  testEnvironment: 'jsdom',
  /**
   * @see https://jestjs.io/docs/configuration#extensionstotreatasesm-arraystring
   */
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
    /**
     * TS/JS files processed by SWC
     */
    '^.+\\.(t|j)sx?$': ['@swc/jest', { ...swcConfig }],
    /**
     * Icons and fonts
     */
    // '\\.(ttf|eot|woff2?|svg|jpe?g|png|gif|ico)$':
    //   '@newrade/core-jest-config/dist/transforms/file-transform.js',
    /**
     * MDX
     */
    // '\\.(mdx?)$': '@newrade/core-jest-config/dist/transforms/mdx-transform.js',
    /**
     * GraphQL
     */
    '\\.(gql|graphql)$': 'jest-transform-graphql',
  },
  transformIgnorePatterns: [`node_modules/(?!(${includedLibToCompile.join('|')})/)`],
  moduleNameMapper: {
    /**
     * ESM (node16 import support)
     */
    '^(\\.{1,2}/.*)\\.js$': '$1',
    /**
     * CSS files
     */
    '\\.(less|sass|scss)$': 'identity-obj-proxy',
    // '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  testRegex: '.+\\.test\\.tsx?',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/lib/',
    '(\\.js\\.map)$',
    '.snap',
    '<rootDir>/package.json',
  ],
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/lib/',
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
      useESM: true,
      tsconfig: '<rootDir>/tsconfig.jest.json',
      // see https://huafu.github.io/ts-jest/user/config/babelConfig
      babelConfig: './transforms/babel-test.config.js',
      // see https://huafu.github.io/ts-jest/user/config/diagnostics
      diagnostics: {
        ignoreCodes: [2322],
      },
    },
  },
};
