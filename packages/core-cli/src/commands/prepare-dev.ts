import { spawnSync } from 'child_process';

import { Command } from '@oclif/command';
import debug from 'debug';

import { getShellForPlatform } from '@newrade/core-node-utils';

import { NS } from '../utilities/log.utilities';

/**
 * To be used with preconstruct
 * @see https://preconstruct.tools/
 */
export default class PrepareDev extends Command {
  log = debug(`${NS}:prepare-dev`);
  logWarn = debug(`${NS}:prepare-dev:warn`);
  logError = debug(`${NS}:prepare-dev:error`);

  static description = 'execute preconstruct dev';

  static examples = [`$ nr prepare-dev`];

  async init() {
    debug.enable('nr:core-cli:*');
  }

  async run() {
    this.log('running preconstruct dev command');

    spawnSync(`yarn preconstruct dev`, {
      shell: getShellForPlatform(),
      stdio: 'inherit',
      env: process.env,
    });

    this.log('running preconstruct dev: done');
  }
}
