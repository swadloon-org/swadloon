import { createGlobalThemeContract } from '@vanilla-extract/css';
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
} from '../utilities/sizing.utilities';

import { defaultCSSButtons } from './default-css-buttons';
import { defaultCSSColors } from './default-css-colors';
import { defaultCSSEffects } from './default-css-effects';
import { defaultCSSLayoutV2 } from './default-css-layout-v2';
import { defaultCSSSizing } from './default-css-sizing';
import { defaultCSSTypography } from './default-css-typography';

const propertyFormatFn: (value: string | null, path: string[]) => string = (value, path) =>
  `${path.map(kebab).join('-')}`;

/**
 *
 * Colors
 *
 */

export const colorVars = createGlobalThemeContract<Colors<string>>(
  defaultCSSColors,
  propertyFormatFn
);
export const colorCSS = defaultCSSColors;

/**
 *
 * Effects
 *
 */

export const effectsVars = createGlobalThemeContract<Effects<string>>(
  defaultCSSEffects,
  propertyFormatFn
);
export const effectsCSS = defaultCSSEffects;

/**
 *
 * Sizing variables
 *
 */

export const sizingVars = createGlobalThemeContract<CSSSizingV2>(
  defaultCSSSizing,
  propertyFormatFn
);
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

/**
 * Typography
 */
export const typographyVars = createGlobalThemeContract<CSSTypographyV2>(
  defaultCSSTypography,
  propertyFormatFn
);
export const typographyCSS = defaultCSSTypography;

/**
 * Layout
 */
export const layoutVars = createGlobalThemeContract<CSSLayoutV2>(
  defaultCSSLayoutV2,
  propertyFormatFn
);
export const layoutCSS = defaultCSSLayoutV2;

/**
 * Animation
 */
// export const animationVars = createGlobalThemeContract<Animations<string>>(defaultCSSLayoutV2);

/**
 * Components
 */
type Buttons = Pick<DesignSystem<string>['components'], 'buttons'>;
export const buttonsVars = createGlobalThemeContract<Buttons>(defaultCSSButtons, propertyFormatFn);
