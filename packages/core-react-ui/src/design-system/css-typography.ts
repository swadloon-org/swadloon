import { Typography } from '@newrade/core-design-system';
import { CSSFonts } from './css-fonts';

export type CSSTypography = Omit<Typography<string>, 'fonts'> & {
  fonts: CSSFonts;
};

export type CSSTypographyV2 = Omit<Typography<string>, 'fonts'> & {
  fonts: CSSFonts;
};
