import { createGlobalTheme } from '@vanilla-extract/css';

import { layoutVars } from '@newrade/core-react-ui/theme';

import { lightCssTheme } from '../design-system/theme';

createGlobalTheme(':root', layoutVars, lightCssTheme.layout);
