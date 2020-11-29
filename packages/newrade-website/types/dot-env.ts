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
   * Contentful variables
   */
  CONTENTFUL_SPACEID_NEWRADE: string;
  CONTENTFUL_DELIVERY_TOKEN_NEWRADE: string;
  CONTENTFUL_MANAGEMENT_TOKEN_NEWRADE: string;
};
