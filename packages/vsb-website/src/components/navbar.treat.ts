import { getCSSColor, Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const wrapper = style(({ cssTheme, theme }: Theme) => ({
  position: 'fixed',
  top: 0,
  width: '100%',

  backgroundColor: getCSSColor({ h: 0, s: 0, l: 13, a: 15 }),
  zIndex: 100,
}));

export const mobileMenu = style(({ cssTheme, theme }: Theme) => ({
  display: 'inherit',
  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'none',
    },
  },
}));

export const desktopMenu = style(({ cssTheme, theme }: Theme) => ({
  display: 'none',
  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'inherit',
    },
  },
}));

export const icon = style(({ cssTheme, theme }: Theme) => ({
  height: 28,
  width: 28,
  color: cssTheme.colors.colorIntents.primaryReversed,
}));

export const logo = style(({ cssTheme, theme }: Theme) => ({
  height: `auto`,
  width: `157px`,
  fill: cssTheme.colors.colorIntents.primaryReversed,
}));
