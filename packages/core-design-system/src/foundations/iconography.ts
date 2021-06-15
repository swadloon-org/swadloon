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
  CHEVRON_UP = 'CHEVRON_UP',
  CHEVRON_RIGHT = 'CHEVRON_RIGHT',
  CHEVRON_DOWN = 'CHEVRON_DOWN',
  CHEVRON_LEFT = 'CHEVRON_LEFT',
  /**
   * Caret
   */
  CARET_UP = 'CARET_UP',
  CARET_RIGHT = 'CARET_RIGHT',
  CARET_DOWN = 'CARET_DOWN',
  CARET_LEFT = 'CARET_LEFT',
  /**
   * Essentials
   */
  MENU = 'MENU',
  ELLIPSIS_VERTICAL = 'ELLIPSIS_VERTICAL',
  APPS = 'APPS',
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  CLOSE = 'CLOSE',
  SEARCH = 'SEARCH',
  CALENDAR = 'CALENDAR',
  /**
   * Actions
   */
  OPEN = 'OPEN',
  EXIT = 'EXIT',
  DOWNLOAD = 'DOWNLOAD',
  COPY = 'COPY',
  DUPLICATE = 'DUPLICATE',
  DOCUMENT = 'DOCUMENT',
  LAYERS = 'LAYERS',
  /**
   * Check
   */
  CHECKBOX = 'CHECKBOX',
  CHECKMARK_CIRCLE = 'CHECKMARK_CIRCLE',
  CHECK = 'CHECK',
  /**
   * Radio
   */
  RADIO_ON = 'RADIO_ON',
  RADIO_OFF = 'RADIO_OFF',
  CIRCLE = 'CIRCLE',
  /**
   * Social Media Logo
   */
  LOGO_TWITTER = 'LOGO_TWITTER',
  LOGO_FACEBOOK = 'LOGO_FACEBOOK',
  LOGO_INSTAGRAM = 'LOGO_INSTAGRAM',
  LOGO_LINKEDIN = 'LOGO_LINKEDIN',
  LOGO_YOUTUBE = 'LOGO_YOUTUBE',
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
