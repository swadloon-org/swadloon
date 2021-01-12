import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';
import { getCSSColor } from '../utilities/colors.utilities';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'fixed',
    top: 0,
    width: '100%',
    height: cssTheme.layout.var.navbarHeight,
    color: cssTheme.colors.colorIntents.primaryText,

    backgroundColor: getCSSColor({ h: 0, s: 0, l: 100, a: 100 }),
    boxShadow: `rgba(33, 33, 33, 0.15) 0px 1px 2px`,

    zIndex: cssTheme.layout.zIndex.navBar,
    overflow: 'hidden',
  })),
  mobileMenu: style(({ cssTheme, theme }: Theme) => ({
    display: 'inherit',
    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        display: 'none',
      },
    },
  })),
  desktopMenu: style(({ cssTheme, theme }: Theme) => ({
    display: 'none',
    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        display: 'inherit',
      },
    },
  })),
  icon: style(({ cssTheme, theme }: Theme) => ({
    height: 28,
    width: 28,
  })),
  logoMobile: style(({ cssTheme, theme }: Theme) => ({
    maxHeight: `100%`,
    fill: cssTheme.colors.colorIntents.primary,
  })),
  logoDesktop: style(({ cssTheme, theme }: Theme) => ({
    maxHeight: `100%`,
    fill: cssTheme.colors.colorIntents.primary,
  })),
  logoWrapper: style(({ cssTheme, theme }: Theme) => ({
    height: cssTheme.layout.var.navbarHeight,
  })),
};
