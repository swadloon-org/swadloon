import { spawnSync } from 'child_process';

import { Config } from '@oclif/core';

import { ENV, Env } from '@newrade/core-css-extractor';
import { getShellForPlatform, loadDotEnv } from '@newrade/core-node-utils';

import { BaseCommand } from '../base-command.js';

export default class CssExtract extends BaseCommand {
  static description =
    'Create CSS tokens (plain .css files) from Vanilla-extract styles definition files (*.css.ts)';

  static examples = [`$ nr css-extract`];

  static args = [];

  static flags = {};

  constructor(argv: string[], config: Config) {
    super(argv, config, { name: 'css-extract' });
  }

  async run() {
    this.log(`loading .env in ${process.cwd()}`);

    const env = loadDotEnv<ENV>({
      schema: Env,
      dotEnvPath: '.env',
      packageName: 'core-cli',
    });

    this.log(`CSS_EXTRACTOR_ENTRIES_GLOB: ${env.CSS_EXTRACTOR_ENTRIES_GLOB}`);
    this.log(`CSS_EXTRACTOR_OUTPUT_PATH: ${env.CSS_EXTRACTOR_OUTPUT_PATH}`);

    const { args, flags } = await this.parse(CssExtract);

    const command = `cross-env TS_NODE_PROJECT=../../tsconfig.node-cli.json node -r ts-node/register ../../node_modules/webpack/bin/webpack --config ../core-css-extractor/webpack.prod.config.ts`;

    this.log(`running: ${command}`);

    const cmd = spawnSync(command, {
      shell: getShellForPlatform(),
      stdio: ['inherit', 'inherit', 'pipe'],
      env: process.env,
    });

    if (cmd.stderr && cmd.stderr.toString().length) {
      const stderr = cmd.stderr.toString();
      if (/error/gi.test(stderr)) {
        this.logError(`${stderr}`);
        throw new Error(stderr);
      }
      this.log(`${stderr}`);
    }

    this.log(`finished`);
  }
}
