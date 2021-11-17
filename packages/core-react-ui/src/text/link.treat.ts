import { globalStyle, style } from 'treat';
import { Theme } from '../design-system';
import { globalThemeReversedSelector } from '../global/global-theme-classnames';
import { getCSSSizeTextStyles, getCSSTextStyles } from '../utilities/text.utilities';

/**
 * States
 */
export const rest = style(({ theme, cssTheme }: Theme) => ({
  outline: 'none',
  cursor: 'pointer',
  width: 'fit-content',
  userSelect: 'text',
  appearance: 'none',
  WebkitAppearance: 'none',
  ':active': {
    color: cssTheme.colors.colors.primary[700],
  },

  // ':active': {
  //   color: cssTheme.colors.colors.primary[500],
  // },
  // ':focus': {
  //   outline: `1px solid ${cssTheme.colors.colors.primary[500]}`,
  //   outlineOffset: '10px',
  // },
}));

/**
 *
 * Variants
 *
 */

/**
 * Styles
 */
export const underline = style(({ theme, cssTheme }: Theme) => ({
  textDecoration: 'underline',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
export const noUnderline = style(({ theme, cssTheme }: Theme) => ({
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

/**
 * Primary
 */
export const primary = style(({ theme, cssTheme }: Theme) => ({
  color: cssTheme.colors.colorIntents.primary,
}));
export const primaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${primary}, ${primaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primaryReversed,
  })
);
globalStyle(
  `${globalThemeReversedSelector} ${primary}, ${primaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.var.colorIntents.primaryTextReversed,
  })
);

/**
 * Secondary
 */
export const secondary = style(({ theme, cssTheme }: Theme) => ({
  color: cssTheme.colors.var.colorIntents.secondaryText,
}));
export const secondaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${secondary}, ${secondaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.var.colorIntents.secondaryTextReversed,
  })
);

/**
 * Tertiary
 */
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

/**
 * Sizes
 */
export const large = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.large),
  fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
  '@media': {
    [cssTheme.layout.media.tablet]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.large),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
    [cssTheme.layout.media.desktopSmall]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.large),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
  },
}));
export const medium = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium),
  fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
  '@media': {
    [cssTheme.layout.media.tablet]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.medium),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
    [cssTheme.layout.media.desktopSmall]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.medium),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
  },
}));
export const small = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.small),
  fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
  '@media': {
    [cssTheme.layout.media.tablet]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.small),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
    [cssTheme.layout.media.desktopSmall]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.small),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
  },
}));
export const xSmall = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.xSmall),
  fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
  '@media': {
    [cssTheme.layout.media.tablet]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.xSmall),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
    [cssTheme.layout.media.desktopSmall]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.xSmall),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
  },
}));

/**
 * Icon
 */
export const icon = style(({ theme, cssTheme }: Theme) => ({
  display: 'inline-block',

  marginLeft: '0.1em',
  verticalAlign: '0em',
  fontSize: '1em',
  lineHeight: '0',

  textDecoration: 'none',
}));
