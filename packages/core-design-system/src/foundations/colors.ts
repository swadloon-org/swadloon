import { ColorIntents } from '..';
import { ColorGradients } from './color-gradients';
import { ColorsColors } from './colors-colors';

/**
 * Every color defined in the system.
 */
export interface Colors<Override extends undefined | string = undefined> {
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
  colors: ColorsColors<Override>;
  /**
   * Contextual use of certain colors (text, action, state, etc).
   */
  colorIntents: ColorIntents<Override>;

  gradients: ColorGradients<Override>;
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
