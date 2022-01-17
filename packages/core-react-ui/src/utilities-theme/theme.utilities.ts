import { DesignSystem, DesignSystemV2 } from '@newrade/core-design-system';

import { CSSDesignSystem, CSSDesignSystemV2 } from '../design-system';

import { getCSSButtons } from './buttons.utilities';
import { getCSSColors, getCSSColorsV2 } from './colors.utilities';
import { getCSSEffects } from './effects.utilities';
import { getCSSIconography } from './iconography.utilities';
import { getCSSLayout, getCSSLayoutV2 } from './layout.utilities';
import { getCSSSizing, getCSSSizingV2 } from './sizing.utilities';
import { getCSSTypography } from './typography.utilities';
import { getCSSTypographyV2 } from './typography-v2.utilities';

/**
 * Create a CSS compatible theme object from raw styles
 * @deprecated (migrate to createCSSThemeV2)
 */
export function createCSSTheme(theme: DesignSystem): CSSDesignSystem {
  return {
    name: theme.name,
    colorScheme: theme.colorScheme,
    colors: getCSSColors(theme.colors),
    effects: getCSSEffects(theme.effects),
    sizing: getCSSSizing(theme.sizing),
    iconography: getCSSIconography(theme.iconography),
    typography: getCSSTypography({ ...theme.typography, baseFontSize: theme.sizing.baseFontSize }),
    layout: getCSSLayout(theme.layout),
    // animations
    components: {
      buttons: getCSSButtons(theme),
    },
  };
}

/**
 * Create a CSS compatible theme object from raw styles
 */
export function createCSSThemeV2(theme: DesignSystemV2): CSSDesignSystemV2 {
  return {
    name: theme.name,
    colorScheme: theme.colorScheme,
    colors: getCSSColorsV2(theme.colors),
    effects: getCSSEffects(theme.effects),
    sizing: getCSSSizingV2(theme.sizing),
    iconography: getCSSIconography(theme.iconography),
    typography: getCSSTypographyV2({
      ...theme.typography,
      baseFontSize: theme.sizing.baseFontSize,
    }),
    layout: getCSSLayoutV2(theme.layout),
    // animations
    // components: {
    //   buttons: getCSSButtons(theme),
    // },
  };
}
