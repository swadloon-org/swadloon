import chalk from 'chalk';
import debug from 'debug';
import * as fs from 'fs';
import * as prettier from 'prettier';
import { ColorTokens } from './figma-colors.model';

const log = debug('newrade:core-figma-extractor');
const logError = log.extend('error');
/**
 * Creating files for each necessary export models (JSON, CSS, SCSS, TS)
 *
 * @param colorObject
 * @param filePath
 */

export const createColorPaletteSCSS = (colorObject: ColorTokens, filePath: string) => {
  const numberColorToken: number = Object.keys(colorObject).length;

  let allColorsString = '';
  Object.keys(colorObject).forEach((color) => {
    allColorsString += `$color-${colorObject[color].colorType}-${colorObject[color].colorLevel}: rgba(${colorObject[color].r}${colorObject[color].g}${colorObject[color].b}${colorObject[color].a});\n`;
  });

  fs.appendFile(filePath, `${allColorsString}`, (err) => {
    if (err) {
      logError(chalk.red(`SCSS color tokens failed ❌ `));
      throw err;
    }

    log(chalk.green(`${numberColorToken} new color tokens SCSS added ✅`));
  });

  const fileContent = fs.readFileSync(filePath, 'utf-8');

  fs.writeFileSync(
    filePath,
    `${prettier.format(fileContent, {
      parser: 'scss',
      singleQuote: true,
      tabWidth: 2,
    })}`
  );
};

export const createColorPaletteCSS = (colorObject: ColorTokens, filePath: string) => {
  const numberColorTokens: number = Object.keys(colorObject).length;
  let colorsString = '';
  Object.keys(colorObject).forEach((color) => {
    colorsString += `--color-${colorObject[color].colorType}-${colorObject[color].colorLevel}: rgba(${colorObject[color].r}${colorObject[color].g}${colorObject[color].b}${colorObject[color].a});\n`;
  });
  fs.appendFile(filePath, `:root  { ${colorsString} }`, (err) => {
    if (err) {
      logError(chalk.red(`CSS color tokens failed ❌ `));
      throw err;
    }
    log(chalk.green(`${numberColorTokens} new color tokens CSS added ✅`));
  });

  const fileContent = fs.readFileSync(filePath, 'utf-8');

  fs.writeFileSync(
    filePath,
    `${prettier.format(fileContent, {
      parser: 'css',
      singleQuote: true,
      tabWidth: 2,
    })}`
  );
};

export const createColorPaletteTS = (colorObject: ColorTokens, filePath: string) => {
  const numberColorTokens: number = Object.keys(colorObject).length;
  const colorsKeys = Object.keys(colorObject).map((color) => {
    return `'${color}': {
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

  fs.appendFile(filePath, `import { ColorTokens } from '@newrade/core-figma-extractor/src';\n ${colors}`, (err) => {
    if (err) {
      logError(chalk.red(`TS color tokens failed ❌ `));
      throw err;
    }
    log(chalk.green(`${numberColorTokens} new color tokens TS added ✅`));
  });
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  fs.writeFileSync(
    filePath,
    `${prettier.format(fileContent, {
      parser: 'typescript',
      singleQuote: true,
      tabWidth: 2,
    })}`
  );
};

export const createColorPaletteJSON = (colorObject: ColorTokens, filePath: string) => {
  const numberColorTokens: number = Object.keys(colorObject).length;
  fs.appendFile(filePath, `${JSON.stringify(colorObject, null, 2)}`, (err) => {
    if (err) {
      logError(chalk.red(`JSON color tokens failed ❌ `));
      throw err;
    }
    log(chalk.green(`${numberColorTokens} new color tokens JSON added ✅`));
  });

  const fileContent = fs.readFileSync(filePath, 'utf-8');

  fs.writeFileSync(
    filePath,
    `${prettier.format(fileContent, {
      parser: 'json5',
      requirePragma: true,
    })}`
  );
};
