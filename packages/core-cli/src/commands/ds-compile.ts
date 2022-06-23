import { spawnSync } from 'child_process';

import { Command } from '@oclif/core';

import { ENV, Env } from '@newrade/core-css-extractor';
import { getShellForPlatform, loadDotEnv } from '@newrade/core-node-utils';

import { debugInstance, enableDebug, NS } from '../utilities/log.utilities.js';

export default class CssExtract extends Command {
  log = debugInstance(`${NS}:css-extract`);
  logWarn = debugInstance(`${NS}:css-extract:warn`);
  logError = debugInstance(`${NS}:css-extract:error`);

  static description =
    'Compile figma tokens (from figma-sync) into {Color} objects compatible with core-design-system';

  static examples = [`$ nr ds-compile`];

  static args = [];

  static flags = {};

  async run() {
    enableDebug();
    this.log(`loading .env in ${process.cwd()}`);

    const env = loadDotEnv<ENV>({
      schema: Env,
      dotEnvPath: '.env',
      packageName: 'core-cli',
    });

    this.log(`CSS_COMPILE_ENTRIES_GLOB: ${env.CSS_EXTRACTOR_ENTRIES_GLOB}`);
    this.log(`CSS_COMPILE_OUTPUT_PATH: ${env.CSS_EXTRACTOR_OUTPUT_PATH}`);

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
