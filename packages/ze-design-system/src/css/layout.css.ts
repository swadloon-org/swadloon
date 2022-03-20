import { createGlobalTheme } from '@vanilla-extract/css';

import { defaultLayout } from '@newrade/core-react-ui/default-theme';
import { layoutVars } from '@newrade/core-react-ui/theme';
import { getCSSLayoutV2 } from '@newrade/core-react-ui/utilities-theme';

const cssLayout = getCSSLayoutV2(defaultLayout);

createGlobalTheme(':root', layoutVars, cssLayout);
