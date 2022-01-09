import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'fixed',
  top: 0,
  width: '100%',
  height: layoutCSS.var.navbarHeight,
  maxHeight: layoutCSS.var.navbarHeight,
  color: colorVars.colorIntents.primaryText,

  backgroundColor: colorVars.colors.grey[900],

  zIndex: layoutCSS.zIndex.navBar,
});

export const content = style({
  height: `100%`,
  gridTemplateRows: '100%',
});

export const mobileWrapper = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '100%',
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
  maxHeight: `24px`,
  height: `28px`,
  fill: 'white',
});

export const logoDesktop = style({
  height: `28px`,
  fill: 'white',
});

export const logoWrapper = style({
  height: layoutCSS.var.navbarHeight,
});
