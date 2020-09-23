import { Command, flags } from '@oclif/command';

import { log } from '@newrade/core-utils';
import { spawnSync } from 'child_process';

export default class ResetBranches extends Command {
  static description = 'delete local branches that are merged on the origin';

  static examples = [`$ nr resetbranches`];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'file' }];

  async run() {
    spawnSync(`git branch --merged master | grep -v '^[ *]*master$' | xargs git branch -d`, {
      cwd: '.',
      shell: true,
      stdio: 'inherit',
      env: process.env,
    });
  }
}
