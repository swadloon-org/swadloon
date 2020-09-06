import { DesignSystem } from 'core-design-system';

export function getGlobalSizeVariables(theme: DesignSystem) {
  return {
    [theme.sizing.sizeCSSVarNames.x1]: theme.sizing.sizingSteps.MOBILE.x1.valuePx,
    [theme.sizing.sizeCSSVarNames.x2]: theme.sizing.sizingSteps.MOBILE.x2.valuePx,
    [theme.sizing.sizeCSSVarNames.x3]: theme.sizing.sizingSteps.MOBILE.x3.valuePx,
    [theme.sizing.sizeCSSVarNames.x4]: theme.sizing.sizingSteps.MOBILE.x4.valuePx,
    [theme.sizing.sizeCSSVarNames.x5]: theme.sizing.sizingSteps.MOBILE.x5.valuePx,
    [theme.sizing.sizeCSSVarNames.x6]: theme.sizing.sizingSteps.MOBILE.x6.valuePx,
    [theme.sizing.sizeCSSVarNames.x7]: theme.sizing.sizingSteps.MOBILE.x7.valuePx,
    [theme.sizing.sizeCSSVarNames.x8]: theme.sizing.sizingSteps.MOBILE.x8.valuePx,
    [theme.sizing.sizeCSSVarNames.x9]: theme.sizing.sizingSteps.MOBILE.x9.valuePx,
    [theme.sizing.sizeCSSVarNames.x10]: theme.sizing.sizingSteps.MOBILE.x10.valuePx,
    '@media': {
      [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
        [theme.sizing.sizeCSSVarNames.x1]: theme.sizing.sizingSteps.TABLET.x1.valuePx,
        [theme.sizing.sizeCSSVarNames.x2]: theme.sizing.sizingSteps.TABLET.x2.valuePx,
        [theme.sizing.sizeCSSVarNames.x3]: theme.sizing.sizingSteps.TABLET.x3.valuePx,
        [theme.sizing.sizeCSSVarNames.x4]: theme.sizing.sizingSteps.TABLET.x4.valuePx,
        [theme.sizing.sizeCSSVarNames.x5]: theme.sizing.sizingSteps.TABLET.x5.valuePx,
        [theme.sizing.sizeCSSVarNames.x6]: theme.sizing.sizingSteps.TABLET.x6.valuePx,
        [theme.sizing.sizeCSSVarNames.x7]: theme.sizing.sizingSteps.TABLET.x7.valuePx,
        [theme.sizing.sizeCSSVarNames.x8]: theme.sizing.sizingSteps.TABLET.x8.valuePx,
        [theme.sizing.sizeCSSVarNames.x9]: theme.sizing.sizingSteps.TABLET.x9.valuePx,
        [theme.sizing.sizeCSSVarNames.x10]: theme.sizing.sizingSteps.TABLET.x10.valuePx,
      },
      [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
        [theme.sizing.sizeCSSVarNames.x1]: theme.sizing.sizingSteps.DESKTOP.x1.valuePx,
        [theme.sizing.sizeCSSVarNames.x2]: theme.sizing.sizingSteps.DESKTOP.x2.valuePx,
        [theme.sizing.sizeCSSVarNames.x3]: theme.sizing.sizingSteps.DESKTOP.x3.valuePx,
        [theme.sizing.sizeCSSVarNames.x4]: theme.sizing.sizingSteps.DESKTOP.x4.valuePx,
        [theme.sizing.sizeCSSVarNames.x5]: theme.sizing.sizingSteps.DESKTOP.x5.valuePx,
        [theme.sizing.sizeCSSVarNames.x6]: theme.sizing.sizingSteps.DESKTOP.x6.valuePx,
        [theme.sizing.sizeCSSVarNames.x7]: theme.sizing.sizingSteps.DESKTOP.x7.valuePx,
        [theme.sizing.sizeCSSVarNames.x8]: theme.sizing.sizingSteps.DESKTOP.x8.valuePx,
        [theme.sizing.sizeCSSVarNames.x9]: theme.sizing.sizingSteps.DESKTOP.x9.valuePx,
        [theme.sizing.sizeCSSVarNames.x10]: theme.sizing.sizingSteps.DESKTOP.x10.valuePx,
      },
    },
  };
}
