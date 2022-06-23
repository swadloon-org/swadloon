import { Command, Flags } from '@oclif/core';
import debug from 'debug';
import { spawnSync } from 'node:child_process';

import { getShellForPlatform } from '@newrade/core-node-utils';

export default class CleanNodeModules extends Command {
  ddebug: debug.Debugger = debug('nr:core-cli:clean-node-modules');
  ddebugWarn: debug.Debugger = debug('nr:core-cli:clean-node-modules:warn');
  ddebugError: debug.Debugger = debug('nr:core-cli:clean-node-modules:error');

  static description = `find . -name 'node_modules' -type d -prune -print -exec rimraf -rf '{}' \;`;

  // nvm cache clear
  // yarn cache clear
  // npm cache clear --force
  static examples = [`$ nr resetbranches`];

  static flags = {
    help: Flags.help({ char: 'h' }),
  };

  static args = [{ name: 'dir' }];

  async init() {
    debug.enable('nr:core-cli:*');
  }

  async run() {
    spawnSync(`brew upgrade`, {
      cwd: '.',
      shell: getShellForPlatform(),
      stdio: 'inherit',
      env: process.env,
    });

    spawnSync(`npm cache clean –force`, {
      cwd: '.',
      shell: getShellForPlatform(),
      stdio: 'inherit',
      env: process.env,
    });

    spawnSync(`yarn cache clean`, {
      cwd: '.',
      shell: getShellForPlatform(),
      stdio: 'inherit',
      env: process.env,
    });
  }
}
