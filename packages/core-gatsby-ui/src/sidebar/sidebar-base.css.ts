import { globalStyle, style } from '@vanilla-extract/css';

import { colorVars, layoutCSS, layoutVars, sizeVars } from '@newrade/core-react-ui/theme';

/**
 *
 * Modes
 *
 */

export const sticky = style({
  position: 'sticky',
  top: sizeVars.x4,
  marginTop: sizeVars.x4,
  marginBottom: 0,

  display: 'none',
  alignItems: 'stretch',
  width: '100%',
  gridTemplateRows: '1fr',
  maxHeight: `calc(100vh - ${sizeVars.x4})`,

  color: colorVars.colorIntents.primaryText,

  zIndex: layoutVars.zIndex.sideBarDesktop,

  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'grid',
    },
  },
});

export const floating = style({
  position: 'fixed',
  top: 0,

  display: 'grid',
  alignItems: 'center',
  width: '100%',
  maxHeight: `calc(100vh)`,

  color: colorVars.colorIntents.primaryText,
  boxShadow: `rgba(33, 33, 33, 0.15) 0px 1px 2px`,

  zIndex: layoutCSS.zIndex.sideBarDesktop,
});

globalStyle(`${floating} *`, {
  userSelect: 'none',
});

export const hanging = style({
  position: 'fixed',
  left: `max(${layoutCSS.var.contentMargins}, calc(50% - ${layoutCSS.var.sidebarWidth} - ${layoutCSS.var.contentWidth.desktopDocsMaxWidth} / 2 - ${sizeVars.x4}))`,
  bottom: 0,
  marginTop: sizeVars.x3,
  marginBottom: sizeVars.x3,

  width: layoutCSS.var.sidebarWidth,
  top: layoutCSS.var.navbarHeight,
  maxHeight: `calc(100vh)`,
  display: 'none',
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'inherit',
    },
  },
  zIndex: layoutCSS.zIndex.sideBarDesktop,
  overflowY: 'auto',
  overflowX: 'hidden',

  color: colorVars.colorIntents.primaryText,

  WebkitOverflowScrolling: `touch`,
});

globalStyle(`${hanging} *`, {
  userSelect: 'none',
});

/**
 *
 * Variants
 *
 */

export const primary = style({
  backgroundColor: colorVars.colorIntents.background0,
});

export const secondary = style({
  backgroundColor: colorVars.colorIntents.background1,
});

export const tertiary = style({
  backgroundColor: colorVars.colorIntents.background2,
});
