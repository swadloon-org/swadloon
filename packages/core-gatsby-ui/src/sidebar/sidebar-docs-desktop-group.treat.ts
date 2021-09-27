import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

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
    width: 16,
    height: 16,
    margin: `0 ${cssTheme.sizing.var.x1} 0 0`,

    color: cssTheme.colors.colorIntents.secondaryText,

    willChange: 'transform',
    transition: 'transform 200ms ease-out',
    transform: 'rotate(-90deg)',
  })),
  iconOpened: style(({ cssTheme, theme }: Theme) => ({
    transform: 'rotate(0deg)',
  })),
};
