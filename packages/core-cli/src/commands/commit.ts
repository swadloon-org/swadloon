import { spawnSync } from 'child_process';
import * as path from 'path';

import { getShellForPlatform } from '@newrade/core-node-utils';

import { BaseCommand } from '../base-command.js';

export default class Commit extends BaseCommand {
  static description = 'call the commit script in the repo root';

  static examples = [`$ nr commit`];

  async run() {
    spawnSync(`yarn commit`, {
      cwd: path.join('..', '..'),
      shell: getShellForPlatform(),
      stdio: 'inherit',
      env: process.env,
    });
  }
}
