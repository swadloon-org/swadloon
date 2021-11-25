import { style } from '@vanilla-extract/css';

import { sizingVars } from '@newrade/core-react-ui/theme';

export const wrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  // display: 'grid',
  // gridAutoFlow: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  columnGap: sizingVars.var.x1,
  rowGap: sizingVars.var.x2,
});
