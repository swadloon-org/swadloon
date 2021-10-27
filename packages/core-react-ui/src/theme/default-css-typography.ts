import { defaultTypography } from '../default-theme';
import { getCSSTypography } from '../utilities/typography.utilities';

export const defaultCSSTypography = getCSSTypography({ ...defaultTypography, baseFontSize: 16 });
