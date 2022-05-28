import { globalStyle } from '@vanilla-extract/css';

import { colorVars } from '../default-theme/src/theme';

globalStyle(`html, body`, {
  color: colorVars.colorIntents.primaryText,
});
