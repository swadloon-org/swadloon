import * as t from 'io-ts';

import { CommonEnv } from '@newrade/core-node-utils';

/**
 * Local, typed representation of the .env file.
 */
export const Env = t.intersection([
  CommonEnv,
  t.partial({
    /**
     * Figma
     */
    FIGMA_TOKEN: t.string,
    FIGMA_FILE: t.string,
  }),
]);

export type ENV = t.TypeOf<typeof Env>;
