import * as t from 'io-ts';

import { CommonEnv, CommonEnvGatsby, TestingEnv } from '@newrade/core-utils';

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
]);

export type ENV = t.TypeOf<typeof Env>;
