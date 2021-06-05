import { Iconography, ICON_STYLE, VIEWPORT } from '@newrade/core-design-system';

export const defaultIconography: Iconography = {
  style: ICON_STYLE.SOLID,
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
