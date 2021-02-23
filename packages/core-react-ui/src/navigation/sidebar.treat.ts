import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';
import { getCSSColor } from '../utilities/colors.utilities';

export const styles = {
  /**
   * Sidebar
   */
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    WebkitOverflowScrolling: `touch`,
    position: 'fixed',
    top: cssTheme.layout.var.navbarHeight,
    maxHeight: `calc(100vh - ${cssTheme.layout.var.navbarHeight})`,
    left: 0,
    bottom: 0,
    width: `90vw`,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        width: cssTheme.layout.var.sidebarWidth,
      },
    },
    color: cssTheme.colors.colorIntents.primaryText,

    transform: 'translateX(-100%)', // initial state for SSR

    backgroundColor: getCSSColor({ h: 0, s: 0, l: 100, a: 100 }),
    boxShadow: `rgba(33, 33, 33, 0.15) 1px 1px 2px`,

    zIndex: cssTheme.layout.zIndex.sideBar,
    overflowY: 'scroll',
    overflowX: 'hidden',
  })),
  backdrop: style(({ cssTheme, theme }: Theme) => ({
    position: 'fixed',
    backgroundColor: `rgba(0,0,0,0.20)`,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: cssTheme.layout.zIndex.sideBar - 1,
  })),
  fullHeight: style(({ cssTheme, theme }: Theme) => ({
    top: 0,
    maxHeight: `calc(100vh)`,
  })),
  mobileOnly: style(({ cssTheme, theme }: Theme) => ({
    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        display: 'none',
      },
    },
  })),
  /**
   * Nav items
   */
  navItemsWrapper: style(({ cssTheme, theme }: Theme) => ({
    minHeight: `105vh`,
  })),
  navItem: style(({ cssTheme, theme }: Theme) => ({
    padding: cssTheme.sizing.var.x2,
  })),
};
