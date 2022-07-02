import { spawnSync } from 'child_process';

import { Config, Flags } from '@oclif/core';

import { getShellForPlatform } from '@newrade/core-node-utils';

import { BaseCommand } from '../base-command.js';

export default class JestWatch extends BaseCommand {
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
    const { args, flags } = await this.parse(JestWatch);

    const command = [
      `cross-env TS_NODE_PROJECT=../../tsconfig.node-cli.json node -r ts-node/register ../../node_modules/jest/bin/jest`,
      `${flags.config ? '--config ' + flags.config : ''}`,
      `${args.args || '--watch'}`,
    ].join(' ');

    this.log(`running: ${command}`);

    const cmd = spawnSync(command, {
      shell: getShellForPlatform(),
      stdio: ['inherit', 'inherit', 'inherit'], // jest only uses stderr as output https://github.com/facebook/jest/issues/5064
      env: process.env,
    });
  }
}
