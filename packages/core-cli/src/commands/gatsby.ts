import { Command, flags } from '@oclif/command';
import { spawnSync } from 'child_process';
import debug from 'debug';
import { NS } from '../utilities/log.utilities';

export default class Gatsby extends Command {
  log = debug(`${NS}:gatsby`);
  logWarn = debug(`${NS}:gatsby:warn`);
  logError = debug(`${NS}:gatsby:error`);

  static description = 'Shortcut to run Gatsby with typescript (ts-node)';

  static examples = [`$ nr gatsby build`];

  static args = [{ name: 'command' }];

  static flags = {
    'no-uglify': flags.boolean({ description: 'gatsby --no-uglify flag' }),
    verbose: flags.boolean({ description: 'gatsby verbose command' }),
    port: flags.string({ char: 'p', description: 'gatsby port option' }),
    host: flags.string({ char: 'H', description: 'gatsby host option' }),
  };

  async run() {
    const { args, flags } = this.parse(Gatsby);

    const command = [
      `TS_NODE_PROJECT=../../tsconfig.node-commonjs.json node -r ts-node/register ./node_modules/.bin/gatsby`,
      `${args.command || ''}`,
      `${flags['no-uglify'] ? '--no-uglify' : ''}`,
      `${flags.verbose ? '--verbose' : ''}`,
      `${flags.port ? `-p ${flags.port}` : ''}`,
      `${flags.host ? `-H ${flags.host}` : ''}`,
    ].join(' ');

    this.log(`running: ${command}`);

    const cmd = spawnSync(command, {
      shell: true,
      stdio: ['inherit', 'inherit', 'pipe'],
      env: process.env,
    });

    if (cmd.stderr) {
      throw new Error(cmd.stderr.toString());
    }
  }
}
