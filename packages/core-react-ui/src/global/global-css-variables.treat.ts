import { globalStyle, style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style((theme: Theme) => ({
  display: 'inherit',
}));

globalStyle(`${wrapper}, html`, ({ theme, cssTheme }: Theme) => {
  const { colors, components } = cssTheme;
  const { buttons } = components;
  return {
    /**
     * Components variables
     */

    /**
     * Color intents variables
     */
    [colors.varNames.colorIntents.accessibilityColor]: colors.colorIntents.accessibilityColor,
    [colors.varNames.colorIntents.current]: colors.colorIntents.current,
    [colors.varNames.colorIntents.transparent]: colors.colorIntents.transparent,
    [colors.varNames.colorIntents.primary]: colors.colorIntents.primary,
    [colors.varNames.colorIntents.primaryReversed]: colors.colorIntents.primaryReversed,
    [colors.varNames.colorIntents.secondary]: colors.colorIntents.secondary,
    [colors.varNames.colorIntents.secondaryReversed]: colors.colorIntents.secondaryReversed,
    [colors.varNames.colorIntents.primaryText]: colors.colorIntents.primaryText,
    [colors.varNames.colorIntents.primaryTextReversed]: colors.colorIntents.primaryTextReversed,
    [colors.varNames.colorIntents.secondaryText]: colors.colorIntents.secondaryText,
    [colors.varNames.colorIntents.secondaryTextReversed]: colors.colorIntents.secondaryTextReversed,
    [colors.varNames.colorIntents.tertiaryText]: colors.colorIntents.tertiaryText,
    [colors.varNames.colorIntents.tertiaryTextReversed]: colors.colorIntents.tertiaryTextReversed,
    [colors.varNames.colorIntents.disabledText]: colors.colorIntents.disabledText,
    [colors.varNames.colorIntents.disabledTextReversed]: colors.colorIntents.disabledTextReversed,
    [colors.varNames.colorIntents.successText]: colors.colorIntents.successText,
    [colors.varNames.colorIntents.successAction]: colors.colorIntents.successAction,
    [colors.varNames.colorIntents.successBackground]: colors.colorIntents.successBackground,
    [colors.varNames.colorIntents.warningText]: colors.colorIntents.warningText,
    [colors.varNames.colorIntents.warningAction]: colors.colorIntents.warningAction,
    [colors.varNames.colorIntents.warningBackground]: colors.colorIntents.warningBackground,
    [colors.varNames.colorIntents.dangerText]: colors.colorIntents.dangerText,
    [colors.varNames.colorIntents.dangerAction]: colors.colorIntents.dangerAction,
    [colors.varNames.colorIntents.dangerBackground]: colors.colorIntents.dangerBackground,
    [colors.varNames.colorIntents.background0]: colors.colorIntents.background0,
    [colors.varNames.colorIntents.background1]: colors.colorIntents.background1,
    [colors.varNames.colorIntents.background2]: colors.colorIntents.background2,
    [colors.varNames.colorIntents.backgroundDisabled]: colors.colorIntents.backgroundDisabled,

    /**
     * Color variables
     */
    [colors.varNames.colors.primary.baseHue || 'undefined']: colors.colors.primary.baseHue,
    [colors.varNames.colors.primary.baseSat || 'undefined']: colors.colors.primary.baseSat,
    [colors.varNames.colors.primary[100]]: colors.colors.primary[100],
    [colors.varNames.colors.primary[300]]: colors.colors.primary[300],
    [colors.varNames.colors.primary[500]]: colors.colors.primary[500],
    [colors.varNames.colors.primary[700]]: colors.colors.primary[700],
    [colors.varNames.colors.primary[900]]: colors.colors.primary[900],
    [colors.varNames.colors.accent1.baseSat || 'undefined']: colors.colors.accent1.baseSat,
    [colors.varNames.colors.accent1.baseHue || 'undefined']: colors.colors.accent1.baseHue,
    [colors.varNames.colors.accent1[100]]: colors.colors.accent1[100],
    [colors.varNames.colors.accent1[300]]: colors.colors.accent1[300],
    [colors.varNames.colors.accent1[500]]: colors.colors.accent1[500],
    [colors.varNames.colors.accent1[700]]: colors.colors.accent1[700],
    [colors.varNames.colors.accent1[900]]: colors.colors.accent1[900],
    [colors.varNames.colors.accent2.baseSat || 'undefined']: colors.colors.accent2.baseSat,
    [colors.varNames.colors.accent2.baseHue || 'undefined']: colors.colors.accent2.baseHue,
    [colors.varNames.colors.accent2[100]]: colors.colors.accent2[100],
    [colors.varNames.colors.accent2[300]]: colors.colors.accent2[300],
    [colors.varNames.colors.accent2[500]]: colors.colors.accent2[500],
    [colors.varNames.colors.accent2[700]]: colors.colors.accent2[700],
    [colors.varNames.colors.accent2[900]]: colors.colors.accent2[900],
    [colors.varNames.colors.accent3.baseSat || 'undefined']: colors.colors.accent3.baseSat,
    [colors.varNames.colors.accent3.baseHue || 'undefined']: colors.colors.accent3.baseHue,
    [colors.varNames.colors.accent3[100]]: colors.colors.accent3[100],
    [colors.varNames.colors.accent3[300]]: colors.colors.accent3[300],
    [colors.varNames.colors.accent3[500]]: colors.colors.accent3[500],
    [colors.varNames.colors.accent3[700]]: colors.colors.accent3[700],
    [colors.varNames.colors.accent3[900]]: colors.colors.accent3[900],
    [colors.varNames.colors.grey.baseSat || 'undefined']: colors.colors.grey.baseSat,
    [colors.varNames.colors.grey.baseHue || 'undefined']: colors.colors.grey.baseHue,
    [colors.varNames.colors.grey[0]]: colors.colors.grey[0],
    [colors.varNames.colors.grey[25]]: colors.colors.grey[25],
    [colors.varNames.colors.grey[50]]: colors.colors.grey[50],
    [colors.varNames.colors.grey['0-reversed']]: colors.colors.grey['0-reversed'],
    [colors.varNames.colors.grey[100]]: colors.colors.grey[100],
    [colors.varNames.colors.grey['100-reversed']]: colors.colors.grey['100-reversed'],
    [colors.varNames.colors.grey[200]]: colors.colors.grey[200],
    [colors.varNames.colors.grey['200-reversed']]: colors.colors.grey['200-reversed'],
    [colors.varNames.colors.grey[300]]: colors.colors.grey[300],
    [colors.varNames.colors.grey[400]]: colors.colors.grey[400],
    [colors.varNames.colors.grey[500]]: colors.colors.grey[500],
    [colors.varNames.colors.grey[600]]: colors.colors.grey[600],
    [colors.varNames.colors.grey[700]]: colors.colors.grey[700],
    [colors.varNames.colors.grey[800]]: colors.colors.grey[800],
    [colors.varNames.colors.grey[900]]: colors.colors.grey[900],
    [colors.varNames.colors.grey[1000]]: colors.colors.grey[1000],
    [colors.varNames.colors.utilityGreen.baseHue || 'undefined']: colors.colors.utilityGreen.baseHue,
    [colors.varNames.colors.utilityGreen.baseSat || 'undefined']: colors.colors.utilityGreen.baseSat,
    [colors.varNames.colors.utilityGreen[100]]: colors.colors.utilityGreen[100],
    [colors.varNames.colors.utilityGreen[300]]: colors.colors.utilityGreen[300],
    [colors.varNames.colors.utilityGreen[500]]: colors.colors.utilityGreen[500],
    [colors.varNames.colors.utilityGreen[700]]: colors.colors.utilityGreen[700],
    [colors.varNames.colors.utilityGreen[900]]: colors.colors.utilityGreen[900],
    [colors.varNames.colors.utilityYellow.baseHue || 'undefined']: colors.colors.utilityYellow.baseHue,
    [colors.varNames.colors.utilityYellow.baseSat || 'undefined']: colors.colors.utilityYellow.baseSat,
    [colors.varNames.colors.utilityYellow[100]]: colors.colors.utilityYellow[100],
    [colors.varNames.colors.utilityYellow[300]]: colors.colors.utilityYellow[300],
    [colors.varNames.colors.utilityYellow[500]]: colors.colors.utilityYellow[500],
    [colors.varNames.colors.utilityYellow[700]]: colors.colors.utilityYellow[700],
    [colors.varNames.colors.utilityYellow[900]]: colors.colors.utilityYellow[900],
    [colors.varNames.colors.utilityRed.baseHue || 'undefined']: colors.colors.utilityRed.baseHue,
    [colors.varNames.colors.utilityRed.baseSat || 'undefined']: colors.colors.utilityRed.baseSat,
    [colors.varNames.colors.utilityRed[100]]: colors.colors.utilityRed[100],
    [colors.varNames.colors.utilityRed[300]]: colors.colors.utilityRed[300],
    [colors.varNames.colors.utilityRed[500]]: colors.colors.utilityRed[500],
    [colors.varNames.colors.utilityRed[700]]: colors.colors.utilityRed[700],
    [colors.varNames.colors.utilityRed[900]]: colors.colors.utilityRed[900],

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
    [cssTheme.layout.varNames.contentWidth.desktopDocsMaxWidth]: cssTheme.layout.contentWidth.desktopDocsMaxWidth,
    [cssTheme.layout.varNames.footerHeight]: cssTheme.layout.footerHeight.mobile,
    [cssTheme.layout.varNames.navbarHeight]: cssTheme.layout.navbarHeight.mobile,
    [cssTheme.layout.varNames.sidebarWidth]: cssTheme.layout.sidebarWidth.mobile,

    /**
     * Fonts variables
     */
    // [cssTheme.typography.fonts.varNames]: cssTheme.layout.sidebarWidth.mobile,

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
  };
});
