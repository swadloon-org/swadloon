import { CSSVarFunction, MapLeafNodes } from '@vanilla-extract/private';

import { CSSTypographyV2 } from '../design-system/css-typography';

// TODO: create a utility to optimize css variables,
// e.g. if titles.mobile.t1, t2 have the same font as titles.font, it should use that instead of outputting another copy of the value

/**
 * Optional utility that returns an optimized version of `typographyTheme` where
 * the redundant css variable values are replaced by existing parent variables
 * thus reducing the overall output file size
 */
export function getOptimizedTypographyTheme({
  typographyVars,
  typographyTheme,
}: {
  typographyVars: MapLeafNodes<CSSTypographyV2, CSSVarFunction>;
  typographyTheme: CSSTypographyV2;
}): CSSTypographyV2 {
  return {
    ...typographyTheme,
    titles: {
      ...typographyTheme.titles,
      mobile: {
        ...typographyTheme.titles.mobile,
        t1: {
          ...typographyTheme.titles.mobile.t1,
          fontFamily: typographyVars.titles.font,
        },
      },
    },
  };
}
