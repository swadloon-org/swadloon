import * as t from 'io-ts';

/**
 * Standard deploy environments
 *
 * LOCAL is for dev's machines
 * DEV is for the development branch (`dev`)
 * STAGING is normally based on the master branch, but deployed with staging / draft data
 * PRODUCTION is based on the release branch with production data (e.g. in published state)
 */
export enum DEPLOY_ENV {
  LOCAL = 'local',
  DEV = 'dev',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

const DeployEnv = t.keyof({
  [DEPLOY_ENV.LOCAL]: DEPLOY_ENV.LOCAL,
  [DEPLOY_ENV.DEV]: DEPLOY_ENV.DEV,
  [DEPLOY_ENV.STAGING]: DEPLOY_ENV.STAGING,
  [DEPLOY_ENV.PRODUCTION]: DEPLOY_ENV.PRODUCTION,
});

export type DeployEnv = t.TypeOf<typeof DeployEnv>;

/**
 * Standard NodeJS Environments
 */
export enum NODE_ENV {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

const NodeEnv = t.keyof({
  [NODE_ENV.DEVELOPMENT]: NODE_ENV.DEVELOPMENT,
  [NODE_ENV.PRODUCTION]: NODE_ENV.PRODUCTION,
});

const TextBoolean = t.keyof({
  true: 'true',
  false: 'false',
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

export type COMMON_ENV = t.TypeOf<typeof CommonEnv>;

/**
 * Typed representation of the .env file for Gatsby sites.
 */
export const CommonEnvGatsby = t.intersection([
  CommonEnv,
  t.type({
    /**
     * Custom variable to enable Gatsby Cloud's incremental build.
     * @see https://www.gatsbyjs.com/blog/2020-04-22-announcing-incremental-builds/
     */
    GATSBY_ENABLE_INCREMENTAL_BUILD: TextBoolean,
    /**
     * @see https://github.com/gatsbyjs/gatsby/blob/master/docs/reference/release-notes/v2.27/index.md
     */
    GATSBY_EXPERIMENTAL_FAST_DEV: TextBoolean,
  }),
]);

export type COMMON_ENV_GATSBY = t.TypeOf<typeof CommonEnvGatsby>;
