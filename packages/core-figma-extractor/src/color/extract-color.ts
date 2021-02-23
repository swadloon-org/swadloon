import { camel } from 'case';
import chalk from 'chalk';
import debug from 'debug';
import { FileNodesResponse, FileStylesResponse, FullStyleMetadata } from 'figma-js';
import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';
import { FILES_TYPE_COLORS, regexName } from '../constants/figma-colors.constants';
import { fetchObjectById } from '../service/figma-api';
import { ColorTokens, FigmaColor } from './figma-colors.model';

const log = debug('newrade:core-cli');

export function parseFigmaColors(data: FileStylesResponse['meta']['styles']) {
  const project = JSON.parse(fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf-8'));

  fs.mkdirSync(path.join(__dirname, '../../figma'), { recursive: true });

  /**
   * Writing all export files
   */
  Object.keys(FILES_TYPE_COLORS).forEach((fileType: string) => {
    fs.writeFileSync(
      //@ts-ignore
      path.join(__dirname, FILES_TYPE_COLORS[fileType]),
      `/** auto-generated by ${project.name} v${project.version} - ${new Date()
        .toLocaleDateString()
        .split('/')
        .join('-')} */\n`
    );
  });

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
  Promise.all(requests)
    .then((result) => {
      createColorPaletteCSS(dataToken);
      createColorPaletteSCSS(dataToken);
      createColorPaletteTS(dataToken);
      createColorPaletteJSON(dataToken);
    })
    .catch((error) => {
      log(chalk.red(`${error}`));
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

const createColorPaletteSCSS = (colorObject: ColorTokens) => {
  let allColorsString = '';
  Object.keys(colorObject).forEach((color) => {
    allColorsString += `$color-${colorObject[color].colorType}-${colorObject[color].colorLevel}: rgba(${colorObject[color].r}${colorObject[color].g}${colorObject[color].b}${colorObject[color].a});\n`;
  });

  fs.appendFile(path.join(__dirname, FILES_TYPE_COLORS.SCSS), `${allColorsString}`, (err) => {
    if (err) throw err;
    log(chalk.green(`New colors SCSS added`));
  });

  const fileContent = fs.readFileSync(path.join(__dirname, FILES_TYPE_COLORS.SCSS), 'utf-8');

  fs.writeFileSync(
    path.join(__dirname, FILES_TYPE_COLORS.SCSS),
    `${prettier.format(fileContent, {
      parser: 'scss',
      singleQuote: true,
      tabWidth: 2,
    })}`
  );
};

const createColorPaletteCSS = (colorObject: ColorTokens) => {
  let colorsString = '';
  Object.keys(colorObject).forEach((color) => {
    colorsString += `--color-${colorObject[color].colorType}-${colorObject[color].colorLevel}: rgba(${colorObject[color].r}${colorObject[color].g}${colorObject[color].b}${colorObject[color].a});\n`;
  });
  fs.appendFile(path.join(__dirname, FILES_TYPE_COLORS.CSS), `:root  { ${colorsString} }`, (err) => {
    if (err) throw err;
    log(chalk.green(`New colors CSS added`));
  });

  const fileContent = fs.readFileSync(path.join(__dirname, FILES_TYPE_COLORS.CSS), 'utf-8');

  fs.writeFileSync(
    path.join(__dirname, FILES_TYPE_COLORS.CSS),
    `${prettier.format(fileContent, {
      parser: 'css',
      singleQuote: true,
      tabWidth: 2,
    })}`
  );
};

const createColorPaletteTS = (colorObject: ColorTokens) => {
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

  fs.appendFile(
    path.join(__dirname, FILES_TYPE_COLORS.TS),
    `import { ColorTokens } from '@newrade/core-figma-extractor/src';\n ${colors}`,
    (err) => {
      if (err) throw err;
      log(chalk.green(`New colors TS added`));
    }
  );
  const fileContent = fs.readFileSync(path.join(__dirname, FILES_TYPE_COLORS.TS), 'utf-8');

  fs.writeFileSync(
    path.join(__dirname, FILES_TYPE_COLORS.TS),
    `${prettier.format(fileContent, {
      parser: 'typescript',
      singleQuote: true,
      tabWidth: 2,
    })}`
  );
};

const createColorPaletteJSON = (colorObject: ColorTokens) => {
  fs.appendFile(path.join(__dirname, FILES_TYPE_COLORS.JSON), `${JSON.stringify(colorObject, null, 2)}`, (err) => {
    if (err) throw err;
    log(chalk.green(`New colors JSON added`));
  });

  const fileContent = fs.readFileSync(path.join(__dirname, FILES_TYPE_COLORS.JSON), 'utf-8');

  fs.writeFileSync(
    path.join(__dirname, FILES_TYPE_COLORS.JSON),
    `${prettier.format(fileContent, {
      parser: 'json5',
      requirePragma: true,
    })}`
  );
};
