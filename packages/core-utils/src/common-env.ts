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

/**
 * Standard NodeJS Environments
 */
export enum NODE_ENV {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

/**
 * Typed representation of the .env files. All apps and sites should
 * use this type as a base for their .env file.
 */
export type COMMON_ENV = {
  /**
   * The NodeJS environment
   */
  NODE_ENV: string;
  /**
   * The NodeJS version installed by `nvm`
   */
  NVM_NODE_VERSION: string;
  /**
   * The master repository's git host
   * @default 'github.com'
   */
  MASTER_GIT_HOST: string;
  /**
   * The master repository's organization
   * @example '@newrade'
   */
  MASTER_REPO_ORG: string;
  /**
   * The master repository's name
   * @example 'repo-name' in @<org>/<repo-name>
   */
  MASTER_REPO_NAME: string;

  /**
   * The repository git host
   * @default 'github.com'
   */
  PROJECT_GIT_HOST: string;
  /**
   * The repository's organization
   * @example '@newrade'
   */
  PROJECT_REPO_ORG: string;
  /**
   * The repository name
   * @example 'repo-name' in @<org>/<repo-name>
   */
  PROJECT_REPO_NAME: string;

  /**
   * Deploy environment
   */
  APP_ENV: DEPLOY_ENV;
  /**
   * The app or site public URL
   */
  APP_URL: string;
};

/**
 * Typed representation of the .env file for Gatsby sites.
 */
export type COMMON_ENV_GATSBY = COMMON_ENV & {
  /**
   * Custom variable to enable Gatsby Cloud's incremental build.
   * @see https://www.gatsbyjs.com/blog/2020-04-22-announcing-incremental-builds/
   */
  GATSBY_ENABLE_INCREMENTAL_BUILD?: 'true' | 'false';
};
