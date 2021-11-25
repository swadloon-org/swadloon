import { style } from 'treat';

import { Theme } from '@newrade/core-react-ui';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'fixed',
    top: 0,
    width: '100%',
    height: cssTheme.layout.var.navbarHeight,
    maxHeight: cssTheme.layout.var.navbarHeight,
    color: cssTheme.colors.colorIntents.primaryText,

    backgroundColor: cssTheme.colors.colors.grey[900],

    zIndex: cssTheme.layout.zIndex.navBar,
  })),
  content: style(({ cssTheme, theme }: Theme) => ({
    height: `100%`,
    gridTemplateRows: '100%',
  })),
  mobileWrapper: style(({ cssTheme, theme }: Theme) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '100%',
    height: '100%',
  })),
  desktopMenu: style(({ cssTheme, theme }: Theme) => ({
    display: 'none',
    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        display: 'grid',
      },
    },
  })),
  mobileMenu: style(({ cssTheme, theme }: Theme) => ({
    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        display: 'none',
      },
    },
  })),

  icon: style(({ cssTheme, theme }: Theme) => ({
    height: 28,
    width: 28,
  })),
  logoMobile: style(({ cssTheme, theme }: Theme) => ({
    maxHeight: `24px`,
    height: `28px`,
    fill: 'white',
  })),
  logoDesktop: style(({ cssTheme, theme }: Theme) => ({
    height: `28px`,
    fill: 'white',
  })),
  logoWrapper: style(({ cssTheme, theme }: Theme) => ({
    height: cssTheme.layout.var.navbarHeight,
  })),
};
