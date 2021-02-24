import { camel } from 'case';
import chalk from 'chalk';
import debug from 'debug';
import { FileNodesResponse, FileStylesResponse, FullStyleMetadata } from 'figma-js';
import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';
import { outputColorFiles, regexName } from '../constants/figma-colors.constants';
import { fetchObjectById } from '../service/figma-api';
import { ColorTokens, FigmaColor } from './figma-colors.model';

const log = debug('newrade:core-figma-extractor');

export function extractFigmaColors(data: FileStylesResponse['meta']['styles']) {
  const dataToken: ColorTokens = {};

  const requests = data.map(async (key: FullStyleMetadata, index) => {
    try {
      if (key.style_type === 'FILL' && regexName.test(key.name)) {
        const result = await fetchObjectById(key.node_id);
        const colorStyle: FileNodesResponse = await result.json();

        const newColor = getFigmaColor(colorStyle, key.node_id);
        dataToken[`${newColor.colorType + newColor.colorLevel}`] = newColor;
        return dataToken;
      }
    } catch (error) {
      log(chalk.red(`${error}`));
    }
  });

  /**
   * Export all colors to CSS - JSON - SCSS - TS
   */
  return Promise.all(requests)
    .then((result) => {
      return dataToken;
    })
    .catch((error) => {
      log(chalk.red(`${error}`));
      return {};
    });
}

export function getFigmaColor(rawColor: any, key: string | number): FigmaColor {
  const nameNode: string[] = rawColor.nodes[key].document.name.split('/');

  const newFigmaColor: FigmaColor = {
    id: `${key}`,
    colorType: camel(nameNode[1]),
    colorLevel: nameNode[2],
    r: rawColor.nodes[key].document.fills[0].color['r'],
    g: rawColor.nodes[key].document.fills[0].color['g'],
    b: rawColor.nodes[key].document.fills[0].color['b'],
    a: rawColor.nodes[key].document.fills[0].color['a'],
  };

  return newFigmaColor;
}

export const createColorPaletteSCSS = (colorObject: ColorTokens, filePath: string) => {
  let allColorsString = '';
  Object.keys(colorObject).forEach((color) => {
    allColorsString += `$color-${colorObject[color].colorType}-${colorObject[color].colorLevel}: rgba(${colorObject[color].r}${colorObject[color].g}${colorObject[color].b}${colorObject[color].a});\n`;
  });

  fs.appendFile(filePath, `${allColorsString}`, (err) => {
    if (err) throw err;
    log(chalk.green(`New colors SCSS added`));
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
  let colorsString = '';
  Object.keys(colorObject).forEach((color) => {
    colorsString += `--color-${colorObject[color].colorType}-${colorObject[color].colorLevel}: rgba(${colorObject[color].r}${colorObject[color].g}${colorObject[color].b}${colorObject[color].a});\n`;
  });
  fs.appendFile(filePath, `:root  { ${colorsString} }`, (err) => {
    if (err) throw err;
    log(chalk.green(`New colors CSS added`));
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
    if (err) throw err;
    log(chalk.green(`New colors TS added`));
  });
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  fs.writeFileSync(
    path.join(__dirname, outputColorFiles.TS),
    `${prettier.format(fileContent, {
      parser: 'typescript',
      singleQuote: true,
      tabWidth: 2,
    })}`
  );
};

export const createColorPaletteJSON = (colorObject: ColorTokens, filePath: string) => {
  fs.appendFile(filePath, `${JSON.stringify(colorObject, null, 2)}`, (err) => {
    if (err) throw err;
    log(chalk.green(`New colors JSON added`));
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
