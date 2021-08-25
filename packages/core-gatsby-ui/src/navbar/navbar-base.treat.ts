import { Theme } from '@newrade/core-react-ui';
import { globalThemeReversedSelector } from '@newrade/core-react-ui/src/global/global-theme-classnames';
import { globalStyle, style } from 'treat';

export const wrapper = style(({ theme, cssTheme }: Theme) => ({
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

globalStyle(`${wrapper} *`, ({ theme, cssTheme }: Theme) => ({
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
