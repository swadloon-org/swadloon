import { ColorsExporter } from './colors-exporter.api';

export const exportTSColorTokens: ColorsExporter = (colorObject, options) => {
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

  return textContent;
};
