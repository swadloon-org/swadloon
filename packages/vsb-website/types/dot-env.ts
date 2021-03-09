import { CommonEnvGatsby, TestingEnv, CommonEnv } from '@newrade/core-utils';
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
    /**
     * Contentful variables
     */
    CONTENTFUL_MANAGEMENT_TOKEN_VSB: t.string,
  }),
  t.type({
    /**
     * Contentful variables
     */
    CONTENTFUL_ENV: t.string,
    CONTENTFUL_SPACEID_VSB: t.string,
    CONTENTFUL_DELIVERY_TOKEN_VSB: t.string,
  }),
  t.type({
    /**
     * VSB
     */
    CANADA_POST_API_KEY_VSB: t.string,
    RECAPTCHA_SITE_KEY_VSB: t.string,
    GOOGLE_MAP_API_KEY: t.string,
  }),
]);

export type ENV = t.TypeOf<typeof Env>;
