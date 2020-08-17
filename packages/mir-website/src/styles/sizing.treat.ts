import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const sizing = style((theme: DesignSystem) => ({
  html: {
    fontSize: theme.sizing.baseFontSizePx,
  },
  ':root': {
    [theme.sizing.sizeCSSVarNames.X1]: theme.sizing.sizingSteps.MOBILE.X1.valuePx,
    [theme.sizing.sizeCSSVarNames.X2]: theme.sizing.sizingSteps.MOBILE.X2.valuePx,
    [theme.sizing.sizeCSSVarNames.X3]: theme.sizing.sizingSteps.MOBILE.X3.valuePx,
    [theme.sizing.sizeCSSVarNames.X4]: theme.sizing.sizingSteps.MOBILE.X4.valuePx,
    [theme.sizing.sizeCSSVarNames.X5]: theme.sizing.sizingSteps.MOBILE.X5.valuePx,
    [theme.sizing.sizeCSSVarNames.X6]: theme.sizing.sizingSteps.MOBILE.X6.valuePx,
    [theme.sizing.sizeCSSVarNames.X7]: theme.sizing.sizingSteps.MOBILE.X7.valuePx,
    [theme.sizing.sizeCSSVarNames.X8]: theme.sizing.sizingSteps.MOBILE.X8.valuePx,
    [theme.sizing.sizeCSSVarNames.X9]: theme.sizing.sizingSteps.MOBILE.X9.valuePx,
    [theme.sizing.sizeCSSVarNames.X10]: theme.sizing.sizingSteps.MOBILE.X10.valuePx,
  },
  '@media': {
    [`@media screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ':root': {
        [theme.sizing.sizeCSSVarNames.X1]: theme.sizing.sizingSteps.TABLET.X1.valuePx,
        [theme.sizing.sizeCSSVarNames.X2]: theme.sizing.sizingSteps.TABLET.X2.valuePx,
        [theme.sizing.sizeCSSVarNames.X3]: theme.sizing.sizingSteps.TABLET.X3.valuePx,
        [theme.sizing.sizeCSSVarNames.X4]: theme.sizing.sizingSteps.TABLET.X4.valuePx,
        [theme.sizing.sizeCSSVarNames.X5]: theme.sizing.sizingSteps.TABLET.X5.valuePx,
        [theme.sizing.sizeCSSVarNames.X6]: theme.sizing.sizingSteps.TABLET.X6.valuePx,
        [theme.sizing.sizeCSSVarNames.X7]: theme.sizing.sizingSteps.TABLET.X7.valuePx,
        [theme.sizing.sizeCSSVarNames.X8]: theme.sizing.sizingSteps.TABLET.X8.valuePx,
        [theme.sizing.sizeCSSVarNames.X9]: theme.sizing.sizingSteps.TABLET.X9.valuePx,
        [theme.sizing.sizeCSSVarNames.X10]: theme.sizing.sizingSteps.TABLET.X10.valuePx,
      },
    },
    [`@media screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ':root': {
        [theme.sizing.sizeCSSVarNames.X1]: theme.sizing.sizingSteps.DESKTOP.X1.valuePx,
        [theme.sizing.sizeCSSVarNames.X2]: theme.sizing.sizingSteps.DESKTOP.X2.valuePx,
        [theme.sizing.sizeCSSVarNames.X3]: theme.sizing.sizingSteps.DESKTOP.X3.valuePx,
        [theme.sizing.sizeCSSVarNames.X4]: theme.sizing.sizingSteps.DESKTOP.X4.valuePx,
        [theme.sizing.sizeCSSVarNames.X5]: theme.sizing.sizingSteps.DESKTOP.X5.valuePx,
        [theme.sizing.sizeCSSVarNames.X6]: theme.sizing.sizingSteps.DESKTOP.X6.valuePx,
        [theme.sizing.sizeCSSVarNames.X7]: theme.sizing.sizingSteps.DESKTOP.X7.valuePx,
        [theme.sizing.sizeCSSVarNames.X8]: theme.sizing.sizingSteps.DESKTOP.X8.valuePx,
        [theme.sizing.sizeCSSVarNames.X9]: theme.sizing.sizingSteps.DESKTOP.X9.valuePx,
        [theme.sizing.sizeCSSVarNames.X10]: theme.sizing.sizingSteps.DESKTOP.X10.valuePx,
      },
    },
  },
}));
