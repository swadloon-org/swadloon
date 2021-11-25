import { style } from 'treat';

import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    padding: `0 ${cssTheme.sizing.var.x3} 0 0`,
  })),
  group: style(({ cssTheme, theme }: Theme) => ({
    padding: `${cssTheme.sizing.var.x2} 0`,
    cursor: 'pointer',
    userSelect: 'none',
  })),
  children: style(({ cssTheme, theme }: Theme) => ({
    padding: `0 0 ${cssTheme.sizing.var.x2}`,
  })),
  icon: style(({ cssTheme, theme }: Theme) => ({
    width: 18,
    height: 18,
    color: cssTheme.colors.colorIntents.secondaryText,
    willChange: 'transform',
  })),
  iconOpened: style(({ cssTheme, theme }: Theme) => ({
    transform: 'rotate(180deg)',
  })),
};
