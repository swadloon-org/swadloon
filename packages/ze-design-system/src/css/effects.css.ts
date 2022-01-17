import { createGlobalTheme } from '@vanilla-extract/css';

import { effectsVars } from '@newrade/core-react-ui/theme';

import { lightCssTheme } from '../design-system/theme';

/**
 *
 * Light theme
 *
 */

createGlobalTheme(':root', effectsVars, lightCssTheme.effects);
