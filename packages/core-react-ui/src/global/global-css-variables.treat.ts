import { globalStyle, style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style((theme: Theme) => ({
  display: 'inherit',
}));

globalStyle(`${wrapper}, html`, ({ theme, cssTheme }: Theme) => {
  return {
    /**
     * Components variables
     */
    ['--cp-text-pri']: cssTheme.colors.var.colorIntents.primaryText,
    ['--cp-pri-text-color']: cssTheme.colors.var.colorIntents.primaryText,
    ['--cp-pri-bg-color']: cssTheme.colors.var.colorIntents.primaryText,
    ['--cp-pri-bor-color']: cssTheme.colors.var.colorIntents.primaryText,

    /**
     * Color intents variables
     */
    [cssTheme.colors.varNames.colorIntents.accessibilityColor]: cssTheme.colors.colorIntents.accessibilityColor,
    [cssTheme.colors.varNames.colorIntents.current]: cssTheme.colors.colorIntents.current,
    [cssTheme.colors.varNames.colorIntents.transparent]: cssTheme.colors.colorIntents.transparent,
    [cssTheme.colors.varNames.colorIntents.primary]: cssTheme.colors.colorIntents.primary,
    [cssTheme.colors.varNames.colorIntents.primaryReversed]: cssTheme.colors.colorIntents.primaryReversed,
    [cssTheme.colors.varNames.colorIntents.secondary]: cssTheme.colors.colorIntents.secondary,
    [cssTheme.colors.varNames.colorIntents.secondaryReversed]: cssTheme.colors.colorIntents.secondaryReversed,
    [cssTheme.colors.varNames.colorIntents.primaryText]: cssTheme.colors.colorIntents.primaryText,
    [cssTheme.colors.varNames.colorIntents.primaryTextReversed]: cssTheme.colors.colorIntents.primaryTextReversed,
    [cssTheme.colors.varNames.colorIntents.secondaryText]: cssTheme.colors.colorIntents.secondaryText,
    [cssTheme.colors.varNames.colorIntents.secondaryTextReversed]: cssTheme.colors.colorIntents.secondaryTextReversed,
    [cssTheme.colors.varNames.colorIntents.tertiaryText]: cssTheme.colors.colorIntents.tertiaryText,
    [cssTheme.colors.varNames.colorIntents.tertiaryTextReversed]: cssTheme.colors.colorIntents.tertiaryTextReversed,
    [cssTheme.colors.varNames.colorIntents.disabledText]: cssTheme.colors.colorIntents.disabledText,
    [cssTheme.colors.varNames.colorIntents.disabledTextReversed]: cssTheme.colors.colorIntents.disabledTextReversed,
    [cssTheme.colors.varNames.colorIntents.successText]: cssTheme.colors.colorIntents.successText,
    [cssTheme.colors.varNames.colorIntents.successAction]: cssTheme.colors.colorIntents.successAction,
    [cssTheme.colors.varNames.colorIntents.successBackground]: cssTheme.colors.colorIntents.successBackground,
    [cssTheme.colors.varNames.colorIntents.warningText]: cssTheme.colors.colorIntents.warningText,
    [cssTheme.colors.varNames.colorIntents.warningAction]: cssTheme.colors.colorIntents.warningAction,
    [cssTheme.colors.varNames.colorIntents.warningBackground]: cssTheme.colors.colorIntents.warningBackground,
    [cssTheme.colors.varNames.colorIntents.dangerText]: cssTheme.colors.colorIntents.dangerText,
    [cssTheme.colors.varNames.colorIntents.dangerAction]: cssTheme.colors.colorIntents.dangerAction,
    [cssTheme.colors.varNames.colorIntents.dangerBackground]: cssTheme.colors.colorIntents.dangerBackground,
    [cssTheme.colors.varNames.colorIntents.background0]: cssTheme.colors.colorIntents.background0,
    [cssTheme.colors.varNames.colorIntents.background1]: cssTheme.colors.colorIntents.background1,
    [cssTheme.colors.varNames.colorIntents.background2]: cssTheme.colors.colorIntents.background2,
    [cssTheme.colors.varNames.colorIntents.backgroundDisabled]: cssTheme.colors.colorIntents.backgroundDisabled,

    /**
     * Color variables
     */
    [cssTheme.colors.varNames.colors.primary.baseHue]: cssTheme.colors.colors.primary.baseHue,
    [cssTheme.colors.varNames.colors.primary.baseSat]: cssTheme.colors.colors.primary.baseSat,
    [cssTheme.colors.varNames.colors.primary[100]]: cssTheme.colors.colors.primary[100],
    [cssTheme.colors.varNames.colors.primary[300]]: cssTheme.colors.colors.primary[300],
    [cssTheme.colors.varNames.colors.primary[500]]: cssTheme.colors.colors.primary[500],
    [cssTheme.colors.varNames.colors.primary[700]]: cssTheme.colors.colors.primary[700],
    [cssTheme.colors.varNames.colors.primary[900]]: cssTheme.colors.colors.primary[900],
    [cssTheme.colors.varNames.colors.accent1.baseSat]: cssTheme.colors.colors.accent1.baseSat,
    [cssTheme.colors.varNames.colors.accent1.baseHue]: cssTheme.colors.colors.accent1.baseHue,
    [cssTheme.colors.varNames.colors.accent1[100]]: cssTheme.colors.colors.accent1[100],
    [cssTheme.colors.varNames.colors.accent1[300]]: cssTheme.colors.colors.accent1[300],
    [cssTheme.colors.varNames.colors.accent1[500]]: cssTheme.colors.colors.accent1[500],
    [cssTheme.colors.varNames.colors.accent1[700]]: cssTheme.colors.colors.accent1[700],
    [cssTheme.colors.varNames.colors.accent1[900]]: cssTheme.colors.colors.accent1[900],
    [cssTheme.colors.varNames.colors.accent2.baseSat]: cssTheme.colors.colors.accent2.baseSat,
    [cssTheme.colors.varNames.colors.accent2.baseHue]: cssTheme.colors.colors.accent2.baseHue,
    [cssTheme.colors.varNames.colors.accent2[100]]: cssTheme.colors.colors.accent2[100],
    [cssTheme.colors.varNames.colors.accent2[300]]: cssTheme.colors.colors.accent2[300],
    [cssTheme.colors.varNames.colors.accent2[500]]: cssTheme.colors.colors.accent2[500],
    [cssTheme.colors.varNames.colors.accent2[700]]: cssTheme.colors.colors.accent2[700],
    [cssTheme.colors.varNames.colors.accent2[900]]: cssTheme.colors.colors.accent2[900],
    [cssTheme.colors.varNames.colors.accent3.baseSat]: cssTheme.colors.colors.accent3.baseSat,
    [cssTheme.colors.varNames.colors.accent3.baseHue]: cssTheme.colors.colors.accent3.baseHue,
    [cssTheme.colors.varNames.colors.accent3[100]]: cssTheme.colors.colors.accent3[100],
    [cssTheme.colors.varNames.colors.accent3[300]]: cssTheme.colors.colors.accent3[300],
    [cssTheme.colors.varNames.colors.accent3[500]]: cssTheme.colors.colors.accent3[500],
    [cssTheme.colors.varNames.colors.accent3[700]]: cssTheme.colors.colors.accent3[700],
    [cssTheme.colors.varNames.colors.accent3[900]]: cssTheme.colors.colors.accent3[900],
    [cssTheme.colors.varNames.colors.grey.baseSat]: cssTheme.colors.colors.grey.baseSat,
    [cssTheme.colors.varNames.colors.grey.baseHue]: cssTheme.colors.colors.grey.baseHue,
    [cssTheme.colors.varNames.colors.grey[0]]: cssTheme.colors.colors.grey[0],
    [cssTheme.colors.varNames.colors.grey[25]]: cssTheme.colors.colors.grey[25],
    [cssTheme.colors.varNames.colors.grey[50]]: cssTheme.colors.colors.grey[50],
    [cssTheme.colors.varNames.colors.grey['0-reversed']]: cssTheme.colors.colors.grey['0-reversed'],
    [cssTheme.colors.varNames.colors.grey[100]]: cssTheme.colors.colors.grey[100],
    [cssTheme.colors.varNames.colors.grey['100-reversed']]: cssTheme.colors.colors.grey['100-reversed'],
    [cssTheme.colors.varNames.colors.grey[200]]: cssTheme.colors.colors.grey[200],
    [cssTheme.colors.varNames.colors.grey['200-reversed']]: cssTheme.colors.colors.grey['200-reversed'],
    [cssTheme.colors.varNames.colors.grey[300]]: cssTheme.colors.colors.grey[300],
    [cssTheme.colors.varNames.colors.grey[400]]: cssTheme.colors.colors.grey[400],
    [cssTheme.colors.varNames.colors.grey[500]]: cssTheme.colors.colors.grey[500],
    [cssTheme.colors.varNames.colors.grey[600]]: cssTheme.colors.colors.grey[600],
    [cssTheme.colors.varNames.colors.grey[700]]: cssTheme.colors.colors.grey[700],
    [cssTheme.colors.varNames.colors.grey[800]]: cssTheme.colors.colors.grey[800],
    [cssTheme.colors.varNames.colors.grey[900]]: cssTheme.colors.colors.grey[900],
    [cssTheme.colors.varNames.colors.grey[1000]]: cssTheme.colors.colors.grey[1000],
    [cssTheme.colors.varNames.colors.utilityGreen.baseHue]: cssTheme.colors.colors.utilityGreen.baseHue,
    [cssTheme.colors.varNames.colors.utilityGreen.baseSat]: cssTheme.colors.colors.utilityGreen.baseSat,
    [cssTheme.colors.varNames.colors.utilityGreen[100]]: cssTheme.colors.colors.utilityGreen[100],
    [cssTheme.colors.varNames.colors.utilityGreen[300]]: cssTheme.colors.colors.utilityGreen[300],
    [cssTheme.colors.varNames.colors.utilityGreen[500]]: cssTheme.colors.colors.utilityGreen[500],
    [cssTheme.colors.varNames.colors.utilityGreen[700]]: cssTheme.colors.colors.utilityGreen[700],
    [cssTheme.colors.varNames.colors.utilityGreen[900]]: cssTheme.colors.colors.utilityGreen[900],
    [cssTheme.colors.varNames.colors.utilityYellow.baseHue]: cssTheme.colors.colors.utilityYellow.baseHue,
    [cssTheme.colors.varNames.colors.utilityYellow.baseSat]: cssTheme.colors.colors.utilityYellow.baseSat,
    [cssTheme.colors.varNames.colors.utilityYellow[100]]: cssTheme.colors.colors.utilityYellow[100],
    [cssTheme.colors.varNames.colors.utilityYellow[300]]: cssTheme.colors.colors.utilityYellow[300],
    [cssTheme.colors.varNames.colors.utilityYellow[500]]: cssTheme.colors.colors.utilityYellow[500],
    [cssTheme.colors.varNames.colors.utilityYellow[700]]: cssTheme.colors.colors.utilityYellow[700],
    [cssTheme.colors.varNames.colors.utilityYellow[900]]: cssTheme.colors.colors.utilityYellow[900],
    [cssTheme.colors.varNames.colors.utilityRed.baseHue]: cssTheme.colors.colors.utilityRed.baseHue,
    [cssTheme.colors.varNames.colors.utilityRed.baseSat]: cssTheme.colors.colors.utilityRed.baseSat,
    [cssTheme.colors.varNames.colors.utilityRed[100]]: cssTheme.colors.colors.utilityRed[100],
    [cssTheme.colors.varNames.colors.utilityRed[300]]: cssTheme.colors.colors.utilityRed[300],
    [cssTheme.colors.varNames.colors.utilityRed[500]]: cssTheme.colors.colors.utilityRed[500],
    [cssTheme.colors.varNames.colors.utilityRed[700]]: cssTheme.colors.colors.utilityRed[700],
    [cssTheme.colors.varNames.colors.utilityRed[900]]: cssTheme.colors.colors.utilityRed[900],

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
