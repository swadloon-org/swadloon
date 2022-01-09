import { style } from '@vanilla-extract/css';

import { layoutCSS, sizeVars } from '@newrade/core-react-ui/theme';

export const wrapper = style({
  justifyContent: 'center',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: sizeVars.x5,
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: sizeVars.x6,
      gridTemplateAreas: `". title title title title messages messages messages messages messages . ."`,
    },
  },
});

export const gridTitle = style({
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      gridArea: 'title',
    },
  },
});

export const gridMessages = style({
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      gridArea: 'messages',
    },
  },
});
