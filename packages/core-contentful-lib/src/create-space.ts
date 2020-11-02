import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import { runMigration } from 'contentful-migration';
import path from 'path';
import packageJson from '../package.json';
import { ENV } from '../types/dot-env';

const env = loadDotEnv<ENV>(path.resolve(__dirname, '..', '.env'));
logEnvVariables<ENV>({ packageName: packageJson.name, env });

/**
 * @see https://github.com/contentful/contentful-migration
 */
runMigration({
  // filePath: path.resolve(__dirname, 'migrations', 'create-space.migration.ts'),
  filePath: path.resolve(__dirname, 'migrations', 'create-space.migration.ts'),
  spaceId: env.CONTENTFUL_ACCESS_SPACEID,
  accessToken: env.CONTENTFUL_ACCESS_TOKEN,
})
  .then(() => console.log('Migration Done!'))
  .catch((e) => console.error(e));
