import { style } from 'treat';
import { Theme } from '@newrade/core-react-ui/lib/design-system';

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

  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'initial',
    },
  },
}));

export const logo = style(({ theme, cssTheme }: Theme) => ({
  height: 24,
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

export const logoDesktop = style(({ theme, cssTheme }: Theme) => ({
  height: 28,
}));

export const logoDesktopWrapper = style(({ theme, cssTheme }: Theme) => ({
  gridArea: 'logo',
  display: 'none',
  justifySelf: 'flex-start',

  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'initial',
    },
  },
}));

export const navLinksDesktop = style(({ theme, cssTheme }: Theme) => ({
  justifySelf: 'flex-end',
  gridArea: 'nav',
  display: 'none',
  gap: cssTheme.sizing.var.x4,
  gridAutoFlow: 'column',
  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'grid',
    },
  },
}));
