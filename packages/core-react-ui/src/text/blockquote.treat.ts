import { style } from 'treat';
import { Theme } from '../design-system';
import { getCSSColor } from '../utilities';

export const styles = {
  normal: style(({ theme, cssTheme }: Theme) => ({
    userSelect: 'text',
    borderRadius: 4,
    color: cssTheme.colors.colors.grey[900],
    backgroundColor: getCSSColor({ ...theme.colors.colorIntents.background1, a: 95 }),
    border: `1px solid ${cssTheme.colors.colors.grey[50]}`,
    padding: `${cssTheme.sizing.var.x3} ${cssTheme.sizing.var.x2}`,
  })),
};
