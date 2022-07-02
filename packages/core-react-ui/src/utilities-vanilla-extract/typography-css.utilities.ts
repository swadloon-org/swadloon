import { createStyleObject } from '@capsizecss/core';
import { CapsizeOptions, ComputedValues } from '@capsizecss/core/dist/declarations/src/types';

import { pxStringToNumber } from '../utilities-iso/utilities-iso.js';

export function getNormalTextStyles(args: CapsizeOptions | ComputedValues) {
  return getCapsizeTextStyles(args, true);
}

export function getCapsizeTextStyles(
  args: CapsizeOptions | ComputedValues,
  disablePseudo: boolean = false
) {
  if (disablePseudo) {
    return {
      fontSize: args.fontSize,
      lineHeight: args.lineHeight,
    };
  }

  return createStyleObject(args);
}
