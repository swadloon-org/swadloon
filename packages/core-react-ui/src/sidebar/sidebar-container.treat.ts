import { globalStyle, style } from 'treat';

import { Theme } from '../design-system';
import { globalThemeReversedSelector } from '../global/global-theme-classnames';
import { getCSSColor } from '../utilities/colors.utilities';

export const styles = {
  /**
   * Sidebar
   */
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'fixed',
    left: 0,
    bottom: `-1px`, // fixes 1px line visible on ios
    width: `85vw`,
    top: `-1px`, // fixes 1px line visible on ios
    // forces the backdrop to cover the viewport in iOS 15
    minHeight: `calc(100vh + 2px)`,
    maxHeight: `calc(100vh + 2px)`,
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

    WebkitOverflowScrolling: `touch`,

    transform: 'translateX(-100%)', // initial state for SSR
  })),

  /**
   * Backdrop
   */
  backdrop: style(({ cssTheme, theme }: Theme) => ({
    position: 'fixed',
    backgroundColor: `rgba(0,0,0,0.20)`,
    // forces the backdrop to cover the viewport in iOS 15
    minHeight: `calc(100vh + 2px)`,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: cssTheme.layout.zIndex.sideBarMobile - 1,

    opacity: `0`, // inital animation state
    pointerEvents: 'none',
  })),

  backdropActive: style(({ cssTheme, theme }: Theme) => ({
    pointerEvents: 'auto',
  })),
};

globalStyle(`${globalThemeReversedSelector} ${styles.wrapper}`, ({ theme, cssTheme }: Theme) => ({
  backgroundColor: cssTheme.colors.colors.grey[800],
}));
