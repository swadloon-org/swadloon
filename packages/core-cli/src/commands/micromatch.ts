import { Command } from '@oclif/command';
import chalk from 'chalk';
import debug from 'debug';
import micromatch from 'micromatch';

import { NS } from '../utilities/log.utilities';

export default class Micromatch extends Command {
  log = debug(`${NS}:micromatch`);
  logWarn = debug(`${NS}:micromatch:warn`);
  logError = debug(`${NS}:micromatch:error`);

  static description = 'Execute micromatch as CLI';

  static examples = [`$ nr micromatch`];

  static args = [{ name: 'path' }, { name: 'pattern' }];

  static flags = {};

  async run() {
    const { args, flags } = this.parse(Micromatch);

    this.log(`path: ${chalk.blueBright(args.path)}, pattern: ${chalk.bgBlue(args.pattern)}`);

    // const format = (str: string) => str.replace(/^\.\//, '');
    const result = micromatch.isMatch(args.path, args.pattern);

    this.log(`match: ${result ? chalk.green(result) : chalk.red(result)}`);
  }
}
