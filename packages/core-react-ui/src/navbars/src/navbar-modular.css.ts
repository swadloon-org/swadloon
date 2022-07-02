import { style } from '@vanilla-extract/css';

import { layoutCSS } from '../default-theme/src/theme.js';

export const mobile = style({
  display: 'grid',
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'none',
    },
  },
});

export const desktop = style({
  display: 'none',
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'grid',
    },
  },
});
