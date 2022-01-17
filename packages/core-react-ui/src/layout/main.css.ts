import { style } from '@vanilla-extract/css';

import { layoutCSS, sizeVars } from '../theme';

export const wrapper = style({
  width: `100%`,
  overflowX: 'hidden',
});

export const desktopSidebar = style({
  ['@media']: {
    [layoutCSS.media.desktopSmall]: {
      paddingLeft: `calc(${layoutCSS.var.sidebarWidth} + ${layoutCSS.var.contentMargins})`,
    },
  },
});

export const desktopAside = style({
  ['@media']: {
    [layoutCSS.media.desktopSmall]: {
      paddingRight: layoutCSS.var.asideWidth,
    },
  },
});

export const navbar = style({
  paddingTop: `calc(${layoutCSS.var.navbarHeight})`,
});

export const contentPadding = style({
  paddingTop: `calc(${layoutCSS.var.navbarHeight} + ${sizeVars.x6})`,
});

export const minHeight = style({
  // to prevent the main content from collapsing
  // it is also needed to reach elements that are located at the bottom of the screen
  minHeight: `105vh`,
});

export const fullHeight = style({
  minHeight: `100vh`,
});
