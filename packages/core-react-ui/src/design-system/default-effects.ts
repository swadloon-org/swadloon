import { Effects, Shadows } from '@newrade/core-design-system';
import { defaultColorsColors } from './default-colors';

export const defaultShadows: Shadows = {
  light: { blur: 0, spread: 0, offsetX: 1, offsetY: 0, color: defaultColorsColors.effectTransparentMedium },
  medium: { blur: 1, spread: 1, offsetX: 1, offsetY: 1, color: defaultColorsColors.effectTransparentMedium },
  heavy: { blur: 1, spread: 1, offsetX: 1, offsetY: 1, color: defaultColorsColors.effectTransparentMedium },
};

export const defaultEffects: Effects = {
  shadows: defaultShadows,
  innerShadows: defaultShadows,
};
