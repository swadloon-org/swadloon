import path from 'path';

import { runMigration } from 'contentful-migration';

import { loadDotEnv } from '@newrade/core-node-utils';

import { ENV, Env } from './types/dot-env';

const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '..', '.env'),
  packageName: 'core-contentful-lib',
  printEnvVariables: true,
});

/**
 * @see https://github.com/contentful/contentful-migration
 */
runMigration({
  filePath: env.CONTENTFUL_MIGRATION_FILE,
  environmentId: env.CONTENTFUL_ENV,
  spaceId: env.CONTENTFUL_SPACEID,
  accessToken: env.CONTENTFUL_MANAGEMENT_TOKEN,
})
  .then(() => console.log('Migration Done!'))
  .catch((e) => console.error(e));
