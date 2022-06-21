import { style } from '@vanilla-extract/css';

import { layoutCSS, sizeVars } from '@newrade/core-react-ui/theme';

export const base = style({
  display: 'none',

  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'grid',
    },
  },
});

export const wrapper = style({
  rowGap: sizeVars.x2,
  gridTemplateColumns: `1fr`,
  gridTemplateRows: `auto 1fr auto`,
  gridAutoFlow: 'row',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  justifyItems: 'flex-start',
  alignItems: 'flex-start',

  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'grid',
    },
  },

  // let the navigation scroll, not the whole component
  overflow: 'hidden',
});

export const header = style({
  display: 'grid',
  width: `100%`,
  gridTemplateColumns: `1fr`,
  gridAutoFlow: 'row',
  gap: sizeVars.x3,
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  justifyItems: 'flex-start',
  alignItems: 'center',
  padding: `${sizeVars.x0} 0px 0px 0px`,
});

export const navigationWrapper = style({
  display: 'flex',
  width: `100%`,
  height: '100%',
  overflowY: 'auto',
  overflowX: 'hidden',
  paddingBottom: sizeVars.x5,
});

export const navigation = style({
  display: 'grid',
  width: `100%`,
  gap: 0,
  gridTemplateColumns: `1fr`,
  gridAutoFlow: 'row',
  height: 'min-content',
});

export const lang = style({});

export const footer = style({
  display: 'grid',
  width: `100%`,
  gap: sizeVars.x3,
  alignItems: 'center',
  padding: `0 0 0 0`,
});
