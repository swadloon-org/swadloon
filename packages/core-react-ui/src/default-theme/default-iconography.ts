import { Iconography, VIEWPORT } from '@newrade/core-design-system';

export const defaultIconography: Iconography = {
  sizes: {
    [VIEWPORT.desktop]: {
      small: 12,
      medium: 16,
      large: 24,
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
