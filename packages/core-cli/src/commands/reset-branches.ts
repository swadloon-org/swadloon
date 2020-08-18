import { Command, flags } from '@oclif/command';

import { log } from 'core-utils';
import { spawnSync } from 'child_process';

export default class ResetBranches extends Command {
  static description = 'describe the command here';

  static examples = [
    `$ nr hello
  hello world from ./src/hello.ts!
  `,
  ];

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
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
