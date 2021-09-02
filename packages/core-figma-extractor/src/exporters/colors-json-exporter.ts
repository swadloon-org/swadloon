import chalk from 'chalk';
import { log } from 'debug';
import * as fs from 'fs';

import { ColorTokens } from '../models/figma-colors.model';
import { logError } from '../service/logging.service';
import { formatOutput } from '../utilities/formatting.utilities';

export const exportJSONColorTokens = (colorObject: ColorTokens, filePath: string) => {
  const numberColorTokens: number = Object.keys(colorObject).length;
  const textContent = JSON.stringify(colorObject, null, 2);

  fs.appendFile(filePath, formatOutput(textContent, { parser: 'json' }), (err) => {
    if (err) {
      logError(chalk.red(`JSON color tokens failed ❌ `));
      throw err;
    }
    log(chalk.green(`${numberColorTokens} color tokens JSON generated`));
  });
};
