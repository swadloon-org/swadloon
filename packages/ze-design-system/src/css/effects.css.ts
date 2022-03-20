import { createGlobalTheme } from '@vanilla-extract/css';

import { defaultEffects } from '@newrade/core-react-ui/default-theme';
import { effectsVars } from '@newrade/core-react-ui/theme';
import { getCSSEffects } from '@newrade/core-react-ui/utilities-theme';

/**
 *
 * Light theme
 *
 */

const cssEffects = getCSSEffects(defaultEffects);

createGlobalTheme(':root', effectsVars, cssEffects);
