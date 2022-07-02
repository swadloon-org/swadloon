import { Fonts, TypographyV2 } from '@newrade/core-design-system';
import { defaultTypography } from '@newrade/core-react-ui/default-theme';

export const fonts: Fonts = defaultTypography.fonts;

export const typography: TypographyV2 = {
  ...defaultTypography,
  vars: {
    titles: {
      fontFamily: 'Inter',
    },
  },
};
