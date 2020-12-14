import { SIZE, Sizing, SizingSteps, SizingVarNames, VIEWPORT } from '@newrade/core-design-system';
import { cssVar } from '../utilities/css-variable.utilities';

export const defaultBaseFontSize = 9;
export const defaultScalingRatio = 1.618;

export const defaultSizesCSSVarNames: SizingVarNames = {
  [SIZE.x0]: '--sizing-x0',
  [SIZE.x1]: '--sizing-x1',
  [SIZE.x2]: '--sizing-x2',
  [SIZE.x3]: '--sizing-x3',
  [SIZE.x4]: '--sizing-x4',
  [SIZE.x5]: '--sizing-x5',
  [SIZE.x6]: '--sizing-x6',
  [SIZE.x7]: '--sizing-x7',
  [SIZE.x8]: '--sizing-x8',
  [SIZE.x9]: '--sizing-x9',
  [SIZE.x10]: '--sizing-x10',
};

export const defaultSizesCSSVar: SizingVarNames = {
  [SIZE.x0]: cssVar(defaultSizesCSSVarNames.x0),
  [SIZE.x1]: cssVar(defaultSizesCSSVarNames.x1),
  [SIZE.x2]: cssVar(defaultSizesCSSVarNames.x2),
  [SIZE.x3]: cssVar(defaultSizesCSSVarNames.x3),
  [SIZE.x4]: cssVar(defaultSizesCSSVarNames.x4),
  [SIZE.x5]: cssVar(defaultSizesCSSVarNames.x5),
  [SIZE.x6]: cssVar(defaultSizesCSSVarNames.x6),
  [SIZE.x7]: cssVar(defaultSizesCSSVarNames.x7),
  [SIZE.x8]: cssVar(defaultSizesCSSVarNames.x8),
  [SIZE.x9]: cssVar(defaultSizesCSSVarNames.x9),
  [SIZE.x10]: cssVar(defaultSizesCSSVarNames.x10),
};

export const defaultSizingStepsMobile = {
  [SIZE.x0]: 9,
  [SIZE.x1]: 9,
  [SIZE.x2]: 13,
  [SIZE.x3]: 21,
  [SIZE.x4]: 34,
  [SIZE.x5]: 55,
  [SIZE.x6]: 89,
  [SIZE.x7]: 44,
  [SIZE.x8]: 33,
  [SIZE.x9]: 77,
  [SIZE.x10]: 144,
};

export const defaultSizingSteps: SizingSteps = {
  [VIEWPORT.mobile]: defaultSizingStepsMobile,
  [VIEWPORT.tablet]: defaultSizingStepsMobile,
  [VIEWPORT.desktop]: defaultSizingStepsMobile,
};

export const defaultSizing: Sizing = {
  baseFontSize: defaultBaseFontSize,
  ratio: defaultScalingRatio,
  varNames: defaultSizesCSSVarNames,
  var: defaultSizesCSSVar,
  sizes: defaultSizingSteps,
};
