import { createGlobalThemeContract } from '@vanilla-extract/css';
import { CSSVarFunction, MapLeafNodes } from '@vanilla-extract/private';
import { kebab } from 'case';

import { Colors, DesignSystem, Effects } from '@newrade/core-design-system';

import { CSSLayoutV2 } from '../design-system/css-layout';
import { CSSSizingV2 } from '../design-system/css-sizing';
import { CSSTypographyV2 } from '../design-system/css-typography';
import {
  defaultRatiosCSSVar,
  defaultRatiosCSSVarNamesV2,
  defaultSizesCSSVarNamesV2,
  defaultSizesCSSVarV2,
} from '../utilities-theme/sizing.utilities';
import { CSSButtons, CSSIconography } from '..';

import { defaultCSSButtons } from './default-css-buttons';
import { defaultCSSColors } from './default-css-colors';
import { defaultCSSEffects } from './default-css-effects';
import { defaultCSSIconography } from './default-css-iconography';
import { defaultCSSLayoutV2 } from './default-css-layout-v2';
import { defaultCSSSizing } from './default-css-sizing';
import { defaultCSSTypography } from './default-css-typography';

/**
 *
 * Create and export vanilla-extract theme contracts for the core-design-system and the core-react-ui components
 *
 */

const propertyFormatFn: (value: string | null, path: string[]) => string = (value, path) =>
  `${path.map(kebab).join('-')}`;

/**
 *
 * Colors
 *
 */

export const colorVars: MapLeafNodes<Colors<string>, CSSVarFunction> = createGlobalThemeContract<
  Colors<string>
>(defaultCSSColors, propertyFormatFn);
export const colorCSS = defaultCSSColors;

/**
 *
 * Effects
 *
 */

export const effectsVars: MapLeafNodes<Effects<string>, CSSVarFunction> = createGlobalThemeContract<
  Effects<string>
>(defaultCSSEffects, propertyFormatFn);
export const effectsCSS = defaultCSSEffects;

/**
 *
 * Sizing variables
 *
 */

export const sizingVars: MapLeafNodes<CSSSizingV2, CSSVarFunction> =
  createGlobalThemeContract<CSSSizingV2>(defaultCSSSizing, propertyFormatFn);
export const sizeVars = defaultSizesCSSVarV2;
export const sizeVarNames = defaultSizesCSSVarNamesV2;
export const ratioVars = defaultRatiosCSSVar;
export const ratioVarNames = defaultRatiosCSSVarNamesV2;
export const sizingCSS = defaultCSSSizing;

/**
 *
 * Iconography
 *
 */
export const iconographyVars: MapLeafNodes<CSSIconography, CSSVarFunction> =
  createGlobalThemeContract<CSSIconography>(defaultCSSIconography, propertyFormatFn);

/**
 * Typography
 */
export const typographyVars: MapLeafNodes<CSSTypographyV2, CSSVarFunction> =
  createGlobalThemeContract<CSSTypographyV2>(defaultCSSTypography, propertyFormatFn);
export const typographyCSS = defaultCSSTypography;

/**
 * Layout
 */
export const layoutVars: MapLeafNodes<CSSLayoutV2, CSSVarFunction> =
  createGlobalThemeContract<CSSLayoutV2>(defaultCSSLayoutV2, propertyFormatFn);
export const layoutCSS = defaultCSSLayoutV2;

/**
 * Animation
 */
// export const animationVars = createGlobalThemeContract<Animations<string>>(defaultCSSLayoutV2);

/**
 * Components
 */
export const buttonsVars: MapLeafNodes<CSSButtons, CSSVarFunction> =
  createGlobalThemeContract<CSSButtons>(defaultCSSButtons, propertyFormatFn);
