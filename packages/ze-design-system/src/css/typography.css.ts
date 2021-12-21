import { createGlobalTheme } from '@vanilla-extract/css';

import { typographyVars } from '@newrade/core-react-ui/theme';

import { lightCssThemeV2 } from '../design-system/theme';

// @ts-expect-error
createGlobalTheme(':root', typographyVars, lightCssThemeV2.typography);
