import { Command } from '@oclif/core';
import debug from 'debug';
import glob from 'glob';

import { NS } from '../utilities/log.utilities.js';

export default class Globby extends Command {
  log = debug(`${NS}:globby`);
  logWarn = debug(`${NS}:globby:warn`);
  logError = debug(`${NS}:globby:error`);

  static description = 'Execute globby as CLI';

  static examples = [`$ nr globby`];

  static args = [{ name: 'args' }];

  static flags = {};

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
