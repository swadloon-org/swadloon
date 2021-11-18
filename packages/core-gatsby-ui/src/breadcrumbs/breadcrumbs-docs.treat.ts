import { style } from 'treat';
import { Theme } from '@newrade/core-react-ui';

export const wrapper = style(({ theme, cssTheme }: Theme) => ({
  display: 'flex',
  flexWrap: 'wrap',
  // display: 'grid',
  // gridAutoFlow: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  columnGap: cssTheme.sizing.var.x1,
  rowGap: cssTheme.sizing.var.x2,
}));
