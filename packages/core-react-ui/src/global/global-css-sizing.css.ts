import { globalStyle } from '@vanilla-extract/css';

import { layoutCSS, ratioVarNames, sizeVarNames, sizingVars } from '../theme';

globalStyle(`:root`, {
  vars: {
    /**
     * Ratios
     */
    [ratioVarNames.mobile]: sizingVars.ratio.mobile,
    [ratioVarNames.tablet]: sizingVars.ratio.tablet,
    [ratioVarNames.desktop]: sizingVars.ratio.desktop,

    /**
     * Mobile sizes
     */
    [sizeVarNames.x0]: sizingVars.sizes.mobile.x0,
    [sizeVarNames.x1]: sizingVars.sizes.mobile.x1,
    [sizeVarNames.x2]: sizingVars.sizes.mobile.x2,
    [sizeVarNames.x3]: sizingVars.sizes.mobile.x3,
    [sizeVarNames.x4]: sizingVars.sizes.mobile.x4,
    [sizeVarNames.x5]: sizingVars.sizes.mobile.x5,
    [sizeVarNames.x6]: sizingVars.sizes.mobile.x6,
    [sizeVarNames.x7]: sizingVars.sizes.mobile.x7,
    [sizeVarNames.x8]: sizingVars.sizes.mobile.x8,
    [sizeVarNames.x9]: sizingVars.sizes.mobile.x9,
    [sizeVarNames.x10]: sizingVars.sizes.mobile.x10,
  },
  '@media': {
    [layoutCSS.media.tablet]: {
      vars: {
        /**
         * sizingVars variables
         */
        [sizeVarNames.x0]: sizingVars.sizes.tablet.x0,
        [sizeVarNames.x1]: sizingVars.sizes.tablet.x1,
        [sizeVarNames.x2]: sizingVars.sizes.tablet.x2,
        [sizeVarNames.x3]: sizingVars.sizes.tablet.x3,
        [sizeVarNames.x4]: sizingVars.sizes.tablet.x4,
        [sizeVarNames.x5]: sizingVars.sizes.tablet.x5,
        [sizeVarNames.x6]: sizingVars.sizes.tablet.x6,
        [sizeVarNames.x7]: sizingVars.sizes.tablet.x7,
        [sizeVarNames.x8]: sizingVars.sizes.tablet.x8,
        [sizeVarNames.x9]: sizingVars.sizes.tablet.x9,
        [sizeVarNames.x10]: sizingVars.sizes.tablet.x10,
      },
    },
    [layoutCSS.media.desktopSmall]: {
      vars: {
        /**
         * sizingVars variables
         */
        [sizeVarNames.x0]: sizingVars.sizes.desktop.x0,
        [sizeVarNames.x1]: sizingVars.sizes.desktop.x1,
        [sizeVarNames.x2]: sizingVars.sizes.desktop.x2,
        [sizeVarNames.x3]: sizingVars.sizes.desktop.x3,
        [sizeVarNames.x4]: sizingVars.sizes.desktop.x4,
        [sizeVarNames.x5]: sizingVars.sizes.desktop.x5,
        [sizeVarNames.x6]: sizingVars.sizes.desktop.x6,
        [sizeVarNames.x7]: sizingVars.sizes.desktop.x7,
        [sizeVarNames.x8]: sizingVars.sizes.desktop.x8,
        [sizeVarNames.x9]: sizingVars.sizes.desktop.x9,
        [sizeVarNames.x10]: sizingVars.sizes.desktop.x10,
      },
    },
  },
});
