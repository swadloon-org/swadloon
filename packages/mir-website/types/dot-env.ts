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
   * Environment
   */
  SITE_ENV: SITE_ENV;
  SITE_URL: string;

  /**
   * Figma
   */
  FIGMA_TOKEN?: string;
  FIGMA_FILE?: string;

  /**
   * Gatsby Cloud
   */
  GATSBY_ENABLE_INCREMENTAL_BUILD?: string;

  /**
   * GraphCMS
   */
  GRAPH_CMS_AUTH_TOKEN_MIR: string;
  GRAPH_CMS_API_URL_MIR: string;
};
