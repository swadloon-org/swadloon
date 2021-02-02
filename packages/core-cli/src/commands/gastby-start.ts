import { Command, flags } from '@oclif/command';

import { spawnSync } from 'child_process';

export default class GastbyStart extends Command {
  static description = 'run gatsby dev';

  static examples = [`$ nr gatsby:start`];

  static aliases = ['gatsby:start'];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  async run() {
    spawnSync(`. ./.env && node_modules/.bin/gatsby develop --verbose -p $APP_PORT -H 0.0.0.0`, {
      cwd: '.',
      shell: true,
      stdio: 'inherit',
      env: process.env,
    });
  }
}
