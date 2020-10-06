import { DesignSystem } from '@newrade/core-design-system-old';
import { style } from 'treat';

export const h1 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.mobile.h1.capsizeRem,
  fontFamily: theme.typography.headings.mobile.h1.fontFamily,
  fontWeight: theme.typography.headings.mobile.h1.fontWeight,
  letterSpacing: theme.typography.headings.mobile.h1.letterSpacing,
  textTransform: theme.typography.headings.mobile.h1.textTransform,
  '@media': {
    [theme.layout.media.tablet]: {
      ...theme.typography.headings.tablet.h1.capsizeRem,
    },
    [theme.layout.media.desktop]: {
      ...theme.typography.headings.desktop.h1.capsizeRem,
    },
  },
}));

export const h2 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.mobile.h2.capsizeRem,
  fontFamily: theme.typography.headings.mobile.h2.fontFamily,
  fontWeight: theme.typography.headings.mobile.h2.fontWeight,
  letterSpacing: theme.typography.headings.mobile.h2.letterSpacing,
  textTransform: theme.typography.headings.mobile.h2.textTransform,
  '@media': {
    [theme.layout.media.tablet]: {
      ...theme.typography.headings.tablet.h2.capsizeRem,
    },
    [theme.layout.media.desktop]: {
      ...theme.typography.headings.desktop.h2.capsizeRem,
    },
  },
}));

export const h3 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.mobile.h3.capsizeRem,
  fontFamily: theme.typography.headings.mobile.h3.fontFamily,
  fontWeight: theme.typography.headings.mobile.h3.fontWeight,
  letterSpacing: theme.typography.headings.mobile.h3.letterSpacing,
  textTransform: theme.typography.headings.mobile.h3.textTransform,
  '@media': {
    [theme.layout.media.tablet]: {
      ...theme.typography.headings.tablet.h3.capsizeRem,
    },
    [theme.layout.media.desktop]: {
      ...theme.typography.headings.desktop.h3.capsizeRem,
    },
  },
}));

export const h4 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.mobile.h4.capsizeRem,
  fontFamily: theme.typography.headings.mobile.h4.fontFamily,
  fontWeight: theme.typography.headings.mobile.h4.fontWeight,
  letterSpacing: theme.typography.headings.mobile.h4.letterSpacing,
  textTransform: theme.typography.headings.mobile.h4.textTransform,
  '@media': {
    [theme.layout.media.tablet]: {
      ...theme.typography.headings.tablet.h4.capsizeRem,
    },
    [theme.layout.media.desktop]: {
      ...theme.typography.headings.desktop.h4.capsizeRem,
    },
  },
}));
