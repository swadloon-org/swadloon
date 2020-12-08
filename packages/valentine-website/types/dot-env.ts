import { CommonEnvGatsby } from '@newrade/core-utils';
import * as t from 'io-ts';

/**
 * Local, typed representation of the .env file.
 */
export const Env = t.intersection([
  CommonEnvGatsby,
  t.partial({
    /**
     * Figma
     */
    FIGMA_TOKEN: t.string,
    FIGMA_FILE: t.string,
    /**
     * Contentful variables
     */
    CONTENTFUL_MANAGEMENT_TOKEN_VALENTINE: t.string,
  }),
  t.type({
    /**
     * Contentful variables
     */
    CONTENTFUL_SPACEID_VALENTINE: t.string,
    CONTENTFUL_DELIVERY_TOKEN_VALENTINE: t.string,
  }),
]);

export type ENV = t.TypeOf<typeof Env>;
