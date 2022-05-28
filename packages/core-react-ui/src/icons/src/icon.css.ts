import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { iconographyVars, layoutCSS } from '../default-theme/src/theme';

export const base = style({
  ':focus': {
    outline: 'none',
  },
});

export const variants = recipe({
  variants: {
    size: {
      large: {
        height: iconographyVars.sizes.mobile.large,
        width: iconographyVars.sizes.mobile.large,
        '@media': {
          [layoutCSS.media.tablet]: {
            height: iconographyVars.sizes.tablet.large,
            width: iconographyVars.sizes.tablet.large,
          },
          [layoutCSS.media.desktopSmall]: {
            height: iconographyVars.sizes.desktop.large,
            width: iconographyVars.sizes.desktop.large,
          },
        },
      },
      medium: {
        height: iconographyVars.sizes.mobile.medium,
        width: iconographyVars.sizes.mobile.medium,
        '@media': {
          [layoutCSS.media.tablet]: {
            height: iconographyVars.sizes.tablet.medium,
            width: iconographyVars.sizes.tablet.medium,
          },
          [layoutCSS.media.desktopSmall]: {
            height: iconographyVars.sizes.desktop.medium,
            width: iconographyVars.sizes.desktop.medium,
          },
        },
      },
      small: {
        height: iconographyVars.sizes.mobile.small,
        width: iconographyVars.sizes.mobile.small,
        '@media': {
          [layoutCSS.media.tablet]: {
            height: iconographyVars.sizes.tablet.small,
            width: iconographyVars.sizes.tablet.small,
          },
          [layoutCSS.media.desktopSmall]: {
            height: iconographyVars.sizes.desktop.small,
            width: iconographyVars.sizes.desktop.small,
          },
        },
      },
    },
  },
});
