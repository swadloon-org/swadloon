import { SizingType } from '../types';
import { VIEWPORT } from './layout';

/**
 * All icon available in the system
 */
export enum ICON {
  /**
   * Arrows
   */
  IO_ARROW_UP = 'IO_ARROW_UP',
  IO_ARROW_RIGHT = 'IO_ARROW_RIGHT',
  IO_ARROW_DOWN = 'IO_ARROW_DOWN',
  IO_ARROW_LEFT = 'IO_ARROW_LEFT',
  /**
   * Chevrons
   */
  IO_CHEVRON_UP = 'IO_CHEVRON_UP',
  IO_CHEVRON_RIGHT = 'IO_CHEVRON_RIGHT',
  IO_CHEVRON_DOWN = 'IO_CHEVRON_DOWN',
  IO_CHEVRON_LEFT = 'IO_CHEVRON_LEFT',
  /**
   * Caret
   */
  IO_CARET_UP = 'IO_CARET_UP',
  IO_CARET_RIGHT = 'IO_CARET_RIGHT',
  IO_CARET_DOWN = 'IO_CARET_DOWN',
  IO_CARET_LEFT = 'IO_CARET_LEFT',
  /**
   * Essentials
   */
  IO_MENU = 'IO_MENU',
  IO_ELLIPSIS_VERTICAL = 'IO_ELLIPSIS_VERTICAL',
  IO_APPS = 'IO_APPS',
  IO_ADD = 'IO_ADD',
  IO_REMOVE = 'IO_REMOVE',
  IO_CLOSE = 'IO_CLOSE',
  IO_SEARCH = 'IO_SEARCH',
  IO_CALENDAR = 'IO_CALENDAR',
  IO_CALL = 'IO_CALL',
  IO_PRINT = 'IO_PRINT',
  IO_LOCATION = 'IO_LOCATION',
  IO_MAIL = 'IO_MAIL',
  IO_HOME = 'IO_HOME',
  /**
   * Layout control
   */
  LAYOUT_CENTER = 'LAYOUT_CENTER',
  /**
   * Actions
   */
  IO_OPEN = 'IO_OPEN',
  IO_EXIT = 'IO_EXIT',
  IO_DOWNLOAD = 'IO_DOWNLOAD',
  IO_COPY = 'IO_COPY',
  IO_DUPLICATE = 'IO_DUPLICATE',
  IO_DOCUMENT = 'IO_DOCUMENT',
  IO_LAYERS = 'IO_LAYERS',
  /**
   * Check
   */
  IO_CHECKBOX = 'IO_CHECKBOX',
  IO_CHECKMARK_CIRCLE = 'IO_CHECKMARK_CIRCLE',
  IO_CHECK = 'IO_CHECK',
  /**
   * Circle
   */
  IO_ARROW_UP_CIRCLE = 'IO_ARROW_UP_CIRCLE',
  IO_ARROW_RIGHT_CIRCLE = 'IO_ARROW_RIGHT_CIRCLE',
  IO_ARROW_DOWN_CIRCLE = 'IO_ARROW_DOWN_CIRCLE',
  IO_ARROW_LEFT_CIRCLE = 'IO_ARROW_LEFT_CIRCLE',
  IO_CHEVRON_UP_CIRCLE = 'IO_CHEVRON_UP_CIRCLE',
  IO_CHEVRON_RIGHT_CIRCLE = 'IO_CHEVRON_RIGHT_CIRCLE',
  IO_CHEVRON_DOWN_CIRCLE = 'IO_CHEVRON_DOWN_CIRCLE',
  IO_CHEVRON_LEFT_CIRCLE = 'IO_CHEVRON_LEFT_CIRCLE',
  IO_CARET_UP_CIRCLE = 'IO_CARET_UP_CIRCLE',
  IO_CARET_RIGHT_CIRCLE = 'IO_CARET_RIGHT_CIRCLE',
  IO_CARET_DOWN_CIRCLE = 'IO_CARET_DOWN_CIRCLE',
  IO_CARET_LEFT_CIRCLE = 'IO_CARET_LEFT_CIRCLE',
  IO_CLOSE_CIRCLE = 'IO_CLOSE_CIRCLE',
  IO_PERSON_CIRCLE = 'IO_PERSON_CIRCLE',
  IO_ADD_CIRCLE = 'IO_ADD_CIRCLE',
  IO_REMOVE_CIRCLE = 'IO_REMOVE_CIRCLE',

  /**
   * Radio
   */
  IO_RADIO_ON = 'IO_RADIO_ON',
  IO_RADIO_OFF = 'IO_RADIO_OFF',
  /**
   * Social Media
   */
  IO_LOGO_TWITTER = 'IO_LOGO_TWITTER',
  IO_LOGO_FACEBOOK = 'IO_LOGO_FACEBOOK',
  IO_LOGO_INSTAGRAM = 'IO_LOGO_INSTAGRAM',
  IO_LOGO_LINKEDIN = 'IO_LOGO_LINKEDIN',
  IO_LOGO_YOUTUBE = 'IO_LOGO_YOUTUBE',
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
