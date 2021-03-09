import { Theme } from '@newrade/core-react-ui/lib/design-system';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'flex',
    padding: `${cssTheme.sizing.var.x5} 0 0`,
    justifyContent: 'space-between',
    position: 'relative',
    borderTop: `1px solid ${cssTheme.colors.colors.grey[100]}`,
    selectors: {
      '&:last-of-type': {
        borderBottom: `1px solid ${cssTheme.colors.colors.grey[100]}`,
      },
    },
  })),
  label: style(({ theme, cssTheme }: Theme) => ({
    flex: `80%`,
  })),
};
