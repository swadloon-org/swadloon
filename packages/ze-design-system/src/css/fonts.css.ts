import { createGlobalTheme } from '@vanilla-extract/css';

import { defaultTypography } from '@newrade/core-react-ui/default-theme';
import { getCSSFontsObject } from '@newrade/core-react-ui/src/utilities-theme/font.utilities';
import { fontsVars } from '@newrade/core-react-ui/theme';

const fonts = getCSSFontsObject(defaultTypography.fonts);

createGlobalTheme(':root', fontsVars, fonts);
