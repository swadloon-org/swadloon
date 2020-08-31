import { Iconography, VIEWPORT, ICON_SIZE } from 'core-design-system';

import { sizingStepMobile, sizingStepDesktop } from './sizing';

export const iconography: Iconography = {
  sizes: {
    [VIEWPORT.MOBILE]: {
      [ICON_SIZE.large]: sizingStepMobile.X4,
      [ICON_SIZE.medium]: sizingStepMobile.X3,
      [ICON_SIZE.small]: sizingStepMobile.X2,
    },
    [VIEWPORT.TABLET]: {
      [ICON_SIZE.large]: sizingStepDesktop.X4,
      [ICON_SIZE.medium]: sizingStepDesktop.X3,
      [ICON_SIZE.small]: sizingStepDesktop.X2,
    },
    [VIEWPORT.DESKTOP]: {
      [ICON_SIZE.large]: sizingStepDesktop.X4,
      [ICON_SIZE.medium]: sizingStepDesktop.X3,
      [ICON_SIZE.small]: sizingStepDesktop.X2,
    },
  },
};
