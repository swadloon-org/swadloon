import { Config } from '@oclif/core';
import glob from 'glob';

import { BaseCommand } from '../base-command.js';

export default class Globby extends BaseCommand {
  static description = 'Execute globby as CLI';

  static examples = [`$ nr globby`];

  static args = [{ name: 'args' }];

  static flags = {};

  constructor(argv: string[], config: Config) {
    super(argv, config, { name: 'globby' });
  }

  async run() {
    const { args, flags } = await this.parse(Globby);

    this.log(`globbing: ${args.args}`);

    glob(args.args.toString(), (error, files) => {
      if (error) {
        this.logWarn(`error: ${error}`);
      }
      this.log(`result: ${files.join('\n')}`);
    });
  }
}
