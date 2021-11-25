import { globalStyle, style } from 'treat';

import { Theme } from '../design-system';
import { globalThemeReversedSelector } from '../global/global-theme-classnames';
import { getCSSSizeTextStyles, getCSSTextStyles } from '../utilities/text.utilities';

/**
 * Base
 */
export const base = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.labels),
  width: 'fit-content',
}));

/**
 *
 * Variants
 *
 */
export const inline = style(({ theme, cssTheme }: Theme) => ({
  display: 'inline-block',
  userSelect: 'none',
  color: 'currentColor',
}));

/**
 * Sizes
 */
export const medium = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.labels.mobile.medium),
  '@media': {
    [cssTheme.layout.media.tablet]: {
      ...getCSSSizeTextStyles(cssTheme.typography.labels.tablet.medium),
    },
    [cssTheme.layout.media.desktopSmall]: {
      ...getCSSSizeTextStyles(cssTheme.typography.labels.desktop.medium),
    },
  },
}));
export const small = style(({ theme, cssTheme }: Theme) => ({
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
export const xSmall = style(({ theme, cssTheme }: Theme) => ({
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

/**
 * Styles
 */
export const normal = style(({ theme, cssTheme }: Theme) => ({}));
export const italic = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.labels.styles.italic),
}));
export const bold = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.labels.styles.bold),
}));
export const uppercase = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.labels.styles.uppercase),
}));
export const boldUppercase = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.labels.styles.boldUppercase),
}));
export const italicBold = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.labels.styles.italicBold),
}));

export const primary = style(({ theme, cssTheme }: Theme) => ({
  color: cssTheme.colors.colorIntents.primaryText,
}));
export const primaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${primary}, ${primaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primaryTextReversed,
  })
);

export const secondary = style(({ theme, cssTheme }: Theme) => ({
  color: cssTheme.colors.colorIntents.secondaryText,
}));
export const secondaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${secondary}, ${secondaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.secondaryTextReversed,
  })
);

export const tertiary = style(({ theme, cssTheme }: Theme) => ({
  color: cssTheme.colors.colorIntents.tertiaryText,
}));
export const tertiaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${tertiary}, ${tertiaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.tertiaryTextReversed,
  })
);
