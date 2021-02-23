import { Command, flags } from '@oclif/command';
import * as path from 'path';
import { spawnSync } from 'child_process';

export default class Commit extends Command {
  static description = 'call the commit script';

  static examples = [`$ nr commit`];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'file' }];

  async run() {
    spawnSync(`yarn commit`, {
      cwd: path.join(__dirname, '..', '..', '..', '..'),
      shell: true,
      stdio: 'inherit',
      env: process.env,
    });
  }
}
