import chalk from 'chalk';
import { log } from 'debug';
import * as fs from 'fs';

import { ColorTokens } from '../models/figma-colors.model';
import { logError } from '../service/logging.service';
import { formatOutput } from '../utilities/formatting.utilities';

export const exportTSColorTokens = (colorObject: ColorTokens, filePath: string) => {
  const numberColorTokens: number = Object.keys(colorObject).length;
  const colorsKeys = Object.keys(colorObject).map((color) => {
    return `
    '${color}': {
      id: '${colorObject[color].id}',
      colorNamespace: '${colorObject[color].colorNamespace}',
      colorTheme: '${colorObject[color].colorTheme}',
      colorType: '${colorObject[color].colorType}',
      colorLevel: '${colorObject[color].colorLevel}',
      r: ${colorObject[color].r},
      g: ${colorObject[color].g},
      b: ${colorObject[color].b},
      a: ${colorObject[color].a}
    }`;
  });

  const colors = `export const colors: ColorTokens = { ${colorsKeys} }`;
  const textContent = `import { ColorTokens } from '@newrade/core-figma-extractor';\n ${colors}`;

  fs.appendFile(filePath, formatOutput(textContent, { parser: 'typescript' }), (err) => {
    if (err) {
      logError(chalk.red(`TS color tokens failed ❌ `));
      throw err;
    }
    log(chalk.green(`${numberColorTokens} color tokens TS generated`));
  });
};
