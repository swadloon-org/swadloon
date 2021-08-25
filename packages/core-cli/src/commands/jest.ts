import { Command } from '@oclif/command';
import { spawnSync } from 'child_process';

export default class Jest extends Command {
  static description = 'Shortcut to run jest with typescript (ts-node)';

  static examples = [`$ nr jest`];

  static args = [{ name: 'args' }];

  async run() {
    const { args } = this.parse(Jest);

    spawnSync(
      `TS_NODE_PROJECT=../../tsconfig.node-commonjs.json node -r ts-node/register ../../node_modules/jest/bin/jest --config jest.config.ts ${
        args.args || ''
      }`,
      {
        shell: true,
        stdio: 'inherit',
        env: process.env,
      }
    );
  }
}
