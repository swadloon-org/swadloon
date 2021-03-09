import * as t from 'io-ts';
import { CommonEnv } from '@newrade/core-utils';

/**
 * Local, typed representation of the .env file.
 */
export const Env = t.intersection([
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
    CONTENTFUL_MIGRATION_FILE: t.string,
    CONTENTFUL_PROJECT: t.string,
    CONTENTFUL_SPACEID: t.string,
    CONTENTFUL_MANAGEMENT_TOKEN: t.string,
    CONTENTFUL_ENV: t.string,
  }),
]);

export type ENV = t.TypeOf<typeof Env>;
