import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  })),
  icon: style(({ theme, cssTheme }: Theme) => ({
    padding: cssTheme.sizing.var.x2,
  })),
};
