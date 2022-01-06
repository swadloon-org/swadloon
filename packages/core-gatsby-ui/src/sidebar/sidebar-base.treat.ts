import { globalStyle, style } from 'treat';

import { Theme } from '@newrade/core-react-ui';

/**
 *
 * Modes
 *
 */

export const sticky = style(({ theme, cssTheme }: Theme) => ({
  position: 'sticky',
  top: cssTheme.sizing.var.x4,
  marginTop: cssTheme.sizing.var.x4,
  marginBottom: 0,

  display: 'none',
  alignItems: 'stretch',
  width: '100%',
  gridTemplateRows: '1fr',
  maxHeight: `calc(100vh - ${cssTheme.sizing.var.x4})`,

  color: cssTheme.colors.colorIntents.primaryText,

  zIndex: cssTheme.layout.zIndex.sideBarDesktop,

  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'grid',
    },
  },
}));

export const floating = style(({ theme, cssTheme }: Theme) => ({
  position: 'fixed',
  top: 0,

  display: 'grid',
  alignItems: 'center',
  width: '100%',
  maxHeight: `calc(100vh)`,

  color: cssTheme.colors.colorIntents.primaryText,
  boxShadow: `rgba(33, 33, 33, 0.15) 0px 1px 2px`,

  zIndex: cssTheme.layout.zIndex.sideBarDesktop,
}));

globalStyle(`${floating} *`, ({ theme, cssTheme }: Theme) => ({
  userSelect: 'none',
}));

export const hanging = style(({ theme, cssTheme }: Theme) => ({
  position: 'fixed',
  left: `max(${cssTheme.layout.var.contentMargins}, calc(50% - ${cssTheme.layout.var.sidebarWidth} - ${cssTheme.layout.var.contentWidth.desktopDocsMaxWidth} / 2 - ${cssTheme.sizing.var.x4}))`,
  bottom: 0,
  marginTop: cssTheme.sizing.var.x3,
  marginBottom: cssTheme.sizing.var.x3,

  width: cssTheme.layout.var.sidebarWidth,
  top: cssTheme.layout.var.navbarHeight,
  maxHeight: `calc(100vh)`,
  display: 'none',
  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'inherit',
    },
  },
  zIndex: cssTheme.layout.zIndex.sideBarDesktop,
  overflowY: 'auto',
  overflowX: 'hidden',

  color: cssTheme.colors.colorIntents.primaryText,

  WebkitOverflowScrolling: `touch`,
}));

globalStyle(`${hanging} *`, ({ theme, cssTheme }: Theme) => ({
  userSelect: 'none',
}));

/**
 *
 * Variants
 *
 */

export const primary = style(({ theme, cssTheme }: Theme) => ({
  backgroundColor: cssTheme.colors.colorIntents.background0,
}));

export const secondary = style(({ theme, cssTheme }: Theme) => ({
  backgroundColor: cssTheme.colors.colorIntents.background1,
}));

export const tertiary = style(({ theme, cssTheme }: Theme) => ({
  backgroundColor: cssTheme.colors.colorIntents.background2,
}));
