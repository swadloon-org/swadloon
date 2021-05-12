import { globalStyle, style } from 'treat';
import { Theme } from '../design-system';
import { globalThemeReversedSelector } from '../global/global-theme-classnames';

/**
 * Base
 */
export const base = style(({ theme, cssTheme }: Theme) => ({
  display: 'flex',
  width: 'max-content',
  wordBreak: 'normal',
  border: `1px solid`,
  padding: 5,
  borderRadius: 6,
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
  borderColor: cssTheme.colors.colors.grey[100],
  color: cssTheme.colors.colors.grey[600],
  backgroundColor: cssTheme.colors.colors.grey[100],
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

/**
 * Secondary
 */
export const secondary = style(({ theme, cssTheme }: Theme) => ({
  borderColor: cssTheme.colors.colors.accent1[100],
  color: cssTheme.colors.colors.accent1[500],
  backgroundColor: cssTheme.colors.colors.accent1[100],
}));
export const secondaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${secondary}, ${secondaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    borderColor: cssTheme.colors.colors.grey['0-reversed'],
    color: cssTheme.colors.colors.grey['0-reversed'],
    backgroundColor: cssTheme.colors.colors.transparent,
  })
);

/**
 * tertiary
 */
export const tertiary = style(({ theme, cssTheme }: Theme) => ({
  borderColor: cssTheme.colors.colors.accent2[100],
  color: cssTheme.colors.colors.accent2[500],
  backgroundColor: cssTheme.colors.colors.accent2[100],
}));
export const tertiaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${tertiary}, ${tertiaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    borderColor: cssTheme.colors.colors.grey['0-reversed'],
    color: cssTheme.colors.colors.grey['0-reversed'],
    backgroundColor: cssTheme.colors.colors.transparent,
  })
);
