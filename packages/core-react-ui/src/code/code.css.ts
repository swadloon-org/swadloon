import { style } from '@vanilla-extract/css';

import { colorVars, typographyVars } from '../theme';

export const wrapper = style({
  display: 'inline-block',
  padding: '2px 2px 2px 2px',
  margin: '0 1px',
  borderRadius: '0px',
  fontSize: 'clamp(14px, 95%, 16px)',
  verticalAlign: 'baseline',
  lineHeight: '1',

  fontFamily: typographyVars.fonts.monospace,

  backgroundColor: colorVars.colors.code.editorBackground,
  wordBreak: 'break-word',
});
