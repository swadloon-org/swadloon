import chalk from 'chalk';
import debug from 'debug';
import * as fs from 'fs';
import * as prettier from 'prettier';
import { ColorTokens } from './figma-colors.model';

const log = debug('newrade:core-figma-extractor');
const logError = log.extend('error');

const prettierConfig = {
  singleQuote: true,
  tabWidth: 2,
  printWidth: 120,
};

/**
 * Creating files for each necessary export models (JSON, CSS, SCSS, TS)
 *
 * @param colorObject
 * @param filePath
 */

export const createColorPaletteCSS = (colorObject: ColorTokens, filePath: string) => {
  const numberColorTokens: number = Object.keys(colorObject).length;
  let colorsString = '';
  Object.keys(colorObject).forEach((color) => {
    colorsString += `--color-${colorObject[color].colorType}-${colorObject[color].colorLevel}: rgba(${colorObject[color].r},${colorObject[color].g},${colorObject[color].b},${colorObject[color].a});\n`;
  });
  const textContent = `:root {${colorsString}}`;
  fs.appendFile(
    filePath,
    prettier.format(textContent, { ...prettierConfig, parser: 'css' }),
    (err) => {
      if (err) {
        logError(chalk.red(`CSS color tokens failed ❌ `));
        throw err;
      }
      log(chalk.green(`${numberColorTokens} new color tokens CSS added ✅`));
    }
  );
};

export const createColorPaletteSCSS = (colorObject: ColorTokens, filePath: string) => {
  const numberColorToken: number = Object.keys(colorObject).length;

  let allColorsString = '';
  Object.keys(colorObject).forEach((color) => {
    allColorsString += `$color-${colorObject[color].colorType}-${colorObject[color].colorLevel}: rgba(${colorObject[color].r},${colorObject[color].g},${colorObject[color].b},${colorObject[color].a});\n`;
  });
  const textContent = `${allColorsString}`;
  fs.appendFile(
    filePath,
    prettier.format(textContent, { ...prettierConfig, parser: 'scss' }),
    (err) => {
      if (err) {
        logError(chalk.red(`SCSS color tokens failed ❌ `));
        throw err;
      }

      log(chalk.green(`${numberColorToken} new color tokens SCSS added ✅`));
    }
  );
};

export const createColorPaletteTS = (colorObject: ColorTokens, filePath: string) => {
  const numberColorTokens: number = Object.keys(colorObject).length;
  const colorsKeys = Object.keys(colorObject).map((color) => {
    return `
    '${color}': {
      id: '${colorObject[color].id}',
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

  fs.appendFile(
    filePath,
    prettier.format(textContent, { ...prettierConfig, parser: 'typescript' }),
    (err) => {
      if (err) {
        logError(chalk.red(`TS color tokens failed ❌ `));
        throw err;
      }
      log(chalk.green(`${numberColorTokens} new color tokens TS added ✅`));
    }
  );
};

export const createColorPaletteJSON = (colorObject: ColorTokens, filePath: string) => {
  const numberColorTokens: number = Object.keys(colorObject).length;
  const textContent = JSON.stringify(colorObject, null, 2);

  fs.appendFile(
    filePath,
    prettier.format(textContent, { ...prettierConfig, parser: 'json' }),
    (err) => {
      if (err) {
        logError(chalk.red(`JSON color tokens failed ❌ `));
        throw err;
      }
      log(chalk.green(`${numberColorTokens} new color tokens JSON added ✅`));
    }
  );
};
