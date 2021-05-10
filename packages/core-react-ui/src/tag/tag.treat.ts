import { globalStyle, style } from 'treat';
import { Theme } from '../design-system';
import { globalThemeReversedSelector } from '../global/global-theme-classnames';

/**
 * Base
 */
export const base = style(({ theme, cssTheme }: Theme) => ({
  border: `1px solid`,
  padding: 5,
  borderRadius: 6,
  backgroundColor: cssTheme.colors.colors.transparent,

  color: cssTheme.colors.colors.grey['0-reversed'],
}));

/**
 *
 * Variants
 *
 */

/**
 * Primary
 */
export const primary = style(({ theme, cssTheme }: Theme) => ({
  borderColor: cssTheme.colors.colors.grey[200],
  color: cssTheme.colors.colors.grey[700],
  backgroundColor: cssTheme.colors.colors.grey[200],
}));
export const primaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${primary}, ${primaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    borderColor: cssTheme.colors.colors.grey['0-reversed'],
    color: cssTheme.colors.colors.grey['0-reversed'],
    backgroundColor: cssTheme.colors.colors.transparent,
  })
);
