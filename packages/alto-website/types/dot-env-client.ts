import { DEPLOY_ENV, NODE_ENV as NODE_ENV_TYPE } from '@newrade/core-common';

export type CLIENT_ENV = {
  NODE_ENV: NODE_ENV_TYPE;
  NODE_VERSION: string;
  APP_ENV: DEPLOY_ENV;
  APP_VERSION: string;
};

declare let NODE_ENV: CLIENT_ENV['NODE_ENV'];
declare let NODE_VERSION: CLIENT_ENV['NODE_VERSION'];
declare let APP_ENV: CLIENT_ENV['APP_ENV'];
declare let APP_VERSION: CLIENT_ENV['APP_VERSION'];

export const clientEnv: CLIENT_ENV = {
  NODE_ENV: NODE_ENV,
  NODE_VERSION: NODE_VERSION,
  APP_ENV: APP_ENV,
  APP_VERSION: APP_VERSION,
};
