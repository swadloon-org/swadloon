import { style } from 'treat';
import { Theme } from '@newrade/core-react-ui';

export const base = style(({ theme, cssTheme }: Theme) => ({
  display: 'none',

  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'grid',
    },
  },
}));

export const wrapper = style(({ theme, cssTheme }: Theme) => ({
  rowGap: cssTheme.sizing.var.x2,
  gridTemplateColumns: `1fr`,
  gridTemplateRows: `auto 1fr auto`,
  gridAutoFlow: 'row',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  justifyItems: 'flex-start',
  alignItems: 'flex-start',

  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      display: 'grid',
    },
  },

  // let the navigation scroll, not the whole component
  overflow: 'hidden',
}));

export const header = style(({ theme, cssTheme }: Theme) => ({
  display: 'grid',
  width: `100%`,
  gridTemplateColumns: `1fr`,
  gridAutoFlow: 'row',
  gap: cssTheme.sizing.var.x3,
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  justifyItems: 'flex-start',
  alignItems: 'center',
  padding: `${cssTheme.sizing.var.x0} 0px 0px 0px`,
}));

export const navigationWrapper = style(({ theme, cssTheme }: Theme) => ({
  display: 'flex',
  width: `100%`,
  height: '100%',
  overflowY: 'auto',
  overflowX: 'hidden',
  paddingBottom: cssTheme.sizing.var.x5,
}));

export const navigation = style(({ theme, cssTheme }: Theme) => ({
  display: 'grid',
  width: `100%`,
  gap: 0,
  gridTemplateColumns: `1fr`,
  gridAutoFlow: 'row',
  height: 'min-content',
}));

export const lang = style(({ theme, cssTheme }: Theme) => ({}));

export const footer = style(({ theme, cssTheme }: Theme) => ({
  display: 'grid',
  width: `100%`,
  gap: cssTheme.sizing.var.x3,
  alignItems: 'center',
  padding: `0 0 0 0`,
}));
