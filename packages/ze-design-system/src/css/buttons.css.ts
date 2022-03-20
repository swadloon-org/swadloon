import { createGlobalTheme } from '@vanilla-extract/css';

import { defaultButtons } from '@newrade/core-react-ui/default-theme';
import { buttonsVars } from '@newrade/core-react-ui/theme';
import { getCSSButtons } from '@newrade/core-react-ui/utilities-theme';

const cssButtons = getCSSButtons(defaultButtons);

createGlobalTheme(':root', buttonsVars, cssButtons);
