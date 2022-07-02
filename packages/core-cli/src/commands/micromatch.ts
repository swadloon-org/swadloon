import { Config } from '@oclif/core';
import chalk from 'chalk';
import micromatch from 'micromatch';

import { BaseCommand } from '../base-command.js';

export default class Micromatch extends BaseCommand {
  static description = 'Execute micromatch as CLI';

  static examples = [`$ nr micromatch`];

  static args = [{ name: 'path' }, { name: 'pattern' }];

  static flags = {};

  constructor(argv: string[], config: Config) {
    super(argv, config, { name: 'micromatch' });
  }

  async run() {
    const { args, flags } = await this.parse(Micromatch);

    this.log(`path: ${chalk.blueBright(args.path)}, pattern: ${chalk.bgBlue(args.pattern)}`);

    // const format = (str: string) => str.replace(/^\.\//, '');
    const result = micromatch.isMatch(args.path, args.pattern);

    this.log(`match: ${result ? chalk.green(result) : chalk.red(result)}`);
  }
}
