import { parseFigmaColors } from '@newrade/core-figma-extractor/src';
import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import debug from 'debug';
import * as Figma from 'figma-js';
import { loadDotEnv } from '../utilities/utils';
const log = debug('newrade:core-cli');

const env = loadDotEnv();

export default class FigmaSync extends Command {
  static description = 'sync design tokens from figma file';

  static examples = [`$ nr figma-sync`];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'file', description: 'figma file id' }];

  async run() {
    const { args, flags } = this.parse(FigmaSync);

    const client = Figma.Client({
      personalAccessToken: env.FIGMA_TOKEN,
    });

    log(`Querying Figma API\t\t ${args.file}...`);

    client.fileStyles(args.file).then(({ data }) => {
      log(`${JSON.stringify(data.meta.styles[0], null, 2)}`);

      const key = data.meta.styles[0].key;

      client.style(key).then(({ data }) => {
        log(`${JSON.stringify(data, null, 2)}`);
      });

      client.fileStyles(args.file).then(({ data }) => {
        log(`Querying Figma API:\t\t ${chalk.green('ok')}`);

        // log(`Figma filename:\t\t ${chalk.blue(data.name)}`);

        log(`Extracting colors:\t\t ${chalk.green('done')}`);

        log(`${JSON.stringify(data.meta.styles, null, 2)}`);

        log(`${chalk.green('_____EXECUTING_____UTILITIES______')}`);

        parseFigmaColors(data.meta.styles);

        log(`Extracting text styles:\t ${chalk.green('done')}`);

        log(`Extracting exports:\t\t ${chalk.green('done')}`);
      });
    });
  }
}
