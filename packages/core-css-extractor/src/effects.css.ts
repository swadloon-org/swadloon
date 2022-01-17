import { createGlobalTheme } from '@vanilla-extract/css';

import { effectsVars } from '@newrade/core-react-ui/theme';
import { lightCssTheme } from '@newrade/ze-design-system/src/design-system/theme';

createGlobalTheme(':root', effectsVars, lightCssTheme.effects);
