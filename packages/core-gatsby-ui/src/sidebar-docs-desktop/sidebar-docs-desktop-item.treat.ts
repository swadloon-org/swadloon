import { style } from 'treat';

import { Theme } from '@newrade/core-react-ui';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'relative',
  })),
  level0: style(({ cssTheme, theme }: Theme) => ({
    padding: `0.8em 0 0.8em calc(16px + ${cssTheme.sizing.var.x1})`,
    fontWeight: 400,
  })),
  level1: style(({ cssTheme, theme }: Theme) => ({
    padding: `0.8em 0 0.8em calc(16px + 2 * ${cssTheme.sizing.var.x1})`,
    fontWeight: 400,
  })),
  link: style(({ cssTheme, theme }: Theme) => ({})),
  linkActive: style(({ cssTheme, theme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primary,
  })),
};
