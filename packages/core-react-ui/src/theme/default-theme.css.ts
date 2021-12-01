import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

import { Colors, DesignSystem, Effects } from '@newrade/core-design-system';

import { CSSLayoutV2 } from '../design-system/css-layout';
import { defaultSizesCSSVarNamesV2, defaultSizesCSSVarV2 } from '../utilities/sizing.utilities';
import { CSSSizingV2, CSSTypographyV2 } from '..';

import { defaultCSSButtons } from './default-css-buttons';
import { defaultCSSColors } from './default-css-colors';
import { defaultCSSEffects } from './default-css-effects';
import { defaultCSSLayout } from './default-css-layout';
import { defaultCSSLayoutV2 } from './default-css-layout-v2';
import { defaultCSSSizing } from './default-css-sizing';
import { defaultCSSTypography } from './default-css-typography';

/**
 * Color
 */
export const colorVars = createThemeContract<Colors<string>>(defaultCSSColors);
export const colorCSS = defaultCSSColors;

/**
 * Effects
 */

export const effectsVars = createThemeContract<Effects<string>>(defaultCSSEffects);
export const effectsCSS = defaultCSSEffects;

/**
 * Sizing
 */
export const sizingVars = {
  ...createThemeContract<CSSSizingV2>(defaultCSSSizing),
  var: defaultSizesCSSVarV2,
  varNames: defaultSizesCSSVarNamesV2, // we don't want to hash the var and varNames variables
};
export const sizingCSS = defaultCSSSizing;

/**
 * Iconography
 */

/**
 * Typography
 */
export const typographyVars = createThemeContract<CSSTypographyV2>(defaultCSSTypography);
export const typographyCSS = defaultCSSTypography;

/**
 * Layout
 */
export const layoutVars = createThemeContract<CSSLayoutV2>(defaultCSSLayoutV2);
export const layoutCSS = defaultCSSLayoutV2;

/**
 * Animation
 */
// export const animationVars = createThemeContract<Animations<string>>(defaultCSSLayoutV2);

/**
 * Components
 */
type Buttons = Pick<DesignSystem<string>['components'], 'buttons'>;
export const buttonsVars = createThemeContract<Buttons>(defaultCSSButtons);
