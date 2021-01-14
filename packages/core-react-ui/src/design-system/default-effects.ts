import { Effects, Shadows } from '@newrade/core-design-system';
import { defaultColorsColors } from './default-colors';

export const defaultShadows: Shadows = {
  light: { offsetX: 0, offsetY: 1, blur: 4, spread: 0, color: defaultColorsColors.effectTransparentLight },
  medium: { offsetX: 0, offsetY: 2, blur: 8, spread: 0, color: defaultColorsColors.effectTransparentMedium },
  heavy: { offsetX: 0, offsetY: 8, blur: 32, spread: 0, color: defaultColorsColors.effectTransparentHeavy },
};

export const defaultEffects: Effects = {
  shadows: defaultShadows,
  innerShadows: defaultShadows,
};
