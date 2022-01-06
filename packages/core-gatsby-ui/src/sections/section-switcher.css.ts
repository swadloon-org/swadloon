import { style } from '@vanilla-extract/css';

import { layoutCSS } from '@newrade/core-react-ui/theme';

export const left = style({
  width: `100%`,
  maxWidth: '100%',
  justifySelf: 'flex-end',
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      maxWidth: '80ch',
    },
  },
});

export const right = style({
  width: `100%`,
  maxWidth: '100%',
  justifySelf: 'flex-start',
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      maxWidth: '80ch',
    },
  },
});
