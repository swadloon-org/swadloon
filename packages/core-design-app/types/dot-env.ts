import * as t from 'io-ts';

import { CommonEnv, TestingEnv } from '@newrade/core-node-utils';

/**
 * Local, typed representation of the .env file.
 */
// eslint-disable-next-line prettier/prettier
export const Env = t.intersection([t.intersection([CommonEnv, TestingEnv]), t.type({})]);

export type ENV = t.TypeOf<typeof Env>;
