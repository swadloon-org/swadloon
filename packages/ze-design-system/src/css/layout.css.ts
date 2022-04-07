import { createGlobalTheme } from '@vanilla-extract/css';

import { layoutVars } from '@newrade/core-react-ui/theme';
import { getCSSLayoutV2 } from '@newrade/core-react-ui/utilities-theme';

import { layout } from '../design-system/layout';

const cssLayout = getCSSLayoutV2(layout);

createGlobalTheme(':root', layoutVars, cssLayout);
