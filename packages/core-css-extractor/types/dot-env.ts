import * as t from 'io-ts';

import { DebugEnv } from '@newrade/core-node-utils';

/**
 * Local, typed representation of the .env file for core-css-extractor options
 */
export const Env = t.intersection([
  DebugEnv,
  t.type({
    /**
     * Glob expression to find styles entries
     *
     * @example ENTRIES_GLOB=src/*.css.ts
     */
    CSS_EXTRACTOR_ENTRIES_GLOB: t.string,
    /**
     * Output path for files
     *
     * @example OUTPUT_PATH=dist/css-tokens
     */
    CSS_EXTRACTOR_OUTPUT_PATH: t.string,
  }),
]);

export type ENV = t.TypeOf<typeof Env>;
