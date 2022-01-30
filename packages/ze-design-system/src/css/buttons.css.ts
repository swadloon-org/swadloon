import { createGlobalTheme } from '@vanilla-extract/css';

import { buttonsVars } from '@newrade/core-react-ui/theme';

import { lightCssTheme } from '../design-system/theme';

createGlobalTheme(':root', buttonsVars, lightCssTheme.components.buttons);
