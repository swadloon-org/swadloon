import { ColorIntents } from '..';
import { Color } from '../primitives/color';
import { ColorPalette, ColorShades5, ColorShadesGrey } from '../primitives/color-palette';

/**
 * Every color defined in the system.
 */
export interface Colors<ColorType = Color> {
  /**
   * CSS variable name for each step.
   * @example `--color-primary-500`
   */
  varNames: ColorsVarNames;
  /**
   * CSS statement to access CSS variables
   * @example `var(--color-primary-500)`
   */
  var: ColorsVars;
  /**
   * Raw colors
   */
  colors: {
    primary: ColorPalette<ColorShades5, ColorType>;

    accent1: ColorPalette<ColorShades5, ColorType>;
    accent2: ColorPalette<ColorShades5, ColorType>;
    accent3: ColorPalette<ColorShades5, ColorType>;

    current: string;
    transparent: ColorType;
    grey: ColorPalette<ColorShadesGrey, ColorType>;

    effectTransparentLight: ColorType;
    effectTransparentMedium: ColorType;
    effectTransparentHeavy: ColorType;

    utilityGreen: ColorPalette<ColorShades5, ColorType>;
    utilityYellow: ColorPalette<ColorShades5, ColorType>;
    utilityRed: ColorPalette<ColorShades5, ColorType>;
  };
  /**
   * Contextual use of certain colors (text, action, state, etc).
   */
  colorIntents: ColorIntents<ColorType>;
}

/**
 * Contains CSS variable names for each sizing step
 * @example `--color-primary-500`
 */
export type ColorsVarNames = string[];

/**
 * Contains CSS statement to access CSS variables
 * @example `var(--color-primary-500)`
 */
export type ColorsVars = string[];
