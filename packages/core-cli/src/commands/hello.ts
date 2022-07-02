import { Config } from '@oclif/core';

import { BaseCommand } from '../base-command.js';

export default class Hello extends BaseCommand {
  static description = 'Test command to verify that the CLI build is valid.';
  static examples = [`$ condohub hello world`];
  static args = [{ name: 'word' }];

  constructor(argv: string[], config: Config) {
    super(argv, config, { name: 'hello' });
  }

  async run() {
    this.logDebug('starting run method');

    const { args } = await this.parse<any, { word: any }>(Hello);
    if (args.word) {
      this.logCommand(`hello ${args.word}`);
      return;
    }
    this.logCommand(`hello`);
  }
}
