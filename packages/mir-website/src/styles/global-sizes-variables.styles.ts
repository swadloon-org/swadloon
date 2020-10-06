import { DesignSystem } from '@newrade/core-design-system-old';

export function getGlobalSizeVariables(theme: DesignSystem) {
  return {
    [theme.sizing.sizeCSSVarNames.x1]: theme.sizing.sizingSteps.mobile.x1.valuePx,
    [theme.sizing.sizeCSSVarNames.x2]: theme.sizing.sizingSteps.mobile.x2.valuePx,
    [theme.sizing.sizeCSSVarNames.x3]: theme.sizing.sizingSteps.mobile.x3.valuePx,
    [theme.sizing.sizeCSSVarNames.x4]: theme.sizing.sizingSteps.mobile.x4.valuePx,
    [theme.sizing.sizeCSSVarNames.x5]: theme.sizing.sizingSteps.mobile.x5.valuePx,
    [theme.sizing.sizeCSSVarNames.x6]: theme.sizing.sizingSteps.mobile.x6.valuePx,
    [theme.sizing.sizeCSSVarNames.x7]: theme.sizing.sizingSteps.mobile.x7.valuePx,
    [theme.sizing.sizeCSSVarNames.x8]: theme.sizing.sizingSteps.mobile.x8.valuePx,
    [theme.sizing.sizeCSSVarNames.x9]: theme.sizing.sizingSteps.mobile.x9.valuePx,
    [theme.sizing.sizeCSSVarNames.x10]: theme.sizing.sizingSteps.mobile.x10.valuePx,
    '@media': {
      [theme.layout.media.tablet]: {
        [theme.sizing.sizeCSSVarNames.x1]: theme.sizing.sizingSteps.tablet.x1.valuePx,
        [theme.sizing.sizeCSSVarNames.x2]: theme.sizing.sizingSteps.tablet.x2.valuePx,
        [theme.sizing.sizeCSSVarNames.x3]: theme.sizing.sizingSteps.tablet.x3.valuePx,
        [theme.sizing.sizeCSSVarNames.x4]: theme.sizing.sizingSteps.tablet.x4.valuePx,
        [theme.sizing.sizeCSSVarNames.x5]: theme.sizing.sizingSteps.tablet.x5.valuePx,
        [theme.sizing.sizeCSSVarNames.x6]: theme.sizing.sizingSteps.tablet.x6.valuePx,
        [theme.sizing.sizeCSSVarNames.x7]: theme.sizing.sizingSteps.tablet.x7.valuePx,
        [theme.sizing.sizeCSSVarNames.x8]: theme.sizing.sizingSteps.tablet.x8.valuePx,
        [theme.sizing.sizeCSSVarNames.x9]: theme.sizing.sizingSteps.tablet.x9.valuePx,
        [theme.sizing.sizeCSSVarNames.x10]: theme.sizing.sizingSteps.tablet.x10.valuePx,
      },
      [theme.layout.media.desktop]: {
        [theme.sizing.sizeCSSVarNames.x1]: theme.sizing.sizingSteps.desktop.x1.valuePx,
        [theme.sizing.sizeCSSVarNames.x2]: theme.sizing.sizingSteps.desktop.x2.valuePx,
        [theme.sizing.sizeCSSVarNames.x3]: theme.sizing.sizingSteps.desktop.x3.valuePx,
        [theme.sizing.sizeCSSVarNames.x4]: theme.sizing.sizingSteps.desktop.x4.valuePx,
        [theme.sizing.sizeCSSVarNames.x5]: theme.sizing.sizingSteps.desktop.x5.valuePx,
        [theme.sizing.sizeCSSVarNames.x6]: theme.sizing.sizingSteps.desktop.x6.valuePx,
        [theme.sizing.sizeCSSVarNames.x7]: theme.sizing.sizingSteps.desktop.x7.valuePx,
        [theme.sizing.sizeCSSVarNames.x8]: theme.sizing.sizingSteps.desktop.x8.valuePx,
        [theme.sizing.sizeCSSVarNames.x9]: theme.sizing.sizingSteps.desktop.x9.valuePx,
        [theme.sizing.sizeCSSVarNames.x10]: theme.sizing.sizingSteps.desktop.x10.valuePx,
      },
    },
  };
}
