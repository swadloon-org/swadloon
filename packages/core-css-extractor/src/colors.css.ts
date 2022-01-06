import { createGlobalTheme } from '@vanilla-extract/css';

import { colorVars } from '@newrade/core-react-ui/theme';
import { lightCssThemeV2 } from '@newrade/ze-design-system/src/design-system/theme';

createGlobalTheme(':root', colorVars, lightCssThemeV2.colors);
