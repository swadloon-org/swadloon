import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style(({ cssTheme, theme }: Theme) => ({
  display: 'flex',
  flexWrap: 'wrap',
  // padding: theme.sizing.sizes.x2,
}));
