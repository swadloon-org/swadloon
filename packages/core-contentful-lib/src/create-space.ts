import { loadDotEnv } from '@newrade/core-utils';
import { runMigration } from 'contentful-migration';
import path from 'path';
import { Env, ENV } from './types/dot-env';

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
  filePath: path.resolve(__dirname, env.CONTENTFUL_PROJECT_NAME, 'project-create-space.ts'),
  environmentId: env.CONTENTFUL_ENV,
  spaceId: env.CONTENTFUL_SPACEID,
  accessToken: env.CONTENTFUL_MANAGEMENT_TOKEN,
})
  .then(() => console.log('Migration Done!'))
  .catch((e) => console.error(e));
