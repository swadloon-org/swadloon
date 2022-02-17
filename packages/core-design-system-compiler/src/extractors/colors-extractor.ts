import path from 'path';

import { camel } from 'case';
import chalk from 'chalk';
import debug from 'debug';
import { FileNodesResponse, FileStylesResponse, FullStyleMetadata } from 'figma-js';

import { ExtractOptions } from '../compile';
import { ColorTokens, FigmaColor } from '../models/figma-colors.model';
import { fetchObjectById } from '../service/figma-api.service';
import { createExportJSONFile } from '../service/file.service';

const log = debug('nr:core-design-system-compiler:extract:color');
const logWarn = log.extend('warn');
const logError = log.extend('error');

export async function extractColorsFromFigmaStyles(
  data: FileStylesResponse['meta']['styles'],
  options: Required<ExtractOptions>
): Promise<ColorTokens> {
  const dataToken: ColorTokens = {};

  /**
   * Prepare styles to be fetched
   */

  const styleNodes = data
    .filter((styleMetadata) => styleMetadata.style_type === 'FILL')
    .reduce((previous, current) => {
      if (previous[current.node_id]) {
        logWarn(`got node_id: ${current.node_id} more than once, skipping`);
        return previous;
      }

      previous[current.node_id] = current;

      return previous;
    }, {} as { [nodeId: string]: FullStyleMetadata });

  const styleNodeIds = Object.keys(styleNodes);

  log(`found ${styleNodeIds.length} valid color styles`);

  log(`fetching styles objects...`);

  /**
   * Retrieve style objects and process them
   */

  const styleNodesReponses = await fetchObjectById(styleNodeIds);

  const styleObjects: FileNodesResponse = await styleNodesReponses.json();

  const figmaStyleObjectsFilePath = path.join(options.outputDir, 'figma-color-objects.json');
  log(`creating file: ${chalk.blueBright(figmaStyleObjectsFilePath)}`);

  createExportJSONFile({
    path: figmaStyleObjectsFilePath,
    data: JSON.stringify(styleObjects, null, 2),
  });

  const styleObjectIds = Object.keys(styleObjects.nodes) as (keyof FileNodesResponse['nodes'])[];

  log(`got ${styleObjectIds.length} color style objects`);

  styleObjectIds.forEach((id) => {
    const node = styleObjects.nodes[id];
    // skips style node of type FILL that don't have rgb colors, e.g. image styles
    const fillNodeColorR = (node?.document as any)?.fills?.[0]?.color?.['r'];
    if (!fillNodeColorR) {
      return;
    }
    const newColor = getFigmaColor(styleObjects.nodes[id], options);
    dataToken[getFormattedColorTokenName(newColor)] = newColor;
  });

  return dataToken;
}

export function getFormattedColorTokenName(color: FigmaColor): string {
  return camel(
    [color.colorNamespace, color.colorTheme, color.colorType, color.colorLevel].join(' ')
  );
}

export function getFigmaColor(
  node: Partial<Pick<FileNodesResponse, 'nodes'>['nodes'][0]>,
  options: Required<ExtractOptions>
): FigmaColor {
  const opacity = (node?.document as any)?.fills?.[0].opacity;

  const newFigmaColor: FigmaColor = {
    id: `${node?.document?.id}`,
    ...getFormattedColorNode(node?.document?.name, options),
    r: Math.round(255 * (node?.document as any)?.fills?.[0].color['r']),
    g: Math.round(255 * (node?.document as any)?.fills?.[0].color['g']),
    b: Math.round(255 * (node?.document as any)?.fills?.[0].color['b']),
    a:
      opacity !== undefined
        ? Math.round(100 * opacity) / 100
        : (node?.document as any)?.fills?.[0].color['a'],
  };

  log(
    `found color: ${newFigmaColor.colorNamespace} ${newFigmaColor.colorTheme} ${newFigmaColor.colorType} ${newFigmaColor.colorLevel}`
  );

  return newFigmaColor;
}

export function getFormattedColorNode(
  name: undefined | null | string,
  options: Required<ExtractOptions>
): Pick<FigmaColor, 'colorNamespace' | 'colorTheme' | 'colorType' | 'colorLevel'> {
  if (!name) {
    return {
      colorTheme: '',
      colorNamespace: options.outputColorNamespace,
      colorType: '',
      colorLevel: '',
    };
  }

  if (options.inputColorThemeNamespace) {
    const [rawColorTheme, rawColorType, ...rawColorLevel] = name.split(/\//) as (
      | string
      | undefined
    )[];

    const colorTheme = camel(rawColorTheme ? rawColorTheme.trim() : '');
    const colorType = camel(rawColorType ? rawColorType.trim() : '');
    const colorLevel = camel(rawColorLevel.join('').trim());

    return {
      colorNamespace: options.outputColorNamespace,
      colorTheme,
      colorType,
      colorLevel,
    };
  }

  const [rawColorType, ...rawColorLevel] = name.split(/\//) as (string | undefined)[];

  const colorType = camel(rawColorType ? rawColorType.trim() : '');
  const colorLevel = camel(rawColorLevel.join('').trim());

  return {
    colorNamespace: options.outputColorNamespace,
    colorTheme: '',
    colorType,
    colorLevel,
  };
}
