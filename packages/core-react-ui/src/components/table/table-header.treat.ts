import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';

export const styles = {
  thead: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors?.colors.grey[100],

    '::after': {
      content: 'none',
    },
    '::before': {
      content: 'none',
    },
  })),
};
