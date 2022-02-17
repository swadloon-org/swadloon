import { style } from '@vanilla-extract/css';

import { layoutCSS, sizeVars } from '../theme';

export const wrapper = style({
  display: 'grid',
  rowGap: 0,
  columnGap: sizeVars.x5,
  gridTemplateColumns: `1fr`, // 1 column on mobile
  gridTemplateAreas: `
      "main-docs-breadcrumbs"
      "main-docs-content    "
      `,
  alignItems: 'flex-start',
  paddingBottom: sizeVars.x4,

  overflowX: 'initial !important' as any, // override the default Main component

  ['@media']: {
    [layoutCSS.media.desktopSmall]: {
      // sidebar, content, aside on desktop
      columnGap: sizeVars.x5,
      rowGap: 0,
      gridTemplateColumns: `${layoutCSS.var.sidebarWidth} minmax(min-content,1fr) ${layoutCSS.asideWidth}`,
      gridTemplateAreas: `
          "main-docs-sidebar  main-docs-breadcrumbs  main-docs-aside"
          "main-docs-sidebar  main-docs-content      main-docs-aside"
          `,
    },
  },
});

export const navbar = style({
  paddingTop: `calc(${layoutCSS.var.navbarHeight})`,
});

export const contentPadding = style({
  paddingTop: `calc(${layoutCSS.var.navbarHeight} + ${sizeVars.x6})`,
});

export const minHeight = style({
  // to prevent the main content from collapsing
  // it is also needed to reach elements that are located at the bottom of the screen
  minHeight: `105vh`,
});

export const fullHeight = style({
  minHeight: `100vh`,
});
