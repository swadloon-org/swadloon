import { Command, flags } from '@oclif/command';
import { spawn } from 'child_process';
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

    const cmd = spawn(command, {
      shell: true,
      stdio: ['inherit', 'pipe', 'pipe'],
      env: process.env,
    });

    let errors: any[] = [];

    cmd.stdout.on('data', (chunk: Buffer) => {
      // gatsby cli does not use stderr correctly, so we have to parse stdout
      const chunkString = chunk.toString();
      if (/error/gi.test(chunkString) && !/\.gitkeep/gi.test(chunkString)) {
        errors.push(chunkString);
        return;
      }
      this.log(chunk.toString());
    });

    cmd.stdout.on('error', (error: Error) => {
      errors.push(error.toString());
    });

    cmd.stdout.on('close', (error: Error) => {
      if (errors.length) {
        this.logError(`finished with ${errors.length} errors`);
        throw new Error(errors.join(''));
      }
      this.log('done');
    });
  }
}
