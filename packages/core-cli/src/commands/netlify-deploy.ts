import { Command, flags } from '@oclif/command';

import { spawnSync } from 'child_process';

export default class Deploy extends Command {
  static description = 'deploy gatsby site with netlify';

  static examples = [`$ nr netlify:deploy`];

  static aliases = ['netlify:deploy'];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  async run() {
    spawnSync(`netlify deploy -d public`, {
      cwd: '.',
      shell: true,
      stdio: 'inherit',
      env: process.env,
    });
  }
}
