import { globalStyle, style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style((theme: Theme) => ({
  display: 'inherit',
}));

globalStyle(`${wrapper}`, ({ theme, cssTheme }: Theme) => {
  const { sizing, layout } = cssTheme;
  return {
    /**
     * Sizing variables
     */
    [sizing.varNames.x0]: sizing.sizes.mobile.x0,
    [sizing.varNames.x1]: sizing.sizes.mobile.x1,
    [sizing.varNames.x2]: sizing.sizes.mobile.x2,
    [sizing.varNames.x3]: sizing.sizes.mobile.x3,
    [sizing.varNames.x4]: sizing.sizes.mobile.x4,
    [sizing.varNames.x5]: sizing.sizes.mobile.x5,
    [sizing.varNames.x6]: sizing.sizes.mobile.x6,
    [sizing.varNames.x7]: sizing.sizes.mobile.x7,
    [sizing.varNames.x8]: sizing.sizes.mobile.x8,
    [sizing.varNames.x9]: sizing.sizes.mobile.x9,
    [sizing.varNames.x10]: sizing.sizes.mobile.x10,

    /**
     * Layout variables
     */
    [layout.varNames.breakpoints.mobileXSmall]: layout.breakpoints.mobileXSmall,
    [layout.varNames.breakpoints.mobileSmall]: layout.breakpoints.mobileSmall,
    [layout.varNames.breakpoints.mobileMedium]: layout.breakpoints.mobileMedium,
    [layout.varNames.breakpoints.tabletPortrait]: layout.breakpoints.tabletPortrait,
    [layout.varNames.breakpoints.tabletLandscape]: layout.breakpoints.tabletLandscape,
    [layout.varNames.breakpoints.desktopSmall]: layout.breakpoints.desktopSmall,
    [layout.varNames.breakpoints.desktopMedium]: layout.breakpoints.desktopMedium,
    [layout.varNames.breakpoints.desktopLarge]: layout.breakpoints.desktopLarge,
    [layout.varNames.breakpoints.desktopXLarge]: layout.breakpoints.desktopXLarge,
    [layout.varNames.asideWidth]: layout.asideWidth,
    [layout.varNames.contentMargins]: layout.contentMargins.mobile,
    [layout.varNames.contentWidth.desktopBlogMaxWidth]: layout.contentWidth.desktopBlogMaxWidth,
    [layout.varNames.contentWidth.desktopMaxWidth]: layout.contentWidth.desktopMaxWidth,
    [layout.varNames.contentWidth.desktopDocsMaxWidth]: layout.contentWidth.desktopDocsMaxWidth,
    [layout.varNames.footerHeight]: layout.footerHeight.mobile,
    [layout.varNames.navbarHeight]: layout.navbarHeight.mobile,
    [layout.varNames.sidebarWidth]: layout.sidebarWidth.mobile,

    /**
     * Fonts variables
     */
    // [cssTheme.typography.fonts.varNames]: layout.sidebarWidth.mobile,

    '@media': {
      [layout.media.tablet]: {
        /**
         * Sizing variables
         */
        [sizing.varNames.x0]: sizing.sizes.tablet.x0,
        [sizing.varNames.x1]: sizing.sizes.tablet.x1,
        [sizing.varNames.x2]: sizing.sizes.tablet.x2,
        [sizing.varNames.x3]: sizing.sizes.tablet.x3,
        [sizing.varNames.x4]: sizing.sizes.tablet.x4,
        [sizing.varNames.x5]: sizing.sizes.tablet.x5,
        [sizing.varNames.x6]: sizing.sizes.tablet.x6,
        [sizing.varNames.x7]: sizing.sizes.tablet.x7,
        [sizing.varNames.x8]: sizing.sizes.tablet.x8,
        [sizing.varNames.x9]: sizing.sizes.tablet.x9,
        [sizing.varNames.x10]: sizing.sizes.tablet.x10,

        /**
         * Layout variables
         */
        [layout.varNames.contentMargins]: layout.contentMargins.tablet,
        [layout.varNames.footerHeight]: layout.footerHeight.tablet,
        [layout.varNames.navbarHeight]: layout.navbarHeight.tablet,
        [layout.varNames.sidebarWidth]: layout.sidebarWidth.tablet,
      },
      [layout.media.desktopSmall]: {
        /**
         * Sizing variables
         */
        [sizing.varNames.x0]: sizing.sizes.desktop.x0,
        [sizing.varNames.x1]: sizing.sizes.desktop.x1,
        [sizing.varNames.x2]: sizing.sizes.desktop.x2,
        [sizing.varNames.x3]: sizing.sizes.desktop.x3,
        [sizing.varNames.x4]: sizing.sizes.desktop.x4,
        [sizing.varNames.x5]: sizing.sizes.desktop.x5,
        [sizing.varNames.x6]: sizing.sizes.desktop.x6,
        [sizing.varNames.x7]: sizing.sizes.desktop.x7,
        [sizing.varNames.x8]: sizing.sizes.desktop.x8,
        [sizing.varNames.x9]: sizing.sizes.desktop.x9,
        [sizing.varNames.x10]: sizing.sizes.desktop.x10,

        /**
         * Layout variables
         */
        [layout.varNames.contentMargins]: layout.contentMargins.desktop,
        [layout.varNames.footerHeight]: layout.footerHeight.desktop,
        [layout.varNames.navbarHeight]: layout.navbarHeight.desktop,
        [layout.varNames.sidebarWidth]: layout.sidebarWidth.desktop,
      },
    },
  };
});
