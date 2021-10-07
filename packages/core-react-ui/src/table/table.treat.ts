import { style } from 'treat';
import { Theme } from '../design-system';

export const wrapper = style(({ theme, cssTheme }: Theme) => ({
  overflowX: 'auto',
  width: '100%',
}));

export const table = style(({ theme, cssTheme }: Theme) => ({
  width: 'auto',
  borderWidth: '0px',
  borderStyle: 'solid',
  borderCollapse: 'separate',
  borderColor: cssTheme.colors?.colors.grey['100'],
}));
