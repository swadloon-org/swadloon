import { style } from '@vanilla-extract/css';

import { layoutCSS, layoutVars } from '@newrade/core-react-ui/theme';

export const wrapper = style({
  width: `100%`,
});

export const gridSwitch = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  width: `100%`,

  '@media': {
    [layoutCSS.media.tablet]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [layoutCSS.media.desktopSmall]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
});

export const leftBlock = style({
  position: 'relative',
});

export const leftInnerBlock = style({
  maxWidth: `calc(${layoutVars.contentWidth.desktopMaxWidth} / 2)`,
  marginLeft: 'auto',
});

export const rightBlock = style({
  position: 'relative',
});

export const rightInnerBlock = style({
  maxWidth: `calc(${layoutVars.contentWidth.desktopMaxWidth} / 2)`,
});
