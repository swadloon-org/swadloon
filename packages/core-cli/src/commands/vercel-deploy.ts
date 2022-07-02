import { spawnSync } from 'child_process';

import { Command, Config, Flags } from '@oclif/core';
import * as t from 'io-ts';

import { getShellForPlatform, loadDotEnv } from '@newrade/core-node-utils';

import { BaseCommand } from '../base-command.js';

export type ENV = t.TypeOf<typeof Env>;
export const Env = t.intersection([
  t.type({}),
  t.type({
    VERCEL_PROJECT_ID: t.string,
    VERCEL_ORG_ID: t.string,
    VERCEL_TOKEN: t.string,
    VERCEL_SCOPE: t.string,
  }),
]);

export default class VercelDeploy extends BaseCommand {
  static description = 'deploy site with vercel using env variables';

  static examples = [`$ nr vercel-deploy`];

  static flags = {
    help: Flags.help({ char: 'h' }),
  };

  static args = [];

  constructor(argv: string[], config: Config) {
    super(argv, config, { name: 'vercel-deploy' });
  }

  async init() {}

  async run() {
    this.log(`running in ${process.cwd()}`);
    this.log('validating env variables');
    this.log('loading .env file');

    const env = loadDotEnv<ENV>({
      schema: Env,
      dotEnvPath: '.env',
      dotEnvRootPath: '../../.env',
      packageName: 'core-cli',
    });

    this.log('running vercel deploy');

    // use yarn to use the locally installed vercel-cli
    spawnSync(`yarn vercel public --token $VERCEL_TOKEN --scope $VERCEL_SCOPE --confirm`, {
      cwd: '.',
      shell: getShellForPlatform(),
      stdio: 'inherit',
      env: env,
    });

    this.log('done! ✅');
  }
}
