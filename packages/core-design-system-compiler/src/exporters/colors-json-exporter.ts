import { ColorsExporter } from './colors-exporter.api';

export const exportJSONColorTokens: ColorsExporter = (colorObject, options) => {
  const textContent = JSON.stringify(colorObject, null, 2);

  return textContent;
};
