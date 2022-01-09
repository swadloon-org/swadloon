import { style } from '@vanilla-extract/css';

/**
 * Sidebar
 */
export const wrapper = style({
  position: 'fixed',
  left: `max(${layoutCSS.var.contentMargins}, calc(50% - ${layoutCSS.var.sidebarWidth} - ${layoutCSS.var.contentWidth.desktopDocsMaxWidth} / 2 - ${sizeVars.x4}))`,
  bottom: 0,
  marginTop: sizeVars.x5,
  marginBottom: sizeVars.x5,
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
  overflowY: 'scroll',
  overflowX: 'hidden',

  color: colorVars.colorIntents.primaryText,
  borderRight: `1px solid ${colorVars.colors.grey[100]}`,

  WebkitOverflowScrolling: `touch`,
});

/**
 * Nav items
 */
export const content = style({
  minHeight: `105vh`,
});
