import { style } from '@vanilla-extract/css';

import { colorVars, layoutCSS, layoutVars, sizeVars } from '@newrade/core-react-ui/theme';

export const wrapper = style({
  position: 'sticky',
  top: sizeVars.x4,

  width: layoutVars.asideWidth,
  marginTop: sizeVars.x4,
  marginBottom: sizeVars.x3,

  display: 'none',
  visibility: 'hidden',

  backgroundColor: 'transparent',

  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'initial',
      visibility: 'visible',
    },
  },
});

export const linksWrapper = style({
  display: 'grid',
  paddingTop: '0.2em',
  paddingBottom: '0.3em',
  paddingLeft: '1.5em',
  overflow: 'hidden',
});

export const link = style({
  position: 'relative',
  userSelect: 'none',
  color: colorVars.colorIntents.primaryText,
  listStyle: 'none',
  textDecoration: 'none',
  lineHeight: `1.5em`,
  fontWeight: 600,
  selectors: {
    [`&:before`]: {
      height: 'var(--aside-before-height, 2em)',
      top: 'var(--aside-before-top, -1.7em)',

      content: '""',
      width: '.9em',
      position: 'absolute',
      left: '-1.5em',
      border: `1px solid ${colorVars.colors.grey[100]}`,
      borderWidth: '0 0 1px 1px',
    },
  },
});

export const linkSelected = style({
  fontWeight: 600,
  color: colorVars.colorIntents.primary,
});

export const linkAfter = style({
  selectors: {
    [`&:after`]: {
      height: '100%',
      top: 0,

      content: '""',
      width: '.9em',
      position: 'absolute',
      left: '-1.5em',
      borderLeft: `1px solid ${colorVars.colors.grey[100]}`,
      borderWidth: '0 0 1px 1px',
    },
  },
});

export const anchor = style({
  userSelect: 'none',
});
