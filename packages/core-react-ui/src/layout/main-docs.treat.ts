import { style } from 'treat';

import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    display: 'grid',
    rowGap: 0,
    columnGap: cssTheme.sizing.var.x5,
    gridTemplateColumns: `1fr`, // 1 column on mobile
    gridTemplateAreas: `
      "main-docs-breadcrumbs"
      "main-docs-content    "
      `,
    alignItems: 'flex-start',
    paddingBottom: cssTheme.sizing.var.x4,

    overflowX: 'initial !important' as any, // override the default Main component

    ['@media']: {
      [cssTheme.layout.media.desktopSmall]: {
        // sidebar, content, aside on desktop
        columnGap: cssTheme.sizing.var.x5,
        rowGap: 0,
        gridTemplateColumns: `${cssTheme.layout.var.sidebarWidth} minmax(min-content,1fr) ${cssTheme.layout.asideWidth}`,
        gridTemplateAreas: `
          "main-docs-sidebar  main-docs-breadcrumbs  main-docs-aside"
          "main-docs-sidebar  main-docs-content      main-docs-aside"
          `,
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
