import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    width: `100%`,
  })),
  stickyLayout: style(({ cssTheme, theme }: Theme) => ({
    display: 'grid',
    gridTemplateColumns: `1fr`, // 1 column on mobile
    gap: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',

    ['@media']: {
      [cssTheme.layout.media.desktopSmall]: {
        // sidebar, content, aside on desktop
        gridTemplateColumns: `${cssTheme.layout.var.sidebarWidth} 1fr ${cssTheme.layout.asideWidth}`,
      },
    },
  })),
  desktopSidebar: style(({ cssTheme, theme }: Theme) => ({
    ['@media']: {
      [cssTheme.layout.media.desktopSmall]: {
        paddingLeft: `calc(${cssTheme.layout.var.sidebarWidth} + ${cssTheme.layout.var.contentMargins})`,
      },
    },
  })),
  desktopAside: style(({ cssTheme, theme }: Theme) => ({
    ['@media']: {
      [cssTheme.layout.media.desktopSmall]: {
        paddingRight: cssTheme.layout.var.asideWidth,
      },
    },
  })),
  navbar: style(({ cssTheme, theme }: Theme) => ({
    paddingTop: `calc(${cssTheme.layout.var.navbarHeight})`,
  })),
  contentPadding: style(({ cssTheme, theme }: Theme) => ({
    paddingTop: `calc(${cssTheme.layout.var.navbarHeight} + ${cssTheme.sizing.var.x6})`,
  })),
  minHeight: style(({ cssTheme, theme }: Theme) => ({
    // to prevent the main content from collapsing
    // it is also needed to reach elements that are located at the bottom of the screen
    minHeight: `105vh`,
  })),
  fullHeight: style(({ cssTheme, theme }: Theme) => ({
    minHeight: `100vh`,
  })),
};
