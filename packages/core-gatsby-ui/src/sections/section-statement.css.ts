import { style } from '@vanilla-extract/css';

import { layoutCSS } from '@newrade/core-react-ui/theme';

export const top = style({
  width: `100%`,
  maxWidth: '100%',
  justifySelf: 'flex-start',
  '@media': {
    [layoutCSS.media.tablet]: {
      maxWidth: '120ch',
    },
  },
});

export const left = style({
  width: `100%`,
  maxWidth: '100%',
  justifySelf: 'flex-start',
  '@media': {
    [layoutCSS.media.tablet]: {
      maxWidth: '80ch',
    },
  },
});

export const right = style({
  width: `100%`,
  maxWidth: '100%',
  justifySelf: 'flex-start',
  '@media': {
    [layoutCSS.media.tablet]: {
      maxWidth: '80ch',
    },
  },
});
