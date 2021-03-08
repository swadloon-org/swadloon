import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const wrapper = style(({ cssTheme, theme }: Theme) => ({
  display: 'inherit',
  color: 'red',
}));
