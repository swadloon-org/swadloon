import { COLOR_MODE, COLOR_SCHEME } from '../foundations/color-scheme';

/**
 * Most components can be rendered in different variants or level of importance
 *
 * For example, Primary buttons should be used for that have more importance than others.
 */
export enum Variant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

/**
 * Certain components (mainly layout component) have the ability to change the theme it applied to itself and to its children
 */
export type ColorModeProps = {
  /**
   * Apply a reversed theme on the component
   */
  colorMode?: COLOR_MODE | null;
  /**
   * Forces the color scheme of the component
   */
  colorScheme?: COLOR_SCHEME | null;
};
