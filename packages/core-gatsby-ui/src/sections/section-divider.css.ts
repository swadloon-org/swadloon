import { style } from '@vanilla-extract/css';

import { layoutCSS, sizeVars } from '@newrade/core-react-ui/theme';

export const left = style({
  width: `100%`,
  padding: `${sizeVars.x7} ${layoutCSS.var.contentMargins}`,
  maxWidth: '100%',
  justifySelf: 'flex-end',
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      maxWidth: '80ch',
      padding: `${sizeVars.x7} ${layoutCSS.var.contentMargins}`,
    },
  },
});

export const right = style({
  width: `100%`,
  height: `100%`,
  minHeight: `50vh`,
  maxWidth: '100%',
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      width: '50vw',
    },
  },
});
