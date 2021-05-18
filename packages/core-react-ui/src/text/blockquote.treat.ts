import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  normal: style(({ theme, cssTheme }: Theme) => ({
    userSelect: 'text',
    color: cssTheme.colors.colorIntents.primaryText,
    backgroundColor: cssTheme.colors.colorIntents.background1,
    border: `1px solid ${cssTheme.colors.colors.grey[50]}`,
    padding: cssTheme.sizing.var.x3,
  })),
};
