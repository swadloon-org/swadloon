import { createGlobalTheme } from '@vanilla-extract/css';

import { defaultButtons } from '@newrade/core-react-ui/default-theme';
import { getCSSButtons } from '@newrade/core-react-ui/src/utilities-theme/buttons.utilities';
import { buttonsVars } from '@newrade/core-react-ui/theme';

const cssButtons = getCSSButtons(defaultButtons);

createGlobalTheme(':root', buttonsVars, cssButtons);
