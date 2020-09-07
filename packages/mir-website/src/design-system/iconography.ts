import { Iconography, VIEWPORT, ICON_SIZE } from 'core-design-system';

import { sizingStepMobile, sizingStepDesktop } from './sizing';

export const iconography: Iconography = {
  sizes: {
    [VIEWPORT.mobile]: {
      [ICON_SIZE.large]: sizingStepMobile.x4,
      [ICON_SIZE.medium]: sizingStepMobile.x3,
      [ICON_SIZE.small]: sizingStepMobile.x2,
    },
    [VIEWPORT.tablet]: {
      [ICON_SIZE.large]: sizingStepDesktop.x3,
      [ICON_SIZE.medium]: sizingStepDesktop.x2,
      [ICON_SIZE.small]: sizingStepDesktop.x1,
    },
    [VIEWPORT.desktop]: {
      [ICON_SIZE.large]: sizingStepDesktop.x3,
      [ICON_SIZE.medium]: sizingStepDesktop.x2,
      [ICON_SIZE.small]: sizingStepDesktop.x1,
    },
  },
};
