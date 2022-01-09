import { style } from '@vanilla-extract/css';

import { getCSSSizeTextStyles, getCSSTextStyles } from '../utilities/text.utilities';

/**
 * Base
 */
export const base = style({
  display: 'inline-block',
  width: 'fit-content',
  maxWidth: '100%', // ensure it respect the parent's width
  wordBreak: 'normal',
  border: `1px solid`,
  lineHeight: 1,
});

/**
 * Label
 */
export const label = style({
  color: 'inherit !important',
  ...getCSSTextStyles(cssTheme.typography.labels),
});

/**
 *
 * Variants
 *
 */

/**
 * Primary
 */
export const primary = style({
  borderColor: colorVars.colors.grey[50],
  color: colorVars.colors.grey[700],
  backgroundColor: colorVars.colors.grey[50],
});

/**
 * Secondary
 */
export const secondary = style({
  borderColor: colorVars.colors.accent1[100],
  color: colorVars.colors.accent1[500],
  backgroundColor: colorVars.colors.accent1[100],
});

/**
 * tertiary
 */
export const tertiary = style({
  borderColor: colorVars.colors.accent2[100],
  color: colorVars.colors.accent2[500],
  backgroundColor: colorVars.colors.accent2[100],
});

/**
 *
 * Sizes
 *
 */
export const medium = style({
  padding: `5px 4px`,
  borderRadius: 6,
});

export const mediumLabel = style({
  ...getCSSTextStyles(cssTheme.typography.labels.styles.boldUppercase),
  ...getCSSTextStyles(cssTheme.typography.labels.mobile.small),
  '@media': {
    [layoutCSS.media.tablet]: {
      ...getCSSSizeTextStyles(cssTheme.typography.labels.tablet.small),
    },
    [layoutCSS.media.desktopSmall]: {
      ...getCSSSizeTextStyles(cssTheme.typography.labels.desktop.small),
    },
  },
});

export const small = style({
  padding: `4px 3px`,
  borderRadius: 5,
});

export const smallLabel = style({
  ...getCSSTextStyles(cssTheme.typography.labels.styles.boldUppercase),
  ...getCSSTextStyles(cssTheme.typography.labels.mobile.xSmall),
  '@media': {
    [layoutCSS.media.tablet]: {
      ...getCSSSizeTextStyles(cssTheme.typography.labels.tablet.xSmall),
    },
    [layoutCSS.media.desktopSmall]: {
      ...getCSSSizeTextStyles(cssTheme.typography.labels.desktop.xSmall),
    },
  },
});
