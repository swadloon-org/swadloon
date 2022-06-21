import { style } from '@vanilla-extract/css';

import { colorVars, layoutCSS } from '../../default-theme/src/theme.js';
import { getCSSColorVar } from '../../utilities-iso/utilities-iso.js';

export const wrapper = style({
  position: 'fixed',
  top: 0,
  width: '100%',
  height: layoutCSS.var.navbarHeight,
  maxHeight: layoutCSS.var.navbarHeight,
  color: colorVars.colorIntents.primaryText,

  backgroundColor: getCSSColorVar({ h: 0, s: 0, l: 100, a: 100 }),
  boxShadow: `rgba(33, 33, 33, 0.15) 0px 1px 2px`,

  zIndex: layoutCSS.zIndex.navBar as any,
});

export const content = style({
  height: `100%`,
});

export const mobileWrapper = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  height: '100%',
});

export const desktopMenu = style({
  display: 'none',
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'grid',
    },
  },
});

export const mobileMenu = style({
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'none',
    },
  },
});

export const icon = style({
  height: 28,
  width: 28,
});

export const logoMobile = style({
  maxHeight: `100%`,
});

export const logoDesktop = style({
  maxHeight: `100%`,
});

export const logoWrapper = style({
  height: layoutCSS.var.navbarHeight,
  justifyContent: 'center',
});
