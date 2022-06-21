import { getCSSTypographyV2 } from '../utilities-theme/typography-v2.utilities.js';

import { defaultTypography } from './src.js';

export const defaultCSSTypography = getCSSTypographyV2({
  ...defaultTypography,
  baseFontSize: 16,
  vars: undefined,
});
