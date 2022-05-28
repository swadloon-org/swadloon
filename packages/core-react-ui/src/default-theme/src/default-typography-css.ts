import { getCSSTypographyV2 } from '../utilities-theme/typography-v2.utilities';

import { defaultTypography } from './src';

export const defaultCSSTypography = getCSSTypographyV2({
  ...defaultTypography,
  baseFontSize: 16,
  vars: undefined,
});
