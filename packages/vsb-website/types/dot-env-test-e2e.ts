import { CommonEnvGatsby, TestingEnv, CommonEnv } from '@newrade/core-utils';
import * as t from 'io-ts';

/**
 * Local, typed representation of the .env file.
 */
export const TestEnv = t.intersection([CommonEnv, CommonEnvGatsby, TestingEnv]);

export type TEST_ENV = t.TypeOf<typeof TestEnv>;
