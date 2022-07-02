import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  overflowX: 'hidden', // prevent any child from breaking the layout
});
