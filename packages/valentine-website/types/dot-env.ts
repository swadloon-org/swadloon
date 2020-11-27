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
   * Contentful variables
   */
  CONTENTFUL_ACCESS_SPACEID_VALENTINE: string;
  CONTENTFUL_ACCESS_TOKEN_VALENTINE: string;
  CONTENTFUL_ACCESS_TOKEN_PREVIEW_VALENTINE: string;
};
