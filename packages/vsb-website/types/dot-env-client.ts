import { DEPLOY_ENV } from '@newrade/core-common';

export type CLIENT_ENV = {
  NODE_ENV: 'production' | 'development';
  NODE_VERSION: string;
  APP_ENV: DEPLOY_ENV;
  APP_VERSION: string;
  CANADA_POST_API_KEY_VSB: string;
};

declare let NODE_ENV: CLIENT_ENV['NODE_ENV'];
declare let NODE_VERSION: CLIENT_ENV['NODE_VERSION'];
declare let APP_ENV: CLIENT_ENV['APP_ENV'];
declare let APP_VERSION: CLIENT_ENV['APP_VERSION'];
declare let CANADA_POST_API_KEY_VSB: CLIENT_ENV['CANADA_POST_API_KEY_VSB'];

export const clientEnv: CLIENT_ENV = {
  NODE_ENV: NODE_ENV,
  NODE_VERSION: NODE_VERSION,
  APP_ENV: APP_ENV,
  APP_VERSION: APP_VERSION,
  CANADA_POST_API_KEY_VSB: CANADA_POST_API_KEY_VSB,
};
