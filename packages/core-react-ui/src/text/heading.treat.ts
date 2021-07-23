import { globalStyle, style } from 'treat';
import { Theme } from '../design-system';
import { getCSSTextStyles } from '../utilities/text.utilities';

export const wrapper = style(({ theme, cssTheme }: Theme) => ({
  // position: 'relative', will break anchor calculation
  userSelect: 'text',
}));

export const h1 = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.headings.mobile.h1),
  '@media': {
    [cssTheme.layout.media.tablet]: {
      ...getCSSTextStyles(cssTheme.typography.headings.tablet.h1),
    },
    [cssTheme.layout.media.desktopSmall]: {
      ...getCSSTextStyles(cssTheme.typography.headings.desktop.h1),
    },
  },
}));

export const h2 = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.headings.mobile.h2),

  '@media': {
    [cssTheme.layout.media.tablet]: {
      ...getCSSTextStyles(cssTheme.typography.headings.tablet.h2),
    },
    [cssTheme.layout.media.desktopSmall]: {
      ...getCSSTextStyles(cssTheme.typography.headings.desktop.h2),
    },
  },
}));

export const h3 = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.headings.mobile.h3),

  '@media': {
    [cssTheme.layout.media.tablet]: {
      ...getCSSTextStyles(cssTheme.typography.headings.tablet.h3),
    },
    [cssTheme.layout.media.desktopSmall]: {
      ...getCSSTextStyles(cssTheme.typography.headings.desktop.h3),
    },
  },
}));

export const h4 = style(({ theme, cssTheme }: Theme) => ({
  ...getCSSTextStyles(cssTheme.typography.headings.mobile.h4),

  '@media': {
    [cssTheme.layout.media.tablet]: {
      ...getCSSTextStyles(cssTheme.typography.headings.tablet.h4),
    },
    [cssTheme.layout.media.desktopSmall]: {
      ...getCSSTextStyles(cssTheme.typography.headings.desktop.h4),
    },
  },
}));

export const enableAnchor = style(({ theme, cssTheme }: Theme) => ({
  userSelect: 'text',
}));

/**
 * Anchor for documentation pages
 */

// mdx-anchor-target will receive the :target pseudo selector
globalStyle(`${wrapper} .mdx-anchor-target`, ({ cssTheme, theme }: Theme) => ({
  visibility: 'hidden',
  userSelect: 'none',
  width: 0,
}));

globalStyle(`:target`, {
  display: 'block',
  position: 'relative',
  top: '-100px',
  visibility: 'hidden',
});

globalStyle(`${wrapper} .mdx-anchor`, ({ cssTheme, theme }: Theme) => ({
  visibility: 'hidden',

  position: 'absolute',
  left: '-0.9em',
  top: '50%',
  fontSize: '1em',
}));

globalStyle(`${wrapper}.mdx-anchor-sign-enable .mdx-anchor`, ({ cssTheme, theme }: Theme) => ({
  visibility: 'visible',
}));

globalStyle(`${wrapper} .mdx-anchor-pound`, ({ cssTheme, theme }: Theme) => ({
  visibility: 'hidden',
}));

globalStyle(
  `${wrapper}:hover.mdx-anchor-sign-enable .mdx-anchor-pound`,
  ({ cssTheme, theme }: Theme) => ({
    visibility: 'visible',
  })
);
