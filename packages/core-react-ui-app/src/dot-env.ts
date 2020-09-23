export enum SITE_ENV {
  LOCAL = 'local',
  DEV = 'dev',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

/**
 * typed representation of the .env files
 */
export type ENV = { [key: string]: string } & {
  /**
   * GraphCMS
   */
  GRAPH_CMS_AUTH_TOKEN_MIR: string;
  GRAPH_CMS_API_URL_MIR: string;
};
