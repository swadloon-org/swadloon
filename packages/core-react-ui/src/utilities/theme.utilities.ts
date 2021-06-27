import { DesignSystem } from '@newrade/core-design-system';
import { CSSDesignSystem } from '../design-system';
import { getCSSColors } from './colors.utilities';
import { getCSSButtons } from './buttons.utilities';
import { getCSSEffects } from './effects.utilities';
import { getCSSLayout } from './layout.utilities';
import { getCSSSizing } from './sizing.utilities';
import { getCSSTypography } from './typography.utilities';
import { getCSSIconography } from './iconography.utilities';

/**
 * Create a CSS compatible theme object from raw styles
 */
export function createCSSTheme(theme: DesignSystem): CSSDesignSystem {
  return {
    name: theme.name,
    variation: theme.variation,
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
