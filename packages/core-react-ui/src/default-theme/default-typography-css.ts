import { defaultTypography } from '../default-theme';
import { getCSSTypographyV2 } from '../utilities-theme/typography-v2.utilities';

export const defaultCSSTypography = getCSSTypographyV2({
  ...defaultTypography,
  baseFontSize: 16,
  vars: undefined,
});
