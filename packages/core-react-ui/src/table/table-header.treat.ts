import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  thead: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors?.colors.grey[25],

    '::after': {
      content: 'none',
    },
    '::before': {
      content: 'none',
    },
  })),
};
