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
    bottom: `-1px`,
    width: `90vw`,
    top: `-1px`,
    maxHeight: `calc(100vh)`,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        width: cssTheme.layout.var.sidebarWidth,
      },
    },
    zIndex: cssTheme.layout.zIndex.sideBarMobile,
    overflowY: 'scroll',
    overflowX: 'hidden',

    color: cssTheme.colors.colorIntents.primaryText,
    backgroundColor: getCSSColor({ h: 0, s: 0, l: 100, a: 100 }),
    boxShadow: `rgba(33, 33, 33, 0.15) 1px 1px 2px`,

    WebkitOverflowScrolling: `touch`,

    transform: 'translateX(-100%)', // initial state for SSR
  })),

  /**
   * Nav items
   */
  content: style(({ cssTheme, theme }: Theme) => ({
    minHeight: `105vh`,
  })),

  /**
   * Backdrop
   */

  backdrop: style(({ cssTheme, theme }: Theme) => ({
    position: 'fixed',
    backgroundColor: `rgba(0,0,0,0.20)`,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: cssTheme.layout.zIndex.sideBarMobile - 1,

    opacity: `0`, // inital animation state
  })),
};
