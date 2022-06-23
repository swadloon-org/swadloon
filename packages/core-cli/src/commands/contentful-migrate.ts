import path from 'path';

import { Command, Flags } from '@oclif/core';
import { runMigration } from 'contentful-migration';
import debug from 'debug';
import * as t from 'io-ts';

import { loadDotEnv } from '@newrade/core-node-utils';

import { enableDebug, NS } from '../utilities/log.utilities.js';

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

export default class ContentfulMigrate extends Command {
  log = debug(`${NS}:contentful`);
  logWarn = debug(`${NS}:contentful:warn`);
  logError = debug(`${NS}:contentful:error`);

  static description = 'execute migration with the contentful CLI ';

  static examples = [`$ nr figma-sync`];

  static flags = {
    help: Flags.help({ char: 'h' }),
  };

  static args = [{ name: 'file', description: 'figma file id' }];

  async run() {
    enableDebug();

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
