import * as core from '@newrade/core-design-system';
import { keys, px } from './utilities';

/**
 * Create a CSS color string from a Color object
 */
export function getCSSSizing(options: core.Sizing): core.Sizing<string> {
  return {
    baseFontSize: px({ value: options.baseFontSize }),
    var: options.var,
    varNames: options.varNames,
    ratio: options.ratio,
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
