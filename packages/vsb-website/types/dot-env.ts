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
  }),
  t.type({
    /**
     * Contentful variables
     */
    CONTENTFUL_SPACEID_VSB: t.string,
    CONTENTFUL_DELIVERY_TOKEN_VSB: t.string,
    CONTENTFUL_MANAGEMENT_TOKEN_VSB: t.string,
  }),
]);

export type ENV = t.TypeOf<typeof Env>;
