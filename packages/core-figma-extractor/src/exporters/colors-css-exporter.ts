import chalk from 'chalk';
import { log } from 'debug';
import * as fs from 'fs';

import { ColorTokens } from '../models/figma-colors.model';
import { logError } from '../service/logging.service';
import { formatOutput } from '../utilities/formatting.utilities';

/**
 * Creating files for each necessary export models (JSON, CSS, SCSS, TS)
 *
 * @param colorObject
 * @param filePath
 */

export const exportCssColorTokens = (colorObject: ColorTokens, filePath: string) => {
  const numberColorTokens: number = Object.keys(colorObject).length;

  let colorsString = '';
  Object.keys(colorObject).forEach((color) => {
    colorsString += `--color-${colorObject[color].colorType}-${colorObject[color].colorLevel}: rgba(${colorObject[color].r},${colorObject[color].g},${colorObject[color].b},${colorObject[color].a});\n`;
  });
  const textContent = `:root {${colorsString}}`;

  fs.appendFile(filePath, formatOutput(textContent, { parser: 'css' }), (err) => {
    if (err) {
      logError(chalk.red(`CSS color tokens failed ❌ `));
      throw err;
    }
    log(chalk.green(`${numberColorTokens} color tokens CSS generated`));
  });
};
