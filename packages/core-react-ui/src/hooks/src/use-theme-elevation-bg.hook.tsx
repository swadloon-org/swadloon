import { COLOR_SCHEME } from '@newrade/core-design-system';

import { colorVars } from '../default-theme/default-theme.css.js';

import { useCSSTheme } from './use-css-theme.js';

export function useThemeElevationBG(options: {
  level: 0 | 1 | 2 | 3 | 4;
  greyLevel?: 0 | 1 | 2 | 3 | 4;
}): string {
  const { currentCSSTheme } = useCSSTheme();
  const themeColorScheme = currentCSSTheme.selected?.colorScheme;

  //
  // for light mode we only return a level of grey, if we want an offset from the base elevation
  //
  if (themeColorScheme === COLOR_SCHEME.LIGHT) {
    if (options.greyLevel !== undefined) {
      return colorVars.colorIntents[`elevation${options.greyLevel}Grey`];
    }
    return colorVars.colorIntents[`elevation${options.level}`];
  }

  //
  // for dark mode we always return a grey level
  //
  return colorVars.colorIntents[`elevation${options.level}`];
}
