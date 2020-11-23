import { Headings, Labels, Paragraphs, Titles, Typography } from '@newrade/core-design-system';
import { defaultTypography } from '../design-system/default-typography';

export function getCSSFont(options: Typography<Titles, Headings, Paragraphs, Labels>) {
  console.log(JSON.stringify(options, null, 2));

  return;
}

console.log(getCSSFont(defaultTypography.labels));

// if (options.fonts?.sans != null) {
//   return `${options.fonts.sans.name},${'sans'}`;
// }
