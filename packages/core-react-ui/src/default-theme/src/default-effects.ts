import { BoxShadows, Effects, OutlineShadows, TextShadows } from '@newrade/core-design-system';

import { defaultColorIntents, defaultColorsColors } from './default-colors';

export const defaultBoxShadows: BoxShadows = {
  light: {
    offsetX: 0,
    offsetY: 1,
    blur: 4,
    spread: 0,
    color: defaultColorsColors.effectTransparentLight,
  },
  medium: {
    offsetX: 0,
    offsetY: 2,
    blur: 8,
    spread: 0,
    color: defaultColorsColors.effectTransparentMedium,
  },
  heavy: {
    offsetX: 0,
    offsetY: 8,
    blur: 32,
    spread: 0,
    color: defaultColorsColors.effectTransparentHeavy,
  },
};

export const defaultTextShadows: TextShadows = {
  light: { offsetX: 0, offsetY: 2, blur: 17, color: { h: 0, s: 0, l: 0, a: 4 } },
  medium: { offsetX: 0, offsetY: 2, blur: 17, color: { h: 0, s: 0, l: 0, a: 40 } },
  heavy: { offsetX: 0, offsetY: 2, blur: 17, color: { h: 0, s: 0, l: 0, a: 60 } },
};

export const defaultOutlineShadows: OutlineShadows = {
  focus: [
    {
      type: 'inset',
      offsetX: 0,
      offsetY: 0,
      blur: 1,
      color: defaultColorIntents.accessibilityColor,
    },
    {
      type: 'inset',
      offsetX: 0,
      offsetY: 0,
      blur: 1,
      color: defaultColorIntents.accessibilityColor,
    },
  ],
};

export const defaultEffects: Effects = {
  boxShadows: defaultBoxShadows,
  innerBoxShadows: defaultBoxShadows,
  textShadows: defaultTextShadows,
  outlineShadows: defaultOutlineShadows,
};
