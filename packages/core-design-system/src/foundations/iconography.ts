import { SizingType } from '../types';
import { VIEWPORT } from './layout';

/**
 * Default icons and their filenames.
 * @example
 *    MENU = 'menu' would mean that a menu.svg icon exists in src/icons/
 */
export enum Icon {
  /**
   * Arrows
   */
  arrowUp = 'arrowUp',
  arrowRight = 'arrowRight',
  arrowDown = 'arrowDown',
  arrowLeft = 'arrowLeft',
  /**
   * Chevrons
   */
  chevronLeft = 'chevronLeft',
  /**
   * Essentials
   */
  menu = 'menu',
  /**
   * Checkboxes
   */
  checkboxBox = 'checkboxBox',
  check = 'check',
  /**
   * Radio
   */
  radio = 'radio',
  circle = 'circle',
}

export enum ICON_WEIGHT {
  NORMAL = 'normal',
  LIGHT = 'light',
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
