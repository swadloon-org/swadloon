import { DesignSystemV2 } from '@newrade/core-design-system';

import { CSSDesignSystemV2 } from '../css-design-system/design-system.js';

import { getCSSButtons } from './buttons.utilities.js';
import { getCSSColorsV2 } from './colors.utilities.js';
import { getCSSEffects } from './effects.utilities.js';
import { getCSSIconography } from './iconography.utilities.js';
import { getCSSLayoutV2 } from './layout.utilities.js';
import { getCSSSizingV2 } from './sizing.utilities.js';
import { getCSSTypographyV2 } from './typography-v2.utilities.js';

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
    components: {
      buttons: getCSSButtons(theme.components.buttons),
    },
  };
}
