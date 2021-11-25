import { ICON } from '@newrade/core-design-system';

import { IconMetadata } from './icons-provider';

enum ICON_CATEGORY {
  ARROWS = 'ARROWS',
  PEOPLE = 'PEOPLE',
  HANDS = 'HANDS',
  LOGO = 'LOGO',
}

export const iconMetadatas: IconMetadata<ICON> = {
  /**
   * Arrows
   */
  [ICON.ARROW_UP]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Arrow pointing upwards',
    tags: ['arrow', 'navigation', 'direction', 'up'],
  },
  [ICON.ARROW_RIGHT]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Arrow pointing forward',
    tags: ['arrow', 'navigation', 'direction'],
  },
  [ICON.ARROW_LEFT]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Arrow pointing backward',
    tags: ['arrow', 'navigation', 'direction'],
  },
  [ICON.ARROW_DOWN]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Arrow pointing downwards',
    tags: ['chevron', 'navigation', 'direction'],
  },
  [ICON.ARROW_UP_CIRCLE]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Arrow pointing upwards in a circle',
    tags: ['arrow', 'navigation', 'direction', 'circle'],
  },
  [ICON.ARROW_RIGHT_CIRCLE]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Arrow pointing forward in a circle',
    tags: ['arrow', 'navigation', 'direction', 'circle'],
  },
  [ICON.ARROW_LEFT_CIRCLE]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Arrow pointing backward in a circle',
    tags: ['arrow', 'navigation', 'direction', 'circle'],
  },
  [ICON.ARROW_DOWN_CIRCLE]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Arrow pointing downwards in a circle',
    tags: ['chevron', 'navigation', 'direction', 'circle'],
  },
  [ICON.CHEVRON_UP]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Chevron pointing upwards',
    tags: ['chevron', 'navigation', 'direction'],
  },
  [ICON.CHEVRON_RIGHT]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Chevron pointing forward',
    tags: ['chevron', 'navigation', 'direction'],
  },
  [ICON.CHEVRON_LEFT]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Chevron pointing backward',
    tags: ['chevron', 'navigation', 'direction'],
  },
  [ICON.CHEVRON_DOWN]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Chevron pointing downwards in a circle',
    tags: ['chevron', 'navigation', 'direction'],
  },
  [ICON.CARET_UP]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Caret pointing upwards',
    tags: ['caret', 'navigation', 'direction'],
  },
  [ICON.CARET_RIGHT]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Caret pointing forward',
    tags: ['caret', 'navigation', 'direction'],
  },
  [ICON.CARET_LEFT]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Chevron pointing backward',
    tags: ['caret', 'navigation', 'direction'],
  },
  [ICON.CARET_DOWN]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Chevron pointing downwards',
    tags: ['caret', 'navigation', 'direction'],
  },
  [ICON.CHEVRON_UP_CIRCLE]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Chevron pointing upwards in a circle',
    tags: ['chevron', 'navigation', 'direction', 'circle'],
  },
  [ICON.CHEVRON_RIGHT_CIRCLE]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Chevron pointing forward in a circle',
    tags: ['chevron', 'navigation', 'direction', 'circle'],
  },
  [ICON.CHEVRON_LEFT_CIRCLE]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Chevron pointing backward in a circle',
    tags: ['chevron', 'navigation', 'direction', 'circle'],
  },
  [ICON.CHEVRON_DOWN_CIRCLE]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Chevron pointing downwards in a circle',
    tags: ['chevron', 'navigation', 'direction', 'circle'],
  },
  [ICON.CARET_UP_CIRCLE]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Caret pointing upwards in a circle',
    tags: ['caret', 'navigation', 'direction', 'circle'],
  },
  [ICON.CARET_RIGHT_CIRCLE]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Caret pointing forward in a circle',
    tags: ['caret', 'navigation', 'direction', 'circle'],
  },
  [ICON.CARET_LEFT_CIRCLE]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Chevron pointing backward in a circle',
    tags: ['caret', 'navigation', 'direction', 'circle'],
  },
  [ICON.CARET_DOWN_CIRCLE]: {
    categories: [ICON_CATEGORY.ARROWS],
    description: 'Chevron pointing downwards in a circle',
    tags: ['caret', 'navigation', 'direction', 'circle'],
  },

  /**
   * Interface
   */
  [ICON.MENU]: {
    description: 'A toggle menu',
    tags: ['menu', 'hamburger'],
  },
  [ICON.ELLIPSIS_VERTICAL]: {
    description: 'Three dots vertically aligned',
    tags: ['action', 'dots', 'three dots', 'vertical', 'vertical dots'],
  },
  [ICON.APPS]: {
    description: '',
    tags: ['action'],
  },
  [ICON.ADD]: {
    description: 'Plus sign',
    tags: ['action', 'adding', 'add', 'plus'],
  },
  [ICON.REMOVE]: {
    description: 'Minus sign',
    tags: ['action', 'removing', 'remove', 'delete'],
  },
  [ICON.CLOSE]: {
    description: 'X sign',
    tags: ['action', 'closing', 'close', 'x'],
  },
  [ICON.SEARCH]: {
    description: 'Magnifying glass',
    tags: ['action', 'searching', 'search'],
  },
  [ICON.CALENDAR]: {
    description: 'Calendar',
    tags: ['information', 'calendar'],
  },
  [ICON.CALL]: {
    description: 'Phone',
    tags: ['information', 'phone', 'call'],
  },
  [ICON.PRINT]: {
    description: 'Printer',
    tags: ['information', 'print', 'fax'],
  },
  [ICON.LOCATION]: {
    description: 'Map indicator',
    tags: ['information', 'location', 'map'],
  },
  [ICON.MAIL]: {
    description: 'Envelop',
    tags: ['information', 'envelop', 'mail'],
  },
  [ICON.HOME]: {
    description: 'House',
    tags: ['information', 'home', 'house', 'adress'],
  },
  [ICON.OPEN]: {
    tags: ['action', 'opening', 'open'],
  },
  [ICON.EXIT]: {
    tags: ['action', 'exit', 'sign out'],
  },
  [ICON.DOWNLOAD]: {
    tags: ['action', 'download'],
  },
  [ICON.COPY]: {
    tags: ['action', 'copy'],
  },
  [ICON.DUPLICATE]: {
    tags: ['action', 'duplicate'],
  },
  [ICON.DOCUMENT]: {
    tags: ['document', 'file'],
  },
  [ICON.LAYERS]: {
    tags: ['layers'],
  },
  [ICON.CHECKMARK_CIRCLE]: {
    description: 'Checkmark in a circle',
    tags: ['action', 'checkmark', 'circle', 'checkmark circle'],
  },
  [ICON.CHECKBOX]: {
    description: 'Checkmark in a box',
    tags: ['action', 'opening', 'open'],
  },
  [ICON.CHECK]: {
    description: 'Check symbol only',
    tags: ['action', 'check', 'done'],
  },
  /**
   * Actions
   */
  [ICON.ADD_CIRCLE]: {
    description: 'Plus sign in a circle',
    tags: ['action', 'circle', 'add', 'plus'],
  },
  [ICON.REMOVE_CIRCLE]: {
    description: 'Minus sign in a circle',
    tags: ['action', 'circle', 'remove', 'minus', 'delete'],
  },
  [ICON.CLOSE_CIRCLE]: {
    description: 'A x sign in a circle',
    tags: ['action', 'closing', 'close', 'x'],
  },

  [ICON.RADIO_ON]: {
    description: 'Selected radio button',
    tags: ['action', 'option', 'radio on', 'radio', 'on'],
  },
  [ICON.RADIO_OFF]: {
    description: 'Unselected radio button',
    tags: ['action', 'option', 'radio off', 'radio', 'off'],
  },
  /**
   * People
   */
  [ICON.PERSON_CIRCLE]: {
    categories: [ICON_CATEGORY.PEOPLE],
    description: 'Person in a circle',
    tags: ['action', 'person', 'account', 'circle'],
  },
  /**
   * Layout
   */
  [ICON.LAYOUT_CENTER]: {
    description: 'Layout center icon',
    tags: ['layout', 'center', 'centered'],
  },
  [ICON.LAYOUT_WIDE]: {
    description: 'Layout wide icon',
    tags: ['layout', 'wide', 'full width'],
  },
  /**
   * Logos
   */
  [ICON.LOGO_TWITTER]: {
    categories: [ICON_CATEGORY.LOGO],
    description: 'Twitter Logo',
    tags: ['logo', 'twitter'],
  },
  [ICON.LOGO_FACEBOOK]: {
    categories: [ICON_CATEGORY.LOGO],
    description: 'Facebook Logo',
    tags: ['logo', 'facebook'],
  },
  [ICON.LOGO_INSTAGRAM]: {
    categories: [ICON_CATEGORY.LOGO],
    description: 'Instagram Logo',
    tags: ['logo', 'instagram'],
  },
  [ICON.LOGO_LINKEDIN]: {
    categories: [ICON_CATEGORY.LOGO],
    description: 'LinkedIn Logo',
    tags: ['logo', 'linked in'],
  },
  [ICON.LOGO_YOUTUBE]: {
    categories: [ICON_CATEGORY.LOGO],
    description: 'Youtube Logo',
    tags: ['logo', 'youtube'],
  },
};
