import { createGlobalTheme } from '@vanilla-extract/css';

import { typographyVars } from '@newrade/core-react-ui/theme';
import { getCSSTypographyV2 } from '@newrade/core-react-ui/utilities-theme';

import { typography } from '../design-system/typography.js';

export const cssTypography = getCSSTypographyV2({
  ...typography,
  baseFontSize: 16,
});

createGlobalTheme(':root', typographyVars, cssTypography);
