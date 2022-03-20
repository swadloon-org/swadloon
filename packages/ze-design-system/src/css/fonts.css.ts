import { createGlobalTheme } from '@vanilla-extract/css';

import { defaultTypography } from '@newrade/core-react-ui/default-theme';
import { fontsVars } from '@newrade/core-react-ui/theme';
import { getCSSFontsObject } from '@newrade/core-react-ui/utilities-theme';

const cssFonts = getCSSFontsObject(defaultTypography.fonts);

createGlobalTheme(':root', fontsVars, cssFonts);
