import { createGlobalTheme } from '@vanilla-extract/css';

import { sizingVars } from '@newrade/core-react-ui/theme';
import { lightCssThemeV2 } from '@newrade/ze-design-system/src/design-system/theme';

// @ts-expect-error
createGlobalTheme(':root', sizingVars, lightCssThemeV2.sizing);
