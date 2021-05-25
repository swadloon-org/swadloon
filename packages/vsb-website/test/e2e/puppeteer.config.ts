import { getAppHostConfig, getAppUrl, loadDotEnv, toBoolean } from '@newrade/core-utils';
import path from 'path';
import { BrowserConnectOptions, BrowserLaunchArgumentOptions, LaunchOptions } from 'puppeteer';
import packageJson from '../../package.json';
import { TestEnv, TEST_ENV } from '../../types/dot-env-test-e2e';

const env = loadDotEnv<TEST_ENV>({
  schema: TestEnv,
  dotEnvPath: path.resolve(__dirname, '..', '..', '.env'),
  packageName: packageJson.name,
});

const { APP_PROTOCOL, APP_HOST, APP_PORT } = getAppHostConfig(env);
const APP_URL = getAppUrl(env);
const VIEW_WIDTH = env.TEST_VIEW_WIDTH ? Number(env.TEST_VIEW_WIDTH) : 1440;
const VIEW_HEIGHT = env.TEST_VIEW_HEIGHT ? Number(env.TEST_VIEW_HEIGHT) : 900;

export const puppeteerConfig: {
  protocol: string;
  host: string;
  port: string;
  appURL: string;
  launchOptions: LaunchOptions & BrowserLaunchArgumentOptions & BrowserConnectOptions;
} = {
  protocol: APP_PROTOCOL,
  host: APP_HOST,
  port: APP_PORT,
  appURL: APP_URL,
  launchOptions: {
    headless: env.TEST_CHROME_HEADLESS ? toBoolean(env.TEST_CHROME_HEADLESS) : true,
    defaultViewport: {
      width: VIEW_WIDTH,
      height: VIEW_HEIGHT,
    },
    args: [
      '--disable-extensions',
      '--shm-size=3gb', // needed for webpack-dev-server
      `--window-size=${VIEW_WIDTH},${VIEW_HEIGHT}`,
      '--no-sandbox',
      '–-disable-setuid-sandbox',
      env.TEST_IGNORE_SSL_ERROR ? '--ignore-certificate-errors' : '',
    ],
  },
};
