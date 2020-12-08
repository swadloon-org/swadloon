import { VIEWPORT } from './layout';
import { SizingStep } from './sizing';

/**
 * Default icons and their filenames.
 * @example
 *    MENU = 'menu' would mean that a menu.svg icon exists in src/icons/
 */
export enum ICON {
  MENU = 'MENU',
  ARROW_UP = 'ARROW_UP',
  ARROW_RIGHT = 'ARROW_RIGHT',
  ARROW_DOWN = 'ARROW_DOWN',
  ARROW_LEFT = 'ARROW_LEFT',
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

export type Icons = { [key in keyof typeof ICON]: Icon };

export interface Iconography<SizingType = SizingStep> {
  /**
   * Name of the icon set.
   */
  iconsFamily: string;
  iconsWebsite: string;
  /**
   * Default icon infos (name and optionally weight) along with
   * extra icons.
   */
  icons: Icons;
  /**
   * Icon size for each viewport.
   */
  sizes: {
    [key in keyof typeof VIEWPORT]: IconSizes<SizingType>;
  };
}
