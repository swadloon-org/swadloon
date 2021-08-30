import { Command, flags } from '@oclif/command';
import { spawnSync } from 'child_process';
import debug from 'debug';
import { NS } from '../utilities/log.utilities';

export default class Jest extends Command {
  log = debug(`${NS}:jest`);
  logWarn = debug(`${NS}:jest:warn`);
  logError = debug(`${NS}:jest:error`);

  static description = 'Shortcut to run jest with typescript (ts-node)';

  static examples = [`$ nr jest`];

  static args = [{ name: 'args' }];

  static flags = {
    config: flags.string({ description: 'path to jest config file', default: 'jest.config.ts' }),
  };

  async run() {
    const { args, flags } = this.parse(Jest);

    const command = [
      `TS_NODE_PROJECT=../../tsconfig.node-commonjs.json node -r ts-node/register ../../node_modules/jest/bin/jest`,
      `${flags.config ? '--config ' + flags.config : ''}`,
      `${args.args || ''}`,
    ].join(' ');

    this.log(`running: ${command}`);

    spawnSync(command, {
      shell: true,
      stdio: 'inherit',
      env: process.env,
    });
  }
}
