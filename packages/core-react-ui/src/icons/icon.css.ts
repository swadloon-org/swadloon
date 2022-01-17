import { style } from '@vanilla-extract/css';

import { layoutCSS } from '../theme';

const iconSize = `1.5em`;
const iconPadding = `3em`;

/**
 * Base
 */
export const base = style({
  ':focus': {
    outline: 'none',
  },
});

export const small = style({
  height: cssTheme.iconography.sizes.mobile.small,
  width: cssTheme.iconography.sizes.mobile.small,
  '@media': {
    [layoutCSS.media.tablet]: {
      height: cssTheme.iconography.sizes.tablet.small,
      width: cssTheme.iconography.sizes.tablet.small,
    },
    [layoutCSS.media.desktopSmall]: {
      height: cssTheme.iconography.sizes.desktop.small,
      width: cssTheme.iconography.sizes.desktop.small,
    },
  },
});

export const medium = style({
  height: cssTheme.iconography.sizes.mobile.medium,
  width: cssTheme.iconography.sizes.mobile.medium,
  '@media': {
    [layoutCSS.media.tablet]: {
      height: cssTheme.iconography.sizes.tablet.medium,
      width: cssTheme.iconography.sizes.tablet.medium,
    },
    [layoutCSS.media.desktopSmall]: {
      height: cssTheme.iconography.sizes.desktop.medium,
      width: cssTheme.iconography.sizes.desktop.medium,
    },
  },
});

export const large = style({
  height: cssTheme.iconography.sizes.mobile.large,
  width: cssTheme.iconography.sizes.mobile.large,
  '@media': {
    [layoutCSS.media.tablet]: {
      height: cssTheme.iconography.sizes.tablet.large,
      width: cssTheme.iconography.sizes.tablet.large,
    },
    [layoutCSS.media.desktopSmall]: {
      height: cssTheme.iconography.sizes.desktop.large,
      width: cssTheme.iconography.sizes.desktop.large,
    },
  },
});
