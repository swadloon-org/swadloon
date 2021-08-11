"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppeteerPreset = void 0;
// tslint:disable:readonly-array
exports.puppeteerPreset = {
    globalSetup: 'jest-environment-puppeteer/setup',
    globalTeardown: 'jest-environment-puppeteer/teardown',
    testEnvironment: 'jest-environment-puppeteer',
    setupFilesAfterEnv: ['expect-puppeteer'],
};
//# sourceMappingURL=puppeteer-jest.base.config.js.map