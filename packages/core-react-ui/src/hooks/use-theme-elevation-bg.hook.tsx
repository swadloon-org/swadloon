import { COLOR_SCHEME } from '@newrade/core-design-system';

import { useCSSTheme } from './use-css-theme';

import { colorVars } from '../theme/default-theme.css';

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
      return colorVars.colorIntents[`elevation${options.greyLevel}`];
    }
    return colorVars.colorIntents.elevation0;
  }

  //
  // for dark mode we always return a grey level
  //
  return colorVars.colorIntents[`elevation${options.level}`];
}
