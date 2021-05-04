import { ChromeArgOptions, LaunchOptions, BrowserOptions } from 'puppeteer';
import { loadDotEnv, toBoolean } from '@newrade/core-utils';
import { ENV, Env } from '../../types/dot-env';
import path from 'path';
import packageJson from '../../package.json';

const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '..', '..', '.env'),
  packageName: packageJson.name,
});

const PROTOCOL = env.TEST_PROTOCOL || 'http';
const PORT = env.TEST_PORT || '9000';
const HOST = env.TEST_HOST || 'localhost';

export const puppeteerConfig: {
  protocol: string;
  host: string;
  port: string;
  appURL: string;
  launchOptions: LaunchOptions & ChromeArgOptions & BrowserOptions;
} = {
  protocol: env.TEST_PROTOCOL || 'http',
  host: env.TEST_HOST || 'localhost',
  port: env.TEST_PORT || '9000',
  appURL: `${PROTOCOL}://${HOST}:${PORT}`,
  launchOptions: {
    headless: toBoolean(env.TEST_CHROME_HEADLESS),
    defaultViewport: {
      width: Number(env.TEST_VIEW_WIDTH) || 1440,
      height: Number(env.TEST_VIEW_HEIGHT) || 900,
    },
    args: [
      `--window-size=${env.TEST_VIEW_WIDTH},${env.TEST_VIEW_HEIGHT}`,
      '--no-sandbox',
      '–-disable-setuid-sandbox',
      env.TEST_IGNORE_SSL_ERROR ? '--ignore-certificate-errors' : '',
    ],
  },
};
