import { ICON, Iconography, ICON_STYLE, VIEWPORT } from '@newrade/core-design-system';

export const defaultIconography: Iconography = {
  family: 'FontAwesome',
  style: ICON_STYLE.SOLID,
  website: 'https://fontawesome.com/',
  icons: {
    [ICON.CHECKBOX_BOX]: {
      name: 'CheckboxBox',
    },
    [ICON.CHECK]: {
      name: 'Check',
    },
    [ICON.RADIO]: {
      name: 'Radio',
    },
    [ICON.CIRCLE]: {
      name: 'Circle',
    },
    [ICON.MENU]: {
      name: 'bars',
    },
    [ICON.ARROW_UP]: {
      name: 'arrow-up',
    },
    [ICON.ARROW_RIGHT]: {
      name: 'arrow-right',
    },
    [ICON.ARROW_DOWN]: {
      name: 'arrow-bottom',
    },
    [ICON.ARROW_LEFT]: {
      name: 'arrow-left',
    },
  },
  sizes: {
    [VIEWPORT.desktop]: {
      small: 16,
      medium: 24,
      large: 48,
    },
    [VIEWPORT.tablet]: {
      small: 16,
      medium: 24,
      large: 48,
    },
    [VIEWPORT.mobile]: {
      small: 16,
      medium: 24,
      large: 48,
    },
  },
};
