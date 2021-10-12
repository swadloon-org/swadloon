import { globalStyle } from '@vanilla-extract/css';
import { layoutCSS, sizingCSS, sizingVars } from '../theme';

globalStyle(`:root`, {
  vars: {
    /**
     * Ratios
     */
    [sizingCSS.ratioVarNames.mobile]: sizingVars.ratio.mobile,
    [sizingCSS.ratioVarNames.tablet]: sizingVars.ratio.tablet,
    [sizingCSS.ratioVarNames.desktop]: sizingVars.ratio.desktop,

    /**
     * Mobile sizes
     */
    [sizingCSS.varNames.x0]: sizingVars.sizes.mobile.x0,
    [sizingCSS.varNames.x1]: sizingVars.sizes.mobile.x1,
    [sizingCSS.varNames.x2]: sizingVars.sizes.mobile.x2,
    [sizingCSS.varNames.x3]: sizingVars.sizes.mobile.x3,
    [sizingCSS.varNames.x4]: sizingVars.sizes.mobile.x4,
    [sizingCSS.varNames.x5]: sizingVars.sizes.mobile.x5,
    [sizingCSS.varNames.x6]: sizingVars.sizes.mobile.x6,
    [sizingCSS.varNames.x7]: sizingVars.sizes.mobile.x7,
    [sizingCSS.varNames.x8]: sizingVars.sizes.mobile.x8,
    [sizingCSS.varNames.x9]: sizingVars.sizes.mobile.x9,
    [sizingCSS.varNames.x10]: sizingVars.sizes.mobile.x10,
  },
  '@media': {
    [layoutCSS.media.tablet]: {
      vars: {
        /**
         * sizingVars variables
         */
        [sizingCSS.varNames.x0]: sizingVars.sizes.tablet.x0,
        [sizingCSS.varNames.x1]: sizingVars.sizes.tablet.x1,
        [sizingCSS.varNames.x2]: sizingVars.sizes.tablet.x2,
        [sizingCSS.varNames.x3]: sizingVars.sizes.tablet.x3,
        [sizingCSS.varNames.x4]: sizingVars.sizes.tablet.x4,
        [sizingCSS.varNames.x5]: sizingVars.sizes.tablet.x5,
        [sizingCSS.varNames.x6]: sizingVars.sizes.tablet.x6,
        [sizingCSS.varNames.x7]: sizingVars.sizes.tablet.x7,
        [sizingCSS.varNames.x8]: sizingVars.sizes.tablet.x8,
        [sizingCSS.varNames.x9]: sizingVars.sizes.tablet.x9,
        [sizingCSS.varNames.x10]: sizingVars.sizes.tablet.x10,
      },
    },
    [layoutCSS.media.desktopSmall]: {
      vars: {
        /**
         * sizingVars variables
         */
        [sizingCSS.varNames.x0]: sizingVars.sizes.desktop.x0,
        [sizingCSS.varNames.x1]: sizingVars.sizes.desktop.x1,
        [sizingCSS.varNames.x2]: sizingVars.sizes.desktop.x2,
        [sizingCSS.varNames.x3]: sizingVars.sizes.desktop.x3,
        [sizingCSS.varNames.x4]: sizingVars.sizes.desktop.x4,
        [sizingCSS.varNames.x5]: sizingVars.sizes.desktop.x5,
        [sizingCSS.varNames.x6]: sizingVars.sizes.desktop.x6,
        [sizingCSS.varNames.x7]: sizingVars.sizes.desktop.x7,
        [sizingCSS.varNames.x8]: sizingVars.sizes.desktop.x8,
        [sizingCSS.varNames.x9]: sizingVars.sizes.desktop.x9,
        [sizingCSS.varNames.x10]: sizingVars.sizes.desktop.x10,
      },
    },
  },
});
