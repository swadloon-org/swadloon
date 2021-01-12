import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';
import { getCSSColor } from '../utilities/colors.utilities';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'fixed',
    top: cssTheme.layout.var.navbarHeight,
    left: 0,
    bottom: 0,
    width: cssTheme.layout.var.sidebarWidth,
    color: cssTheme.colors.colorIntents.primaryText,

    backgroundColor: getCSSColor({ h: 0, s: 0, l: 100, a: 100 }),
    boxShadow: `rgba(33, 33, 33, 0.15) 1px 1px 2px`,

    zIndex: cssTheme.layout.zIndex.sideBar,
    overflowY: 'scroll',
    overflowX: 'hidden',

    display: 'none',
    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        display: 'inherit',
      },
    },
  })),
  navItemsWrapper: style(({ cssTheme, theme }: Theme) => ({
    padding: `${cssTheme.sizing.var.x2}`,
  })),
  navItem: style(({ cssTheme, theme }: Theme) => ({
    padding: cssTheme.sizing.var.x2,
  })),
};
