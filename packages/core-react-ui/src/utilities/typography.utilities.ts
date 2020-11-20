import { Typography } from '@newrade/core-design-system';
import { defaultTypography } from '../design-system/default-typography';

export function getCSSTypography(options: Typography) {
  if (options.fonts?.sans != null) {
    return `${options.fonts.sans.name},${'sans'}`;
  }
}

console.log(getCSSTypography(defaultTypography));
