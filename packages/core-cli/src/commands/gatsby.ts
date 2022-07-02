import { spawn } from 'child_process';

import { Config, Flags } from '@oclif/core';

import { getShellForPlatform } from '@newrade/core-node-utils';

import { BaseCommand } from '../base-command.js';

export default class Gatsby extends BaseCommand {
  static description = 'Shortcut to run Gatsby with typescript (ts-node)';

  static examples = [`$ nr gatsby build`];

  static args = [{ name: 'command' }];

  static flags = {
    'no-uglify': Flags.boolean({ description: 'gatsby --no-uglify flag' }),
    verbose: Flags.boolean({ description: 'gatsby verbose command' }),
    inspect: Flags.boolean({ description: 'gatsby inspect command' }),
    port: Flags.string({ char: 'p', description: 'gatsby port option' }),
    host: Flags.string({ char: 'H', description: 'gatsby host option' }),
  };

  constructor(argv: string[], config: Config) {
    super(argv, config, { name: 'gatsby' });
  }

  async run() {
    const { args, flags } = await this.parse(Gatsby);

    const command = [
      `cross-env TS_NODE_PROJECT=../../tsconfig.node-cli.json node -r ts-node/register ../../node_modules/gatsby/dist/bin/gatsby.js`,
      `${args.command || ''}`,
      `${flags['no-uglify'] ? '--no-uglify' : ''}`,
      `${flags.verbose ? '--verbose' : ''}`,
      `${flags.inspect ? '--inspect' : ''}`,
      `${flags.port ? `-p ${flags.port}` : ''}`,
      `${flags.host ? `-H ${flags.host}` : ''}`,
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
      // gatsby cli does not use stderr correctly, so we have to parse stdout and find occurence of errors
      //
      const chunkString = chunk.toString();
      if (/error\s/gi.test(chunkString)) {
        process.stderr.write(chunk);

        if (
          !/(\.gitkeep|DeprecationWarning|webpack\.cache\.PackFileCacheStrategy)/gi.test(
            chunkString
          )
        ) {
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
