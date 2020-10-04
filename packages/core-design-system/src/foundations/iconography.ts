import { VIEWPORT } from './layout';
import { SizingStep } from './sizing';

/**
 * Default icons and their filenames.
 * @example
 *    MENU = 'menu' would mean that a menu.svg icon exists in src/icons/
 */
export enum ICON {
  MENU = 'menu',
  ARROW_TOP = 'arrow-top',
  ARROW_RIGHT = 'arrow-right',
  ARROW_BOTTOM = 'arrow-bottom',
  ARROW_LEFT = 'arrow-left',
}

export interface Icon {
  /**
   * filename of the icon's svg
   */
  name: string;
  /**
   * to control the stroke width on svg icons that supports it
   */
  weight?: string;
}

export enum ICON_SIZE {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export type IconSizes<SizingType = SizingStep> = { [key in keyof typeof ICON_SIZE]: SizingType };

export type Icons = { [key in keyof typeof ICON]: Icon } & { [key: string]: Icon };

export interface Iconography<SizingType = SizingStep> {
  /**
   * Icon size for each viewport.
   */
  sizes: {
    [key in keyof typeof VIEWPORT]: IconSizes<SizingType>;
  };
  /**
   * Default icon infos (name and optionally weight) along with
   * extra icons.
   */
  icons: Icons;
}
