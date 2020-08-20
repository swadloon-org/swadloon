import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import * as Figma from 'figma-js';
import { log } from '../utilities/log';
import { loadDotEnv } from '../utilities/utils';
import { Colors } from 'core-design-system';

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

    client.file(args.file).then(({ data }) => {
      log(`Querying Figma API:\t\t ${chalk.green('ok')}`);

      log(`Figma filename:\t\t ${chalk.blue(data.name)}`);

      log(`Extracting colors:\t\t ${chalk.green('done')}`);

      log(`${JSON.stringify(data.styles, null, 2)}`);

      // function parseFigmaColors(data: any): Colors {}

      log(`Extracting text styles:\t ${chalk.green('done')}`);

      log(`Extracting exports:\t\t ${chalk.green('done')}`);
    });
  }
}
