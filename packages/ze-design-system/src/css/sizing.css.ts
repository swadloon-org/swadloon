import { createGlobalTheme } from '@vanilla-extract/css';

import { defaultSizing } from '@newrade/core-react-ui/default-theme';
import { sizingVars } from '@newrade/core-react-ui/theme';
import { getCSSSizingV2 } from '@newrade/core-react-ui/utilities-theme';

export const cssSizing = getCSSSizingV2(defaultSizing);

createGlobalTheme(':root', sizingVars, cssSizing);
