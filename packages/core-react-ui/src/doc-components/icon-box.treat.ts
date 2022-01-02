import { style } from 'treat';

import { Theme } from '../design-system/css-design-system';

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
