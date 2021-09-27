import { Theme } from '@newrade/core-react-ui';
import { globalThemeReversedSelector } from '@newrade/core-react-ui/src/global/global-theme-classnames';
import { globalStyle, style } from 'treat';

/**
 *
 * Modes
 *
 */

export const floating = style(({ theme, cssTheme }: Theme) => ({
  position: 'fixed',
  top: 0,

  display: 'grid',
  alignItems: 'center',
  width: '100%',

  height: cssTheme.layout.var.navbarHeight,
  maxHeight: cssTheme.layout.var.navbarHeight,
  color: cssTheme.colors.colorIntents.primaryText,
  boxShadow: `rgba(33, 33, 33, 0.15) 0px 1px 2px`,
  zIndex: cssTheme.layout.zIndex.navBar,
}));

globalStyle(`${floating} *`, ({ theme, cssTheme }: Theme) => ({
  userSelect: 'none',
}));

export const hanging = style(({ theme, cssTheme }: Theme) => ({
  position: 'fixed',
  left: `max(${cssTheme.layout.var.contentMargins}, calc(50% - ${cssTheme.layout.var.sidebarWidth} - ${cssTheme.layout.var.contentWidth.desktopDocsMaxWidth} / 2 - ${cssTheme.sizing.var.x4}))`,
  bottom: 0,
  marginTop: cssTheme.sizing.var.x5,
  marginBottom: cssTheme.sizing.var.x5,
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
export const primaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${primary}, ${primaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.grey[1000],
  })
);

export const secondary = style(({ theme, cssTheme }: Theme) => ({
  backgroundColor: cssTheme.colors.colorIntents.background1,
}));
export const secondaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${secondary}, ${secondaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.grey[900],
  })
);

export const tertiary = style(({ theme, cssTheme }: Theme) => ({
  backgroundColor: cssTheme.colors.colorIntents.background2,
}));
export const tertiaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${secondary}, ${tertiaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.grey[800],
  })
);
