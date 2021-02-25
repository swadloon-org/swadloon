import { extract } from '@newrade/core-figma-extractor/src';
import { loadDotEnv } from '@newrade/core-utils';
import { Command, flags } from '@oclif/command';
// import packageJson from '../../package.json'; // TODO: check if possible to load local package json
import { Env, ENV } from '../types/dot-env';

const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: '.env', // TODO: how to resolve CWD (current working directory)
  packageName: 'core-cli',
});

export default class FigmaSync extends Command {
  static description = 'sync design tokens from figma file';

  static examples = [`$ nr figma-sync`];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'file', description: 'figma file id' }];

  async run() {
    const { args, flags } = this.parse(FigmaSync);

    extract({
      figmaFile: env.FIGMA_FILE,
      figmaToken: env.FIGMA_TOKEN,
      outputDir: 'dist',
    });
  }
}
