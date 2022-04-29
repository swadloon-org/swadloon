export type FigmaTextStyles = {
  [name: string]: FigmaTextStyles | TextStyle;
};
/**
 * Flat list of styles under a top level name (text style family, e.g. Desktop)
 */

export type FigmaTextStyleList = {
  [name: string]: TextStyle[];
};
