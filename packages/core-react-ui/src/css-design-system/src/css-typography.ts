import { Typography, TypographyV2 } from '@newrade/core-design-system';

import { CSSFonts } from './css-fonts.js';

export type CSSTypography = Omit<Typography<string>, 'fonts'> & {
  fonts: CSSFonts;
};

export type CSSTypographyV2 = Omit<TypographyV2<string>, 'vars'>;
