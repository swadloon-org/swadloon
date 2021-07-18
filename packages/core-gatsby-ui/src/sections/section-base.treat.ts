import { globalThemeReversedSelector } from '@newrade/core-react-ui/src/global/global-theme-classnames';
import { Theme } from '@newrade/core-react-ui/src';
import { globalStyle, style } from 'treat';

/**
 * Layout
 */

export const wrapper = style(({ theme, cssTheme }: Theme) => ({
  width: '100%',
}));

/**
 *
 * Variants
 *
 */

export const primary = style(({ theme, cssTheme }: Theme) => ({
  backgroundColor: cssTheme.colors.colorIntents.background0,
}));
export const primaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${primary}, ${primaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.grey[900],
    color: cssTheme.colors.colorIntents.primaryTextReversed,
  })
);

export const secondary = style(({ theme, cssTheme }: Theme) => ({
  backgroundColor: cssTheme.colors.colorIntents.background1,
}));
export const secondaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${secondary}, ${secondaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.grey[800],
    color: cssTheme.colors.colorIntents.primaryTextReversed,
  })
);

export const tertiary = style(({ theme, cssTheme }: Theme) => ({
  backgroundColor: cssTheme.colors.colorIntents.background2,
}));
export const tertiaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${tertiary}, ${tertiaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.grey[700],
    color: cssTheme.colors.colorIntents.primaryTextReversed,
  })
);
