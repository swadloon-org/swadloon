import { kebab } from 'case';
import { formatOutput } from '../utilities/formatting.utilities';
import { sortColorNames } from '../utilities/sorting.utilities';
import { ColorsExporter } from './colors-exporter.api';

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
      kebab(colorNamespace),
      kebab(colorTheme),
      kebab(colorType),
      kebab(colorLevel),
    ]
      .filter((part) => !!part)
      .join('-');

    const colorCssVariableValue = `rbga(${colorR}, ${colorG}, ${colorB}, ${colorA})`;

    cssVariables += `${colorCssVariableDeclaration}: ${colorCssVariableValue};` + '\n';
  });
  const textContent = `:root {${cssVariables}}`;

  return formatOutput(textContent, { parser: 'css' });
};
