import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';
import { getCSSColor } from '../utilities/colors.utilities';

export const styles = {
  /**
   * Sidebar
   */
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: cssTheme.layout.var.sidebarWidth,
    top: cssTheme.layout.var.navbarHeight,
    maxHeight: `calc(100vh)`,
    display: 'none',
    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        display: 'inherit',
      },
    },
    zIndex: cssTheme.layout.zIndex.sideBarDesktop,
    overflowY: 'scroll',
    overflowX: 'hidden',

    color: cssTheme.colors.colorIntents.primaryText,
    backgroundColor: getCSSColor({ h: 0, s: 0, l: 100, a: 100 }),
    boxShadow: `rgba(33, 33, 33, 0.15) 1px 1px 2px`,

    WebkitOverflowScrolling: `touch`,
  })),

  /**
   * Nav items
   */
  content: style(({ cssTheme, theme }: Theme) => ({
    minHeight: `105vh`,
  })),
};
