import { COMMON_ENV_GATSBY } from '@newrade/core-utils';

/**
 * Local, typed representation of the .env file.
 */
export type ENV = COMMON_ENV_GATSBY & {
  CONTENTFUL_SPACEID_CLI: string;
  CONTENTFUL_DELIVERY_TOKEN_CLI: string;
  CONTENTFUL_MANAGEMENT_TOKEN_CLI: string;
  CONTENTFUL_ENVIRONMENT: string;
};
