import { ColorsExporter } from './colors-exporter.api.js';

export const exportJSONColorTokens: ColorsExporter = (colorObject, options) => {
  const textContent = JSON.stringify(colorObject, null, 2);

  return textContent;
};
