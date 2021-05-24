import { BrowserConnectOptions, BrowserLaunchArgumentOptions, LaunchOptions } from 'puppeteer';
import { loadDotEnv, toBoolean } from '@newrade/core-utils';
import { ENV, Env } from '../../types/dot-env';
import path from 'path';
import packageJson from '../../package.json';

const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '..', '..', '.env'),
  packageName: packageJson.name,
});

const TEST_PROTOCOL = env.TEST_PROTOCOL || env.APP_PROTOCOL || 'https';
const TEST_PORT = env.TEST_PORT || env.APP_PORT || '443';
const TEST_HOST = env.TEST_HOST || env.APP_HOST || 'localhost';
const VIEW_WIDTH = env.TEST_VIEW_WIDTH ? Number(env.TEST_VIEW_WIDTH) : 1440;
const VIEW_HEIGHT = env.TEST_VIEW_HEIGHT ? Number(env.TEST_VIEW_HEIGHT) : 900;

export const puppeteerConfig: {
  protocol: string;
  host: string;
  port: string;
  appURL: string;
  launchOptions: LaunchOptions & BrowserLaunchArgumentOptions & BrowserConnectOptions;
} = {
  protocol: TEST_PROTOCOL,
  host: TEST_HOST,
  port: TEST_PORT,
  appURL: `${TEST_PROTOCOL}://${TEST_HOST}${+TEST_PORT === 443 || ':' + TEST_PORT}`,
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
