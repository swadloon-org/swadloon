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
