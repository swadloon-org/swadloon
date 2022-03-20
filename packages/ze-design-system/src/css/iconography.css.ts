import { createGlobalTheme } from '@vanilla-extract/css';

import { iconographyVars } from '@newrade/core-react-ui/theme';
import { getCSSIconography } from '@newrade/core-react-ui/utilities-theme';

import { iconography } from '../design-system/iconography';

const cssIconography = getCSSIconography(iconography);

createGlobalTheme(':root', iconographyVars, cssIconography);
