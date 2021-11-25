import { globalStyle, style } from 'treat';

import { Theme } from '../design-system';
import { globalThemeReversedSelector } from '../global/global-theme-classnames';
import { getCSSSizeTextStyles, getCSSTextStyles } from '../utilities/text.utilities';

/**
 * Base
 */
export const base = style(({ theme, cssTheme }: Theme) => ({
  display: 'inline-block',
  width: 'fit-content',
  maxWidth: '100%', // ensure it respect the parent's width
  wordBreak: 'normal',
  border: `1px solid`,
  lineHeight: 1,
}));

/**
 * Label
 */
export const label = style(({ theme, cssTheme }: Theme) => ({
  color: 'inherit !important',
  ...getCSSTextStyles(cssTheme.typography.labels),
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
  borderColor: cssTheme.colors.colors.grey[50],
  color: cssTheme.colors.colors.grey[700],
  backgroundColor: cssTheme.colors.colors.grey[50],
}));
export const primaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${primary}, ${primary}${globalThemeReversedSelector}, ${primaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    borderColor: cssTheme.colors.colors.grey[25],
    color: cssTheme.colors.colors.grey[25],
    backgroundColor: `transparent`,
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
  `${globalThemeReversedSelector} ${secondary}, ${secondary}${globalThemeReversedSelector}, ${secondaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    borderColor: cssTheme.colors.colors.accent1[500],
    color: cssTheme.colors.colors.grey['0-reversed'],
    backgroundColor: cssTheme.colors.colors.accent1[500],
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
  `${globalThemeReversedSelector} ${tertiary}, ${tertiary}${globalThemeReversedSelector}, ${tertiaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    borderColor: cssTheme.colors.colors.accent2[500],
    color: cssTheme.colors.colors.grey['0-reversed'],
    backgroundColor: cssTheme.colors.colors.accent2[500],
  })
);

/**
 *
 * Sizes
 *
 */
export const medium = style(({ theme, cssTheme }: Theme) => ({
  padding: `5px 4px`,
  borderRadius: 6,
}));
export const mediumLabel = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.labels.styles.boldUppercase),
  ...getCSSTextStyles(cssTheme.typography.labels.mobile.small),
  '@media': {
    [cssTheme.layout.media.tablet]: {
      ...getCSSSizeTextStyles(cssTheme.typography.labels.tablet.small),
    },
    [cssTheme.layout.media.desktopSmall]: {
      ...getCSSSizeTextStyles(cssTheme.typography.labels.desktop.small),
    },
  },
}));

export const small = style(({ theme, cssTheme }: Theme) => ({
  padding: `4px 3px`,
  borderRadius: 5,
}));
export const smallLabel = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.labels.styles.boldUppercase),
  ...getCSSTextStyles(cssTheme.typography.labels.mobile.xSmall),
  '@media': {
    [cssTheme.layout.media.tablet]: {
      ...getCSSSizeTextStyles(cssTheme.typography.labels.tablet.xSmall),
    },
    [cssTheme.layout.media.desktopSmall]: {
      ...getCSSSizeTextStyles(cssTheme.typography.labels.desktop.xSmall),
    },
  },
}));
