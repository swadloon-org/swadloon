import { CommonEnvGatsby, CommonEnv, TestingEnv } from '@newrade/core-utils';
import * as t from 'io-ts';

/**
 * Local, typed representation of the .env file.
 */
export const Env = t.intersection([
  t.intersection([CommonEnv, CommonEnvGatsby, TestingEnv]),
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
    CONTENTFUL_ENV: t.string,
    CONTENTFUL_SPACEID_ALTO: t.string,
    CONTENTFUL_DELIVERY_TOKEN_ALTO: t.string,
  }),
]);

export type ENV = t.TypeOf<typeof Env>;
