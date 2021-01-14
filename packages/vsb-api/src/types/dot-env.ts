import { CommonEnv } from '@newrade/core-utils';
import * as t from 'io-ts';

/**
 * Local, typed representation of the .env file.
 */
export const Env = t.intersection([
  CommonEnv,
  t.type({
    /**
     * cliniko variables
     */
    APP_VENDOR_NAME: t.string,
    APP_VENDOR_EMAIL: t.string,
    API_KEY: t.string,
    SHARD_ID: t.string,
  }),
]);

export type ENV = t.TypeOf<typeof Env>;
