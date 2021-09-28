import { style } from 'treat';
import { Theme } from '@newrade/core-react-ui';

export const base = style(({ theme, cssTheme }: Theme) => ({}));

export const content = style(({ theme, cssTheme }: Theme) => ({
  display: 'grid',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  columnGap: cssTheme.sizing.var.x6,
  rowGap: cssTheme.sizing.var.x5,
  gridTemplateColumns: `40px 1fr 40px`,
  gridTemplateAreas: '"button logo lang"',
  justifyItems: 'center',
  alignItems: 'center',
  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas: `
        "logo logo logo nav nav nav nav nav nav nav nav nav"
        `,
    },
  },
}));

export const button = style(({ theme, cssTheme }: Theme) => ({
  gridArea: 'button',

  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'none',
    },
  },
}));

export const lang = style(({ theme, cssTheme }: Theme) => ({
  gridArea: 'lang',

  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'none',
    },
  },
}));

export const langDesktop = style(({ theme, cssTheme }: Theme) => ({
  display: 'none',
  width: 20, // to avoid layout shift when switching language

  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'initial',
    },
  },
}));

export const logo = style(({ theme, cssTheme }: Theme) => ({
  height: `calc(0.55 * ${cssTheme.layout.var.navbarHeight})`,
  maxHeight: 45,
}));

export const logoWrapper = style(({ theme, cssTheme }: Theme) => ({
  gridArea: 'logo',
  display: 'initial',

  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'none',
    },
  },
}));

export const searchButton = style(({ theme, cssTheme }: Theme) => ({
  gridArea: 'button',

  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'none',
    },
  },
}));

export const logoDesktop = style(({ theme, cssTheme }: Theme) => ({
  height: `calc(0.45 * ${cssTheme.layout.var.navbarHeight})`,
  maxHeight: 50,
}));

export const logoDesktopWrapper = style(({ theme, cssTheme }: Theme) => ({
  gridArea: 'logo',
  display: 'none',
  justifySelf: 'flex-start',
  height: `100%`,

  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'grid',
    },
  },
}));

export const navLinksDesktop = style(({ theme, cssTheme }: Theme) => ({
  display: 'none',

  gridArea: 'nav',
  gap: cssTheme.sizing.var.x4,
  gridAutoFlow: 'column',
  justifySelf: 'flex-end',
  alignItems: 'center',

  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'grid',
    },
  },
}));
