import { createGlobalTheme } from '@vanilla-extract/css';

import { getCSSIconography } from '@newrade/core-react-ui/src/utilities-theme/iconography.utilities';
import { iconographyVars } from '@newrade/core-react-ui/theme';

import { iconography } from '../design-system/iconography';

const cssIconography = getCSSIconography(iconography);

createGlobalTheme(':root', iconographyVars, cssIconography);
