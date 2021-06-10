import { SizingType } from '../types';
import { VIEWPORT } from './layout';

/**
 * Default icons and their filenames.
 * @example
 *    MENU = 'menu' would mean that a menu.svg icon exists in src/icons/
 */
export enum ICON {
  /**
   * Arrows
   */
  ARROW_UP = 'ARROW_UP',
  ARROW_RIGHT = 'ARROW_RIGHT',
  ARROW_DOWN = 'ARROW_DOWN',
  ARROW_LEFT = 'ARROW_LEFT',
  /**
   * Chevrons
   */
  CHEVRON_LEFT = 'CHEVRON_LEFT',
  /**
   * Essentials
   */
  MENU = 'MENU',
  /**
   * Checkboxes
   */
  CHECKBOX_BOX = 'CHECKBOX_BOX',
  CHECK = 'CHECK',
  /**
   * Radio
   */
  RADIO = 'RADIO',
  CIRCLE = 'CIRCLE',
}

export enum ICON_WEIGHT {
  NORMAL = 'NORMAL',
  LIGHT = 'LIGHT',
}

export enum ICON_SIZE {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export type IconSizes<Override extends undefined | string = undefined> = {
  [key in ICON_SIZE]: SizingType<Override>;
};

export interface Iconography<Override extends undefined | string = undefined> {
  /**
   * Icon size for each viewport.
   */
  sizes: {
    [key in VIEWPORT]: IconSizes<Override>;
  };
}
