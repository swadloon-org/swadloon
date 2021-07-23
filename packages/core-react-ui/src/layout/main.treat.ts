import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    width: `100%`,
    overflowX: 'hidden',
    backgroundColor: cssTheme.colors.colorIntents.background0,
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
