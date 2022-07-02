import { formatOutput } from '../utilities/formatting.utilities.js';
import { sortColorNames } from '../utilities/sorting.utilities.js';

import { ColorsExporter } from './colors-exporter.api.js';

export const exportTSColorTokens: ColorsExporter = (colorTokens, options) => {
  const colorNames = Object.keys(colorTokens);
  const sortedColorNames = sortColorNames(colorNames);

  const colorsKeys = sortedColorNames.map((colorName) => {
    return `
    ${colorName}: {
      id: '${colorTokens[colorName].id}',
      colorNamespace: '${colorTokens[colorName].colorNamespace}',
      colorTheme: '${colorTokens[colorName].colorTheme}',
      colorType: '${colorTokens[colorName].colorType}',
      colorLevel: '${colorTokens[colorName].colorLevel}',
      r: ${colorTokens[colorName].r},
      g: ${colorTokens[colorName].g},
      b: ${colorTokens[colorName].b},
      a: ${colorTokens[colorName].a}
    }`;
  });

  const colors = `export const colors: ColorTokens = { ${colorsKeys} }`;
  const textContent = `import { ColorTokens } from '@newrade/core-design-system-compiler';\n ${colors}`;

  return formatOutput(textContent, { parser: 'typescript' });
};
