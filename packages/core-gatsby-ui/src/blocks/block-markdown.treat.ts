import { Theme } from '@newrade/core-react-ui/src/design-system';
import { style } from 'treat';

export const wrapper = style(({ theme, cssTheme }: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  userSelect: 'auto',
}));

export const content = style(({ theme, cssTheme }: Theme) => ({
  width: '100%',
}));

export const left = style(({ theme, cssTheme }: Theme) => ({
  alignItems: 'flex-start',
  textAlign: 'left',
}));

export const right = style(({ theme, cssTheme }: Theme) => ({
  alignItems: 'flex-end',
  textAlign: 'right',
}));

export const center = style(({ theme, cssTheme }: Theme) => ({
  alignItems: 'center',
  textAlign: 'center',
}));
