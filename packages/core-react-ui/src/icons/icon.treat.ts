import { style } from 'treat';
import { Theme } from '../design-system';

const iconSize = `1.5em`;
const iconPadding = `3em`;

/**
 * Base
 */
export const base = style(({ theme, cssTheme }: Theme) => ({
  display: 'block',
  ':focus': {
    outline: 'none',
  },
}));

export const small = style(({ theme, cssTheme }: Theme) => ({
  height: cssTheme.iconography.sizes.mobile.small,
  width: cssTheme.iconography.sizes.mobile.small,
  '@media': {
    [cssTheme.layout.media.tablet]: {
      height: cssTheme.iconography.sizes.tablet.small,
      width: cssTheme.iconography.sizes.tablet.small,
    },
    [cssTheme.layout.media.desktopSmall]: {
      height: cssTheme.iconography.sizes.desktop.small,
      width: cssTheme.iconography.sizes.desktop.small,
    },
  },
}));
