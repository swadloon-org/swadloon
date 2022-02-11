import path from 'path';

import { Command, flags } from '@oclif/command';
import { runMigration } from 'contentful-migration';
import debug from 'debug';
import * as t from 'io-ts';

import { loadDotEnv } from '@newrade/core-node-utils';

import { NS } from '../utilities/log.utilities';

// import packageJson from '../../package.json'; // TODO: check if possible to load local package json

export const Env = t.intersection([
  t.partial({
    /**
     * Figma
     */
    FIGMA_TOKEN: t.string,
    FIGMA_FILE: t.string,
  }),
  t.type({
    /**
     * Contentful variables
     */
    CONTENTFUL_MIGRATION_FILE: t.string,
    CONTENTFUL_SPACEID: t.string,
    CONTENTFUL_MANAGEMENT_TOKEN: t.string,
    CONTENTFUL_ENV: t.string,
  }),
]);

export type ENV = t.TypeOf<typeof Env>;

export default class FigmaSync extends Command {
  log = debug(`${NS}:figma-sync`);
  logWarn = debug(`${NS}:figma-sync:warn`);
  logError = debug(`${NS}:figma-sync:error`);

  static description = 'sync design tokens from figma file';

  static examples = [`$ nr figma-sync`];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'file', description: 'figma file id' }];

  async init() {
    debug.enable('nr:core-cli:*');
  }

  async run() {
    const env = loadDotEnv<ENV>({
      schema: Env,
      dotEnvPath: '.env',
      packageName: 'core-cli',
      printEnvVariables: true,
    });

    /**
     * @see https://github.com/contentful/contentful-migration
     */
    runMigration({
      filePath: path.resolve(process.cwd(), env.CONTENTFUL_MIGRATION_FILE),
      environmentId: env.CONTENTFUL_ENV,
      spaceId: env.CONTENTFUL_SPACEID,
      accessToken: env.CONTENTFUL_MANAGEMENT_TOKEN,
    })
      .then(() => console.log('Migration Done!'))
      .catch((e) => console.error(e));
  }
}
