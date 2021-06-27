import { SIZE, Sizing, SizingSteps, VIEWPORT } from '@newrade/core-design-system';

export const defaultBaseFontSize = 9;
export const defaultScalingRatio = 1.618;

export const defaultSizingStepsMobile = {
  [SIZE.x0]: 6,
  [SIZE.x1]: 9,
  [SIZE.x2]: 14,
  [SIZE.x3]: 20,
  [SIZE.x4]: 30,
  [SIZE.x5]: 45,
  [SIZE.x6]: 68,
  [SIZE.x7]: 110,
  [SIZE.x8]: 179,
  [SIZE.x9]: 289,
  [SIZE.x10]: 468,
};

export const defaultSizingStepsTablet = {
  [SIZE.x0]: 4,
  [SIZE.x1]: 9,
  [SIZE.x2]: 13,
  [SIZE.x3]: 21,
  [SIZE.x4]: 34,
  [SIZE.x5]: 55,
  [SIZE.x6]: 89,
  [SIZE.x7]: 144,
  [SIZE.x8]: 232,
  [SIZE.x9]: 375,
  [SIZE.x10]: 606,
};

export const defaultSizingStepsDesktop = {
  [SIZE.x0]: 4,
  [SIZE.x1]: 9,
  [SIZE.x2]: 13,
  [SIZE.x3]: 21,
  [SIZE.x4]: 34,
  [SIZE.x5]: 55,
  [SIZE.x6]: 89,
  [SIZE.x7]: 144,
  [SIZE.x8]: 232,
  [SIZE.x9]: 375,
  [SIZE.x10]: 606,
};

export const defaultSizingSteps: SizingSteps = {
  [VIEWPORT.mobile]: defaultSizingStepsMobile,
  [VIEWPORT.tablet]: defaultSizingStepsTablet,
  [VIEWPORT.desktop]: defaultSizingStepsDesktop,
};

export const defaultSizing: Sizing = {
  baseFontSize: defaultBaseFontSize,
  ratio: defaultScalingRatio,
  sizes: defaultSizingSteps,
};
