import * as t from 'io-ts';

import { CommonEnv, TestingEnv } from '@newrade/core-node-utils';

/**
 * Local, typed representation of the .env file.
 */
export const Env = t.intersection([
  t.intersection([CommonEnv, TestingEnv]),
  t.partial({
    /**
     * Keystone
     */
    SESSION_SECRET: t.string,
  }),
]);

export type ENV = t.TypeOf<typeof Env>;
