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
  CONTENTFUL_SPACEID_VALENTINE: string;
  CONTENTFUL_DELIVERY_TOKEN_VALENTINE: string;
  CONTENTFUL_MANAGEMENT_TOKEN_VALENTINE: string;
};
