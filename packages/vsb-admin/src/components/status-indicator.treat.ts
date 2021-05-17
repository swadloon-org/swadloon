import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const wrapperDesktop = style(({ cssTheme }: Theme) => ({}));

export const wrapperMobile = style(({ cssTheme }: Theme) => ({}));

export const statusTextOnline = style(({ cssTheme }: Theme) => ({
  color: cssTheme.colors.colorIntents.successAction,
}));

export const statusTextError = style(({ cssTheme }: Theme) => ({
  color: cssTheme.colors.colorIntents.dangerAction,
}));

export const statusDotOnline = style(({ cssTheme }: Theme) => ({
  width: 10,
  height: 10,
  borderRadius: `50%`,
  backgroundColor: cssTheme.colors.colorIntents.successAction,
}));

export const statusDotError = style(({ cssTheme }: Theme) => ({
  width: 10,
  height: 10,
  borderRadius: `50%`,
  backgroundColor: cssTheme.colors.colorIntents.dangerAction,
}));
