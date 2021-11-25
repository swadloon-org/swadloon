import { style } from 'treat';

import { Theme } from '@newrade/core-react-ui';

export const styles = {
  level0: style(({ cssTheme, theme }: Theme) => ({
    padding: `0 0 0 0`,
  })),
  level1: style(({ cssTheme, theme }: Theme) => ({
    padding: `0 0 0 calc(16px + ${cssTheme.sizing.var.x1})`,
  })),
  group: style(({ cssTheme, theme }: Theme) => ({
    padding: `calc(1.25 * ${cssTheme.sizing.var.x1}) 0`,
    gap: `${cssTheme.sizing.var.x1}`,
    cursor: 'pointer',
    userSelect: 'none',
  })),
  children: style(({ cssTheme, theme }: Theme) => ({
    padding: `0 0 ${cssTheme.sizing.var.x2}`,
  })),
  icon: style(({ cssTheme, theme }: Theme) => ({
    width: 16,
    height: 16,
    margin: `0 0 0 0`,

    color: cssTheme.colors.colorIntents.secondaryText,

    willChange: 'transform',
    transition: 'transform 200ms ease-out',
    transform: 'rotate(-90deg)',
  })),
  iconOpened: style(({ cssTheme, theme }: Theme) => ({
    transform: 'rotate(0deg)',
  })),
};
