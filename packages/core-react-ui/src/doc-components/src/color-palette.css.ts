import { style } from '@vanilla-extract/css';

import { layoutCSS } from '../theme.js';

export const wrapper = style({
  width: `100%`,
  '@media': {
    [layoutCSS.media.tablet]: {
      // gridTemplateColumns: `repeat(auto-fit, minmax(163px, 1fr))`,
      // gridTemplateColumns: `repeat(3, 1fr)`,
    },
    [layoutCSS.media.desktopSmall]: {},
  },
});
