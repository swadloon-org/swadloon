import { style } from '@vanilla-extract/css';

import { sizeVars } from '@newrade/core-react-ui/theme';

export const wrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  // display: 'grid',
  // gridAutoFlow: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  columnGap: sizeVars.x1,
  rowGap: sizeVars.x2,
});
