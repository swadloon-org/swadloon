import { StyleRule } from '@vanilla-extract/css';
import { colorVars } from '../theme/default-theme.css';

export const disabledStyle: StyleRule = {
  cursor: 'not-allowed',
  color: colorVars.colorIntents.disabledText,
  backgroundColor: colorVars.colorIntents.backgroundDisabled,
  borderColor: colorVars.colorIntents.backgroundDisabled,
};
