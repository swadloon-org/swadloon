import { runMigration } from 'contentful-migration';
import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import packageJson from '../package.json';

import path from 'path';
import { ENV } from '../types/dot-env';

const env = loadDotEnv<ENV>(path.resolve(__dirname, '.env'));
logEnvVariables<ENV>({ packageName: packageJson.name, env });
/**
 * @see https://github.com/contentful/contentful-migration
 */

const options = {
  filePath: path.resolve(__dirname, 'doggo.ts'),
  spaceId: `${env.CONTENTFUL_ACCESS_SPACEID}`,
  accessToken: `${env.CONTENTFUL_ACCESS_TOKEN}`,
};

runMigration(options)
  .then(() => console.log('Migration Done!'))
  .catch((e) => console.error(e));
