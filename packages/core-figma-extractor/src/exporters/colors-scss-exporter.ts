import chalk from 'chalk';
import { log } from 'debug';
import * as fs from 'fs';

import { ColorTokens } from '../models/figma-colors.model';
import { logError } from '../service/logging.service';
import { formatOutput } from '../utilities/formatting.utilities';

export const exportScssColorTokens = (colorObject: ColorTokens, filePath: string) => {
  const numberColorToken: number = Object.keys(colorObject).length;

  let allColorsString = '';

  Object.keys(colorObject).forEach((color) => {
    allColorsString += `$color-${colorObject[color].colorType}-${colorObject[color].colorLevel}: rgba(${colorObject[color].r},${colorObject[color].g},${colorObject[color].b},${colorObject[color].a});\n`;
  });
  const textContent = `${allColorsString}`;
  fs.appendFile(filePath, formatOutput(textContent, { parser: 'scss' }), (err) => {
    if (err) {
      logError(chalk.red(`SCSS color tokens failed ❌ `));
      throw err;
    }

    log(chalk.green(`${numberColorToken} color tokens SCSS generated`));
  });
};
