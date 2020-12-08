import { Effects, Shadows } from '@newrade/core-design-system';
import { defaultColorsColors } from './default-colors';

export const defaultShadows: Shadows = {
  light: { blur: 6, spread: 0, offsetX: 0, offsetY: 2, color: defaultColorsColors.effectTransparentMedium },
  medium: { blur: 10, spread: 1, offsetX: 0, offsetY: 6, color: defaultColorsColors.effectTransparentMedium },
  heavy: { blur: 15, spread: 1, offsetX: 0, offsetY: 6, color: defaultColorsColors.effectTransparentMedium },
};

export const defaultEffects: Effects = {
  shadows: defaultShadows,
  innerShadows: defaultShadows,
};
