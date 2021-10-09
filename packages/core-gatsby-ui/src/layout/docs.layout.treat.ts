import { Theme } from '@newrade/core-react-ui';
import { globalStyle, style } from 'treat';

export const global = style(({ cssTheme, theme }: Theme) => ({}));

globalStyle(`html, ${global}`, ({ cssTheme, theme }: Theme) => ({
  background: cssTheme.colors.colors.grey[1000],
}));

export const mainWrapper = style(({ cssTheme, theme }: Theme) => ({
  backgroundColor: cssTheme.colors.colors.grey[0],
}));
