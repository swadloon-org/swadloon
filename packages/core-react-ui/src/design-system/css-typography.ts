import { Typography } from '@newrade/core-design-system';
import { CSSFonts } from './css-fonts';

export type CSSTypography = Typography<string> & {
  fonts: CSSFonts;
};
