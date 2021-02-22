import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
  })),
  costItem: style(({ theme, cssTheme }: Theme) => ({
    display: 'flex',
    padding: `${cssTheme.sizing.var.x5} 0`,
    justifyContent: 'space-between',
    position: 'relative',
    borderTop: `1px solid ${cssTheme.colors.colors.grey[100]}`,
    selectors: {
      '&:last-of-type': {
        borderBottom: `1px solid ${cssTheme.colors.colors.grey[100]}`,
      },
    },
  })),
  costItemLabel: style(({ theme, cssTheme }: Theme) => ({
    flex: `80%`,
  })),
};
