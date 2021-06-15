import { Iconography, VIEWPORT, IconSize } from '@newrade/core-design-system-old';

import { sizingStepMobile, sizingStepDesktop } from './sizing';

export const iconography: Iconography = {
  sizes: {
    [VIEWPORT.mobile]: {
      [IconSize.large]: sizingStepMobile.x4,
      [IconSize.medium]: sizingStepMobile.x3,
      [IconSize.small]: sizingStepMobile.x2,
    },
    [VIEWPORT.tablet]: {
      [IconSize.large]: sizingStepDesktop.x3,
      [IconSize.medium]: sizingStepDesktop.x2,
      [IconSize.small]: sizingStepDesktop.x1,
    },
    [VIEWPORT.desktop]: {
      [IconSize.large]: sizingStepDesktop.x3,
      [IconSize.medium]: sizingStepDesktop.x2,
      [IconSize.small]: sizingStepDesktop.x1,
    },
  },
};
