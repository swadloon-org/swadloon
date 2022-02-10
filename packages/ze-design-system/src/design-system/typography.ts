import { Fonts, Typography, TypographyV2 } from '@newrade/core-design-system';
import { defaultTypography } from '@newrade/core-react-ui/default-theme';
import { fontsVars } from '@newrade/core-react-ui/theme';

export const fonts: Fonts = defaultTypography.fonts;

export const typography: TypographyV2 = {
  ...defaultTypography,
  // TODO see if possible to fontsVars here
  // vars: { titles: { font: fontsVars.serif } },
};
