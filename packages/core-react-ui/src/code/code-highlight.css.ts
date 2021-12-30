import { style } from '@vanilla-extract/css';

import { typographyVars } from '../theme/default-theme.css';

export const pre = style({
  fontSize: `14px !important`,
  maxWidth: '100% !important',
  overflowX: 'auto !important' as any,
  padding: `16px`,
  whiteSpace: `pre`,
  fontFamily: typographyVars.fonts.monospace,

  lineHeight: 1.5,
  borderRadius: `6px`,
  userSelect: 'text',
});

export const tokenLine = style({
  width: 'fit-content',
  paddingRight: 16,
});
