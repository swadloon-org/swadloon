import { ICON, Iconography, VIEWPORT } from '@newrade/core-design-system';

export const defaultIconography: Iconography = {
  iconsFamily: 'FontAwesome',
  iconsWebsite: 'https://fontawesome.com/',
  icons: {
    [ICON.MENU]: {
      name: 'bars',
      weight: 'light',
    },
    [ICON.ARROW_UP]: {
      name: 'arrow-up',
      weight: 'light',
    },
    [ICON.ARROW_RIGHT]: {
      name: 'arrow-right',
      weight: 'light',
    },
    [ICON.ARROW_DOWN]: {
      name: 'arrow-bottom',
      weight: 'light',
    },
    [ICON.ARROW_LEFT]: {
      name: 'arrow-left',
      weight: 'light',
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
