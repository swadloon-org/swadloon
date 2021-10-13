import { Animation, Animations, Colors, DesignSystem, Effects } from '@newrade/core-design-system';
import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';
import { CSSSizingV2 } from '..';
import { CSSLayoutV2 } from '../design-system/css-layout';
import { defaultCSSColors } from './default-css-colors';
import { defaultCSSButtons } from './default-css-buttons';
import { defaultCSSLayout } from './default-css-layout';
import { defaultCSSLayoutV2 } from './default-css-layout-v2';
import { defaultCSSSizing } from './default-css-sizing';
import { defaultCSSEffects } from './default-css-effects';

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
export const sizingVars = createThemeContract<CSSSizingV2>(defaultCSSSizing);
export const sizingCSS = defaultCSSSizing;

/**
 * Iconography
 */

/**
 * Typography
 */

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

/**
 * Themes
 */
// @ts-expect-error
createGlobalTheme(':root', colorVars, defaultCSSColors);
// @ts-expect-error
createGlobalTheme(':root', effectsVars, defaultCSSEffects);
// @ts-expect-error
createGlobalTheme(':root', sizingVars, defaultCSSSizing);
// @ts-expect-error
createGlobalTheme(':root', layoutVars, defaultCSSLayout);
createGlobalTheme(':root', buttonsVars, defaultCSSButtons);
