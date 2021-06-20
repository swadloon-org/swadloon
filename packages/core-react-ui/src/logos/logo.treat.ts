import { style } from 'treat';
import { Theme } from '../design-system';

/**
 * Base
 */
export const base = style(({ theme, cssTheme }: Theme) => ({
  display: 'block',
  ':focus': {
    outline: 'none',
  },
}));

export const standard = style(({ theme, cssTheme }: Theme) => ({
  height: 100,
}));

export const symbol = style(({ theme, cssTheme }: Theme) => ({
  height: 100,
}));

export const favicon = style(({ theme, cssTheme }: Theme) => ({
  height: 16,
}));
