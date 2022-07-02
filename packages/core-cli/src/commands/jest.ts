import { spawnSync } from 'child_process';

import { Command, Config, Flags } from '@oclif/core';

import { getShellForPlatform } from '@newrade/core-node-utils';

import { BaseCommand } from '../base-command.js';
import { debugInstance, enableDebug, NS } from '../utilities/log.utilities.js';

export default class Jest extends BaseCommand {
  static description = 'Shortcut to run jest with typescript (ts-node)';

  static examples = [`$ nr jest`];

  static args = [{ name: 'args' }];

  static flags = {
    config: Flags.string({ description: 'path to jest config file', default: 'jest.config.ts' }),
  };

  constructor(argv: string[], config: Config) {
    super(argv, config, { name: 'jest' });
  }

  async run() {
    const { args, flags } = await this.parse(Jest);

    const command = [
      `cross-env TS_NODE_PROJECT=../../tsconfig.node-cli.json node -r ts-node/register ../../node_modules/jest/bin/jest`,
      `${flags.config ? '--config ' + flags.config : ''}`,
      `${args.args || ''}`,
    ].join(' ');

    this.log(`running: ${command}`);

    const cmd = spawnSync(command, {
      shell: getShellForPlatform(),
      stdio: ['inherit', 'inherit', 'pipe'], // jest only uses stderr as output https://github.com/facebook/jest/issues/5064
      env: process.env,
    });

    if (cmd.stderr && cmd.stderr.toString().length) {
      const stderr = cmd.stderr.toString();
      if (/FAIL/gi.test(stderr)) {
        this.logError(`${stderr}`);
        throw new Error(stderr);
      }
      this.log(`${stderr}`);
    }
  }
}
