import { formatNameNumberKebabCase, formatOutput } from '../utilities/formatting.utilities.js';
import { sortColorNames } from '../utilities/sorting.utilities.js';

import { ColorsExporter } from './colors-exporter.api.js';

/**
 * Convert FigmaColor objects into css variables text
 */
export const exportCssColorTokens: ColorsExporter = (colorTokens, options) => {
  let cssVariables = '';

  const colorNames = Object.keys(colorTokens);
  const sortedColorNames = sortColorNames(colorNames);

  sortedColorNames.forEach((colorName) => {
    const color = colorTokens[colorName];
    const colorNamespace = color.colorNamespace;
    const colorTheme = color.colorTheme;
    const colorType = color.colorType;
    const colorLevel = color.colorLevel;
    const colorR = color.r;
    const colorG = color.g;
    const colorB = color.b;
    const colorA = color.a;

    const colorCssVariableDeclaration = [
      `--color`,
      formatNameNumberKebabCase(colorNamespace),
      formatNameNumberKebabCase(colorTheme),
      formatNameNumberKebabCase(colorType),
      formatNameNumberKebabCase(colorLevel),
    ]
      .filter((part) => !!part)
      .join('-');

    const colorCssVariableValue = `rgba(${colorR}, ${colorG}, ${colorB}, ${colorA})`;

    cssVariables += `${colorCssVariableDeclaration}: ${colorCssVariableValue};` + '\n';
  });
  const textContent = `:root {${cssVariables}}`;

  return formatOutput(textContent, { parser: 'css' });
};
