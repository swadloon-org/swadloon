import { globalStyle, style } from '@vanilla-extract/css';

import { getCSSSizeTextStyles, getCSSTextStyles } from '../utilities/text.utilities';

/**
 * States
 */
export const rest = style({
  outline: 'none',
  cursor: 'pointer',
  width: 'fit-content',
  userSelect: 'text',
  appearance: 'none',
  WebkitAppearance: 'none',
  ':active': {
    color: colorVars.colors.primary[700],
  },

  // ':active': {
  //   color: colorVars.colors.primary[500],
  // },
  // ':focus': {
  //   outline: `1px solid ${colorVars.colors.primary[500]}`,
  //   outlineOffset: '10px',
  // },
});

/**
 *
 * Variants
 *
 */

/**
 * Styles
 */
export const underline = style({
  textDecoration: 'underline',
  selectors: {
    '&:hover': {
      color: colorVars.colorIntents.primary,
      textDecoration: 'underline',
    },
  },
});

export const noUnderline = style({
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      color: colorVars.colorIntents.primary,
      textDecoration: 'underline',
    },
  },
});

/**
 * Primary
 */
export const primary = style({
  color: colorVars.colorIntents.primary,
});

/**
 * Secondary
 */
export const secondary = style({
  color: colorVars.colorIntents.secondaryText,
});

/**
 * Tertiary
 */
export const tertiary = style({
  color: colorVars.colorIntents.tertiaryText,
});

/**
 * Sizes
 */
export const large = style({
  ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.large),
  fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
  '@media': {
    [layoutCSS.media.tablet]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.large),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
    [layoutCSS.media.desktopSmall]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.large),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
  },
});

export const medium = style({
  ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium),
  fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
  '@media': {
    [layoutCSS.media.tablet]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.medium),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
    [layoutCSS.media.desktopSmall]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.medium),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
  },
});

export const small = style({
  ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.small),
  fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
  '@media': {
    [layoutCSS.media.tablet]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.small),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
    [layoutCSS.media.desktopSmall]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.small),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
  },
});

export const xSmall = style({
  ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.xSmall),
  fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
  '@media': {
    [layoutCSS.media.tablet]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.xSmall),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
    [layoutCSS.media.desktopSmall]: {
      ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.xSmall),
      fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 500,
    },
  },
});

/**
 * Icon
 */
export const icon = style({
  display: 'inline-block',

  marginLeft: '3px',
  marginRight: '1px',
  verticalAlign: '-0.1em',
  fontSize: '1em',
  lineHeight: '0',

  textDecoration: 'none',
});

globalStyle(`${icon} path`, {
  strokeWidth: 42,
});
