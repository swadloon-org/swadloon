/**
 * Representation of a Figma color
 */
export type FigmaColor = {
  id: string | number;
  colorNamespace: string; // my-org
  colorTheme: string; // light
  colorType: string; // primary, secondary...
  colorLevel: string; // 100, 200, ...
  r: number;
  g: number;
  b: number;
  a: number;
};

/**
 * Raw / Unformatted color tokens
 */
export type ColorTokens = {
  [key: string]: FigmaColor;
};
