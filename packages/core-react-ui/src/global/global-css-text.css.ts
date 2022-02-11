import { globalStyle } from '@vanilla-extract/css';

import { colorVars } from '../theme';

globalStyle(`html, body`, {
  color: colorVars.colorIntents.primaryText,
});
