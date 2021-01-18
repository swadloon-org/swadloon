import { CommonEnvGatsby } from '@newrade/core-utils';
import * as t from 'io-ts';

/**
 * Local, typed representation of the .env file.
 */
export const Env = t.intersection([
  CommonEnvGatsby,
  t.type({
    /**
     * cliniko variables
     */
    API_VSB_VENDOR_NAME: t.string,
    API_VSB_VENDOR_EMAIL: t.string,
    API_VSB_KEY: t.string,
    API_VSB_SHARD_ID: t.string,
  }),
]);

export type ENV = t.TypeOf<typeof Env>;
