import { createGlobalTheme } from '@vanilla-extract/css';

import { typographyVars } from '@newrade/core-react-ui/theme';

import { lightCssTheme } from '../design-system/theme';

createGlobalTheme(':root', typographyVars, lightCssTheme.typography);
