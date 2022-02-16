import { createGlobalThemeContract } from '@vanilla-extract/css';
import { CSSVarFunction, MapLeafNodes } from '@vanilla-extract/private';
import { kebab } from 'case';

import { CSSButtons, CSSEffects, CSSFontsV2, CSSIconography } from '../design-system';
import { CSSLayoutV2 } from '../design-system/css-layout';
import { CSSSizingV2 } from '../design-system/css-sizing';
import { CSSTypographyV2 } from '../design-system/css-typography';
import {
  defaultRatiosCSSVar,
  defaultRatiosCSSVarNamesV2,
  defaultSizesCSSVarNamesV2,
  defaultSizesCSSVarV2,
} from '../utilities-theme/sizing.utilities';
import { CSSColorsV2 } from '..';

import { defaultCSSButtons } from './default-buttons-css';
import { defaultCSSColors } from './default-colors-css';
import { defaultCSSEffects } from './default-effects-css';
import { defaultCSSIconography } from './default-iconography-css';
import { defaultCSSLayoutV2 } from './default-layout-v2-css';
import { defaultCSSSizing } from './default-sizing-css';
import { defaultCSSTypography } from './default-typography-css';

/**
 *
 * Create and export vanilla-extract theme contracts for the
 * core-design-system and the core-react-ui components
 *
 * Those are derived from the default themes to create reference variables objects
 */

/**
 * Formatting function used to have plain (with short content hash) variable names
 * e.g. --fonts-sans-alternate: ...
 */
const propertyFormatFn: (prefix?: string) => (value: string | null, path: string[]) => string = (
  prefix
) => {
  return (value, path) => {
    return [prefix ? kebab(prefix) : '', ...path.map(kebab)].filter((part) => !!part).join('-');
  };
};

/**
 *
 * Colors
 *
 */

export const colorVars: MapLeafNodes<CSSColorsV2, CSSVarFunction> =
  createGlobalThemeContract<CSSColorsV2>(defaultCSSColors, propertyFormatFn());
export const colorCSS = defaultCSSColors;

/**
 *
 * Effects
 *
 */

export const effectsVars: MapLeafNodes<CSSEffects, CSSVarFunction> =
  createGlobalThemeContract<CSSEffects>(defaultCSSEffects, propertyFormatFn());
export const effectsCSS = defaultCSSEffects;

/**
 *
 * Sizing variables
 *
 */

export const sizingVars: MapLeafNodes<CSSSizingV2, CSSVarFunction> =
  createGlobalThemeContract<CSSSizingV2>(defaultCSSSizing, propertyFormatFn());
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
  createGlobalThemeContract<CSSIconography>(defaultCSSIconography, propertyFormatFn('icons'));

/**
 * Typography
 */
export const fontsVars: MapLeafNodes<CSSFontsV2, CSSVarFunction> =
  createGlobalThemeContract<CSSFontsV2>(defaultCSSTypography.fonts, propertyFormatFn());
export const typographyVars: MapLeafNodes<CSSTypographyV2, CSSVarFunction> =
  createGlobalThemeContract<CSSTypographyV2>(defaultCSSTypography, propertyFormatFn());
export const typographyCSS = defaultCSSTypography;

/**
 * Layout
 */
export const layoutVars: MapLeafNodes<CSSLayoutV2, CSSVarFunction> =
  createGlobalThemeContract<CSSLayoutV2>(defaultCSSLayoutV2, propertyFormatFn());
export const layoutCSS = defaultCSSLayoutV2;

/**
 * Animation
 */
// export const animationVars = createGlobalThemeContract<Animations<string>>(defaultCSSLayoutV2);

/**
 * Components
 */
export const buttonsVars: MapLeafNodes<CSSButtons, CSSVarFunction> =
  createGlobalThemeContract<CSSButtons>(defaultCSSButtons, propertyFormatFn('buttons'));
