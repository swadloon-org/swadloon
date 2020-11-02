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
   * GraphCMS
   * @deprecated switching to Contentful
   */
  GRAPH_CMS_API_URL_CORE: string;
  GRAPH_CMS_AUTH_TOKEN_CORE: string;
};
