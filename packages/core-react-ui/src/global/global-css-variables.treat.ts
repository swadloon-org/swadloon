import { globalStyle, style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style((theme: Theme) => ({
  display: 'inherit',
}));

globalStyle(`${wrapper}, html`, ({ theme, cssTheme }: Theme) => ({
  /**
   * Colors variables
   */
  ['--color-text-primary']: cssTheme.colors.colorIntents.primaryText,
  ['--color-text-secondary']: cssTheme.colors.colorIntents.secondaryText,
  ['--color-text-tertiary']: cssTheme.colors.colorIntents.tertiaryText,

  /**
   * Sizing variables
   */
  [cssTheme.sizing.varNames.x0]: cssTheme.sizing.sizes.mobile.x0,
  [cssTheme.sizing.varNames.x1]: cssTheme.sizing.sizes.mobile.x1,
  [cssTheme.sizing.varNames.x2]: cssTheme.sizing.sizes.mobile.x2,
  [cssTheme.sizing.varNames.x3]: cssTheme.sizing.sizes.mobile.x3,
  [cssTheme.sizing.varNames.x4]: cssTheme.sizing.sizes.mobile.x4,
  [cssTheme.sizing.varNames.x5]: cssTheme.sizing.sizes.mobile.x5,
  [cssTheme.sizing.varNames.x6]: cssTheme.sizing.sizes.mobile.x6,
  [cssTheme.sizing.varNames.x7]: cssTheme.sizing.sizes.mobile.x7,
  [cssTheme.sizing.varNames.x8]: cssTheme.sizing.sizes.mobile.x8,
  [cssTheme.sizing.varNames.x9]: cssTheme.sizing.sizes.mobile.x9,
  [cssTheme.sizing.varNames.x10]: cssTheme.sizing.sizes.mobile.x10,
  /**
   * Layout variables
   */
  [cssTheme.layout.varNames.breakpoints.mobileXSmall]: cssTheme.layout.breakpoints.mobileXSmall,
  [cssTheme.layout.varNames.breakpoints.mobileSmall]: cssTheme.layout.breakpoints.mobileSmall,
  [cssTheme.layout.varNames.breakpoints.mobileMedium]: cssTheme.layout.breakpoints.mobileMedium,
  [cssTheme.layout.varNames.breakpoints.tabletPortrait]: cssTheme.layout.breakpoints.tabletPortrait,
  [cssTheme.layout.varNames.breakpoints.tabletLandscape]: cssTheme.layout.breakpoints.tabletLandscape,
  [cssTheme.layout.varNames.breakpoints.desktopSmall]: cssTheme.layout.breakpoints.desktopSmall,
  [cssTheme.layout.varNames.breakpoints.desktopMedium]: cssTheme.layout.breakpoints.desktopMedium,
  [cssTheme.layout.varNames.breakpoints.desktopLarge]: cssTheme.layout.breakpoints.desktopLarge,
  [cssTheme.layout.varNames.breakpoints.desktopXLarge]: cssTheme.layout.breakpoints.desktopXLarge,
  [cssTheme.layout.varNames.asideWidth]: cssTheme.layout.asideWidth,
  [cssTheme.layout.varNames.contentMargins]: cssTheme.layout.contentMargins.mobile,
  [cssTheme.layout.varNames.contentWidth.desktopBlogMaxWidth]: cssTheme.layout.contentWidth.desktopBlogMaxWidth,
  [cssTheme.layout.varNames.contentWidth.desktopMaxWidth]: cssTheme.layout.contentWidth.desktopMaxWidth,
  [cssTheme.layout.varNames.footerHeight]: cssTheme.layout.footerHeight.mobile,
  [cssTheme.layout.varNames.navbarHeight]: cssTheme.layout.navbarHeight.mobile,
  [cssTheme.layout.varNames.sidebarWidth]: cssTheme.layout.sidebarWidth.mobile,

  '@media': {
    [cssTheme.layout.media.tablet]: {
      /**
       * Sizing variables
       */
      [cssTheme.sizing.varNames.x0]: cssTheme.sizing.sizes.tablet.x0,
      [cssTheme.sizing.varNames.x1]: cssTheme.sizing.sizes.tablet.x1,
      [cssTheme.sizing.varNames.x2]: cssTheme.sizing.sizes.tablet.x2,
      [cssTheme.sizing.varNames.x3]: cssTheme.sizing.sizes.tablet.x3,
      [cssTheme.sizing.varNames.x4]: cssTheme.sizing.sizes.tablet.x4,
      [cssTheme.sizing.varNames.x5]: cssTheme.sizing.sizes.tablet.x5,
      [cssTheme.sizing.varNames.x6]: cssTheme.sizing.sizes.tablet.x6,
      [cssTheme.sizing.varNames.x7]: cssTheme.sizing.sizes.tablet.x7,
      [cssTheme.sizing.varNames.x8]: cssTheme.sizing.sizes.tablet.x8,
      [cssTheme.sizing.varNames.x9]: cssTheme.sizing.sizes.tablet.x9,
      [cssTheme.sizing.varNames.x10]: cssTheme.sizing.sizes.tablet.x10,
      /**
       * Layout variables
       */
      [cssTheme.layout.varNames.contentMargins]: cssTheme.layout.contentMargins.tablet,
      [cssTheme.layout.varNames.footerHeight]: cssTheme.layout.footerHeight.tablet,
      [cssTheme.layout.varNames.navbarHeight]: cssTheme.layout.navbarHeight.tablet,
      [cssTheme.layout.varNames.sidebarWidth]: cssTheme.layout.sidebarWidth.tablet,
    },
    [cssTheme.layout.media.desktopSmall]: {
      /**
       * Sizing variables
       */
      [cssTheme.sizing.varNames.x0]: cssTheme.sizing.sizes.desktop.x0,
      [cssTheme.sizing.varNames.x1]: cssTheme.sizing.sizes.desktop.x1,
      [cssTheme.sizing.varNames.x2]: cssTheme.sizing.sizes.desktop.x2,
      [cssTheme.sizing.varNames.x3]: cssTheme.sizing.sizes.desktop.x3,
      [cssTheme.sizing.varNames.x4]: cssTheme.sizing.sizes.desktop.x4,
      [cssTheme.sizing.varNames.x5]: cssTheme.sizing.sizes.desktop.x5,
      [cssTheme.sizing.varNames.x6]: cssTheme.sizing.sizes.desktop.x6,
      [cssTheme.sizing.varNames.x7]: cssTheme.sizing.sizes.desktop.x7,
      [cssTheme.sizing.varNames.x8]: cssTheme.sizing.sizes.desktop.x8,
      [cssTheme.sizing.varNames.x9]: cssTheme.sizing.sizes.desktop.x9,
      [cssTheme.sizing.varNames.x10]: cssTheme.sizing.sizes.desktop.x10,
      /**
       * Layout variables
       */
      [cssTheme.layout.varNames.contentMargins]: cssTheme.layout.contentMargins.desktop,
      [cssTheme.layout.varNames.footerHeight]: cssTheme.layout.footerHeight.desktop,
      [cssTheme.layout.varNames.navbarHeight]: cssTheme.layout.navbarHeight.desktop,
      [cssTheme.layout.varNames.sidebarWidth]: cssTheme.layout.sidebarWidth.desktop,
    },
  },
}));
