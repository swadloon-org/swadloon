import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const wrapper = style(({ cssTheme }: Theme) => ({
  backgroundColor: cssTheme.colors.colors.grey[800],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  '@media': {
    [cssTheme.layout.media.tablet]: {
      alignItems: 'center',
    },
  },
}));

export const main = style(({ cssTheme }: Theme) => ({
  paddingTop: `calc(${cssTheme.layout.var.navbarHeight} + ${cssTheme.sizing.var.x5})`,
}));

export const loginWrapper = style(({ cssTheme }: Theme) => ({
  display: 'grid',
  gap: cssTheme.sizing.var.x5,
  gridTemplateRows: 'auto auto auto auto 1fr',

  padding: `${cssTheme.sizing.var.x4} ${cssTheme.sizing.var.x4}`,
  borderRadius: 4,
  backgroundColor: cssTheme.colors.colorIntents.background0,
  minHeight: `min(490px, 100vh)`,
  width: `min(400px, 100vw)`,
}));

export const logo = style(({ cssTheme }: Theme) => ({
  justifySelf: 'center',
  height: `80px`,
  color: cssTheme.colors.colorIntents.primary,
}));

export const status = style(({ cssTheme }: Theme) => ({
  color: cssTheme.colors.colorIntents.successAction,
}));
