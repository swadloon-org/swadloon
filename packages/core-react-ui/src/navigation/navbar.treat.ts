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
    boxShadow: `0px 2px 6px rgba(0, 0, 0, 0.25)`,

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
    height: `100%`,
    fill: cssTheme.colors.colorIntents.primary,
  })),
  logoDesktop: style(({ cssTheme, theme }: Theme) => ({
    height: `100%`,
    fill: cssTheme.colors.colorIntents.primary,
  })),
  logoWrapper: style(({ cssTheme, theme }: Theme) => ({
    height: cssTheme.layout.var.navbarHeight,
  })),
};
