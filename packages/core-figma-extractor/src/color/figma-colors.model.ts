export type FigmaColor = {
  id: string | number;
  colorType: string;
  colorLevel: string;
  r: number;
  g: number;
  b: number;
  a: number;
};

export type ColorTokens = {
  [key: string]: FigmaColor;
};

export enum FILES_TYPE_LIST {
  CSS = '../../figma/figma-color.css',
  SCSS = '../../figma/figma-color.scss',
  JSON = '../../figma/figma-color.json',
  TS = '../../figma/figma-color.ts',
}
