import { ColorPalette, ColorShades5, ColorShadesGrey } from '../primitives/color-palette';
import { ColorType } from '../types';

import { CodeMarkupType } from './colors-code';

/**
 * Token colors used in highlighted code
 */
export type CodeMarkupColors<Override extends undefined | string = undefined> = {
  [key in `code${keyof typeof CodeMarkupType}`]: ColorType<Override>;
};

/**
 * Code for each tokens and additional UI colors for the editor. Inspired by VSCode's theming  system.
 *
 * @see https://code.visualstudio.com/api/references/theme-color
 */
export type CodeColors<Override extends undefined | string = undefined> =
  CodeMarkupColors<Override> & {
    editorBackground: ColorType<Override>;
    editorForeground: ColorType<Override>;
    editorSelectionBackground: ColorType<Override>;
    editorHeaderBackground: ColorType<Override>;
    editorHeaderForeground: ColorType<Override>;
    editorHeaderTagBackground: ColorType<Override>;
    editorHeaderTagForeground: ColorType<Override>;
  };

export type ColorsColors<Override extends undefined | string = undefined> = {
  primary: ColorPalette<Override, ColorShades5, ColorType<Override>>;

  accent1: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  accent2: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  accent3: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  accent4: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  accent5: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  accent6: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  accent7: ColorPalette<Override, ColorShades5, ColorType<Override>>;

  current: string;
  transparent: ColorType<Override>;
  grey: ColorPalette<Override, ColorShadesGrey, ColorType<Override>>;

  effectTransparentLight: ColorType<Override>;
  effectTransparentMedium: ColorType<Override>;
  effectTransparentHeavy: ColorType<Override>;

  utilityNeutral: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  utilityGreen: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  utilityYellow: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  utilityRed: ColorPalette<Override, ColorShades5, ColorType<Override>>;

  code: CodeColors<Override>;
};
