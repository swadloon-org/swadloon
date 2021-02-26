import { extract } from '@newrade/core-figma-extractor';
import { loadDotEnv } from '@newrade/core-utils';
import { Command, flags } from '@oclif/command';
import * as t from 'io-ts';

// import packageJson from '../../package.json'; // TODO: check if possible to load local package json

export type ENV = t.TypeOf<typeof Env>;
export const Env = t.intersection([
  t.type({}),
  t.type({
    FIGMA_TOKEN: t.string,
    FIGMA_FILE: t.string,
  }),
]);

export default class FigmaSync extends Command {
  static description = 'sync design tokens from figma file';

  static examples = [`$ nr figma-sync`];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'file', description: 'figma file id' }];

  async run() {
    const env = loadDotEnv<ENV>({
      schema: Env,
      dotEnvPath: '.env', // TODO: how to resolve CWD (current working directory)
      packageName: 'core-cli',
    });

    const { args, flags } = this.parse(FigmaSync);

    process.env.DEBUG = (env as any).DEBUG;

    extract({
      figmaFile: env.FIGMA_FILE,
      figmaToken: env.FIGMA_TOKEN,
      outputDir: 'dist',
    });
  }
}
