import { style } from '@vanilla-extract/css';

import { layoutCSS, sizeVars } from '@newrade/core-react-ui/theme';

export const base = style({});

export const content = style({
  display: 'grid',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  columnGap: sizeVars.x6,
  rowGap: sizeVars.x5,
  gridTemplateColumns: `40px 1fr 40px`,
  gridTemplateAreas: '"button logo lang"',
  justifyItems: 'center',
  alignItems: 'center',
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas: `
        "logo logo logo nav nav nav nav nav nav nav nav nav"
        `,
    },
  },
});

export const button = style({
  gridArea: 'button',

  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'none !important',
    },
  },
});

export const lang = style({
  gridArea: 'lang',

  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'none !important',
    },
  },
});

export const langDesktop = style({
  display: 'none',
  width: 20, // to avoid layout shift when switching language

  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'initial !important',
    },
  },
});

export const logo = style({
  height: `calc(0.55 * ${layoutCSS.var.navbarHeight})`,
  maxHeight: 45,
});

export const logoWrapper = style({
  gridArea: 'logo',
  display: 'initial',

  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'none !important',
    },
  },
});

export const searchButton = style({
  gridArea: 'button',

  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'none',
    },
  },
});

export const logoDesktop = style({
  height: `calc(0.45 * ${layoutCSS.var.navbarHeight})`,
  maxHeight: 50,
});

export const logoDesktopWrapper = style({
  gridArea: 'logo',
  display: 'none',

  justifySelf: 'flex-start',
  height: `100%`,

  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'grid',
    },
  },
});

export const navLinksDesktop = style({
  display: 'none',

  gridArea: 'nav',
  gap: sizeVars.x4,
  gridAutoFlow: 'column',
  justifySelf: 'flex-end',
  alignItems: 'center',

  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'grid',
    },
  },
});
