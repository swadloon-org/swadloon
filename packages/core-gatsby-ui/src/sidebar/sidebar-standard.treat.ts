import { style } from 'treat';

import { Theme } from '@newrade/core-react-ui';

export const base = style(({ theme, cssTheme }: Theme) => ({}));

export const content = style(({ theme, cssTheme }: Theme) => ({
  display: 'grid',
  rowGap: cssTheme.sizing.var.x5,
  gridTemplateColumns: `1fr`,
  gridAutoFlow: 'row',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  justifyItems: 'flex-start',
  alignItems: 'flex-start',
}));

export const header = style(({ theme, cssTheme }: Theme) => ({
  display: 'grid',
  width: `100%`,
  gridTemplateColumns: `1fr 40px`,
  gridAutoFlow: 'row',
  gap: cssTheme.sizing.var.x5,
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  justifyItems: 'flex-start',
  alignItems: 'center',
  padding: `${cssTheme.sizing.var.x5} ${cssTheme.sizing.var.x4}`,
}));

export const logoWrapper = style(({ theme, cssTheme }: Theme) => ({}));

export const logo = style(({ theme, cssTheme }: Theme) => ({
  height: `40px`,
}));

export const lang = style(({ theme, cssTheme }: Theme) => ({}));

export const items = style(({ theme, cssTheme }: Theme) => ({
  display: 'grid',
  width: `100%`,
  gap: cssTheme.sizing.var.x5,
  gridTemplateColumns: `1fr`,
  gridAutoFlow: 'row',
}));

export const bottom = style(({ theme, cssTheme }: Theme) => ({
  display: 'grid',
  width: `100%`,
  gap: cssTheme.sizing.var.x5,
  alignItems: 'center',
  padding: `${cssTheme.sizing.var.x5} ${cssTheme.sizing.var.x4} ${cssTheme.sizing.var.x6}`,
}));
