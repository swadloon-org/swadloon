import { camel } from 'case';
import chalk from 'chalk';
import debug from 'debug';
import { FileNodesResponse, FileStylesResponse, FullStyleMetadata } from 'figma-js';
import { regexName } from '../constants/figma-colors.constants';
import { fetchObjectById } from '../service/figma-api';
import { ColorTokens, FigmaColor } from './figma-colors.model';

const log = debug('nr:core-figma-extractor');

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
    } catch (error: any) {
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
