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
    width: `100vw`, // TODO: add an option to not cover the whole viewport
    '@media': {
      [cssTheme.layout.media.tablet]: {
        width: cssTheme.layout.var.sidebarWidth,
      },
    },
    color: cssTheme.colors.colorIntents.primaryText,

    backgroundColor: getCSSColor({ h: 0, s: 0, l: 100, a: 100 }),
    boxShadow: `rgba(33, 33, 33, 0.15) 1px 1px 2px`,

    zIndex: cssTheme.layout.zIndex.sideBar,
    overflowY: 'scroll',
    overflowX: 'hidden',
  })),
  fullHeight: style(({ cssTheme, theme }: Theme) => ({
    top: 0,
    zIndex: cssTheme.layout.zIndex.navBar + 1,
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
