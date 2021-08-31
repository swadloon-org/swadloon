import { Command, flags } from '@oclif/command';
import debug from 'debug';
import { NS } from '../utilities/log.utilities';
import * as t from 'io-ts';
import { loadDotEnv } from '@newrade/core-utils';
import { spawnSync } from 'child_process';

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

export default class VercelDeploy extends Command {
  log = debug(`${NS}:vercel-deploy`);
  logWarn = debug(`${NS}:vercel-deploy:warn`);
  logError = debug(`${NS}:vercel-deploy:error`);

  static description = 'deploy site with vercel using env variables';

  static examples = [`$ nr vercel-deploy`];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [];

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
      shell: true,
      stdio: 'inherit',
      env: env,
    });

    this.log('done! ✅');
  }
}
