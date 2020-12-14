import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import { runMigration } from 'contentful-migration';
import path from 'path';
import packageJson from '../package.json';
import { Env, ENV } from '../types/dot-env';

const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '..', '.env'),
  packageName: packageJson.name,
});
logEnvVariables<ENV>({ packageName: packageJson.name, env });

/**
 * @see https://github.com/contentful/contentful-migration
 */
runMigration({
  filePath: path.resolve(__dirname, env.CONTENTFUL_PROJECT, 'project-delete-space.ts'),
  spaceId: env.CONTENTFUL_SPACEID,
  accessToken: env.CONTENTFUL_MANAGEMENT_TOKEN,
})
  .then(() => console.log('Migration Done!'))
  .catch((e) => console.error(e));
