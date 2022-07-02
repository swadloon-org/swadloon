import * as t from 'io-ts';

import { FigmaEnv } from '@newrade/core-node-utils';

/**
 * Local, typed representation of the .env file.
 */
export const Env = t.intersection([FigmaEnv, t.type({})]);

export type ENV = t.TypeOf<typeof Env>;
