import { CommonEnvGatsby, loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import * as t from 'io-ts';
import path from 'path';

/**
 * Local, typed representation of the .env file.
 */
const Env = t.intersection([
  CommonEnvGatsby,
  t.type({
    /**
     * cliniko variables
     */
    API_VSB_VENDOR_NAME: t.string,
    API_VSB_VENDOR_EMAIL: t.string,
    API_VSB_KEY_CLINIKO: t.string,
    API_VSB_SHARD_ID: t.string,
    API_VSB_SECRET_KEY_RECAPTCHAT: t.string,
  }),
]);

type ENV = t.TypeOf<typeof Env>;

export const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '../../.env'),
  dotEnvRootPath: path.resolve(__dirname, '../../../../.env'),
  packageName: '@newrade/vsb-api',
});
logEnvVariables({ packageName: '@newrade/vsb-api', env });
