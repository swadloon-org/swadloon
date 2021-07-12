import * as core from '@newrade/core-design-system';
import { SIZE } from '@newrade/core-design-system';
import { CSSSizing, SizingVarNames } from '../design-system';
import { cssVar } from './css-variable.utilities';
import { keys, px } from './utilities';

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

/**
 * Create a CSS color string from a Color object
 * @deprecated
 */
export function getCSSSizing(options: core.Sizing): CSSSizing {
  return {
    baseFontSize: px({ value: options.baseFontSize }),
    var: defaultSizesCSSVar,
    varNames: defaultSizesCSSVarNames,
    ratio: options.ratio.toString(),
    sizes: getCSSSizingStep(options.sizes),
  };
}

/**
 * Create a CSS color string from a Color object
 */
export function getCSSSizingV2(options: core.Sizing): core.Sizing<string> {
  return {
    baseFontSize: px({ value: options.baseFontSize }),
    ratio: options.ratio.toString(),
    sizes: getCSSSizingStep(options.sizes),
  };
}

/**
 * Create CSS sizing steps
 */
export function getCSSSizingStep(options: core.SizingSteps): core.SizingSteps<string> {
  const viewports = keys(options);
  return viewports.reduce((previous, current) => {
    const viewport = current as core.VIEWPORT;
    if (!previous[viewport]) {
      previous = { ...previous, [viewport]: {} };
    }
    const sizingSteps = options[current];
    keys(sizingSteps).forEach((size) => {
      const value = sizingSteps[size];
      previous[viewport][size] = px({ value });
    });
    return previous;
  }, {} as core.SizingSteps<string>);
}
