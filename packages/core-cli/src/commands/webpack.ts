import { spawn, spawnSync } from 'child_process';

import { Command, flags } from '@oclif/command';

import { getShellForPlatform } from '@newrade/core-node-utils';

import { debugInstance, enableDebug, NS } from '../utilities/log.utilities.js';

export default class Webpack extends Command {
  log = debugInstance(`${NS}:webpack`);
  logWarn = debugInstance(`${NS}:webpack:warn`);
  logError = debugInstance(`${NS}:webpack:error`);

  static description = 'Shortcut to run webpack with typescript (ts-node)';

  static examples = [`$ nr webpack serve --config webpack.dev.config.ts`];

  static args = [{ name: 'command' }];

  static flags = {
    config: flags.string({ char: 'c', description: 'path to config file (.ts)' }),
    /**
     * @since webpack-dev-server@v4
     * @see https://webpack.js.org/configuration/dev-server/#overlay
     */
    ['no-client-overlay']: flags.boolean({
      description:
        'disable the full-screen overlay in the browser when there are compiler errors or warnings',
    }),
    /**
     * debugging
     */
    ['inspect-brk']: flags.boolean({
      description: 'enable node --inspect-brk flag',
    }),
  };

  async run() {
    enableDebug();

    const { args, flags } = this.parse(Webpack);

    const command = [
      `cross-env TS_NODE_PROJECT=../../tsconfig.node-cli.json node ${
        flags['inspect-brk'] ? `--inspect-brk` : ''
      } -r ts-node/register ../../node_modules/webpack/bin/webpack`,
      args.command || '',
      `${flags['no-client-overlay'] ? `--no-client-overlay` : ''}`,
      `--config ${flags.config}`,
    ].join(' ');

    this.log(`running: ${command}`);

    this.log(`NODE_ENV is: ${process.env.NODE_ENV}`);

    const cmd = spawn(command, {
      shell: getShellForPlatform(),
      stdio: ['inherit', 'pipe', 'pipe'],
      env: process.env,
    });

    let errors: any[] = [];

    const handleData = (chunk: Buffer) => {
      //
      //
      //
      const chunkString = chunk.toString();
      if (/error\s/gi.test(chunkString)) {
        process.stderr.write(chunk);

        if (!/(\.error)/gi.test(chunkString)) {
          errors.push(chunkString);
        }

        return;
      }
      process.stdout.write(chunk);
    };

    const handleError = (error: Error) => {
      errors.push(error.toString());
      process.stderr.write(error.toString());
    };

    const handleClose = (args: any[]) => {
      if (errors.length) {
        this.logError(`finished with ${errors.length} errors`);
        errors.forEach((error, errorIndex) => {
          this.logError(`error #${errorIndex}:`);
          process.stderr.write(`\t${error.toString()}`);
        });

        process.exit(1);
      }
      this.log(`finished`);
      process.exit(0);
    };

    cmd.stdout.on('data', handleData);
    cmd.stderr.on('data', handleData);

    cmd.stdout.on('error', handleError);
    cmd.stderr.on('error', handleError);

    cmd.stdout.on('close', handleClose);
    cmd.stderr.on('close', handleClose);
  }
}
