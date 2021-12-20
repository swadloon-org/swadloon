import { createGlobalTheme } from '@vanilla-extract/css';

import { layoutVars } from '@newrade/core-react-ui/theme';

import { lightCssThemeV2 } from '../design-system/theme';

createGlobalTheme(':root', layoutVars, lightCssThemeV2.layout);
