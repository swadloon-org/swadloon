import { runMigration } from 'contentful-migration';
import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import packageJson from '../../package.json';

import path from 'path';
import { ENV } from '../../types/dot-env';

const env = loadDotEnv<ENV>(path.resolve(__dirname, '.env'));
logEnvVariables<ENV>({ packageName: packageJson.name, env });
/**
 * @see https://github.com/contentful/contentful-migration
 */

const options = {
  filePath: path.resolve(__dirname, 'indexModel.ts'),
  spaceId: `de6as4xv7gj7`,
  accessToken: `CFPAT-t2oB7HM8an6BR1yDa97ZlpT55uAOSviNF9bm0xqbbtU`,
};

runMigration(options)
  .then(() => console.log('Migration Done!'))
  .catch((e) => console.error(e));
