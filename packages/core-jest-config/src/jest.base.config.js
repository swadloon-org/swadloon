"use strict";
// const { compilerOptions } = require('../../../tsconfig.json');
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseJestConfig = void 0;
const included_libs_1 = require("./included-libs");
exports.baseJestConfig = {
    // see https://jestjs.io/docs/configuration#extensionstotreatasesm-arraystring
    // extensionsToTreatAsEsm: ['.ts', '.tsx'],
    preset: 'ts-jest',
    modulePaths: ['../../<rootDir>/node_modules', '<rootDir>/node_modules'],
    rootDir: '.',
    testEnvironment: 'jsdom',
    transform: {
        // not needed anymore
        // '\\.(mjs|js|jsx)$': '../core-jest-config/transforms/babel-transform.js',
        '\\.(ttf|eot|woff2?|svg|jpe?g|png|gif|ico)$': '../core-jest-config/transforms/file-transform.js',
        '\\.(mdx?)$': '../core-jest-config/transforms/mdx-transform.js',
        '\\.(gql|graphql)$': 'jest-transform-graphql',
    },
    transformIgnorePatterns: [`node_modules/(?!(${included_libs_1.includedLibToCompile.join('|')})/)`],
    moduleNameMapper: {
        // '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(less|sass|scss)$': 'identity-obj-proxy',
        '^@newrade/(.*)$': '<rootDir>/../$1/lib',
        // ...pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
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
            tsconfig: '<rootDir>/tsconfig.jest.json',
            // see https://huafu.github.io/ts-jest/user/config/babelConfig
            babelConfig: '../core-jest-config/transforms/babel-test.config.js',
            // see https://huafu.github.io/ts-jest/user/config/diagnostics
            diagnostics: {
                ignoreCodes: [2322],
            },
        },
    },
};
//# sourceMappingURL=jest.base.config.js.map