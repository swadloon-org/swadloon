import * as t from 'io-ts';
import { NODE_ENV, DEPLOY_ENV } from '@newrade/core-common';

// TODO: importing node env does not work
const NodeEnv = t.keyof({
  [NODE_ENV.DEVELOPMENT]: NODE_ENV.DEVELOPMENT,
  [NODE_ENV.TEST]: NODE_ENV.TEST,
  [NODE_ENV.PRODUCTION]: NODE_ENV.PRODUCTION,
});
const DeployEnv = t.keyof({
  [DEPLOY_ENV.LOCAL]: DEPLOY_ENV.LOCAL,
  [DEPLOY_ENV.DEV]: DEPLOY_ENV.DEV,
  [DEPLOY_ENV.STAGING]: DEPLOY_ENV.STAGING,
  [DEPLOY_ENV.PRODUCTION]: DEPLOY_ENV.PRODUCTION,
});

/**
 * Typed representation of the .env files. All apps and sites should
 * use this type as a base for their .env file.
 */
export const CommonEnv = t.type({
  /**
   * The NodeJS environment
   */
  NODE_ENV: NodeEnv,
  /**
   * The NodeJS version installed by `nvm`
   */
  NVM_NODE_VERSION: t.string,
  /**
   * The master repository's git host
   * @default 'github.com'
   */
  MASTER_GIT_HOST: t.string,
  /**
   * The master repository's organization
   * @example '@newrade'
   */
  MASTER_REPO_ORG: t.string,
  /**
   * The master repository's name
   * @example 'repo-name' in @<org>/<repo-name>
   */
  MASTER_REPO_NAME: t.string,

  /**
   * The repository git host
   * @default 'github.com'
   */
  PROJECT_GIT_HOST: t.string,
  /**
   * The repository's organization
   * @example '@newrade'
   */
  PROJECT_REPO_ORG: t.string,
  /**
   * The repository name
   * @example 'repo-name' in @<org>/<repo-name>
   */
  PROJECT_REPO_NAME: t.string,

  /**
   * Deploy environment
   */
  APP_ENV: DeployEnv,
  /**
   * The app or site public URL
   */
  APP_URL: t.string,
  /**
   * Local port
   */
  APP_PORT: t.string,
});

export type CommonEnvType = t.TypeOf<typeof CommonEnv>;
