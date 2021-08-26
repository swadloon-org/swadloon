import { Command, flags } from '@oclif/command';
import { spawnSync } from 'child_process';

export default class Webpack extends Command {
  static description = 'Shortcut to run webpack with typescript (ts-node)';

  static examples = [`$ nr webpack serve --config webpack.dev.config.ts`];

  static args = [{ name: 'command' }];

  static flags = {
    config: flags.string({ char: 'c', description: 'path to config file (.ts)' }),
  };

  async run() {
    const { args, flags } = this.parse(Webpack);

    const command = `TS_NODE_PROJECT=../../tsconfig.node-commonjs.json node -r ts-node/register ../../node_modules/webpack/bin/webpack ${
      args.command || ''
    } --config ${flags.config}`;

    console.log(`running: ${command}`);

    spawnSync(command, {
      shell: true,
      stdio: 'inherit',
      env: process.env,
    });
  }
}
