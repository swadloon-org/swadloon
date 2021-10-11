import { Colors, DesignSystem, Sizing } from '@newrade/core-design-system';
import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';
import { CSSSizingV2 } from '..';
import { CSSLayoutV2 } from '../design-system/css-layout';
import { defaultCSSButtons } from './default-buttons';
import { defaultCSSColors } from './default-colors';
import { defaultCSSLayout } from './default-css-layout';
import { defaultCSSLayoutV2 } from './default-css-layout-v2';
import { defaultCSSSizing } from './default-css-sizing';

/**
 * Color Vars
 */
export const colorVars = createThemeContract<Colors<string>>(defaultCSSColors);
export const colorCSS = defaultCSSColors;

/**
 * Sizing Vars
 */
export const sizingVars = createThemeContract<CSSSizingV2>(defaultCSSSizing);
export const sizingCSS = defaultCSSSizing;

/**
 * Layout Vars
 */
export const layoutVars = createThemeContract<CSSLayoutV2>(defaultCSSLayoutV2);
export const layoutCSS = defaultCSSLayoutV2;

/**
 * Components Vars
 */
type Buttons = Pick<DesignSystem<string>['components'], 'buttons'>;
export const buttonsVars = createThemeContract<Buttons>(defaultCSSButtons);

/**
 * Themes
 */
// @ts-expect-error
createGlobalTheme(':root', sizingVars, defaultCSSSizing);
// @ts-expect-error
createGlobalTheme(':root', colorVars, defaultCSSColors);
// @ts-expect-error
createGlobalTheme(':root', layoutVars, defaultCSSLayout);
createGlobalTheme(':root', buttonsVars, defaultCSSButtons);
