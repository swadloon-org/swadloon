import { SizingType } from '../types.js';

import { VIEWPORT } from './layout.js';

/**
 * All icon available in the design system
 *
 * Please keep the order and comments same in `icon-metadatas.ts`
 */
export enum ICON {
  /**
   *
   * Navigation
   *
   */

  MENU = 'MENU',
  HOME = 'HOME',
  ELLIPSIS_VERTICAL = 'ELLIPSIS_VERTICAL',
  SEARCH = 'SEARCH',

  /**
   *
   * Layout
   *
   */

  LAYOUT_CENTER = 'LAYOUT_CENTER',
  LAYOUT_WIDE = 'LAYOUT_WIDE',

  /**
   *
   * Actions
   *
   */

  ADD = 'ADD',
  ADD_CIRCLE = 'ADD_CIRCLE',
  REMOVE = 'REMOVE',
  REMOVE_CIRCLE = 'REMOVE_CIRCLE',
  CLOSE = 'CLOSE',
  CLOSE_CIRCLE = 'CLOSE_CIRCLE',
  OPEN = 'OPEN',
  EXIT = 'EXIT',
  DOWNLOAD = 'DOWNLOAD',
  COPY = 'COPY',
  DUPLICATE = 'DUPLICATE',

  /**
   *
   * Application
   *
   */

  DOCUMENT = 'DOCUMENT',
  LAYERS = 'LAYERS',
  APPS = 'APPS',
  PRINT = 'PRINT',

  /**
   *
   * Checks
   *
   */

  CHECKBOX = 'CHECKBOX',
  CHECKMARK_CIRCLE = 'CHECKMARK_CIRCLE',
  CHECK = 'CHECK',

  /**
   *
   * Radio
   *
   */

  RADIO_ON = 'RADIO_ON',
  RADIO_OFF = 'RADIO_OFF',

  /**
   *
   * Time, dates and space
   *
   */

  CALENDAR = 'CALENDAR',
  LOCATION = 'LOCATION',

  /**
   *
   * Arrows
   *
   */

  ARROW_UP = 'ARROW_UP',
  ARROW_RIGHT = 'ARROW_RIGHT',
  ARROW_DOWN = 'ARROW_DOWN',
  ARROW_LEFT = 'ARROW_LEFT',
  ARROW_UP_CIRCLE = 'ARROW_UP_CIRCLE',
  ARROW_RIGHT_CIRCLE = 'ARROW_RIGHT_CIRCLE',
  ARROW_DOWN_CIRCLE = 'ARROW_DOWN_CIRCLE',
  ARROW_LEFT_CIRCLE = 'ARROW_LEFT_CIRCLE',

  /**
   *
   * Chevrons
   *
   */

  CHEVRON_UP = 'CHEVRON_UP',
  CHEVRON_RIGHT = 'CHEVRON_RIGHT',
  CHEVRON_DOWN = 'CHEVRON_DOWN',
  CHEVRON_LEFT = 'CHEVRON_LEFT',
  CHEVRON_UP_CIRCLE = 'CHEVRON_UP_CIRCLE',
  CHEVRON_RIGHT_CIRCLE = 'CHEVRON_RIGHT_CIRCLE',
  CHEVRON_DOWN_CIRCLE = 'CHEVRON_DOWN_CIRCLE',
  CHEVRON_LEFT_CIRCLE = 'CHEVRON_LEFT_CIRCLE',

  /**
   *
   * Carets
   *
   */

  CARET_UP = 'CARET_UP',
  CARET_RIGHT = 'CARET_RIGHT',
  CARET_DOWN = 'CARET_DOWN',
  CARET_LEFT = 'CARET_LEFT',
  CARET_UP_CIRCLE = 'CARET_UP_CIRCLE',
  CARET_RIGHT_CIRCLE = 'CARET_RIGHT_CIRCLE',
  CARET_DOWN_CIRCLE = 'CARET_DOWN_CIRCLE',
  CARET_LEFT_CIRCLE = 'CARET_LEFT_CIRCLE',

  /**
   *
   * Communication
   *
   */

  CALL = 'CALL',
  MAIL = 'MAIL',

  /**
   *
   * People
   *
   */

  PERSON_CIRCLE = 'PERSON_CIRCLE',

  /**
   *
   * Nature
   *
   */

  SUN = 'SUN',
  MOON = 'MOON',
  STAR = 'STAR',
  HALF_STAR = 'HALF_STAR',

  /**
   *
   * Media
   *
   */

  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
  STOP = 'STOP',
  REPLAY = 'REPLAY',

  /**
   *
   * Social Media
   *
   */

  LOGO_TWITTER = 'LOGO_TWITTER',
  LOGO_FACEBOOK = 'LOGO_FACEBOOK',
  LOGO_INSTAGRAM = 'LOGO_INSTAGRAM',
  LOGO_LINKEDIN = 'LOGO_LINKEDIN',
  LOGO_GITHUB = 'LOGO_GITHUB',
  LOGO_YOUTUBE = 'LOGO_YOUTUBE',
}

export enum ICON_SIZE {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export type IconSizes<Override extends undefined | string = undefined> = {
  [key in ICON_SIZE]: SizingType<Override>;
};

export type Iconography<Override extends undefined | string = undefined> = {
  /**
   * Icon size for each viewport.
   */
  sizes: {
    [key in VIEWPORT]: IconSizes<Override>;
  };
};
