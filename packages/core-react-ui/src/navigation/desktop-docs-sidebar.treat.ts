import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';
import { getCSSColor } from '../utilities/colors.utilities';

export const styles = {
  /**
   * Sidebar
   */
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'fixed',
    // leave 0.1px since 0px gets transformed to 0 by cssnano...
    left: `max(0.1px, calc(50% - ${cssTheme.layout.var.sidebarWidth} - ${cssTheme.layout.var.contentWidth.desktopDocsMaxWidth} / 2 - ${cssTheme.sizing.var.x4}))`,
    bottom: 0,
    marginTop: cssTheme.sizing.var.x5,
    marginBottom: cssTheme.sizing.var.x5,
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
    borderRight: `1px solid ${cssTheme.colors.colors.grey[100]}`,

    WebkitOverflowScrolling: `touch`,
  })),

  /**
   * Nav items
   */
  content: style(({ cssTheme, theme }: Theme) => ({
    minHeight: `105vh`,
  })),
};
