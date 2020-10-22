import { COMMON_ENV } from '@newrade/core-utils';

/**
 * Local, typed representation of the .env file.
 */
export type ENV = COMMON_ENV & {
  /**
   * GraphCMS
   */
  GRAPH_CMS_AUTH_TOKEN_MIR: string;
  GRAPH_CMS_API_URL_MIR: string;
};
