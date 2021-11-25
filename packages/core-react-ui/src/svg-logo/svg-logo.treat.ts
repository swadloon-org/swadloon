import { style } from 'treat';

import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    fill: cssTheme.colors.colors.primary[500],
    maxHeight: `100%`,
  })),
};
