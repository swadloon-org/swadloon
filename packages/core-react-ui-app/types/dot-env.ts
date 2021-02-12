import { CommonEnv, TestingEnv } from '@newrade/core-utils';
import * as t from 'io-ts';

/**
 * Local, typed representation of the .env file.
 */
// eslint-disable-next-line prettier/prettier
export const Env = t.intersection([t.intersection([CommonEnv, TestingEnv]), t.partial({}), t.type({})]);

export type ENV = t.TypeOf<typeof Env>;
