// @ts-check

/// <reference types="@jest/types" />

import { puppeteerPreset } from '@newrade/core-jest-config';

import jestConfig from './jest.config.js';
/** @typedef {import('ts-jest').InitialOptionsTsJest} */
const config = {
  ...puppeteerPreset,
  ...jestConfig,
  testMatch: ['**/(src|test)/**/?(*.)+(suite).ts?(x)'],
};

export default config;
