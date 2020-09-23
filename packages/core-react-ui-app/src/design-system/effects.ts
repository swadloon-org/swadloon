import { Effects, Shadows, Overlays, createShadow } from '@newrade/core-design-system';

export const shadows: Shadows = {
  light: createShadow({
    offsetX: 0,
    offsetY: 2,
    blur: 10,
    spread: 0,
    color: `rgba(155, 155, 155, 0.5)`,
  }),
  medium: createShadow({
    offsetX: 0,
    offsetY: 2,
    blur: 34,
    spread: 0,
    color: `rgba(155, 155, 155, 0.5)`,
  }),
  heavy: createShadow({
    offsetX: 0,
    offsetY: 2,
    blur: 18,
    spread: 0,
    color: `rgba(155, 155, 155, 0.5)`,
  }),
};

export const effects: Effects = {
  shadows,
};
