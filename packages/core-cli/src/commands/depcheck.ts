import { spawnSync } from 'child_process';

import { Config } from '@oclif/core';

import { getShellForPlatform } from '@newrade/core-node-utils';

import { BaseCommand } from '../base-command.js';

export default class Depcheck extends BaseCommand {
  static description = 'Shortcut to run depcheck';

  static examples = [`$ nr depcheck`];

  static args = [{ name: 'args' }];

  constructor(argv: string[], config: Config) {
    super(argv, config, { name: 'depcheck' });
  }

  async run() {
    const { args } = await this.parse(Depcheck);

    this.log(`running in ${process.cwd()}`);

    const command = spawnSync(`yarn depcheck ${args.args || ''}`, {
      shell: getShellForPlatform(),
      stdio: ['inherit', 'pipe', 'pipe'],
      env: process.env,
    });

    if (command.stdout.toString().length) {
      if (/Missing/gi.test(command.stdout.toString())) {
        this.error(command.stdout.toString());
      }

      if (/Unused/gi.test(command.stdout.toString())) {
        this.logWarn(command.stdout.toString());
        return;
      }

      this.log(command.stdout.toString());
    }

    if (command.stderr.toString().length) {
      if (/DeprecationWarning/gi.test(command.stderr.toString())) {
        return;
      }
      this.logError(command.stderr.toString());
      this.error(command.stderr.toString());
    }
  }
}
