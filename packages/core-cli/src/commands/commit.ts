import { Command } from '@oclif/command';
import { spawnSync } from 'child_process';
import * as path from 'path';

export default class Commit extends Command {
  static description = 'call the commit script';

  static examples = [`$ nr commit`];

  async run() {
    spawnSync(`yarn commit`, {
      cwd: path.join('..', '..'),
      shell: true,
      stdio: 'inherit',
      env: process.env,
    });
  }
}
