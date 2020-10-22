import { COMMON_ENV_GATSBY } from '@newrade/core-utils';

/**
 * Local, typed representation of the .env file.
 */
export type ENV = COMMON_ENV_GATSBY & {
  /**
   * Figma
   */
  FIGMA_TOKEN?: string;
  FIGMA_FILE?: string;
  /**
   * GraphCMS variables
   */
  GRAPH_CMS_AUTH_TOKEN_MIR: string;
  GRAPH_CMS_API_URL_MIR: string;
  /**
   * GraphCMS variables
   */
  CONTENTFUL_ACCESS_SPACEID_MIR: string;
  CONTENTFUL_ACCESS_TOKEN_MIR: string;
};
