import { style } from '@vanilla-extract/css';

import { layoutCSS } from '../default-theme/src/theme';

export const base = style({
  display: 'grid',
  width: `100%`,
  gridTemplateColumns: '1fr',
  /**
   * we want Stack's childs to take the minimum space (their content size)
   */
  gridAutoRows: 'min-content',
  gap: `var(--mobile-gap, 0px)` as string,
  '@media': {
    [layoutCSS.media.tablet]: { gap: `var(--tablet-gap, 0px)` as string },
    [layoutCSS.media.desktopSmall]: { gap: `var(--desktop-gap, 0px)` as string },
  },
});
