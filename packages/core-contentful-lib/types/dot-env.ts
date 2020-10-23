import { COMMON_ENV_GATSBY } from '@newrade/core-utils';

/**
 * Local, typed representation of the .env file.
 */
export type ENV = COMMON_ENV_GATSBY & {

  CONTENTFUL_ACCESS_SPACEID: string;
  CONTENTFUL_ACCESS_TOKEN: string;
};
