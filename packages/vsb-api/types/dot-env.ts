import { CommonEnv } from '@newrade/core-utils';
import * as t from 'io-ts';

/**
 * Local, typed representation of the .env file.
 */
export const Env = t.intersection([
  CommonEnv,
  t.type({
    /**
     * Cliniko variables
     */
    API_VSB_VENDOR_NAME: t.string,
    API_VSB_VENDOR_EMAIL: t.string,
    API_VSB_KEY_CLINIKO: t.string,
    API_VSB_SHARD_ID: t.string,
    API_VSB_SECRET_KEY_RECAPTCHA: t.string,
    /**
     * Stmp Settings for Gmail
     */
    API_VSB_STMP_USER: t.string,
    API_VSB_STMP_PASSWORD: t.string,
  }),
]);

export type ENV = t.TypeOf<typeof Env>;