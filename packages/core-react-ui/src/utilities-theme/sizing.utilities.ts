import * as core from '@newrade/core-design-system';
import { modularScaleRatioValues, SIZE, VIEWPORT } from '@newrade/core-design-system';

import {
  CSSSizing,
  CSSSizingV2,
  SizingRatioVarNames,
  SizingVarNames,
} from '../css-design-system/design-system.js';
import { cssVar } from '../utilities-iso/css-variables.utilities.js';
import { keys, px } from '../utilities-iso/utilities.js';
import { ModularScaleOptions } from '../utilities-iso/utilities-iso.js';

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

export const defaultSizesCSSVarNamesV2: SizingVarNames = {
  [SIZE.x0]: '--size-x0',
  [SIZE.x1]: '--size-x1',
  [SIZE.x2]: '--size-x2',
  [SIZE.x3]: '--size-x3',
  [SIZE.x4]: '--size-x4',
  [SIZE.x5]: '--size-x5',
  [SIZE.x6]: '--size-x6',
  [SIZE.x7]: '--size-x7',
  [SIZE.x8]: '--size-x8',
  [SIZE.x9]: '--size-x9',
  [SIZE.x10]: '--size-x10',
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

export const defaultRatiosCSSVarNamesV2: SizingRatioVarNames = {
  [VIEWPORT.mobile]: '--sizing-ratio-mobile',
  [VIEWPORT.tablet]: '--sizing-ratio-tablet',
  [VIEWPORT.desktop]: '--sizing-ratio-desktop',
};

export const defaultRatiosCSSVar: SizingRatioVarNames = {
  [VIEWPORT.mobile]: cssVar(defaultRatiosCSSVarNamesV2.mobile),
  [VIEWPORT.tablet]: cssVar(defaultRatiosCSSVarNamesV2.tablet),
  [VIEWPORT.desktop]: cssVar(defaultRatiosCSSVarNamesV2.desktop),
};

export const defaultSizesCSSVarV2: SizingVarNames = {
  [SIZE.x0]: cssVar(defaultSizesCSSVarNamesV2.x0),
  [SIZE.x1]: cssVar(defaultSizesCSSVarNamesV2.x1),
  [SIZE.x2]: cssVar(defaultSizesCSSVarNamesV2.x2),
  [SIZE.x3]: cssVar(defaultSizesCSSVarNamesV2.x3),
  [SIZE.x4]: cssVar(defaultSizesCSSVarNamesV2.x4),
  [SIZE.x5]: cssVar(defaultSizesCSSVarNamesV2.x5),
  [SIZE.x6]: cssVar(defaultSizesCSSVarNamesV2.x6),
  [SIZE.x7]: cssVar(defaultSizesCSSVarNamesV2.x7),
  [SIZE.x8]: cssVar(defaultSizesCSSVarNamesV2.x8),
  [SIZE.x9]: cssVar(defaultSizesCSSVarNamesV2.x9),
  [SIZE.x10]: cssVar(defaultSizesCSSVarNamesV2.x10),
};

/**
 * Create a CSS color string from a Color object
 * @deprecated please use getCSSSizingV2()
 */
export function getCSSSizing(options: core.Sizing): CSSSizing {
  return {
    baseFontSize: px({ value: options.baseFontSize }),
    var: defaultSizesCSSVar,
    varNames: defaultSizesCSSVarNames,
    useRatiosForSizes: options.useRatiosForSizes.toString(),
    ratios: getCSSSizingRatios(options.ratios),
    sizes: getCSSSizingStep(options.sizes),
  };
}

/**
 * Create a CSS color string from a Color object
 */
export function getCSSSizingV2(options: core.Sizing): CSSSizingV2 {
  return {
    baseFontSize: px({ value: options.baseFontSize }),
    useRatiosForSizes: options.useRatiosForSizes.toString(),
    ratios: getCSSSizingRatios(options.ratios),
    sizes: getCSSSizingStepV2(
      options.sizes,
      options.useRatiosForSizes ? options.ratios : undefined
    ),
  };
}

/**
 * Create CSS ratios
 */
export function getCSSSizingRatios(ratios: core.SizingRatios): core.SizingRatios<string> {
  const viewports = keys(ratios);
  return viewports.reduce((previous, current) => {
    const viewport = current as core.VIEWPORT;
    if (!previous[viewport]) {
      previous = { ...previous, [viewport]: {} };
    }
    const ratio = `${ratios[current]}`;
    previous[viewport] = ratio;
    return previous;
  }, {} as core.SizingRatios<string>);
}

/**
 * Create CSS sizing steps (output direct string value for each step)
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

/**
 * Create CSS sizing steps
 *
 * starting by an initial value and the power mathematical operator
 */
export function getCSSSizingStepV2(
  steps: core.SizingSteps,
  sizingRatios?: core.SizingRatios
): core.SizingSteps<string> {
  const viewports = keys(steps);
  return viewports.reduce((previous, current) => {
    const viewport = current as core.VIEWPORT;
    if (!previous[viewport]) {
      previous = { ...previous, [viewport]: {} };
    }
    const sizingSteps = steps[current];

    /**
     * Compute sizes using modular scale when provided
     */
    if (sizingRatios?.[viewport]) {
      const sizingRatioForViewport = sizingRatios[viewport];

      keys(sizingSteps).forEach((size, index) => {
        if (size === SIZE.x0) {
          previous[viewport][size] = `${sizingSteps.x0}px`;
          return;
        }
        const initial = defaultSizesCSSVarV2.x0;
        const powerValue = index + 1;
        const ratio = sizingRatioForViewport;
        const ratioValue = typeof ratio === 'number' ? ratio : modularScaleRatioValues[ratio];
        const ratioStr = `* ${ratioValue} `.repeat(powerValue).trim();
        const power = `calc(${initial} ${ratioStr})`;
        previous[viewport][size] = `${power}`;
      });
      return previous;
    }

    keys(sizingSteps).forEach((size, index) => {
      previous[viewport][size] = `${sizingSteps[size]}px`;
    });
    return previous;
  }, {} as core.SizingSteps<string>);
}

// /**
//  * Create CSS sizing steps
//  *
//  * starting by an initial value and the power mathematical operator
//  */
// export function getCSSModularSizingStep(options: ModularScaleOptions): core.SizingStep<string> {
//   const viewports = keys(steps);
//   return viewports.reduce((previous, current) => {
//     const viewport = current as core.VIEWPORT;
//     if (!previous[viewport]) {
//       previous = { ...previous, [viewport]: {} };
//     }
//     const sizingSteps = steps[current];

//     /**
//      * If power
//      */
//     if (options?.power) {
//       keys(sizingSteps).forEach((size, index) => {
//         if (size === SIZE.x0) {
//           previous[viewport][size] = `${sizingSteps.x0}px`;
//           return;
//         }
//         const initial = defaultSizesCSSVarV2.x0;
//         const powerValue = index + 1;
//         const ratio = defaultRatiosCSSVar[current];
//         const ratioStr = `* ${ratio}`.repeat(powerValue);
//         const power = `calc(${initial} ${ratioStr})`;
//         previous[viewport][size] = `${power}`;
//       });
//     }

//     keys(sizingSteps).forEach((size, index) => {
//       previous[viewport][size] = `${sizingSteps[size]}px`;
//     });
//     return previous;
//   }, {} as core.SizingSteps<string>);
// }
