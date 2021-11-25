import { style } from 'treat';

import { Theme } from '../design-system';

export const styles = {
  preview: style(({ theme, cssTheme }: Theme) => ({
    padding: 32,
    width: `100%`,
    borderRadius: 0,
    overflowX: 'auto',
    overflowY: 'visible',
  })),
};
