import { globalStyle } from '@vanilla-extract/css';

import { layoutCSS, layoutVars } from '../default-theme/src/theme';

globalStyle(`:root`, {
  vars: {
    /**
     * Mobile
     */
    [layoutCSS.varNames.asideWidth]: layoutVars.asideWidth,
    [layoutCSS.varNames.contentWidth.desktopBlogMaxWidth]:
      layoutVars.contentWidth.desktopBlogMaxWidth,
    [layoutCSS.varNames.contentWidth.desktopDocsMaxWidth]:
      layoutVars.contentWidth.desktopDocsMaxWidth,
    [layoutCSS.varNames.contentWidth.desktopMaxWidth]: layoutVars.contentWidth.desktopMaxWidth,

    [layoutCSS.varNames.contentMargins]: layoutVars.contentMargins.mobile,
    [layoutCSS.varNames.navbarHeight]: layoutVars.navbarHeight.mobile,
    [layoutCSS.varNames.sidebarWidth]: layoutVars.sidebarWidth.mobile,
    [layoutCSS.varNames.navbarHeight]: layoutVars.navbarHeight.mobile,
    [layoutCSS.varNames.footerHeight]: layoutVars.footerHeight.mobile,
  },
  '@media': {
    [layoutCSS.media.tablet]: {
      vars: {
        /**
         * Tablet
         */
        [layoutCSS.varNames.contentMargins]: layoutVars.contentMargins.tablet,
        [layoutCSS.varNames.navbarHeight]: layoutVars.navbarHeight.tablet,
        [layoutCSS.varNames.sidebarWidth]: layoutVars.sidebarWidth.tablet,
        [layoutCSS.varNames.navbarHeight]: layoutVars.navbarHeight.tablet,
        [layoutCSS.varNames.footerHeight]: layoutVars.footerHeight.tablet,
      },
    },
    [layoutCSS.media.desktopSmall]: {
      vars: {
        /**
         * Desktop
         */
        [layoutCSS.varNames.contentMargins]: layoutVars.contentMargins.desktop,
        [layoutCSS.varNames.navbarHeight]: layoutVars.navbarHeight.desktop,
        [layoutCSS.varNames.sidebarWidth]: layoutVars.sidebarWidth.desktop,
        [layoutCSS.varNames.navbarHeight]: layoutVars.navbarHeight.desktop,
        [layoutCSS.varNames.footerHeight]: layoutVars.footerHeight.desktop,
      },
    },
  },
});
